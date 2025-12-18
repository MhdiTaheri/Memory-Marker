# 🧠 Memory Marker

**Memory Marker** is a sleek, productivity-focused Chrome Extension that acts as your "digital second brain." Instead of just bookmarking a page, Memory Marker lets you save specific snippets of text and navigate back to the exact spot on the page with beautiful highlights.



## ✨ Features

* **Context-Menu Saving:** Simply highlight any text, right-click, and select "Memorize this text" to save it.
* **Smart Deep-Linking:** Clicking a saved memory in the popup opens the URL, scrolls automatically to the snippet, and highlights it.
* **Premium Dashboard:** A high-end, glassmorphic UI with a live search bar and statistics.
* **Privacy-Focused:** All data is stored in your browser's `local.storage`. No external servers, no tracking.

## 🚀 Installation (Developer Mode)

Since this extension is not currently on the Chrome Web Store, you can install it manually for free:

1.  **Download this Repository:** Click the green `Code` button and select `Download ZIP`, or clone it using `git clone`.
2.  **Extract the Files:** Unzip the folder on your computer.
3.  **Open Chrome Extensions:** In your browser, go to `chrome://extensions/`.
4.  **Enable Developer Mode:** Toggle the switch in the top-right corner.
5.  **Load Unpacked:** Click the **Load unpacked** button and select the folder containing the `manifest.json` file.
6.  **Pin the Extension:** Click the puzzle icon in your Chrome toolbar and pin **Memory Marker**.

## 🛠️ Tech Stack

* **Manifest V3:** The latest Chrome extension standard.
* **JavaScript (ES6+):** For background service workers and content script manipulation.
* **HTML5 & CSS3:** Modern UI with CSS variables, Flexbox, and smooth animations.
* **Chrome Storage API:** For persistent local data management.

## 📸 Screenshots

| Dashboard View | Context Menu |
| :--- | :--- |
| ![Popup UI](https://via.placeholder.com/300x500?text=Fancy+Popup+UI) | ![Context Menu](https://via.placeholder.com/300x200?text=Right+Click+Action) |

## 📜 Privacy Policy

Memory Marker respects your privacy. 
- No data is sent to the cloud.
- No personal information is collected.
- All "Memories" are stored locally on your device via the `chrome.storage` API.

---
Created with ❤️ by [Your Name/GitHub Username]
