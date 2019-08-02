import React from "react"; 
import * as STYLES from '../styles/web.js';
import * as CONSTANTS from '../common/constants.js';

// include reference to page/link content
export const WEB_HOME = () => <div style={STYLES.blockText}>{CONSTANTS.PAGE_1_TITLE}<p/>{CONSTANTS.PAGE_HEADLINE}<p/>{CONSTANTS.PLACEHOLDER_PAGE_1}</div>;
export const WEB_ABOUT = () => <div style={STYLES.blockText}>{CONSTANTS.PAGE_2_TITLE}<p/>{CONSTANTS.PAGE_HEADLINE}<p/>{CONSTANTS.PLACEHOLDER_PAGE_2}</div>;
//export const WEB_NOT_FOUND = () => <div style={STYLES.blockText}>{CONSTANTS.NOT_FOUND}<p/></div>; // og.note: technical debt = mechanism for missing route not coded. left as excercise for other developers.
