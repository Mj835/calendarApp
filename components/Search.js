/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Search = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Check Your Calendar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  headText: {
    fontSize: 32,
    marginVertical: 20,
  },
});

export default Search;
