import React from 'react';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import Grid from 'material-ui/Grid';
import CatalogItem from './app-catalog-item';

function getCatalog() {
  return {
    items: AppStore.getCatalog()
  };
}

const Catalog = (props) => {
  const items = props.items.map(item => (
    <Grid item xs={12} md={6} lg={4} key={ item.book_id }>
      <CatalogItem item={ item } />
    </Grid>
  ));
  return (
    <Grid container spacing={16}>
      { items }
    </Grid>
  );
};

export default StoreWatchMixin(Catalog, getCatalog);
