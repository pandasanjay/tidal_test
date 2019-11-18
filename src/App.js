import React from "react";
import { connect } from "react-redux";
import "./App.scss";
import Column from "./components/layouts/Column/Column";
import Grid from "./components/layouts/Grid/Grid";
import Row from "./components/layouts/Row/Row";
import SearchBar from "./container/SearchBar/SearchBar";
import AlbumList from "./container/AlbumList/AlbumList";

import mapDispatchToProps from "./redux/actions";
const mapStateToProps = state => ({
  ...state
});

function App(props) {
  return (
    <Grid>
      <Row>
        <Column>
          {" "}
          <SearchBar {...props} />{" "}
        </Column>
        <Column>
          {" "}
          {props.appReducer.albums ? <AlbumList {...props} /> : <></>}{" "}
        </Column>
      </Row>
    </Grid>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
