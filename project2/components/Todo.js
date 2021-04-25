import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Todo = (props) => {
    return (
        <View style={styles.task}>
            <View style={styles.items}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    task: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    items: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#009B77',
        opacity: 0.4,
        borderRadius: 15,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
        color: '#009B77',
    },
});

export default Todo;