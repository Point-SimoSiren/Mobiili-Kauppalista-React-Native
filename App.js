//import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  StyleSheet, Text, View, Button, TextInput, FlatList
} from 'react-native'

const App = () => {

  const [tavara, setTavara] = useState('')
  const [lista, setLista] = useState([])

  const onInputChange = (enteredText) => {
    setTavara(enteredText)
  }

  const onAddPress = () => {
    setLista(vanhaLista => [
      ...vanhaLista,
      { key: Math.random().toString(), value: tavara }
    ])
    setTavara('')
  }

  return (
    <View style={styles.screen}>

      <View style={styles.inputAndBtn}>
        <TextInput placeholder="Kirjoita uusi tavara.."
          style={styles.inputField} value={tavara} onChangeText={onInputChange} />

        <Button color="#f120ff" title="Lisää" onPress={onAddPress} />
      </View>

      <FlatList
        data={lista}
        renderItem={itemData => (
          <View>
            <Text>{itemData.item.value}</Text>
          </View>
        )}>

      </FlatList>

    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 30, marginTop: 25
  },
  inputAndBtn: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"
  },
  inputField: {
    borderBottomColor: "silver", borderBottomWidth: 1, color: "brown", width: '85%', fontSize: 26
  },
  listItem: {
    padding: 10,
    borderBottomColor: "silver", borderBottomWidth: 1, width: '92%', fontSize: 26
  }

})

export default App