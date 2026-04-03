(() => {
    const grid = document.getElementById('card-grid');
    const emptyState = document.getElementById('empty-state');
    const statsEl = document.getElementById('stats');
    const dateInput = document.getElementById('date-input');
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');

    let allItems = [];
    let currentCategory = 'all';
    let currentSearch = '';

    // Format date as YYYY-MM-DD
    function formatDate(date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }

    // Init date
    const today = new Date();
    dateInput.value = formatDate(today);

    // Load data for a given date
    async function loadData(dateStr) {
        grid.innerHTML = `
            <div class="loading" style="grid-column: 1 / -1;">
                <div class="loading-spinner"></div>
                <p>Loading...</p>
            </div>`;
        emptyState.style.display = 'none';

        try {
            const resp = await fetch(`data/${dateStr}.json`);
            if (!resp.ok) throw new Error('No data');
            const data = await resp.json();
            allItems = data.items || [];
        } catch {
            allItems = [];
        }

        render();
    }

    // Render cards
    function render() {
        let items = allItems;

        // Filter by category
        if (currentCategory !== 'all') {
            items = items.filter(i => i.category === currentCategory);
        }

        // Filter by search
        if (currentSearch) {
            const q = currentSearch.toLowerCase();
            items = items.filter(i =>
                i.title.toLowerCase().includes(q) ||
                i.summary.toLowerCase().includes(q) ||
                (i.highlight && i.highlight.toLowerCase().includes(q)) ||
                (i.tags && i.tags.some(t => t.toLowerCase().includes(q)))
            );
        }

        // Stats
        statsEl.textContent = `Showing ${items.length} of ${allItems.length} items`;

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
        const starsHtml = item.stars
            ? `<span class="card-stars">&#9733; ${formatStars(item.stars)}</span>`
            : '';
        const highlightHtml = item.highlight
            ? `<div class="card-highlight">${esc(item.highlight)}</div>`
            : '';
        const tagsHtml = (item.tags || [])
            .map(t => `<span class="tag">${esc(t)}</span>`)
            .join('');

        return `
        <div class="card" data-category="${item.category}">
            <div class="card-header">
                <span class="card-badge ${badgeClass}">${esc(item.category)}</span>
                ${starsHtml}
            </div>
            <div class="card-title">
                <a href="${esc(item.url)}" target="_blank" rel="noopener">${esc(item.title)}</a>
            </div>
            <div class="card-summary">${esc(item.summary)}</div>
            ${highlightHtml}
            <div class="card-footer">
                <span class="card-source">${esc(item.source || '')}</span>
                <div class="card-tags">${tagsHtml}</div>
            </div>
        </div>`;
    }

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

    // Event: category filter
    categoryFilter.addEventListener('click', e => {
        const btn = e.target.closest('.cat-btn');
        if (!btn) return;
        categoryFilter.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        render();
    });

    // Event: search
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            currentSearch = searchInput.value.trim();
            render();
        }, 200);
    });

    // Event: date change
    dateInput.addEventListener('change', () => {
        loadData(dateInput.value);
    });

    document.getElementById('prev-day').addEventListener('click', () => {
        const d = new Date(dateInput.value);
        d.setDate(d.getDate() - 1);
        dateInput.value = formatDate(d);
        loadData(dateInput.value);
    });

    document.getElementById('next-day').addEventListener('click', () => {
        const d = new Date(dateInput.value);
        d.setDate(d.getDate() + 1);
        dateInput.value = formatDate(d);
        loadData(dateInput.value);
    });

    // Initial load
    loadData(formatDate(today));
})();
