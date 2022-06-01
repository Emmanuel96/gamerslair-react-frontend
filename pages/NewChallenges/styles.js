import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'flex-start',
    },
    contentContainer: {
      paddingBottom: 400,
    },
    // view details button
    view_button:{
      alignSelf:'center',
    },
    // details
    details:{
      paddingHorizontal:'5%',
      marginTop:8,
      marginBottom:50,
    },
    detailsText:{
      fontSize:21,
      marginTop:10,
    },
    buttonGroup:{
      alignSelf:'center',
      flexDirection:'row',
      alignItems:'center',
      marginBottom:15,
    },
    buttons:{
      marginHorizontal:20,
    },
    blank:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
})