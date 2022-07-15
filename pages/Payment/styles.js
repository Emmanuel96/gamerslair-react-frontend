import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body:{
        paddingHorizontal: 30,
        paddingVertical: '5%',
    },
    shadowProp: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    back_arrow_wrapper:{
        alignSelf: 'flex-end',
        marginBottom:10,
    },
    form:{
        marginTop: 20,
    },
    input_group:{
      marginBottom: '10%',  
    },
    label:{
        color:'#787879',
        marginBottom:6,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 5,
        height: 50,
        paddingLeft: 15,
    },
    input_half_length_container:{
        flexDirection:'row',
    },
    input_half_length:{
        width:'50%'
    },
    proceed_button:{
        alignSelf: 'center',
        paddingHorizontal: 70,
        marginTop:25
    },
    button_icon:{
        width:15,
        height:15,
    }

})