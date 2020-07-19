import React, { useState } from 'react';
import { Text, View, TextInput, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Textarea from 'react-native-textarea';
import { Picker } from '@react-native-community/picker';

import { managerStyles as styles, colorScheme as color} from "assets/styles";

const BookModalBody = (props) => {
  const [genre, setGenre] = useState('java')
  const [author, setAuthor] = useState('java')
  const [description, setDescription] = useState(props.data.image)
  const image = { uri: 'http://192.168.42.15:3000/libraryapp-api/images/2020-06-17T05:00:48.720ZHideaway.jpg'}

  const { control, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    data.genre_id = genre
    data.author_id = author
    data.description = description
    // data.image hanlde later OK?!
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.formImage} onPress={() => console.log('touched')}>
          <ImageBackground source={image} style={styles.image}></ImageBackground>
          <Text style={{ textAlign: 'center' }}>Touch to upload an image</Text>
        </TouchableOpacity>
        
        <Text style={styles.label}>Title</Text>
        <Controller control={control} render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
          name="title" rules={{}} defaultValue={props.data.title}
        />

        <Text style={styles.label}>Genre</Text>
        <Picker
          selectedValue={genre}
          style={[styles.input, { marginBottom: 0 }]}
          onValueChange={(itemValue, itemIndex) => setGenre(itemValue)}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

        <Text style={styles.label}>Author</Text>
        <Picker
          selectedValue={author}
          style={[styles.input, { marginBottom: 0 }]}
          onValueChange={(itemValue, itemIndex) => setAuthor(itemValue)}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

        <Text style={styles.label}>Quantity</Text>
        <Controller control={control} render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
          name="quantity" rules={{ }} defaultValue="5"
        />

        <Text style={styles.label}>Description</Text>
        <Textarea
          containerStyle={styles.textareaContainer}
          style={styles.textarea}
          defaultValue={props.data.image}
          maxLength={120}
          onChangeText={text => setDescription(text)}
          underlineColorAndroid={'transparent'}
        />

      </ScrollView>
      <View style={{ height: 60 }}>
        <Text style={styles.button} onPress={handleSubmit(onSubmit)}>Save</Text>
      </View>
    </View>
  );
}

export default BookModalBody