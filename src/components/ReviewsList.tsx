import React, {useContext, useEffect, useState} from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native";
import {ReviewContext} from "../context/ReviewContext";

const ReviewsList = ({id}: {id:string}) => {
    const {filterReviewsById, filteredReviews} = useContext(ReviewContext);

    useEffect(() => {
        filterReviewsById(id);
    }, [id]);

    console.log(filteredReviews);

    return (
        <View style={styles.container}>
            {filteredReviews.map((review: any) => {
                return (
                    <View key={review.id}>
                        <Text>{review.title}</Text>
                        <Text>{review.content}</Text>
                    </View>
                );
            })}
        </View>
    );
}

export default ReviewsList;

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        alignItems: 'center',
    }
});