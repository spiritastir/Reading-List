import React from 'react';
import AppActions from '../../actions/app-actions';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui-icons/Favorite';

const FavoriteButton = (props) => {
  return (
    <IconButton
      onClick={AppActions[ props.item.favorite ? 'unlikeItem' : 'likeItem' ].bind(null, props.item.book_id)}>
      <FavoriteIcon color={ props.item.favorite ? 'error' : 'disabled' }/>
    </IconButton>
  );
};

export default FavoriteButton;