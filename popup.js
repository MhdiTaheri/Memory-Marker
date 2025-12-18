document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('memoryList');
  const countSpan = document.getElementById('count');
  const searchInput = document.getElementById('searchInput');

  function renderMemories(filter = '') {
    chrome.storage.local.get({ memories: [] }, (data) => {
      const memories = data.memories;
      container.innerHTML = '';
      
      const filtered = memories.filter(m => 
        m.title.toLowerCase().includes(filter.toLowerCase()) || 
        m.text.toLowerCase().includes(filter.toLowerCase())
      );

      countSpan.textContent = memories.length;

      if (filtered.length === 0) {
        container.innerHTML = `
          <div class="empty-state">
            <div class="empty-icon">📁</div>
            <div class="empty-text">${filter ? 'No matches found' : 'No memories yet'}</div>
          </div>`;
        return;
      }

      filtered.reverse().forEach((mem, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
          <div class="card-header">
            <span class="card-title">${mem.title}</span>
            <button class="delete-action" data-id="${mem.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
          <div class="card-snippet">"${mem.text}"</div>
          <div class="card-footer">
            <span class="url-tag">${new URL(mem.url).hostname}</span>
            <span>${new Date(mem.id).toLocaleDateString()}</span>
          </div>
        `;

        card.addEventListener('click', (e) => {
          if (!e.target.closest('.delete-action')) {
            chrome.tabs.create({ url: mem.url });
          }
        });

        // Delete Logic
        card.querySelector('.delete-action').addEventListener('click', (e) => {
          const idToDelete = mem.id;
          const updated = memories.filter(m => m.id !== idToDelete);
          chrome.storage.local.set({ memories: updated }, () => {
            renderMemories(searchInput.value);
          });
        });

        container.appendChild(card);
      });
    });
  }

  searchInput.addEventListener('input', (e) => renderMemories(e.target.value));
  renderMemories();
});