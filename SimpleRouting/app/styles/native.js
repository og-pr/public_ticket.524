// note: web-styles should be similar to native-styles
// note: android entire background color changed to white (not needed for ios) @ root/android/app/src/main/res/values/colors.xml
import { Platform, StyleSheet, Text, View } from "react-native";

// creating 1 object (Styles) to contain all styles
export const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: Platform.OS === 'ios' ? 70 : 20,
    padding: 10,
  },
  blockNav:{
    fontWeight: 'bold',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  blockText:{
    padding: 20,
    display: 'flex', 
  }
});

export default Styles;
