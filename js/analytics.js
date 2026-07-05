/**
 * FafaGadgets - Analytics Simulation & UI Debugger Console
 * Simulates Google Analytics (GA4) e-commerce tracking events.
 * Renders a visual overlay console for academic presentation and validation.
 */

const SVARNA_Analytics = (() => {
  // Store session tracking data
  const sessionData = {
    events: [],
    startTime: Date.now(),
    pageViews: 0,
    cartAdds: 0,
    checkoutSteps: 0,
    purchases: 0,
    totalSpent: 0
  };

  // Metric definitions for the UI explanation
  const metricExplanations = {
    'Conversion Rate': 'Persentase kunjungan yang berakhir dengan pembelian. Rumus: (Purchases / Total Sessions) * 100%. Target akademik gadget: 1.5-2.5%.',
    'Cart Abandonment': 'Persentase user yang memasukkan barang ke keranjang tapi tidak checkout. Rumus: ((Adds - Purchases) / Adds) * 100%.',
    'Average Order Value (AOV)': 'Rata-rata nilai uang yang dihabiskan per transaksi. Rumus: Total Revenue / Total Purchases.',
    'Bounce Rate': 'Persentase user yang meninggalkan situs langsung setelah memuat halaman pertama tanpa interaksi apapun.'
  };

  // Internal function to log events to the visual panel
  function logToConsole(eventName, params) {
    const timestamp = new Date().toLocaleTimeString();
    const eventLog = { timestamp, eventName, params };
    sessionData.events.unshift(eventLog);

    // Update counts
    if (eventName === 'page_view') sessionData.pageViews++;
    if (eventName === 'add_to_cart') sessionData.cartAdds++;
    if (eventName === 'begin_checkout') sessionData.checkoutSteps++;
    if (eventName === 'purchase') {
      sessionData.purchases++;
      sessionData.totalSpent += params.value || 0;
    }

    // Refresh UI console if initialized
    updateConsoleUI();
    
    // Also log to browser developer console with styling
    console.log(
      `%c[GA4 FAFA-GADGETS] Event: ${eventName} %o`,
      'background: #38BDF8; color: #020617; padding: 2px 5px; border-radius: 3px; font-weight: bold;',
      params
    );
  }

  // Create and inject the floating analytics console UI
  function initConsoleUI() {
    if (document.getElementById('analytics-console-widget')) return;

    const widget = document.createElement('div');
    widget.id = 'analytics-console-widget';
    widget.className = 'analytics-console-widget minimized';
    
    widget.innerHTML = `
      <div class="analytics-header" id="analytics-header" style="border-bottom-color: rgba(56, 189, 248, 0.3);">
        <div class="analytics-title-group">
          <span class="analytics-indicator-dot" style="background-color: #38BDF8; box-shadow: 0 0 8px #38BDF8;"></span>
          <h4 style="color: #38BDF8;">FafaGadgets - GA4 Simulator</h4>
        </div>
        <div class="analytics-controls">
          <button id="analytics-toggle-btn" style="color: #38BDF8; border-color: rgba(56, 189, 248, 0.3);" title="Toggle Console">▲</button>
        </div>
      </div>
      <div class="analytics-body">
        <div class="analytics-tabs">
          <button class="analytics-tab-btn active" data-target="log-panel">Real-Time Logs</button>
          <button class="analytics-tab-btn" data-target="metrics-panel">Business Metrics</button>
        </div>
        
        <div class="analytics-tab-content active" id="log-panel">
          <div class="analytics-stat-row">
            <div class="stat-box">PV: <strong id="stat-pv">0</strong></div>
            <div class="stat-box">Adds: <strong id="stat-cart">0</strong></div>
            <div class="stat-box">Checkouts: <strong id="stat-checkout">0</strong></div>
            <div class="stat-box">Sales: <strong id="stat-sales">0</strong></div>
          </div>
          <div class="analytics-log-container" id="analytics-log-container">
            <p class="empty-log-message">Belum ada event analitik. Coba navigasikan halaman, buka detail produk, atau tambahkan gadget ke keranjang...</p>
          </div>
        </div>

        <div class="analytics-tab-content" id="metrics-panel">
          <div class="calculated-metrics">
            <div class="metric-item" style="border-left-color: #38BDF8;">
              <span class="metric-label">Simulated Conversion Rate</span>
              <span class="metric-value" id="calc-conversion">0%</span>
            </div>
            <div class="metric-item" style="border-left-color: #38BDF8;">
              <span class="metric-label">Cart Abandonment Rate</span>
              <span class="metric-value" id="calc-abandonment">0%</span>
            </div>
            <div class="metric-item" style="border-left-color: #38BDF8;">
              <span class="metric-label">Average Order Value (AOV)</span>
              <span class="metric-value" id="calc-aov">Rp 0</span>
            </div>
          </div>
          <div class="metrics-glossary">
            <h5 style="color: #38BDF8;">Glosarium Metrik Akademik:</h5>
            ${Object.entries(metricExplanations).map(([name, desc]) => `
              <div class="glossary-item">
                <strong>${name}:</strong>
                <p>${desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(widget);

    // Setup event listeners for tabs
    const tabButtons = widget.querySelectorAll('.analytics-tab-btn');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        widget.querySelectorAll('.analytics-tab-content').forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        const targetId = btn.getAttribute('data-target');
        widget.querySelector(`#${targetId}`).classList.add('active');
      });
    });

    // Toggle minimize/maximize
    const header = widget.querySelector('#analytics-header');
    const toggleBtn = widget.querySelector('#analytics-toggle-btn');
    
    const toggleMinimize = () => {
      widget.classList.toggle('minimized');
      toggleBtn.textContent = widget.classList.contains('minimized') ? '▲' : '▼';
    };

    header.addEventListener('click', (e) => {
      if (e.target !== toggleBtn) toggleMinimize();
    });
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMinimize();
    });

    updateConsoleUI();
  }

  // Update visual logs and stats in the UI widget
  function updateConsoleUI() {
    const widget = document.getElementById('analytics-console-widget');
    if (!widget) return;

    // Update basic stats
    widget.querySelector('#stat-pv').textContent = sessionData.pageViews;
    widget.querySelector('#stat-cart').textContent = sessionData.cartAdds;
    widget.querySelector('#stat-checkout').textContent = sessionData.checkoutSteps;
    widget.querySelector('#stat-sales').textContent = sessionData.purchases;

    // Update real-time log list
    const logContainer = widget.querySelector('#analytics-log-container');
    if (sessionData.events.length === 0) {
      logContainer.innerHTML = '<p class="empty-log-message">Belum ada event analitik...</p>';
    } else {
      logContainer.innerHTML = sessionData.events.map(ev => {
        let paramsString = '';
        if (ev.params && Object.keys(ev.params).length > 0) {
          paramsString = `<pre class="log-params">${JSON.stringify(ev.params, null, 2)}</pre>`;
        }
        return `
          <div class="log-item">
            <div class="log-time-name">
              <span class="log-time">[${ev.timestamp}]</span>
              <span class="log-name">${ev.eventName}</span>
            </div>
            ${paramsString}
          </div>
        `;
      }).join('');
    }

    // Calculate rates
    const sessions = Math.max(1, sessionData.pageViews);
    const calculatedConv = ((sessionData.purchases / sessions) * 100).toFixed(1) + '%';

    const abandonmentRate = sessionData.cartAdds > 0
      ? (((sessionData.cartAdds - sessionData.purchases) / sessionData.cartAdds) * 100).toFixed(1) + '%'
      : '0%';

    const aov = sessionData.purchases > 0
      ? 'Rp ' + Math.round(sessionData.totalSpent / sessionData.purchases).toLocaleString('id-ID')
      : 'Rp 0';

    widget.querySelector('#calc-conversion').textContent = calculatedConv;
    widget.querySelector('#calc-abandonment').textContent = abandonmentRate;
    widget.querySelector('#calc-aov').textContent = aov;
  }

  // Public Interface simulating standard gtag()
  return {
    init: () => {
      initConsoleUI();
      logToConsole('page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    },
    
    trackViewItem: (product) => {
      logToConsole('view_item', {
        currency: 'IDR',
        value: product.price,
        items: [{
          item_id: product.id,
          item_name: product.name,
          item_category: product.category,
          price: product.price
        }]
      });
    },

    trackAddToCart: (product, quantity = 1) => {
      logToConsole('add_to_cart', {
        currency: 'IDR',
        value: product.price * quantity,
        items: [{
          item_id: product.id,
          item_name: product.name,
          item_category: product.category,
          price: product.price,
          quantity: quantity
        }]
      });
    },

    trackRemoveFromCart: (product, quantity = 1) => {
      logToConsole('remove_from_cart', {
        currency: 'IDR',
        value: product.price * quantity,
        items: [{
          item_id: product.id,
          item_name: product.name,
          item_category: product.category,
          price: product.price,
          quantity: quantity
        }]
      });
    },

    trackBeginCheckout: (cartItems, totalValue) => {
      logToConsole('begin_checkout', {
        currency: 'IDR',
        value: totalValue,
        items: cartItems.map(item => ({
          item_id: item.id,
          item_name: item.name,
          item_category: item.category,
          price: item.price,
          quantity: item.quantity
        }))
      });
    },

    trackPurchase: (transactionId, cartItems, totalValue, paymentMethod) => {
      logToConsole('purchase', {
        transaction_id: transactionId,
        currency: 'IDR',
        value: totalValue,
        payment_type: paymentMethod,
        items: cartItems.map(item => ({
          item_id: item.id,
          item_name: item.name,
          item_category: item.category,
          price: item.price,
          quantity: item.quantity
        }))
      });
    }
  };
})();
