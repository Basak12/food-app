import React, {useContext, useEffect, useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity
} from "react-native";
import {ReviewContext} from "../context/ReviewContext";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ReviewsList = ({id}: {id:string}) => {
    const {filterReviewsById, filteredReviews, } = useContext(ReviewContext);

    useEffect(() => {
        filterReviewsById(id);
    }, [id]);

    return (
        <View>
        {filteredReviews.length == 0 ? <Text style={{fontWeight: '500', fontSize: 18, marginLeft: 10}}>No comments yet</Text> : <View style={{
            marginLeft: 10,
            marginRight: 10,
        }}>
            <View>
                {filteredReviews.map((review: any) => {
                    return (
                        <View key = {review.content} style={{marginBottom: 10, padding: 10,
                            backgroundColor: '#eaeaf6',
                            borderRadius: 8}}>
                            <View style = {{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
                                <Text style={styles.title}>{review.title}</Text>
                                <TouchableOpacity>
                                <MaterialCommunityIcons name="delete" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.content}>{review.content}</Text>
                            <Text style={styles.rating}>{review.rating}/5</Text>
                        </View>
                    );
                })}
            </View>
        </View>}
        </View>
    );
}

export default ReviewsList;
const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    content: {
        marginTop: 2,
        fontSize: 18,
    },
    rating: {
        fontSize: 16,
    }
});
