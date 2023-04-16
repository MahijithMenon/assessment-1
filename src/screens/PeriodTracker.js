import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { DailyJournal } from '../components/DailyJournal'

export const PeriodTracker = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Calendar onDayPress={onDayPress} />
            <DailyJournal date={selectedDate} />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 10,
      marginTop: 5,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 5,
      color: '#62288f',
    },
    consultation: {
      borderBottomWidth: 1,
      borderBottomColor: '#4ac7c7',
    },
    btnView: {
      marginVertical: 10,
      marginHorizontal: 15,
    },
  });

  export default PeriodTracker;