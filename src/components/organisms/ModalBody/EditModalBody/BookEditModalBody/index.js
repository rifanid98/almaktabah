import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Textarea from 'react-native-textarea';
import { Picker } from '@react-native-community/picker';
import { managerStyles as styles, colorScheme as color} from "assets/styles";
import { getAuthors, getGenres, patchBook, getBooks } from 'modules';
import { connect } from 'react-redux';
import { alert, createUrlParamFromObj, createImageFormData } from 'utils';
import ImagePicker from 'react-native-image-picker'
import { appConfig } from 'configs';

const BookEditModalBody = (props) => {
  const [genre, setGenre] = useState(props.data.genre_id)
  const [author, setAuthor] = useState(props.data.author_id)
  const [description, setDescription] = useState(props.data.description)
  const [image, setImage] = useState(null)

  const { control, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    data.genre_id = genre
    data.author_id = author
    data.description = description
    // data.image hanlde later OK?!
    updateBook(data)
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
      : alert('Token Failed', 'Cannot find token...')
  }
  const getGenres = () => {
    const token = props.auth.data.tokenLogin;
    token
      ? props.getGenres(token)
        .then((res) => {
          
        }).catch((error) => {
          console.log(`get genres failed`)
        })
      : alert('Token Failed', 'Cannot find token...')
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
      : alert('Token Failed', 'Cannot find token...')
  }
  const updateBook = (data) => {
    const token = props.auth.data.tokenLogin;
    const book_id = props.data.book_id;
    console.log(token)
    if (data.title === props.data.title) delete data.title
    const formData = createImageFormData(data, image, 'image')
    console.log(formData);
    props.patchBook(token, formData, book_id)
      .then((res) => {
        if (res.value.status === 200) {
          alert('Success', 'Book updated successfully')
          getBooks()
        }
      })
      .catch((error) => {
        console.log(error);
        error.response.data.message
          ? alert('Failed', error.response.data.message)
          : alert('Failed', 'Update Book Failed. Pleas try again later')
      })
  }
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.formImage} onPress={() => handleChoosePhoto()}>
          {
            image
              ? <Image source={{ uri: image.uri }} style={styles.image} resizeMethod="resize" />
              : <Image source={{ uri: appConfig.url.assets + '/' + props.data.image }} style={styles.image} resizeMethod="resize" />
          }
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
          selectedValue={genre && genre}
          style={[styles.input, { marginBottom: 0 }]}
          onValueChange={(itemValue, itemIndex) => setGenre(itemValue)}>
          {
            props.genres.data
              ? props.genres.data.length > 0 
                ? props.genres.data.map((genre, index) => {
                  return (
                    <Picker.Item key={index} label={genre.name} value={genre.genre_id} />
                  )
                })
                : []
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
              ? props.authors.data.length > 0 
                ? props.authors.data.map((author, index) => {
                  return (
                    <Picker.Item key={index} label={author.name} value={author.author_id} />
                  )
                })
                : []
              : []
          }
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
          name="quantity" rules={{ }} defaultValue={props.data.quantity.toString()}
        />

        <Text style={styles.label}>Description</Text>
        <Textarea
          containerStyle={styles.textareaContainer}
          style={styles.textarea}
          defaultValue={props.data.description}
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  genres: state.genres,
  authors: state.authors
})

const mapDispatchToProps = {
  getAuthors,
  getGenres,
  getBooks,
  patchBook,
}

export default connect(mapStateToProps, mapDispatchToProps)(BookEditModalBody)