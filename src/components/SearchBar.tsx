import React from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


const SearchBar = ({term, onTermChange, onTermSubmit}: {term: string, onTermChange: any, onTermSubmit: any}) => {
    return (
        <View style={styles.background}>
            <Ionicons style = {styles.iconStyle} name="search" color="#5e69ee" />
            <TextInput style = {styles.inputStyle}
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='Search'
              value={term}
              onChangeText={onTermChange}
              onEndEditing={onTermSubmit}
            />
        </View>
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#F4F4FB",
        height: 50,
        borderColor: '#a9aff6',
        borderWidth: 2,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
    },
    inputStyle: {
        flex: 1
    },
    iconStyle: {
        fontSize: 24,
        alignSelf: "center",
        marginHorizontal: 15
    }
});