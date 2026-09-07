"use strict";
const copyButton = document.getElementById("copy-citation");
if (copyButton && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    const status = document.getElementById("copy-status");
    try {
      await navigator.clipboard.writeText(document.getElementById("citation").textContent);
      status.textContent = "Citation copied to clipboard.";
    } catch {
      status.textContent = "Copy unavailable. Please select and copy the citation above.";
    }
  });
}
