import React, {useContext, useEffect, useState} from "react";
import {View, Text, StyleSheet, TextInput, Button, ScrollView} from "react-native";
import {ReviewContext} from "../context/ReviewContext";

const ReviewsList = ({id}: {id:string}) => {
    const {filterReviewsById, filteredReviews} = useContext(ReviewContext);

    useEffect(() => {
        filterReviewsById(id);
    }, [id]);

    return (
        <View>

        {filteredReviews.length == 0 ? <Text style={{fontWeight: '500', fontSize: 18, marginLeft: 10}}>No reviews yet</Text> : <View style={{
            marginLeft: 10,
            marginRight: 10,
        }}>
            <View>
                <ScrollView>
                {filteredReviews.map((review: any) => {
                    return (
                        <View key = {review.content} style={{marginBottom: 10, padding: 10,
                            backgroundColor: '#e8e8f8',
                            borderRadius: 8}}>
                            <Text style={styles.title}>{review.title}</Text>
                            <Text style={styles.content}>{review.content}</Text>
                            <Text style={styles.rating}>{review.rating}/5</Text>
                        </View>
                    );
                })}
                </ScrollView>
            </View>
        </View>}
        </View>
    );
}

export default ReviewsList;
const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    content: {
        marginTop: 6,
        fontSize: 18,
    },
    rating: {
        fontSize: 18,
    }
});


/*
'#e4e4fc'
 */