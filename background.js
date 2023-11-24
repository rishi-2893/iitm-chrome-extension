chrome.runtime.onInstalled.addListener(() => {
    // The action's badge is a colored banner on top of the extension action
    chrome.action.setBadgeText({
      text: 'OFF'
    });
  });
  
  const extensions = 'https://seek.onlinedegree.iitm.ac.in/courses';
  
  // When the user clicks on the extension action
  // in our case extension action is the icons we have set in manifest.json
  chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(extensions)) {
      // We retrieve the action badge to check if the extension is 'ON' or 'OFF'
      const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
      // Next state will always be the opposite
      const nextState = prevState === 'ON' ? 'OFF' : 'ON';
  
      // Set the action badge to the next state
      await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState
      });
  
      if (nextState === 'ON') {
        // Insert the CSS file when the user turns the extension on
        await chrome.scripting.insertCSS({
          files: ['style.css'],
          target: { tabId: tab.id }
        });
      } else if (nextState === 'OFF') {
        // Remove the CSS file when the user turns the extension off
        await chrome.scripting.removeCSS({
          files: ['style.css'],
          target: { tabId: tab.id }
        });
      }
    }
  
  });
  