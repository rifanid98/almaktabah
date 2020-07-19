import React, { useState } from 'react';
import { Text, View, TextInput, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { managerStyles as styles, colorScheme as color} from "assets/styles";

const GenreModalBody = (props) => {
  const image = { uri: 'http://192.168.42.15:3000/libraryapp-api/images/2020-06-17T05:00:48.720ZHideaway.jpg'}

  const { control, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Genre Name</Text>
        <Controller control={control} render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
          name="name" rules={{}} defaultValue={props.data.name}
        />

      </ScrollView>
      <View style={{ height: 60 }}>
        <Text style={styles.button} onPress={handleSubmit(onSubmit)}>Save</Text>
      </View>
    </View>
  );
}

export default GenreModalBody