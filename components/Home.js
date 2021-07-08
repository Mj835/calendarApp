/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ArrowIcon from 'react-native-vector-icons/dist/FontAwesome';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Hey, 👋</Text>
      <Text style={styles.headText}>Checkout your Hair Dairy</Text>
      {/* <TouchableOpacity>
        <ArrowIcon name="arrow-circle-right" size={40} color={'#2980b9'} />
      </TouchableOpacity> */}
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

export default Home;
