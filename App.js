import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';




export default function App() {

  const [people, setPeople] = useState([
    { name: 'shaun1', id: '1' },
    { name: 'shaun2', id: '2' },
    { name: 'shaun3', id: '3' },
    { name: 'shaun4', id: '4' },
    { name: 'shaun5', id: '5' },
    { name: 'shaun6', id: '6' },
    { name: 'shaun7', id: '7' },
  ])
  return (
    <View style={styles.container}>

      <FlatList
      numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.person}>{item.name}</Text>
        )}
      />



      {/* <ScrollView>
        {people.map(person => (

          <View key={person.key}>
            <Text style={styles.person}>{person.name}</Text>
          </View>

        ))}
      </ScrollView> */}

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
