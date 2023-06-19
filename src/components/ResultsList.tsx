import React from "react";
import {View, Text, StyleSheet, FlatList, Image} from "react-native";

const ResultsList = ({title, results} : {title: string, results: any}) => {

    return(
        <View>
            <Text style={styles.title}> {title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result: any) => result.id} //keyExtractor is a function that takes in an object and returns a string that is unique and that can be used as a key.
                renderItem={({item}) => {
                    return (
                        <View style={styles.container}>
                        <Image source={{uri: item.image_url}} style={{width: 250, height: 150, borderRadius: 4}}/>
                         <Text style={styles.name}>{item.name}</Text>
                         <Text >{item.rating} Stars {item.review_count} Reviews</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default ResultsList;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 10,
    },
    container: {
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 5,
    },
    name: {
        fontWeight: "bold",
    }
});

