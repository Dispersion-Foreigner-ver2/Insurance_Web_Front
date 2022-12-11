import React from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";


const CustomTextInput = ({title, onchangeText, placeholder, keyboardType, value, pw}) => {
    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text>{title}</Text>
            </View>
            <TextInput onChangeText={val => onchangeText(val)}
                       placeholder={placeholder}
                       keyboardType={keyboardType}
                       style={styles.textInput}
                       value={value}
                       secureTextEntry={pw}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 65,
        position: 'relative',
        margin: 5,
    },
    labelContainer: {
        position: 'absolute',
        backgroundColor: '#FFF',
        top: -8,
        left: 25,
        padding: 5,
        zIndex: 50,
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "steel",
        justifyContent: 'flex-end',
        height: 44,
        borderRadius: 65,
        paddingHorizontal: 25,


    }
});

CustomTextInput.defaultProps = {
    keyboardType: "default",
};

export default CustomTextInput;
