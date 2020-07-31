import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Textarea from 'react-native-textarea';
import { Picker } from '@react-native-community/picker';
import { managerStyles as styles, colorScheme as color} from "assets/styles";
import { getAuthors, getGenres, getBooks, addBook } from 'modules';
import { connect } from 'react-redux';
import { createUrlParamFromObj, createImageFormData } from 'utils';
import ImagePicker from 'react-native-image-picker'

const BookAddModalBody = (props) => {
  const [genre, setGenre] = useState(props.genres.data && props.genres.data[0].genre_id)
  const [author, setAuthor] = useState(props.authors.data && props.authors.data[0].author_id)
  const [defaultImage] = useState(require('assets/images/default.png'))
  const [image, setImage] = useState(null)

  const { control, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    data.genre_id = genre
    data.author_id = author
    // data.image hanlde later OK?!
    addBook(data)
  }
  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        setImage(response)
      }
    })
  }
  useEffect(() => {
    getAuthors()
    getGenres()
  }, [])

  const getAuthors = () => {
    const token = props.auth.data.tokenLogin;
    token
      ? props.getAuthors(token)
        .then((res) => {
          
        }).catch((error) => {
          console.log(`get authors failed`)
        })
      : Alert.alert('Token Failed', 'Cannot find token...')
  }
  const getGenres = () => {
    const token = props.auth.data.tokenLogin;
    token
      ? props.getGenres(token)
        .then((res) => {
          
        }).catch((error) => {
          console.log(`get genres failed`)
        })
      : Alert.alert('Token Failed', 'Cannot find token...')
  }
  const getBooks = () => {
    const pagination = {
      page: 1,
      limit: 10
    }
    const params = createUrlParamFromObj(pagination);
    const token = props.auth.data.tokenLogin;
    token
      ? props.getBooks(token, params)
        .then((res) => {

        }).catch((error) => {
          console.log(`get books failed`)
        })
      : Alert.alert('Token Failed', 'Cannot find token...')
  }
  const addBook = (data) => {
    const token = props.auth.data.tokenLogin;
    const formData = createImageFormData(data, image, 'image')
    props.addBook(token, formData)
      .then((res) => {
        if (res.value.status === 201) {
          Alert.alert('Success', 'Book added successfully')
          getBooks()
        }
      })
      .catch((error) => {
        console.log(error);
        error.response.data.message
          ? Alert.alert('Failed', error.response.data.message)
          : Alert.alert('Failed', 'Add Book Failed. Pleas try again later')
      })
  }
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.formImage} onPress={() => handleChoosePhoto()}>
          {
            image
              ? <Image source={{ uri: image.uri }} style={styles.image} resizeMethod="resize" />
              : <Image source={defaultImage} style={styles.image} resizeMethod="resize" />
          }
          <Text style={{ textAlign: 'center' }}>Touch to upload an image</Text>
        </TouchableOpacity>
        
        <Text style={styles.label}>Title</Text>
        <Controller control={control} render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            placeholder={errors.title && 'This is required'}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
          name="title" rules={{required: true}} defaultValue=""
        />

        <Text style={styles.label}>Genre</Text>
        <Picker
          selectedValue={genre && genre}
          style={[styles.input, { marginBottom: 0 }]}
          onValueChange={(itemValue, itemIndex) => setGenre(itemValue)}>
          {
            props.genres.data
              ? props.genres.data.map((genre, index) => {
                return (
                  <Picker.Item key={index} label={genre.name} value={genre.genre_id} />        
                )
              })
              : []
          }
        </Picker>

        <Text style={styles.label}>Author</Text>
        <Picker
          selectedValue={author && author}
          style={[styles.input, { marginBottom: 0 }]}
          onValueChange={(itemValue, itemIndex) => setAuthor(itemValue)}>
          {
            props.authors.data
              ? props.authors.data.map((author, index) => {
                return (
                  <Picker.Item key={index} label={author.name} value={author.author_id} />
                )
              })
              : []
          }
        </Picker>

        <Text style={styles.label}>Quantity</Text>
        <Controller control={control} render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            placeholder={errors.quantity && 'This is required'}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
          name="quantity" rules={{required: true}} defaultValue=""
        />

        <Text style={styles.label}>Description</Text>
        <Controller control={control} render={({ onChange, onBlur, value }) => (
          <Textarea
            containerStyle={styles.textareaContainer}
            style={styles.textarea}
            onBlur={onBlur}
            value={value}
            placeholder={errors.description && 'This is required'}
            onChangeText={value => onChange(value)}
            underlineColorAndroid={'transparent'}
          />
        )}
          name="description" rules={{required: true}} defaultValue=""
        />
       

      </ScrollView>
      <View style={{ height: 60 }}>
        <Text style={styles.button} onPress={handleSubmit(onSubmit)}>Save</Text>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  genres: state.genres,
  authors: state.authors
})

const mapDispatchToProps = {
  getAuthors,
  getGenres,
  getBooks,
  addBook,
}

export default connect(mapStateToProps, mapDispatchToProps)(BookAddModalBody)