import { register } from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events';
import CatalogAPI from '../api/CatalogAPI';

const CHANGE_EVENT = 'CHANGE';

const AppStore = Object.assign(EventEmitter.prototype, {

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCatalog() {
    return CatalogAPI.getCatalog();
  },

  dispatcherIndex: register(action => {

    switch (action.actionType) {
      case AppConstants.RETRIEVE_CATALOG:
        CatalogAPI.updateCatalog(action.data);
        break;
      case AppConstants.LIKE_ITEM:
        CatalogAPI.setFavorite(action.itemId, true);
        break;
      case AppConstants.UNLIKE_ITEM:
        CatalogAPI.setFavorite(action.itemId, false);
        break;
    }

    AppStore.emitChange();
  })
});

export default AppStore;
