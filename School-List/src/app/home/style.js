import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        padding: 25, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#8eb1c7',
        opacity: 0.8,
        borderBottomWidth: 2,
        borderColor: '#fff'
    },
    title: {
        fontSize: 26,
        color: '#fff',
        fontWeight: 'bold',
        color: '#ffffff',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#8eb1c7',
        opacity: 0.8,
        borderTopWidth: 2,
        borderColor: '#fff'
    },
    inputContainer: {
        backgroundColor: '#36494E',
        elevation: 40,
        flex: 1,
        height: 50,
        marginVertical: 20,
        borderRadius: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        margin: 5,
        borderWidth: 2,
        borderColor: '#fff'
    },
    iconContainer: {
        borderRadius: 10,
        height: 50,
        width: 50,
        backgroundColor: '#36494E',
        elevation: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff'
    }
});