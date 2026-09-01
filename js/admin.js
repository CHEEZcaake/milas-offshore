/* ==========================================================================
   Milas Offshore admin demo logic
   Client-side only demo: the access code below is NOT real security
   (anyone who views the page source can see it). It only prevents casual
   visitors from stumbling into the panel. For a live site, replace this
   with real authentication on a backend. See admin note panel + setup guide.
   ========================================================================== */

const ADMIN_CODE = "milasoffshore2026";
const AUTH_KEY = "milasoffshore_admin_auth";

document.addEventListener("DOMContentLoaded", () => {
  const loginView = document.getElementById("admin-login-view");
  const appView = document.getElementById("admin-app-view");
  const loginForm = document.getElementById("admin-login-form");
  const loginError = document.getElementById("admin-login-error");
  const logoutBtn = document.getElementById("admin-logout");
  const addForm = document.getElementById("admin-add-form");

  function isAuthed() {
    try { return sessionStorage.getItem(AUTH_KEY) === "1"; } catch (e) { return false; }
  }
  function showApp() {
    loginView.style.display = "none";
    appView.style.display = "block";
    renderTable();
    renderStats();
  }
  function showLogin() {
    appView.style.display = "none";
    loginView.style.display = "flex";
  }

  if (isAuthed()) showApp(); else showLogin();

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = document.getElementById("admin-pass").value.trim();
    if (val === ADMIN_CODE) {
      try { sessionStorage.setItem(AUTH_KEY, "1"); } catch (err) {}
      loginError.style.display = "none";
      showApp();
    } else {
      loginError.style.display = "block";
    }
  });

  logoutBtn.addEventListener("click", () => {
    try { sessionStorage.removeItem(AUTH_KEY); } catch (e) {}
    showLogin();
  });

  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const specsRaw = document.getElementById("f-specs").value;
    const product = {
      name: document.getElementById("f-name").value.trim() || "Untitled listing",
      category: document.getElementById("f-cat").value,
      condition: document.getElementById("f-cond").value,
      desc: document.getElementById("f-desc").value.trim(),
      specs: specsRaw.split("\n").map((s) => s.trim()).filter(Boolean),
      featured: false
    };
    STORE.add(product);
    addForm.reset();
    renderTable();
    renderStats();
    showToast(I18N.t("admin.saved_toast"));
  });

  function renderStats() {
    const all = STORE.getAll();
    document.getElementById("stat-total").textContent = all.length;
    document.getElementById("stat-session").textContent = STORE.sessionAddedCount();
  }

  function renderTable() {
    const tbody = document.getElementById("admin-table-body");
    const empty = document.getElementById("admin-empty");
    const all = STORE.getAll().slice().reverse();
    const lang = I18N.getLang();

    if (!all.length) {
      tbody.innerHTML = "";
      empty.style.display = "block";
      return;
    }
    empty.style.display = "none";

    tbody.innerHTML = all.map((p) => {
      const catLabel = I18N.t(CATEGORY_KEY[p.category] || "", lang);
      const condLabel = I18N.t(CONDITION_KEY[p.condition] || "", lang);
      const pillClass = p.custom ? "new" : "ok";
      return `<tr data-row="${p.id}">
        <td><b>${escapeHtml(p.name)}</b></td>
        <td>${catLabel}</td>
        <td>${condLabel}</td>
        <td><span class="pill ${pillClass}">${p.custom ? "NEW" : "LIVE"}</span></td>
        <td>
          <div class="row-actions">
            <a class="icon-btn" href="product.html?id=${encodeURIComponent(p.id)}" target="_blank" title="View">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
            </a>
            <button class="icon-btn danger" data-delete="${p.id}" type="button" title="Delete">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4h8v2m-1 0v14a2 2 0 01-2 2H9a2 2 0 01-2-2V6h10z" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </div>
        </td>
      </tr>`;
    }).join("");

    tbody.querySelectorAll("[data-delete]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-delete");
        STORE.remove(id);
        renderTable();
        renderStats();
        showToast(I18N.t("admin.deleted_toast"));
      });
    });
  }

  document.addEventListener("langchange", () => {
    if (isAuthed()) { renderTable(); renderStats(); }
  });
});
