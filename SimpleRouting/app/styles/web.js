// note: web-styles should be similar to native-styles
// note: there is minimal css @ app/web/css/styles.css for #root + body ; everything else is below
// note: NOT creating 1 object to contain all styles ; less typing but more cognitive load (since no reference)
export const container = {
    backgroundColor: 'white',
    marginTop: 20,
}

export const blockNav = {
    marginTop: 20,
    fontWeight: 'bold',
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-around'
}

export const blockText = {
    padding: 20,
    alignItems: 'center', 
    justifyContent: 'center'
}
