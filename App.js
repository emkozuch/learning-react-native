import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';




export default function App() {

  const [name, setName] = useState('Marcin')
  const [age, setAge] = useState('30')
  return (
    <View style={styles.container}>

      <Text>Enter name:</Text>
      <TextInput
        // add multiple lines in input
        multiline
        ////////////////////////////
        style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText={(value) => setName(value)} />
      <Text>Enter age:</Text>
      <TextInput
      //type of keyboard on focus
      keyboardType='numeric'
      /////////////////////////
        style={styles.input}
        placeholder='500'
        onChangeText={(value) => setAge(value)} />

      <Text>name: {name} ,age:{age}</Text>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    width: 200,
  },

});
