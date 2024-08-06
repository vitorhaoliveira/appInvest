import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>{props.containerText}</Text>
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
    backgroundColor: '#078CD9',
    borderRadius: 20,
  },
  containerText: {
    fontSize: 15,
    color: '#fff'
  },
});
