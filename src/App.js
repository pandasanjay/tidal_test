import React from "react";
import "./App.scss";
import Column from "./components/layouts/Column/Column";
import Grid from "./components/layouts/Grid/Grid";
import Row from "./components/layouts/Row/Row";
import SearchBar from "./container/SearchBar/SearchBar";
import Albums from "./container/Albums/Albums";

function App() {
  return (
    <Grid>
      <Row>
        <Column>
          <SearchBar />
        </Column>
      </Row>
      <Row>
        <Column>
          <Albums />
        </Column>
      </Row>
    </Grid>
  );
}

export default App;
