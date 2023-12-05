const extensions = "https://seek.onlinedegree.iitm.ac.in/courses";

// listen message from content script
chrome.runtime.onMessage.addListener(async (obj, sender, response) => {
  const { type, value } = obj;

  if (type == "toggleTheme") {
    if (value == true) {
      await chrome.scripting.insertCSS({
        files: ["styles/theme.css"],
        target: { tabId: sender.tab.id },
      });
    } else {
      await chrome.scripting.removeCSS({
        files: ["styles/theme.css"],
        target: { tabId: sender.tab.id },
      });
    }
  }

  if (type == "changeFontSize") {
    if (value == 1) {
      await chrome.scripting.removeCSS({
        files: ["styles/font-large.css", "styles/font-x-large.css"],
        target: { tabId: sender.tab.id },
      });
    } else if (value == 2){
      await chrome.scripting.removeCSS({
        files: ["styles/font-large.css"],
        target: { tabId: sender.tab.id },
      });
      await chrome.scripting.insertCSS({
        files: ["styles/font-large.css"],
        target: { tabId: sender.tab.id },
      });
    } else if (value == 3){
      await chrome.scripting.removeCSS({
        files: ["styles/font-large.css"],
        target: { tabId: sender.tab.id },
      });
      await chrome.scripting.insertCSS({
        files: ["styles/font-x-large.css"],
        target: { tabId: sender.tab.id },
      });
    }
  }
});
