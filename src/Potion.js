import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import axios from "axios";

const Potions = ({ }) => {
    const [potionData, setPotionData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.genshin.dev/consumables/potions`);
                console.log(response.data);
                setPotionData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    if (!potionData) {
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
            <Text style={styles.Title}>Genshin Impact Potions</Text>
            {Object.keys(potionData).map((key) => (
                    <View style={styles.box} key={key}>
                        <Text style={styles.title}>{potionData[key].name}</Text>
                        <Text style={styles.text}>Rarity: {renderStars(potionData[key].rarity)}</Text>
                        <Text style={styles.text}>Effect: {potionData[key].effect}</Text>
                        <Text style={styles.text}>Crafting:</Text>
                        {potionData[key].crafting.map((item, index) => (
                            <Text style={styles.text} key={index}>{item.quantity} x {item.item}</Text>
                        ))}
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

export default Potions;
