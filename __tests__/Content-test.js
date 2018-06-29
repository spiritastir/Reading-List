import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import AppHeader from "../src/components/header/app-header";

jest.mock('material-ui/AppBar');
jest.mock('material-ui/Toolbar');
jest.mock('material-ui/Typography');

test('<AppHeader>', () => {
  const app = ReactTestUtils.renderIntoDocument(
    <AppHeader>Title</AppHeader>
  );
  const appNode = ReactDOM.findDOMNode(app);
  expect(appNode).toEqual('Title');
});
