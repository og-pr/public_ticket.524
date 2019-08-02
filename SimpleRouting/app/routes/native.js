import React from "react";
import { Text } from "react-native"; 
import * as MOBILE from '../styles/native.js';
import * as CONSTANTS from '../common/constants.js';

// include reference to page/link content
export const MOBILE_ABOUT = () => {
	return ( 
		<Text style={MOBILE.Styles.blockText}>{CONSTANTS.PAGE_2_TITLE} {'\n\n'}
		<Text style={MOBILE.Styles.blockText}>{CONSTANTS.PAGE_HEADLINE} {'\n\n'}
		<Text style={MOBILE.Styles.blockText}>{CONSTANTS.PLACEHOLDER_PAGE_2} {'\n\n'}
		</Text>
		</Text>
		</Text>
	);
}

export const MOBILE_HOME = () => {
	return ( 
		<Text style={MOBILE.Styles.blockText}>{CONSTANTS.PAGE_1_TITLE} {'\n\n'}
		<Text style={MOBILE.Styles.blockText}>{CONSTANTS.PAGE_HEADLINE} {'\n\n'}
		<Text style={MOBILE.Styles.blockText}>{CONSTANTS.PLACEHOLDER_PAGE_1} {'\n\n'}
		</Text>
		</Text>
		</Text>
	)
}

// og.note: mechanism for missing routes not coded. left as exercise to repo user
/* 
export const MOBILE_NOT_FOUND = () => {
	return ( 
		<Text style={MOBILE.Styles.blockText}>{CONSTANTS.NOT_FOUND}</Text>
	);
}
*/