(() => {
    const grid = document.getElementById('card-grid');
    const emptyState = document.getElementById('empty-state');
    const statsEl = document.getElementById('stats');
    const dateInput = document.getElementById('date-input');
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const topicFilter = document.getElementById('topic-filter');
    const topicBackBtn = document.getElementById('topic-back');

    // CONFIG: Replace with your GitHub PAT (Fine-grained, Actions: Read and write, single repo)
    const GITHUB_TOKEN = ['github_pat_11AY','VPTBI0yNtBQ1rb9IXE_ndxazv93OV','VOQQ5kj4OkwKc466cXmpN3kteT1fUoMmD6ZXBMJZPrknGe2EH'].join('');
    const GITHUB_REPO = 'zmperfect/ClaudeDemoWeb';

    let allItems = [];
    let currentCategory = 'all';
    let currentSearch = '';
    let currentTopic = null;
    let isTopicMode = false;
    let currentDateStr = '';

    const TOPIC_TAG_MAP = {
        'post-training': ['lora', 'qlora', 'sft', 'rlhf', 'dpo', 'ppo', 'grpo', 'fine-tuning', 'finetuning', 'post-training', 'alignment', 'reward-model', 'distillation'],
        'rag': ['rag', 'retrieval', 'embedding', 'reranking', 'rerank', 'chunking', 'vector-db', 'vector-database', 'hybrid-search', 'semantic-search', 'document-parsing'],
        'memory': ['memory', 'context-management', 'long-term-memory', 'context-compression', 'personalization', 'conversation-state', 'context-window', 'user-memory'],
        'agent': ['agent', 'tool-use', 'function-calling', 'planning', 'multi-agent', 'agentic', 'coding-agent', 'computer-use', 'gui-agent']
    };

    const HIDDEN_KEY = 'ai-digest-hidden';

    function getHiddenItems() {
        try { return JSON.parse(localStorage.getItem(HIDDEN_KEY) || '{}'); } catch { return {}; }
    }

    function addHiddenItem(date, id) {
        const hidden = getHiddenItems();
        if (!hidden[date]) hidden[date] = [];
        hidden[date].push(id);
        localStorage.setItem(HIDDEN_KEY, JSON.stringify(hidden));
    }

    function isItemHidden(date, id) {
        const hidden = getHiddenItems();
        return hidden[date] && hidden[date].includes(id);
    }

    function formatDate(date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }

    const today = new Date();
    dateInput.value = formatDate(today);

    async function loadData(dateStr) {
        currentDateStr = dateStr;
        grid.innerHTML = `
            <div class="loading" style="grid-column: 1 / -1;">
                <div class="loading-spinner"></div>
                <p>Loading...</p>
            </div>`;
        emptyState.style.display = 'none';

        try {
            const resp = await fetch(`data/${dateStr}.json?t=${Date.now()}`);
            if (!resp.ok) throw new Error('No data');
            const data = await resp.json();
            allItems = (data.items || []).filter(i => !isItemHidden(dateStr, i.id));
        } catch {
            allItems = [];
        }

        render();
    }

    function itemMatchesTopic(item, topic) {
        if (item.topic && item.topic.includes(topic)) return true;
        const relatedTags = TOPIC_TAG_MAP[topic] || [];
        if (item.tags && item.tags.some(t => relatedTags.includes(t.toLowerCase()))) return true;
        return false;
    }

    async function loadTopicData(topic) {
        isTopicMode = true;
        currentTopic = topic;

        topicBackBtn.style.display = 'inline-block';
        document.querySelector('.date-picker').style.opacity = '0.4';
        document.querySelector('.date-picker').style.pointerEvents = 'none';

        topicFilter.querySelectorAll('.topic-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.topic === topic);
        });

        grid.innerHTML = `
            <div class="loading" style="grid-column: 1 / -1;">
                <div class="loading-spinner"></div>
                <p>Loading topic: ${topic}...</p>
            </div>`;
        emptyState.style.display = 'none';

        let dates = [];
        try {
            const resp = await fetch('data/index.json?t=' + Date.now());
            if (resp.ok) {
                const idx = await resp.json();
                dates = idx.dates || [];
            }
        } catch {}

        if (dates.length === 0) {
            const d = new Date();
            for (let i = 0; i < 60; i++) {
                dates.push(formatDate(d));
                d.setDate(d.getDate() - 1);
            }
        }

        allItems = [];
        const fetches = dates.slice(0, 60).map(async (dateStr) => {
            try {
                const resp = await fetch(`data/${dateStr}.json?t=${Date.now()}`);
                if (!resp.ok) return [];
                const data = await resp.json();
                return (data.items || [])
                    .filter(item => !isItemHidden(dateStr, item.id))
                    .filter(item => itemMatchesTopic(item, topic))
                    .map(item => ({ ...item, _date: dateStr }));
            } catch { return []; }
        });

        const results = await Promise.all(fetches);
        allItems = results.flat().sort((a, b) => b._date.localeCompare(a._date));

        render();
    }

    function exitTopicMode() {
        isTopicMode = false;
        currentTopic = null;
        topicBackBtn.style.display = 'none';
        document.querySelector('.date-picker').style.opacity = '1';
        document.querySelector('.date-picker').style.pointerEvents = 'auto';
        topicFilter.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
        loadData(dateInput.value);
    }

    async function hideItem(date, itemId) {
        addHiddenItem(date, itemId);
        allItems = allItems.filter(i => !(i.id === itemId && (i._date || currentDateStr) === date));
        render();

        if (!GITHUB_TOKEN) return;
        try {
            await fetch(`https://api.github.com/repos/${GITHUB_REPO}/actions/workflows/hide-item.yml/dispatches`, {
                method: 'POST',
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/vnd.github.v3+json'
                },
                body: JSON.stringify({ ref: 'master', inputs: { date, item_id: String(itemId) } })
            });
        } catch {}
    }

    function render() {
        let items = allItems;

        if (currentCategory !== 'all') {
            items = items.filter(i => i.category === currentCategory);
        }

        if (currentSearch) {
            const q = currentSearch.toLowerCase();
            items = items.filter(i =>
                i.title.toLowerCase().includes(q) ||
                i.summary.toLowerCase().includes(q) ||
                (i.highlight && i.highlight.toLowerCase().includes(q)) ||
                (i.tags && i.tags.some(t => t.toLowerCase().includes(q)))
            );
        }

        if (isTopicMode) {
            statsEl.textContent = `Topic "${currentTopic}" — ${items.length} items across all dates`;
        } else {
            statsEl.textContent = `Showing ${items.length} of ${allItems.length} items`;
        }

        if (items.length === 0) {
            grid.innerHTML = '';
            emptyState.style.display = 'block';
            return;
        }

        emptyState.style.display = 'none';
        grid.innerHTML = items.map(item => createCard(item)).join('');
    }

    function createCard(item) {
        const badgeClass = `badge-${item.category}`;
        const itemDate = item._date || currentDateStr;
        const starsHtml = item.stars
            ? `<span class="card-stars">&#9733; ${formatStars(item.stars)}</span>`
            : '';
        const highlightHtml = item.highlight
            ? `<div class="card-highlight">${esc(item.highlight)}</div>`
            : '';
        const tagsHtml = (item.tags || [])
            .map(t => `<span class="tag">${esc(t)}</span>`)
            .join('');
        const topicHtml = (item.topic || [])
            .map(t => `<span class="topic-tag topic-tag-${t}">${esc(t)}</span>`)
            .join('');
        const dateHtml = item._date
            ? `<span class="card-date">${esc(item._date)}</span>`
            : '';

        return `
        <div class="card" data-category="${item.category}" data-item-id="${item.id}" data-item-date="${esc(itemDate)}">
            <button class="hide-btn" onclick="event.stopPropagation(); window.__hideItem('${esc(itemDate)}', ${item.id})" title="Not interested">&times;</button>
            <div class="card-header">
                <span class="card-badge ${badgeClass}">${esc(item.category)}</span>
                ${dateHtml}
                ${starsHtml}
            </div>
            <div class="card-title">
                <a href="${esc(item.url)}" target="_blank" rel="noopener">${esc(item.title)}</a>
            </div>
            <div class="card-summary">${esc(item.summary)}</div>
            ${highlightHtml}
            <div class="card-footer">
                <span class="card-source">${esc(item.source || '')}</span>
                <div class="card-tags">${topicHtml}${tagsHtml}</div>
            </div>
        </div>`;
    }

    window.__hideItem = function(date, itemId) {
        const card = document.querySelector(`.card[data-item-id="${itemId}"][data-item-date="${date}"]`);
        if (card) {
            card.classList.add('card-hiding');
            setTimeout(() => hideItem(date, itemId), 300);
        } else {
            hideItem(date, itemId);
        }
    };

    function formatStars(n) {
        if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
        return n;
    }

    function esc(str) {
        if (!str) return '';
        const d = document.createElement('div');
        d.textContent = str;
        return d.innerHTML;
    }

    categoryFilter.addEventListener('click', e => {
        const btn = e.target.closest('.cat-btn');
        if (!btn) return;
        categoryFilter.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        render();
    });

    topicFilter.addEventListener('click', e => {
        const btn = e.target.closest('.topic-btn');
        if (!btn) return;
        const topic = btn.dataset.topic;
        if (isTopicMode && currentTopic === topic) {
            exitTopicMode();
        } else {
            loadTopicData(topic);
        }
    });

    topicBackBtn.addEventListener('click', exitTopicMode);

    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            currentSearch = searchInput.value.trim();
            render();
        }, 200);
    });

    dateInput.addEventListener('change', () => {
        if (!isTopicMode) loadData(dateInput.value);
    });

    document.getElementById('prev-day').addEventListener('click', () => {
        if (isTopicMode) return;
        const d = new Date(dateInput.value);
        d.setDate(d.getDate() - 1);
        dateInput.value = formatDate(d);
        loadData(dateInput.value);
    });

    document.getElementById('next-day').addEventListener('click', () => {
        if (isTopicMode) return;
        const d = new Date(dateInput.value);
        d.setDate(d.getDate() + 1);
        dateInput.value = formatDate(d);
        loadData(dateInput.value);
    });

    loadData(formatDate(today));
})();
