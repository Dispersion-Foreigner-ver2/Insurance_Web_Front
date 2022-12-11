import React from "react";
import {SafeAreaView,StyleSheet, Text, TouchableOpacity, View} from "react-native";


const StartPage = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.itemImg}>
                <Text style={styles.subjectText}>신동아 보험사 시스템</Text>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.likeButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.likeText}>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate('Join')}>
                    <Text style={styles.chatText}>회원가입</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",

    },
    itemImg: {
        width: "100%",
        height: "80%",
        alignItems: "center",
    },
    subjectText: {
        top: 150,
        fontSize: 45,
        fontWeight: "bold",
        fontStyle: "italic",
    },

    buttons: {
        marginTop: 20,
        flex: 0.3,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

    likeButton: {
        backgroundColor: "skyblue",
        width: "40%",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    },

    likeText:{
        color: "white",
        fontSize: 20,
    },

    chatButton: {
        backgroundColor: "skyblue",
        width: "40%",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    },

    chatText:{
        color: "white",
        fontSize: 20,
    },
});


export default StartPage;
