import { StyleSheet} from 'react-native';

export const baseStyles = StyleSheet.create({
    h4:{
        fontSize:25,
        fontWeight:'bold',
    },
    h5:{
        fontSize:20,
        fontWeight:'bold',
    },
    h6:{
        fontSize:15,
        fontWeight:'bold',
    },
    bold:{
        fontWeight:'bold',
    },
    shadowProp:{
        backgroundColor: '#fff',
        shadowColor:'#171717',
        shadowOffset:{width: 0, height: 5},
        shadowOpacity:0.4,
        shadowRadius:4,

        elevation: 20,
    },
    dp:{
        width:40,
        height:40,
        borderRadius:50,
    },
    
})