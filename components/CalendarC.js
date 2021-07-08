/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import ArrowIcon from 'react-native-vector-icons/dist/FontAwesome';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const CalendarC = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <View style={styles.headerContent}>
            <View style={styles.headerLeft}>
              <TouchableOpacity style={styles.arwIcon}>
                <ArrowIcon name="arrow-left" size={16} />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>
                <Text style={styles.headerTitleM}>My</Text> Hair Dairy
              </Text>
            </View>
            <View>
              <Text style={styles.headerTitle}>Jul 2021</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>

      {/* Calendar Content */}
      <View>
        <CalendarList
          style={{height: 600}}
          dayComponent={({date, state}) => {
            return (
              <View style={{height: 50}}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: state === 'disabled' ? 'gray' : 'black',
                  }}>
                  {date.day}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerWrapper: {
    elevation: 1,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  arwIcon: {
    marginTop: 3,
  },
  headerLeft: {
    flexDirection: 'row',
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 16,
  },
  headerTitleM: {
    color: '#74b9ff',
  },
});

export default CalendarC;
