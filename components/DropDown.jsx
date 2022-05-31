import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {StyleSheet} from 'react-native';
import { Controller } from "react-hook-form";

import { baseStyles } from '../style';

export default function Dropdown(props) {
    // const [value, setValue] = useState(null);
    
    
    return(
        <Controller
            control={props.control}
            name={props.name}
            rules={props.rule}
            render={({ field: {value, onChange, onBlur} }) => (
                <DropDownPicker
                    onBlur={onBlur}
                    onChangeValue={onChange}
                    secureTextEntry={props.secureTextEntry}
                    placeholder={props.placeholder}
                    value={value}

                    setValue={onChange}
                    zIndex={props.zIndex}   //The zIndex and zIndexInverse props are necessary to avoid dropdowns overlapping when they are more than one on a page.
                    zIndexInverse={props.zIndexInverse}
                    open={props.open}
                    onOpen={props.onOpen}
                    items={props.items}
                    setOpen={props.setOpen}
                    setItems={props.setItems}
                    style={[baseStyles.shadowProp, styles.dropDown, props.style]}
                    dropDownContainerStyle={[baseStyles.shadowProp, styles.dropDownContainerStyle]}
                />
            )}      
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