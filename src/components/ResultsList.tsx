import React from "react";
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from "react-native";

const ResultsList = ({title, results, navigation, amount} : {title: string, results: any, navigation: any, amount: number}) => {
    if (!results.length){
        return null;
    }

    return(
        <View>
            <Text style={styles.title}> {title} - {amount} Restaurants </Text>
            <FlatList
                horizontal
                showsVerticalScrollIndicator={false}
                data={results}
                keyExtractor={(result: any) => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("SingleResults", {id: item.id})}>
                        <View style={styles.container}>
                        <Image source={{uri: item.image_url}} style={{width: 250, height: 200, borderRadius: 4}}/>
                         <Text style={styles.name}>{item.name}</Text>
                         <Text >{item.rating} Stars {item.review_count} Reviews</Text>
                        </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default ResultsList;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15,
        marginTop: 10,
    },
    container: {
        marginLeft: 15,
        marginBottom: 5,
        marginTop: 5,
    },
    name: {
        fontWeight: "bold",
    }
});

