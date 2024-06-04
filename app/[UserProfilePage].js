import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function UserProfilePage() {
    const { id } = useLocalSearchParams();
    console.log({id})

    return (
        <View style={styles.container}>
            <Text>User: { id }</Text>
        </View>
    ) 
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})