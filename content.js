
function highlightAndScroll() {
  chrome.storage.local.get({ memories: [] }, (data) => {
    const currentUrl = window.location.href;
    const pageMemories = data.memories.filter(m => m.url === currentUrl);

    pageMemories.forEach(mem => {
      // Find the text in the body
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
      let node;

      while (node = walker.nextNode()) {
        if (node.textContent.includes(mem.text)) {
          const span = document.createElement('span');
          span.style.backgroundColor = "yellow";
          span.style.fontWeight = "bold";
          span.id = `mem-${mem.id}`;
          
          const range = document.createRange();
          const startIdx = node.textContent.indexOf(mem.text);
          
          range.setStart(node, startIdx);
          range.setEnd(node, startIdx + mem.text.length);
          range.surroundContents(span);

          // Automatically scroll to the first highlight found
          span.scrollIntoView({ behavior: "smooth", block: "center" });
          break; // Stop after finding the first instance
        }
      }
    });
  });
}

// Run the function when the page loads
highlightAndScroll();