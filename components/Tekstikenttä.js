import React from 'react'
import {
    StyleSheet, View, Button, TextInput
} from 'react-native'

const Tekstikenttä = ({ onInputChange, onAddPress, tavara }) => {
    return (
        <View style={styles.inputAndBtn}>

            <TextInput placeholder="Kirjoita uusi tavara.."
                style={styles.inputField} value={tavara} onChangeText={onInputChange} />

            <Button color="#f120ff" title="Lisää" onPress={onAddPress} />

        </View>
    )
}

const styles = StyleSheet.create({
    inputAndBtn: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"
    },
    inputField: {
        borderBottomColor: "silver", borderBottomWidth: 1, color: "brown", width: '85%', fontSize: 26
    }
})

export default Tekstikenttä