/* ==========================================================================
   Milas Offshore product data store
   Combines the seed data (data/products.js) with listings added through
   the admin demo (saved in localStorage). This keeps the whole prototype
   working with zero backend see /admin.html for upgrade notes.
   ========================================================================== */

const STORE = (function () {
  const CUSTOM_KEY = "milasoffshore_products_custom";
  const DELETED_KEY = "milasoffshore_products_deleted";

  function getCustom() {
    try { return JSON.parse(localStorage.getItem(CUSTOM_KEY)) || []; }
    catch (e) { return []; }
  }
  function saveCustom(list) {
    try { localStorage.setItem(CUSTOM_KEY, JSON.stringify(list)); } catch (e) {}
  }
  function getDeleted() {
    try { return JSON.parse(localStorage.getItem(DELETED_KEY)) || []; }
    catch (e) { return []; }
  }
  function saveDeleted(list) {
    try { localStorage.setItem(DELETED_KEY, JSON.stringify(list)); } catch (e) {}
  }

  function getAll() {
    const seed = (window.PRODUCTS_SEED || []).slice();
    const custom = getCustom();
    const deleted = new Set(getDeleted());
    return seed.concat(custom).filter((p) => !deleted.has(p.id));
  }

  function getById(id) {
    return getAll().find((p) => p.id === id);
  }

  function add(product) {
    const list = getCustom();
    product.id = "u" + Date.now().toString(36);
    product.custom = true;
    list.push(product);
    saveCustom(list);
    return product;
  }

  function remove(id) {
    // if it's a custom (session-added) product, drop it from custom list
    const custom = getCustom().filter((p) => p.id !== id);
    saveCustom(custom);
    // if it's a seed product, mark it deleted so it disappears from view
    const deleted = getDeleted();
    if (!deleted.includes(id)) {
      deleted.push(id);
      saveDeleted(deleted);
    }
  }

  function sessionAddedCount() {
    return getCustom().length;
  }

  return { getAll, getById, add, remove, sessionAddedCount };
})();
