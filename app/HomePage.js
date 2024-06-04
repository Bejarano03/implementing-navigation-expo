import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function HomePage() {
    return (
        <View style={styles.container}>
            <Text>HomePage</Text>
            <Link style={styles.links} href="/AboutPage">About Page</Link>
            <Link style={styles.links} href={{pathname: "/[UserProfilePage]", params: { id : "admin" } }}>Profile Page</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    links: {
        marginTop: 20,
        color: "blue",
        textDecorationLine: "underline"
    }
})