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
            <View style={styles.input}>
                <Text>Enter Title</Text>
                <TextInput
                    style = {{height: 40 , borderColor: 'gray', borderWidth: 1, borderRadius: 4}}
                    value={formData.title}
                    onChangeText={(text) => handleInputChange('title', text)}
                />
            </View>
            <View style={styles.input}>
                <Text>Enter Content</Text>
                <TextInput
                    style = {{height: 40 , borderColor: 'gray', borderWidth: 1, borderRadius: 4}}
                    value={formData.content}
                    onChangeText={(text) => handleInputChange('content', text)}
                />
            </View>
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
        marginBottom: 12,
    }
});