import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';




export default function App() {

  const clickHandler = () => {
    setName('Niemarcin')
    setPerson({ name: 'luigi', age: 45 })
  }


  const [name, setName] = useState('Marcin')
  const [person, setPerson] = useState({
    name: 'Mario', age: 40
  })
  return (
    <View style={styles.container}>

      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and he is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
      </View>
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
  header: {
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
  }
});
