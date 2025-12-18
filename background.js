chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "memorizeText",
    title: "Memorize this text",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "memorizeText") {
    // We inject a script to ask the user for a title on the page
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (selectedText, url) => {
        const title = prompt("Give this memory a title:", "My Note");
        if (title) {
          // Send the data back to the background script to save
          chrome.runtime.sendMessage({
            action: "saveMemory",
            data: { title, text: selectedText, url, id: Date.now() }
          });
        }
      },
      args: [info.selectionText, tab.url]
    });
  }
});

// Listen for the message from the injected script and save to storage
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "saveMemory") {
    chrome.storage.local.get({ memories: [] }, (data) => {
      const memories = data.memories;
      memories.push(request.data);
      chrome.storage.local.set({ memories }, () => {
        console.log("Memory saved!");
      });
    });
  }
});