import React from 'react'
import {
    StyleSheet, Text, View, TouchableOpacity
} from 'react-native'

const Tavara = ({ title, onDelete }) => {
    return (
        <TouchableOpacity onPress={onDelete}>
            <View style={styles.listItem}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        borderBottomColor: "silver", borderBottomWidth: 1, width: '92%', fontSize: 26
    }
})

export default Tavara