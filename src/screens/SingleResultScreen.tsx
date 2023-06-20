import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, ScrollView, Image, FlatList} from "react-native";
import yelp from "../api/yelp";


interface YelpData {
    alias: string;
    categories: { alias: string; title: string }[];
    coordinates: { latitude: number; longitude: number };
    display_phone: string;
    hours: { hours_type: string; is_open_now: boolean; open: any[] }[];
    id: string;
    image_url: string;
    is_claimed: boolean;
    is_closed: boolean;
    location: {
        address1: string;
        address2: string;
        address3: string;
        city: string;
        country: string;
        cross_streets: string;
        display_address: string[];
        state: string;
        zip_code: string;
    };
    name: string;
    phone: string;
    photos: string[];
    price: string;
    rating: number;
    review_count: number;
    transactions: string[];
    url: string;
}

const SingleResultScreen = ({navigation}: {navigation: any}) => {
    const id = navigation.getParam("id")
    const [result, setResult] = useState<YelpData | null>(null);
    const getResult = async (id: string) =>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, [])

    if(!result){
        return null;
    }

    let category = null;
    if(result.price === "$"){
        category = <Text>Cost Effective</Text>
    }
    else if(result.price === "$$"){
        category = <Text>Bit Pricer</Text>
    }
    else if(result.price === "$$$"){
        category = <Text>Big Spender</Text>
    }

    console.log(result.price)

    return (
        <View style={styles.container}>
           <Text style = {styles.name}>{result.name}</Text>
            <Text style ={styles.rating}>{result.rating} Stars, {result.review_count} Reviews</Text>
            <Text style ={styles.price}>{result.price} - {category}</Text>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                    <View style={{ flexDirection: 'row' , alignItems: 'stretch'}}>
                        {result.photos.map((item, index) => (
                            <Image key={index} source={{ uri: item }} style={{ width: 200, height: 150 , marginLeft: 5, marginRight: 5}} />
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default SingleResultScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "column",
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
    },
    name: {
        fontWeight: "bold",
        marginBottom: 5,
        fontSize: 28,
    },
    rating: {
        marginBottom: 5,
        fontSize: 18,
        fontWeight: '600',
    },
    price: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: '500',
    },
    imageContainer: {
        height: 200,
        width: 300,
    }
});

