import React from 'react';
import AppStore from '../stores/app-store.js';

/*
 * A mixin to create a new React component and connect it to stores
 */
export default (InnerComponent, stateCallback) => (
  class extends React.Component {

    constructor(props) {
      super(props);
      this.state = stateCallback(props);
      this._onChange = this._onChange.bind(this);
    }

    componentWillMount() {
      AppStore.addChangeListener(this._onChange);
    }

    componentDidUpdate(oldProps) {
      if (this.props.match.params.itemId !== oldProps.match.params.itemId) {
        // Update component state on item change (other list)
        AppStore.emitChange();
      }
    }

    componentWillUnmount() {
      AppStore.removeChangeListener(this._onChange);
    }

    _onChange() {
      this.setState(stateCallback(this.props));
    }

    render() {
      return (
        <InnerComponent {...this.state} {...this.props} />
      );
    }
  }
);
