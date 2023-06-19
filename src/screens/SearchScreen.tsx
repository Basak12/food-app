import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState<string>('');
    const [searchApi, result, errorMessage] = useResults({term});

    const filterResultsByPrice = (price: string) => {
        return result.filter((result: any) => {
            return result.price === price;
        });
    }

    return (
        <View>
        <SearchBar term = {term} onTermChange = {setTerm} onTermSubmit = {() => searchApi({searchTerm: term})}/>
             {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {term} results</Text>
            <ResultsList results ={filterResultsByPrice('$')} title = 'Cost Effective'/>
            <ResultsList results ={filterResultsByPrice('$$')} title = 'Bit Pricer'/>
            <ResultsList results ={filterResultsByPrice('$$$')} title = 'Big Spender' />
        </View>
    );
}

export default SearchScreen;

