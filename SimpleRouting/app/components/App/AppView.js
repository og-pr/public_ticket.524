import React from "react";
import ReactDOM from 'react-dom';

import { Router, Route, Link } from "./router-web"; // route mechanism
import * as ROUTES from '../../routes/web.js'; 
import * as STYLES from '../../styles/web.js'; 
import * as CONSTANTS from '../../common/constants.js';

// og.note: mechanism for missing routes not coded. left as exercise to repo user
const App = () => (
  <Router>
    <div style={STYLES.container}>
    <div style={STYLES.blockNav}>
        <Link to="/" style={STYLES.blockNav}>{CONSTANTS.PAGE_1_LINK}</Link> 
        <Link to="/about" style={STYLES.blockNav}>{CONSTANTS.PAGE_2_LINK}</Link>
      </div>

      <Route exact path="/" component={ROUTES.WEB_HOME} />
      <Route path="/about" component={ROUTES.WEB_ABOUT} />
    </div>
  </Router>
);

ReactDOM.render( <App />, document.getElementById('root') );
