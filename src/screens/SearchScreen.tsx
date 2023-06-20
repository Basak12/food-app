import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = ({navigation} : {navigation: any}) => {
    const [term, setTerm] = useState<string>('');
    const [searchApi, result, errorMessage] = useResults({term});

    const filterResultsByPrice = (price: string) => {
        return result.filter((result: any) => {
            return result.price === price;
        });
    }

    const handleSearch = () => {
        searchApi({ searchTerm: term });
    };

    return (
        <View
            style={{
            flex: 1,
            backgroundColor: '#F4F4FB'

        }}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={handleSearch}
            />
                {errorMessage ? <Text style={styles.messages}>{errorMessage}</Text> : null}
                {result ? <Text style={styles.messages}> {result.length} results have found</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultsByPrice("$")} title="Cost Effective" navigation = {navigation} />
                <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricer" navigation = {navigation}/>
                <ResultsList results={filterResultsByPrice("$$$")} title="Big Spender" navigation = {navigation}/>
            </ScrollView>
        </View>
    );
}

export default SearchScreen;

const styles = StyleSheet.create({
    messages: {
        fontSize: 16,
        marginLeft: 10,
        marginTop: 10,
    }
});

