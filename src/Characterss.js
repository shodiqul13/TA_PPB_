import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const CHaracterPage = () => {
    const [charactersData, setCharactersData] = useState([]);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.genshin.dev/characters");
                console.log(response.data);
                

                const excludedCharacters = ["traveler-anemo", "traveler-dendro", "traveler-electro", "traveler-geo","ayaka"];
                const filteredCharacters = response.data.filter(character => !excludedCharacters.includes(character));

                const characterData = await Promise.all(filteredCharacters.map(character =>
                    axios.get(`https://api.genshin.dev/characters/${character}`)
                ));
                const characters = characterData.map(res => res.data);
                setCharacters(characters);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle error here
            }
        };

        fetchData();
    }, []);

    const Card = ({ character }) => {
        const navigation = useNavigation();

        const navigateToDetail = () => {
            navigation.navigate("DetailCharacter", {
                name: character.name,
            });
        };

        const renderStars = (maxRarity) => {
            let stars = '';
            for (let i = 0; i < maxRarity; i++) {
                stars += '⭐';
            }
            return stars;
        };

        return (
            <TouchableOpacity onPress={navigateToDetail} style={styles.card}>
                <View>
                    <Text style={styles.name}>{character.name}</Text>
                    <Text>Rarity: {renderStars(character.rarity)}</Text>
                    <Text>Vision: {character.vision}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Character List</Text>
                
            </View>
            <FlatList
                data={characters}
                keyExtractor={(item) => item.name.toString().toLowerCase().replace(/ /g, '-')}
                renderItem={({ item }) => <Card character={item} />}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
        paddingBottom:90,
    },

    headerContainer: {
        marginBottom: 16,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 30,
        justifyContent:"center",
        textAlign:"center",

    },

    listContainer: {
        flexGrow: 1,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        elevation: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        width: "100%",
        alignSelf: "flex-start",
        borderWidth: 1, // Lebar garis tepi (outline border)
        borderColor: "#003459", // Warna garis tepi
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "normal",
        color: "#333",
    },
    additionalInfo: {
        fontSize: 14,
        color: "#666",
        marginTop: 8,
    },
});

export default CHaracterPage;
