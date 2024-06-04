import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function AboutPage() {
    return (
        <View style={styles.container}>
            <Text>aboutPage</Text>
            <Link style={styles.links} replace href="/HomePage">Home</Link>
            <Link style={styles.links} push href={{pathname: "/[UserProfilePage]", params: {id:"admin"}}}>Profile Page</Link>
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
        textDecorationLine: "underline",
        color: "blue"
    }
})