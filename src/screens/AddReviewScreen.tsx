import React, {useContext, useState} from "react";
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity} from "react-native";
import {ReviewContext} from "../context/ReviewContext";

const AddReviewScreen = ({ id, setAddReview }: { id: string, setAddReview: any }) => {
    const { handleReview, reviews} = useContext(ReviewContext);
    const [formData, setFormData] = useState({ title: '', content: '' });


    const handleInputChange = (field: any, value: any) => {
        setFormData({ ...formData, [field]: value });
    };

    const submitReview = () => {
        handleReview(id, formData.title, formData.content);
        console.log(reviews);
        setAddReview(false);
    }

    //filter the reviews array to only show the reviews for the current restaurant. Filter by id

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Title"
                value={formData.title}
                onChangeText={(text) => handleInputChange('title', text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Content"
                value={formData.content}
                onChangeText={(text) => handleInputChange('content', text)}
            />
            <TouchableOpacity onPress={submitReview} style={{
                alignSelf: 'flex-start',
                backgroundColor: '#e4e4fc',
                padding: 10,
                borderRadius: 4,
                marginBottom: 10,
                marginTop: 10,
                width: 100,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row'
            }}>
                <Text>Save Review</Text>
            </TouchableOpacity>
        </View>
    );
}
export default AddReviewScreen;

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "column",
    },
    input: {
        height: 40,
        marginTop: 12,
        borderWidth: 1,
        borderColor: '#8e8ef2',
    }
});