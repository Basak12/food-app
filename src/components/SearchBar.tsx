import React from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

type SearchBarProps = {
    term: string;
    onTermChange: (newTerm: string) => void;
    onTermSubmit: () => void;
};

const SearchBar = ({term, onTermChange, onTermSubmit}: SearchBarProps) => {
    return (
        <View style={styles.background}>
            <Ionicons style = {styles.iconStyle} name="search" color="black" />
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
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
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