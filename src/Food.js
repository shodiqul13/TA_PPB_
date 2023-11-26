import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import axios from "axios";

const Foods = ({ }) => {
    const [foodData, setFoodData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.genshin.dev/consumables/food`);
                console.log(response.data);
                setFoodData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    if (!foodData) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    const renderStars = (maxRarity) => {
        let stars = '';
        for (let i = 0; i < maxRarity; i++) {
            stars += '⭐';
        }
        return stars;
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
            <Text style={styles.Title}>Genshin Impact Foods</Text>
                {Object.keys(foodData).map((key) => (
                    <View style={styles.box} key={key}>
                        <Text style={styles.title}>{foodData[key].name}</Text>
                        <Text style={styles.text}>Rarity: {renderStars(foodData[key].rarity)}</Text>
                        <Text style={styles.text}>Type: {foodData[key].type}</Text>
                        <Text style={styles.text}>Effect: {foodData[key].effect}</Text>
                        <Text style={styles.text}>Description: {foodData[key].description}</Text>
                        <Text style={styles.text}>Proficiency: {foodData[key].proficiency}</Text>
                        
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    Title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 20,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 20,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "left",
        backgroundColor: "#fff",
        padding: 25,
    },
    box: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 20,
        marginBottom: 10,
    },
    box2: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,

    },
    label: {
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 5,
        textAlign: "left",
    },
    text: {
        fontSize: 16,
        textAlign: "left",
        marginBottom: 10,
    },
});

export default Foods;
