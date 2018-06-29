import React from 'react';
import { Link } from 'react-router-dom';
import Card, { CardActions, CardHeader, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography'
import FavoriteButton from './app-favorite-button';

const CatalogItem = (props) => {
  return (
    <Card>
      <CardHeader
        title={ props.item.name }
        subheader={ props.item.author } />
      <CardMedia
        style={{ position: 'relative', height: '150px', overflow: 'hidden' }}
        src={ props.item.cover }>
        <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: `url(${props.item.cover})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(3px)', zIndex:1 }} />
        <img style={{ position: 'absolute', height: '100%', left: '50%', transform: 'translate(-50%, 0)', zIndex: 2 }} src={ props.item.cover } title={ props.item.name } />
      </CardMedia>
      <CardActions>
        <Typography>
          <FavoriteButton item={ props.item } />
          <Link to={ `/item/${ props.item.book_id }` }>More information</Link>
        </Typography>
      </CardActions>
    </Card>
  );
};

export default CatalogItem;
