import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';




export default function App() {

  const [people, setPeople] = useState([
    { name: 'shaun1', key: '1' },
    { name: 'shaun2', key: '2' },
    { name: 'shaun3', key: '3' },
    { name: 'shaun4', key: '4' },
    { name: 'shaun5', key: '5' },
    { name: 'shaun6', key: '6' },
    { name: 'shaun7', key: '7' },
  ])
  return (
    <View style={styles.container}>
      
      <ScrollView>
        {people.map(person => (

          <View key={person.key}>
            <Text style={styles.person}>{person.name}</Text>
          </View>
          
        ))}
      </ScrollView>
    
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  person: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 30,
  },


});
