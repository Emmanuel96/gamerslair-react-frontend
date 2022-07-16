import { StyleSheet} from 'react-native';

export const baseStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
    },
    contentContainer: {
        paddingBottom: 200,
    },
    customColor:{
        color:'rgba(71, 66, 66, 1)',
    },
    h4:{
        fontSize:25,
        fontWeight:'bold',
    },
    h5:{
        color:'rgba(71, 66, 66, 1)',
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
    // shadowProp:{
    //     shadowColor:'#171717',
    //     shadowOffset:{width: 0, height: 5},
    //     shadowOpacity:0.4,
    //     shadowRadius:4,

    //     elevation: 20,
    // },
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
    textShadowProp:{
        textShadowColor:'rgba(0,0,0,0.3)',
        textShadowOffset:{width:0, height:3},
        textShadowRadius:4,
    },
    dp:{
        width:40,
        height:40,
        borderRadius:50,
    },
    blank:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    
})