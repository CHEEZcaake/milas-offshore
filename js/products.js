/* ==========================================================================
   Milas Offshore product rendering (home featured grid, catalog, detail)
   ========================================================================== */

const CATEGORY_ICONS = {
  engine: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 15h4l2-3h4l2 3h4M6 15v3h12v-3M9 12V8h6v4M8 6h8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  deck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="7"/><path d="M12 5v14M5 12h14" stroke-linecap="round"/></svg>`,
  nav: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M15 9l-2 6-6 2 2-6 6-2z" stroke-linejoin="round"/></svg>`,
  safety: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3z" stroke-linejoin="round"/></svg>`,
  valve: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="4"/><path d="M12 2v6M12 16v6M2 12h6M16 12h6" stroke-linecap="round"/></svg>`,
  electric: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke-linejoin="round" stroke-linecap="round"/></svg>`
};

const CATEGORY_KEY = {
  engine: "products.cat_engine", deck: "products.cat_deck", nav: "products.cat_nav",
  safety: "products.cat_safety", valve: "products.cat_valve", electric: "products.cat_electric"
};
const CONDITION_KEY = { used: "products.cond_used", refurb: "products.cond_refurb", new: "products.cond_new" };

function pinSvg() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-6.5-5.7-6.5-11A6.5 6.5 0 1118.5 10c0 5.3-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg>`;
}

/* Merge a product with its Turkish/Dutch translation (falls back to the
   English fields whenever a listing has no translation, e.g. admin-added
   items). Names & part numbers are left as-is in every language. */
function localizeProduct(p, lang) {
  const table = window.PRODUCTS_I18N;
  if (lang && lang !== "en" && table && table[p.id] && table[p.id][lang]) {
    const tr = table[p.id][lang];
    return Object.assign({}, p, {
      desc: tr.desc || p.desc,
      specs: tr.specs || p.specs
    });
  }
  return p;
}

function productCard(p) {
  const lang = I18N.getLang();
  const lp = localizeProduct(p, lang);
  const catLabel = I18N.t(CATEGORY_KEY[p.category] || "", lang);
  const icon = CATEGORY_ICONS[p.category] || CATEGORY_ICONS.engine;
  const media = p.image
    ? `<img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" loading="lazy">`
    : icon;
  const waText = encodeURIComponent("Hi, I'm interested in: " + p.name);
  return `
  <div class="product-card reveal">
    <a class="product-card-link" href="product.html?id=${encodeURIComponent(p.id)}">
      <div class="product-thumb${p.image ? " has-photo" : ""}">
        <span class="product-badge">${catLabel}</span>
        ${media}
      </div>
      <div class="product-body">
        <h3>${escapeHtml(p.name)}</h3>
        <p>${escapeHtml(lp.desc)}</p>
      </div>
    </a>
    <div class="product-meta">
      <a class="btn btn-outline btn-sm" href="product.html?id=${encodeURIComponent(p.id)}">${I18N.t("products.request", lang)}</a>
      <a class="btn btn-whatsapp btn-sm" href="https://wa.me/31686183850?text=${waText}" target="_blank" rel="noopener" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.2 3.4 5.4 4.7.8.3 1.4.5 1.8.7.8.2 1.5.2 2 .1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.1-1.4-.1-.1-.3-.2-.6-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.2L2 22l4.9-1.3c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.1.8.8-3-.2-.3C3.6 14.7 3.2 13.4 3.2 12c0-4.8 3.9-8.7 8.8-8.7s8.8 3.9 8.8 8.7-3.9 8.7-8.8 8.7z"/></svg>
      </a>
    </div>
  </div>`;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str == null ? "" : String(str);
  return div.innerHTML;
}

/* ---- Home: featured grid ---- */
function renderFeatured() {
  const grid = document.querySelector("[data-featured-grid]");
  if (!grid) return;
  const items = STORE.getAll().filter((p) => p.featured).slice(0, 6);
  grid.innerHTML = items.map(productCard).join("");
  reInitReveal(grid);
}

/* ---- Catalog page ---- */
function renderCatalog() {
  const grid = document.querySelector("[data-catalog-grid]");
  if (!grid) return;
  const searchInput = document.querySelector("[data-catalog-search]");
  const chips = document.querySelectorAll("[data-catalog-chip]");
  const emptyState = document.querySelector("[data-catalog-empty]");

  let activeCat = "all";
  let query = "";

  function draw() {
    const all = STORE.getAll();
    const filtered = all.filter((p) => {
      const matchesCat = activeCat === "all" || p.category === activeCat;
      const hay = (p.name + " " + p.desc + " " + (p.location || "")).toLowerCase();
      const matchesQuery = !query || hay.includes(query.toLowerCase());
      return matchesCat && matchesQuery;
    });
    grid.innerHTML = filtered.map(productCard).join("");
    if (emptyState) emptyState.style.display = filtered.length ? "none" : "block";
    reInitReveal(grid);
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => { query = e.target.value; draw(); });
  }
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      activeCat = chip.getAttribute("data-catalog-chip");
      draw();
    });
  });

  document.addEventListener("langchange", draw);
  draw();
}

