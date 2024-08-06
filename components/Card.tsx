import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';

export default function Card(props) {
  return (
    <View style={styles.container} >
      <Image
         source={{ uri: props.url }} 
         style={styles.image}
      />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 20,
    marginTop: 15,
    marginBottom: 40,
    borderWidth: 2,             
    borderColor: 'black',      
    borderRadius: 10, 
  },
  image: {
    borderRadius: 10,
    width: 100, 
    height: 100, 
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
});
