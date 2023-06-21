import React, {useState, useEffect, useContext} from "react";
import {View, Text, StyleSheet, ScrollView, Image, FlatList, Button, TextInput, TouchableHighlight} from "react-native";
import yelp from "../api/yelp";
import { Ionicons } from '@expo/vector-icons';
import AddReviewScreen from "./AddReviewScreen";

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

interface Review {
    id: string;
    title: string;
    review: string;
}


const SingleResultScreen = ({navigation}: {navigation: any}) => {
    const id = navigation.getParam("id")
    const [result, setResult] = useState<YelpData | null>(null);
    const [addReview, setAddReview] = useState<boolean>(false);

    const getResult = async (id: string) =>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

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


    return (
        <View style={{backgroundColor: '#F4F4FB', flex:1}}>
            <View style={styles.container}>
                    <Text style = {styles.name}>{result.name}</Text>

                <Text style ={styles.rating}>{result.rating} Stars, {result.review_count} Reviews</Text>
                <Text style ={styles.price}>{result.price} - {category}</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#e4e4fc', padding: 20, borderRadius: 4}}>
                        {result.photos.map((item, index) => (
                            <Image key={index} source={{ uri: item }} style={{ width: 200, height: 150 , marginRight: 5, borderRadius: 4}} />
                        ))}
                    </View>
                </ScrollView>
                <Text style ={styles.location}>{result.location.city} - {result.location.display_address}</Text>
                <Text style ={styles.phone}> {result.display_phone}</Text>
                <Text style ={{marginTop: 6}}> {result.transactions.join(' - ')}</Text>
            </View>
            <TouchableHighlight onPress={() => setAddReview(true)} style={{
                alignSelf: 'flex-end',
                backgroundColor: '#e4e4fc',
                padding: 10,
                borderRadius: 4,
                marginBottom: 10,
                marginTop: 10,
                marginRight: 10,
                width: 100,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row'
            }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons name="ios-add" size={24} color="black" />
                    <Text>Add Review</Text>
                </View>
            </TouchableHighlight>
            {addReview && <AddReviewScreen id={id} setAddReview = {setAddReview}/>}
        </View>
    );
}

export default SingleResultScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "column",
    },
    name: {
        fontWeight: "bold",
        marginBottom: 6,
        marginTop: 24,
        fontSize: 18,
    },
    rating: {
        marginBottom: 6,
        fontSize: 16,
        fontWeight: '600',
    },
    price: {
        marginTop: 2,
        marginBottom: 10,
        fontSize: 14,
        fontWeight: '500',
    },
    imageContainer: {
        height: 200,
        width: 300,
    },
    location: {
        marginTop: 8,
        fontSize: 16,
        marginLeft: 10,
        marginRight: 10,
        alignSelf: 'center',
    },
    phone: {
        color: 'blue',
        marginTop: 6,
        textDecorationLine: 'underline',
    }
});

