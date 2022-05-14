import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';  //https://www.npmjs.com/package/react-native-dropdown-picker
import {StyleSheet} from 'react-native';

import { baseStyles } from '../style';

export default function Dropdown(props) {
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
    ]);
    
    return(
        <DropDownPicker
            placeholder={props.placeholder}
            zIndex={props.zIndex}   //The zIndex and zIndexInverse props are necessary to avoid dropdowns overlapping when they are more than one on a page.
            zIndexInverse={props.zIndexInverse}
            open={props.open}
            onOpen={props.onOpen}
            value={value}
            items={items}
            setOpen={props.setOpen}
            setValue={setValue}
            setItems={setItems}
            style={[baseStyles.shadowProp, styles.dropDown, props.style]}
            dropDownContainerStyle={[baseStyles.shadowProp, styles.dropDownContainerStyle]}
        />
    );
}

const styles = StyleSheet.create({
    dropDown:{
        borderWidth: 0,
    },
    dropDownContainerStyle:{
    }
})