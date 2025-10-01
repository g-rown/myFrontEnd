import { StyleSheet } from "react-native";

export default StyleSheet.create({
    header: {
        fontSize: 28,            
        fontWeight: '700',        
        color: '#333333',        
        marginBottom: 20,         
        textAlign: 'center',      
        paddingTop: 10,           
    },

    button: {
        backgroundColor: '#fff',
        paddingVertical: 12, 
        paddingHorizontal: 100,
        borderRadius: 8,
    },

    container: { 
        flex: 1,
        justifyContent: 'center', 
        padding: 20, 
        backgroundColor: '#72bfd6ff'
    },

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
        marginBottom: 15,
        borderRadius: 8,
        backgroundColor: "#fff",
    },

    text: {
        fontSize: 16,
        marginBottom: 25,
        color: '#333',
    },

    card: {
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        width: '50%',
        alignSelf: 'center',
    },

    homeCard: {
        backgroundColor: "#72bfd6ff",
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        width: '50%',
        alignSelf: 'center',
    },
});