import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ListView } from 'react-native';

const App = () => {

  const [tavara, setTavara] = useState('')
  const [lista, setLista] = useState(['maito', 'leipä'])

  const onInputChange = (enteredText) => {
    setTavara(enteredText)
  }

  const onAddPress = () => {
    setLista([...lista, tavara])
    console.log(lista)
  }

  return (
    <View style={styles.screen}>

      <View style={styles.inputAndBtn}>

        <TextInput placeholder="Kirjoita uusi tavara.."
          style={styles.inputField} onChangeText={onInputChange} />

        <Button color="#f120ff" title="+" onPress={onAddPress} />

      </View>
      <View>
        <Text />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30, marginTop: 25
  },
  inputAndBtn: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"
  },
  inputField: {
    borderBottomColor: "silver", borderBottomWidth: 1, color: "brown", width: '92%', fontSize: 26
  }

})

export default App