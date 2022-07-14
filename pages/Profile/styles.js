import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    user_game_details_box_outer:{
        backgroundColor:'#D9D9D9',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginHorizontal: '4%',
        marginVertical: '10%',
        borderRadius: 7,
    },
    user_game_details_box_inner:{
        backgroundColor:'#fff',
        paddingHorizontal: 15,
        paddingVertical: 17,
    },
    list_item:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomColor:'#D9D9D9',
        borderBottomWidth: .5,
        paddingVertical: 5,
        marginBottom: 13,
    },
    user_account_ballance_box_outer:{
        backgroundColor:'#F2F1F6',
        paddingHorizontal: 6,
        paddingVertical: 7,
        marginHorizontal: '4%',
        marginVertical: '7%',
        borderRadius: 7,
        borderColor:"#D9D9D9",
        borderWidth: 1,
    },
    user_account_ballance_box_inner:{
        backgroundColor:'#D9D9D9',
        paddingHorizontal: 15,
        paddingVertical: 25,
        borderRadius: 7,
    },
    account_list_item:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomColor:'#97979D',
        borderBottomWidth: 1,
        paddingVertical: 5,
        marginBottom: 25,
        marginTop: 10,
    },
    account_list_item_left:{
        fontWeight: "800"
    },
    account_list_item_right:{
        fontWeight: "800"
    },
    fund_button:{
        alignSelf: 'center',
        paddingHorizontal: 50,
    },
    button_icon:{
        width:20,
        height:20,
    }
})