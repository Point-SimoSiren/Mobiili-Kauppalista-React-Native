//import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  StyleSheet, Text, View, Button, TextInput, FlatList
} from 'react-native'
import Tavara from './components/Tavara'
import Tekstikenttä from './components/Tekstikenttä'

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
  }

  return (
    <View style={styles.screen}>
      <Tekstikenttä onAddPress={onAddPress} onInputChange={onInputChange} tavara={tavara} />
      <FlatList
        data={lista}
        renderItem={itemData => <Tavara title={itemData.item.value} onDelete={() => alert('"deleted"')} />
        }>
      </FlatList>

    </View >
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 30, marginTop: 25
  }
})

export default App