/* ---- Product detail page ---- */
function renderDetail() {
  const wrap = document.querySelector("[data-product-detail]");
  if (!wrap) return;
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const product = STORE.getById(id);

  function draw() {
    if (!product) {
      wrap.innerHTML = `<div class="empty-state"><p>Item not found.</p><a class="btn btn-dark" href="products.html">Back to catalogue</a></div>`;
      return;
    }
    const lang = I18N.getLang();
    const lp = localizeProduct(product, lang);
    const catLabel = I18N.t(CATEGORY_KEY[product.category] || "", lang);
    const icon = CATEGORY_ICONS[product.category] || CATEGORY_ICONS.engine;
    document.title = product.name + " | Milas Offshore";
    const gallery = (product.images && product.images.length) ? product.images : (product.image ? [product.image] : []);
    const mediaPanel = gallery.length
      ? `<div class="detail-gallery">
           <div class="detail-gallery-main"><img src="${escapeHtml(gallery[0])}" alt="${escapeHtml(product.name)}" data-gallery-main></div>
           ${gallery.length > 1 ? `<div class="detail-gallery-thumbs">${gallery.map((src, i) => `<button type="button" class="detail-gallery-thumb${i === 0 ? " is-active" : ""}" data-gallery-thumb="${escapeHtml(src)}"><img src="${escapeHtml(src)}" alt=""></button>`).join("")}</div>` : ""}
         </div>`
      : `<div class="hero-panel" style="background:linear-gradient(160deg,var(--navy-800),var(--navy-600));padding:50px;">
           <div style="color:rgba(255,255,255,.9);">${icon.replace('viewBox="0 0 24 24"', 'viewBox="0 0 24 24" width="100%" height="220"')}</div>
         </div>`;
    wrap.innerHTML = `
      <a class="small-muted" href="products.html" style="display:inline-flex;align-items:center;gap:6px;margin-bottom:22px;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span data-i18n="products.detail_back">Back to catalogue</span>
      </a>
      <div class="split" style="align-items:flex-start;">
        ${mediaPanel}
        <div>
          <span class="product-badge" style="position:static;display:inline-block;margin-bottom:12px;">${catLabel}</span>
          <h1 style="font-size:clamp(24px,3vw,34px);">${escapeHtml(product.name)}</h1>
          <p style="font-size:16px;">${escapeHtml(lp.desc)}</p>
          <h3 data-i18n="products.detail_specs" style="margin-top:22px;">Specifications</h3>
          <ul class="checklist">
            ${(lp.specs || []).map((s) => `<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>${escapeHtml(s)}</li>`).join("")}
          </ul>
          <div class="flex gap-8" style="flex-wrap:wrap;margin-top:4px;">
            <a class="btn btn-primary" href="contact.html?item=${encodeURIComponent(product.name)}" data-i18n="products.detail_cta">Ask about this item</a>
            <a class="btn btn-whatsapp" href="https://wa.me/31686183850?text=${encodeURIComponent("Hi, I'm interested in: " + product.name)}" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.2 3.4 5.4 4.7.8.3 1.4.5 1.8.7.8.2 1.5.2 2 .1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.1-1.4-.1-.1-.3-.2-.6-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.2L2 22l4.9-1.3c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.1.8.8-3-.2-.3C3.6 14.7 3.2 13.4 3.2 12c0-4.8 3.9-8.7 8.8-8.7s8.8 3.9 8.8 8.7-3.9 8.7-8.8 8.7z"/></svg>
              <span data-i18n="products.whatsapp_cta">Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>`;

    const mainImg = wrap.querySelector("[data-gallery-main]");
    wrap.querySelectorAll("[data-gallery-thumb]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (mainImg) mainImg.src = btn.getAttribute("data-gallery-thumb");
        wrap.querySelectorAll("[data-gallery-thumb]").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
      });
    });
  }

  document.addEventListener("langchange", draw);
  draw();
}

function reInitReveal(scope) {
  const els = (scope || document).querySelectorAll(".reveal:not(.in)");
  if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
    });
  }, { threshold: 0.1 });
  els.forEach((el, i) => { el.style.setProperty("--i", i % 8); io.observe(el); });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFeatured();
  renderCatalog();
  renderDetail();
  document.addEventListener("langchange", () => { renderFeatured(); });
});
