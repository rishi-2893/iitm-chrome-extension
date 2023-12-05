// Inject bootsrap
// Function to inject a script or link element into the DOM
function injectElement(tagName, attributes, parent = document.head) {
    const element = document.createElement(tagName);
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    parent.appendChild(element);
  }
  
  // Inject Bootstrap CSS link
  injectElement("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
    integrity: "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN",
    crossorigin: "anonymous",
  });
  
  // Inject Bootstrap JS script
  injectElement("script", {
    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
    integrity: "sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL",
    crossorigin: "anonymous",
  }, document.body);
  
  
  
  
  
  // Select the parent element
  const parentElement = document.querySelector("#main-block > app-header > header > div.header__email.ng-tns-c29-0.ng-star-inserted")
  
  
  // Create the theme switch
  const themeSwitch = document.createElement("div");
  themeSwitch.setAttribute("class", "form-check form-switch");
  const themeSwitchInput = document.createElement("input");
  themeSwitchInput.setAttribute("class", "form-check-input");
  themeSwitchInput.setAttribute("type", "checkbox");
  themeSwitchInput.setAttribute("role", "switch");
  themeSwitchInput.setAttribute("id", "flexSwitchCheckDefault");
  themeSwitch.appendChild(themeSwitchInput);
  
  
  // theme switch label
  const themeSwitchLabel = document.createElement("label");
  themeSwitchLabel.setAttribute("class", "form-check-label");
  themeSwitchLabel.setAttribute("for", "flexSwitchCheckDefault");
  themeSwitchLabel.textContent = "Theme";
  // insert theme switch label
  themeSwitch.appendChild(themeSwitchLabel);
  
  // Insert the theme switch
  parentElement.insertBefore(themeSwitch, parentElement.firstChild);
  
  
  // insert separator
  const separator = document.createElement("div");
  separator.setAttribute("class", "separator ng-tns-c29-0");
  separator.setAttribute("_ngcontent-ywe-c29", "");
  parentElement.insertBefore(separator, parentElement.firstChild);
  
  
  
  //----------------------------------------------------------
  
  
  
  // Create a new label element for the range input
  const fontSizeLabel = document.createElement("label");
  fontSizeLabel.setAttribute("for", "customRange3");
  fontSizeLabel.setAttribute("class", "form-label");
  fontSizeLabel.textContent = "Font size";
  
  // Create a new input element (range)
  const fontSizeInput = document.createElement("input");
  fontSizeInput.style.width = "43px";
  fontSizeInput.setAttribute("type", "range");
  fontSizeInput.setAttribute("class", "form-range");
  fontSizeInput.setAttribute("min", "1");
  fontSizeInput.setAttribute("max", "3");
  fontSizeInput.setAttribute("step", "1");
  fontSizeInput.setAttribute("id", "customRange3");
  
  // Append
  parentElement.insertBefore(fontSizeInput, parentElement.firstChild);