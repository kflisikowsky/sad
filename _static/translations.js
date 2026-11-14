// Bardziej agresywne zastępowanie CONTENTS -> SPIS TREŚCI
(function() {
  const replace = () => {
    // Szukaj w całym dokumencie
    const walk = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        if (node.textContent === 'CONTENTS') {
          node.textContent = 'SPIS TREŚCI';
        }
      } else {
        for (let child of node.childNodes) {
          walk(child);
        }
      }
    };
    
    walk(document.body);
    
    // Również zamień w shadow DOM jeśli istnieje
    document.querySelectorAll('*').forEach(el => {
      if (el.shadowRoot) {
        walk(el.shadowRoot);
      }
    });
  };

  // Wielokrotne wykonanie
  replace();
  document.addEventListener('DOMContentLoaded', replace);
  setTimeout(replace, 100);
  setTimeout(replace, 500);
  setTimeout(replace, 1000);
  
  // Observer na zmian DOM
  const observer = new MutationObserver(replace);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
})();

