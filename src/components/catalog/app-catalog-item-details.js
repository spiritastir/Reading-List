import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Card, { CardActions, CardContent, CardHeader, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List';
import FavoriteButton from './app-favorite-button';

function getCatalogItem(props) {
  const catalog = AppStore.getCatalog();
  const itemId = props.match.params.itemId;
  const currentItem = catalog.find(item => (
    item.book_id == itemId
  ));
  const other = catalog.filter(item => (
    (item.book_id != itemId) && (item.author == currentItem.author)
  ));
  return {
    item: currentItem,
    other,
  };
}

const CatalogDetail = (props) => {

  const itemInfo = (
    <Fragment>
      <div>by <b>{ props.item.author }</b></div>
      <div>ISBN <b>{ props.item.isbn }</b></div>
      <div>date <b>{ props.item.published_at }</b></div>
    </Fragment>
  );

  let other;
  if (props.other.length) {
    other = (
      <Grid item xs={12} md={4}>
        <Card>
          <CardHeader
            title={`Other by ${ props.item.author }:`}/>
          <CardContent>
            <List>
              { props.other.map(item => (
                <ListItem key={ item.book_id }>
                  <ListItemText>
                    <Link to={`/item/${ item.book_id }`}>{ item.name }</Link>
                  </ListItemText>
                </ListItem>
              )) }
            </List>
          </CardContent>
        </Card>
      </Grid>
    );
  }

  return (
    <Grid container spacing={16}>

      <Grid item xs={12}>
        <Paper style={{ padding: '16px 24px' }}>
          <Typography>
            <Link to='/'>Back to list</Link>
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={8}>
        <Card>
          <CardHeader
            title={ props.item.name }
            subheader={ itemInfo } />
          <CardMedia
            src={ props.item.cover }
            align="center">
            <img src={ props.item.cover } title={ props.item.name } />
          </CardMedia>
          <CardActions>
            <FavoriteButton item={ props.item } />
          </CardActions>
        </Card>
      </Grid>

      { other }

    </Grid>
  );
};

export default StoreWatchMixin(CatalogDetail, getCatalogItem);
