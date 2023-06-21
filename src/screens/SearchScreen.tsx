import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = ({navigation} : {navigation: any}) => {
    const [term, setTerm] = useState<string>('');
    const [searchApi, result, errorMessage] = useResults();

    const filterResultsByPrice = (price: string) => {
        return result.filter((result: any) => {
            return result.price === price;
        });
    }

    return (
        <View
            style={{
            flex: 1,
            backgroundColor: '#F4F4FB'

        }}>
            <SearchBar
                term={term}
                onTermChange={(newTerm: string) => setTerm(newTerm)}
                onTermSubmit={() => searchApi({term})}
            />
                {errorMessage ? <Text style={styles.messages}>{errorMessage}</Text> : null}
            <ScrollView style={{marginBottom: 24}}>
                <ResultsList results={filterResultsByPrice("$")} amount={filterResultsByPrice("$").length} title="Cost Effective" navigation = {navigation} />
                <ResultsList results={filterResultsByPrice("$$")} amount={filterResultsByPrice("$$").length} title="Bit Pricer" navigation = {navigation}/>
                <ResultsList results={filterResultsByPrice("$$$")} amount={filterResultsByPrice("$$$").length} title="Big Spender" navigation = {navigation}/>
            </ScrollView>
        </View>
    );
}

export default SearchScreen;

const styles = StyleSheet.create({
    messages: {
        fontSize: 16,
        marginLeft: 15,
        marginTop: 10,
    }
});

