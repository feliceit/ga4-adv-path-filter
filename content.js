(function() {
  'use strict';

  // Configurazione
  const CONFIG = {
    checkInterval: 1000, // Controlla ogni secondo
    maxAttempts: 30, // Massimo 30 tentativi (30 secondi)
    selectors: {
      tableControls: 'ga-table-controls',
      tbody: 'tbody.mdc-data-table__content',
      leftControls: '.left-table-controls',
      rows: 'tr.mat-mdc-row',
      conversionPathChips: 'ga-conversion-path-chips'
    }
  };

  let attempts = 0;
  let filterInstalled = false;
  let checkIntervalId = null;

  // Funzione per verificare se siamo sulla pagina corretta
  function isConversionPathsPage() {
    // Controlla l'URL
    const urlMatch = window.location.hash.includes('key-event-paths') || 
                     window.location.hash.includes('conversion-paths');
    
    // Controlla la presenza degli elementi caratteristici
    const hasConversionChips = document.querySelector(CONFIG.selectors.conversionPathChips) !== null;
    const hasTableControls = document.querySelector(CONFIG.selectors.tableControls) !== null;
    
    return urlMatch && hasConversionChips && hasTableControls;
  }

  // Funzione principale per installare il filtro
  function installFilter() {
    if (filterInstalled) {
      console.log('[GA4 Filter] Filtro già installato');
      return true;
    }

    // Verifica se siamo sulla pagina corretta
    if (!isConversionPathsPage()) {
      return false;
    }

    const tableControls = document.querySelector(CONFIG.selectors.tableControls);
    const tbody = document.querySelector(CONFIG.selectors.tbody);
    const leftControls = document.querySelector(CONFIG.selectors.leftControls);

    if (!tableControls || !tbody || !leftControls) {
      return false;
    }

    // Verifica se il filtro esiste già
    if (document.getElementById('custom-table-filter')) {
      filterInstalled = true;
      console.log('[GA4 Filter] ✅ Filtro già presente');
      return true;
    }

    // Crea il container per il campo di filtro
    const filterContainer = document.createElement('div');
    filterContainer.id = 'custom-table-filter';
    filterContainer.style.cssText = `
      display: flex;
      align-items: center;
      gap: 8px;
      margin-right: 16px;
    `;

    // Crea il label
    const filterLabel = document.createElement('label');
    filterLabel.textContent = 'Filter rows:';
    filterLabel.style.cssText = `
      font-family: 'Google Sans', Roboto, Arial, sans-serif;
      font-size: 14px;
      font-weight: 500;
      color: #3c4043;
      white-space: nowrap;
      line-height: 36px;
    `;

    // Crea il campo di input
    const filterInput = document.createElement('input');
    filterInput.type = 'text';
    filterInput.placeholder = 'Search...';
    filterInput.style.cssText = `
      padding: 0 12px;
      height: 36px;
      border: 1px solid #dadce0;
      border-radius: 4px;
      font-family: Roboto, Arial, sans-serif;
      font-size: 14px;
      color: #3c4043;
      background: #fff;
      width: 280px;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    `;

    // Effetto focus sull'input
    filterInput.addEventListener('focus', function() {
      this.style.borderColor = '#1967d2';
      this.style.boxShadow = '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)';
    });

    filterInput.addEventListener('blur', function() {
      this.style.borderColor = '#dadce0';
      this.style.boxShadow = 'none';
    });

    // Crea il contatore di risultati
    const resultCounter = document.createElement('span');
    resultCounter.style.cssText = `
      font-family: Roboto, Arial, sans-serif;
      font-size: 13px;
      color: #5f6368;
      white-space: nowrap;
      line-height: 36px;
      min-width: 60px;
    `;

    // Crea il pulsante per pulire il filtro
    const clearButton = document.createElement('button');
    clearButton.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
    `;
    clearButton.title = 'Clear filter';
    clearButton.style.cssText = `
      padding: 0;
      width: 36px;
      height: 36px;
      border: 1px solid #dadce0;
      border-radius: 4px;
      background: #fff;
      color: #5f6368;
      cursor: pointer;
      display: none;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      flex-shrink: 0;
    `;

    clearButton.addEventListener('mouseenter', function() {
      this.style.background = '#f1f3f4';
      this.style.borderColor = '#5f6368';
    });

    clearButton.addEventListener('mouseleave', function() {
      this.style.background = '#fff';
      this.style.borderColor = '#dadce0';
    });

    clearButton.addEventListener('click', function() {
      filterInput.value = '';
      filterInput.focus();
      filterRows();
    });

    // Funzione di filtraggio
    function filterRows() {
      const filterValue = filterInput.value.toLowerCase().trim();
      const rows = tbody.querySelectorAll(CONFIG.selectors.rows);
      let visibleCount = 0;

      clearButton.style.display = filterValue ? 'flex' : 'none';

      rows.forEach(row => {
        if (filterValue === '') {
          row.style.display = '';
          visibleCount++;
        } else {
          const rowText = row.textContent.toLowerCase();
          
          if (rowText.includes(filterValue)) {
            row.style.display = '';
            visibleCount++;
          } else {
            row.style.display = 'none';
          }
        }
      });

      const totalRows = rows.length;
      if (filterValue === '') {
        resultCounter.textContent = `${totalRows} rows`;
        resultCounter.style.color = '#5f6368';
        resultCounter.style.fontWeight = '400';
      } else {
        resultCounter.textContent = `${visibleCount} of ${totalRows}`;
        if (visibleCount > 0) {
          resultCounter.style.color = '#1967d2';
          resultCounter.style.fontWeight = '500';
        } else {
          resultCounter.style.color = '#d93025';
          resultCounter.style.fontWeight = '500';
        }
      }
    }

    // Event listeners
    filterInput.addEventListener('input', filterRows);
    filterInput.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        filterInput.value = '';
        filterRows();
        filterInput.blur();
      }
    });

    // Assembla il container
    filterContainer.appendChild(filterLabel);
    filterContainer.appendChild(filterInput);
    filterContainer.appendChild(clearButton);
    filterContainer.appendChild(resultCounter);

    // Inserisci il filtro
    leftControls.appendChild(filterContainer);

    // Inizializza il contatore
    const totalRows = tbody.querySelectorAll(CONFIG.selectors.rows).length;
    resultCounter.textContent = `${totalRows} rows`;

    filterInstalled = true;
    console.log('[GA4 Filter] ✅ Filter installed successfully!');
    console.log(`[GA4 Filter] 📊 Current page rows: ${totalRows}`);

    return true;
  }

  // Funzione per controllare periodicamente
  function checkAndInstall() {
    attempts++;

    if (installFilter()) {
      // Successo, ferma il controllo
      if (checkIntervalId) {
        clearInterval(checkIntervalId);
        checkIntervalId = null;
      }
      return;
    }

    // Se abbiamo superato i tentativi massimi, ferma
    if (attempts >= CONFIG.maxAttempts) {
      console.log('[GA4 Filter] ⏱️ Maximum attempts reached');
      if (checkIntervalId) {
        clearInterval(checkIntervalId);
        checkIntervalId = null;
      }
    }
  }

  // Inizializza al caricamento della pagina
  function init() {
    attempts = 0;
    filterInstalled = false;
    
    // Prova subito
    setTimeout(checkAndInstall, 500);
    
    // Poi controlla periodicamente
    if (checkIntervalId) {
      clearInterval(checkIntervalId);
    }
    checkIntervalId = setInterval(checkAndInstall, CONFIG.checkInterval);
  }

  // Observer per cambiamenti nell'URL (SPA)
  let lastUrl = location.href;
  new MutationObserver(() => {
    const currentUrl = location.href;
    if (currentUrl !== lastUrl) {
      lastUrl = currentUrl;
      console.log('[GA4 Filter] 🔄 URL change detected');
      init();
    }
  }).observe(document, { subtree: true, childList: true });

  // Avvia al caricamento
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  console.log('[GA4 Filter] 🚀 Extension loaded');
})();
