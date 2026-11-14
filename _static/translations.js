// Zamiana CONTENTS na SPIS TREŚCI
document.addEventListener('DOMContentLoaded', function() {
  // Znajdź wszystkie elementy zawierające "CONTENTS"
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  let node;
  const nodesToReplace = [];
  
  while (node = walker.nextNode()) {
    if (node.textContent.trim() === 'CONTENTS') {
      nodesToReplace.push(node);
    }
  }

  // Zamień tekst
  nodesToReplace.forEach(node => {
    node.textContent = 'SPIS TREŚCI';
  });
});
