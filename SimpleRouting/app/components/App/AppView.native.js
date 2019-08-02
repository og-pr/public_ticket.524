import React from "react";
import { Text, View } from "react-native"; 
import { Router, Route, Link } from "./router-native"; // route mechanism

import * as CONSTANTS from '../../common/constants.js';
import * as ROUTES from '../../routes/native.js';
import * as MOBILE from '../../styles/native.js';

// og.note: technical debt = mechanism for missing route not coded. left as excercise for other developers.
const App = () => (
  <Router>
    <View style={MOBILE.Styles.container}>
      <View style={MOBILE.Styles.blockNav}>
        <Link to="/"><Text style={MOBILE.Styles.blockNav}>{CONSTANTS.PAGE_1_LINK}</Text></Link>
        <Link to="/about"><Text style={MOBILE.Styles.blockNav}>{CONSTANTS.PAGE_2_LINK}</Text></Link>
      </View>

      <Route exact path="/" component={ROUTES.MOBILE_HOME} />
      <Route path="/about" component={ROUTES.MOBILE_ABOUT} />
    </View>
  </Router>
);

export default App;
