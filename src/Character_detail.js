import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import axios from "axios";

const DetailCharacter = ({ route }) => {
    const [characterData, setCharacterData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const characterName = route.params.name.toLowerCase().replace(/ /g, '-');
                const response = await axios.get(`https://api.genshin.dev/characters/${characterName}`);
                console.log(response.data);
                setCharacterData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [route.params.name]);

    if (!characterData) {
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
                <Text style={styles.title}>{characterData.name}</Text>
                <View style={styles.box}>
                    <Text style={styles.label}>Title:</Text>
                    <Text style={styles.text}>{characterData.title}</Text>
                    <Text style={styles.label}>Rarity:</Text>
                    <Text>{renderStars(characterData.rarity)}</Text>
                    <Text style={styles.label}>Vision:</Text>
                    <Text style={styles.text}>{characterData.vision}</Text>
                    <Text style={styles.label}>Weapon:</Text>
                    <Text style={styles.text}>{characterData.weapon}</Text>
                    <Text style={styles.label}>Nation:</Text>
                    <Text style={styles.text}>{characterData.nation}</Text>
                    <Text style={styles.label}>Affiliation:</Text>
                    <Text style={styles.text}>{characterData.affiliation}</Text>
                </View>
                
                <View style={styles.box}>
                    <Text style={styles.label}>Description:</Text>
                    <Text style={styles.text}>{characterData.description}</Text>
                </View>

                <Text style={styles.title}>Skill Talents</Text>
                {characterData.skillTalents.map((talent, index) => (
                    <View key={index} style={styles.box}>
                        <Text style={styles.label}>{talent.name || talent.type}:</Text>
                        <Text style={styles.text}>{talent.description}</Text>
                    </View>
                ))}
                <Text style={styles.title}>Passive Talents</Text>
                {characterData.passiveTalents.map((talent, index) => (
                    <View key={index} style={styles.box}>
                        <Text style={styles.label}>{talent.name} (Unlock at Ascension {talent.unlock}):</Text>
                        <Text style={styles.text}>{talent.description}</Text>
                        {talent.level && (
                            <Text style={styles.text}>[Passive A{talent.level}]</Text>
                        )}
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 20,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "left",
        backgroundColor: "#fff",
        padding: 25,
        textAlign:"center",
    },
    box: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    box2:{
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
    },
});

export default DetailCharacter;
