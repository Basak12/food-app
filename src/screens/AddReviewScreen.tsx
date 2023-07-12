import React, {useContext, useState} from "react";
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback} from "react-native";
import {ReviewContext} from "../context/ReviewContext";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const AddReviewScreen = ({ id, setAddReview }: { id: string, setAddReview: any }) => {
    const { handleReview, reviews} = useContext(ReviewContext);
    const [formData, setFormData] = useState({ title: '', content: '' , rating: ''});

    const handleInputChange = (field: any, value: any) => {
        setFormData({ ...formData, [field]: value });
    };

    const submitReview = () => {
        handleReview(id, formData.title, formData.content, formData.rating );
        setAddReview(false);
    }

    return (
        <View style={{backgroundColor: '#F4F4FB'}}>
        <View style={styles.input}>
                <Text style={styles.label}>Enter Title</Text>
                <TextInput
                    style = {styles.textFields}
                    value={formData.title}
                    onChangeText={(text) => handleInputChange('title', text)}
                />
            </View>
            <View style={styles.input}>
                <Text style={styles.label}>Enter Content</Text>
                <TextInput
                    style = {styles.textFields}
                    value={formData.content}
                    onChangeText={(text) => handleInputChange('content', text)}
                />
            </View>
            <View style={styles.input}>
                <Text style={styles.label} >Enter Rating </Text>
                <TextInput
                    style = {styles.textFields}
                    value={formData.rating}
                    onChangeText={(text) => handleInputChange('rating', text)}
                />
            </View>
            <TouchableOpacity onPress={submitReview} style={styles.submit}>
                <Text style={{ fontWeight: '500', fontSize: 16 }}>Save Review</Text>
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
        flex:1,
    },
    input: {
        height: 40,
        marginTop: 12,
        marginBottom: 12,
    },
    textFields: {
        height: 40,
        borderColor: '#e4e4fc',
        borderWidth: 2,
        borderRadius: 4,
        marginBottom: 12,
    },
    label: {
        fontWeight: "500",
        fontSize: 16,
    },
    submit: {
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
    }
});