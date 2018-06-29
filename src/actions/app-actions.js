import AppConstants from '../constants/app-constants';
import { dispatch } from '../dispatchers/app-dispatcher';

export default {

  retrieveCatalog(data) {
    dispatch({
      actionType: AppConstants.RETRIEVE_CATALOG,
      data
    });
  },

  likeItem(itemId) {
    dispatch({
      actionType: AppConstants.LIKE_ITEM,
      itemId
    });
  },

  unlikeItem(itemId) {
    dispatch({
      actionType: AppConstants.UNLIKE_ITEM,
      itemId
    });
  }
};
