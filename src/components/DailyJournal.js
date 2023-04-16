import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import {Button} from 'react-native-paper';

export const DailyJournal  = props => {
  const {date} = props;
  const [entry, setEntry] = useState('');

  const saveEntry = () => {
    // Save the journal entry to the database or to local storage
  };

  return (
    <View>
      <Text style={{ marginTop: 16, fontSize: 16 }}>Journal Entry for {date}</Text>
      <TextInput
        multiline
        numberOfLines={4}
        value={entry}
        onChangeText={setEntry}
        style={{ marginTop: 8, padding: 8, borderWidth: 1, borderColor: '#ccc' }}
      />
      <Button
        mode="contained"
        onPress={saveEntry}
        style={{marginTop: 20}}>
        Save
      </Button>
    </View>
);
}

export default DailyJournal;
