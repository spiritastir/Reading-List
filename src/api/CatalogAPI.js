const CatalogAPI = {
  catalog: [],
  updateCatalog(data) {
    this.catalog = [...data];
  },
  getCatalog() {
    return this.catalog;
  },
  setFavorite(itemId, value) {
    const item = this.catalog.find(item => item.book_id == itemId);
    if (item) {
      Object.assign(item, {
        favorite: value,
      });
    }
  },
};

export default CatalogAPI;
