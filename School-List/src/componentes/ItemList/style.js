import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemList: {
        padding: 15,
        elevation: 12,
        borderRadius: 7,
        backgroundColor: '#c1bfb5',
        borderWidth: 4,
        borderColor: '#8c8c8c',
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        opacity: 0.9,
    },
    itemToBuy: {
        color: '#fff',
        fontSize: 24,
        textDecorationLine: 'none'
    },
    itemBought: {
        color: '#36494E',
        fontSize: 24,
        textDecorationLine: 'line-through'
    },
    actionIcon: {
        height: 40,
        width: 40,
        backgroundColor: 'darkgreen',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 20,
    },
});