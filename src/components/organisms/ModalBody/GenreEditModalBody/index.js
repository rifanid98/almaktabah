import React, { useState } from 'react';
import { Text, View, TextInput, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { managerStyles as styles, colorScheme as color} from "assets/styles";
import { connect } from 'react-redux';
import { getGenres, patchGenre } from 'modules';
import { createUrlParamFromObj, alert } from 'utils';

const GenreEditModalBody = (props) => {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    updateGenre(data)
  }
  const getGenres = () => {
    const pagination = {
      page: 1,
      limit: 10
    }
    const params = createUrlParamFromObj(pagination);
    const token = props.auth.data.tokenLogin;
    token
      ? props.getGenres(token, params)
        .then((res) => {

        }).catch((error) => {
          console.log(`get genres failed`)
        })
      : alert('Token Failed', 'Cannot find token...')
  }
  const updateGenre = (data) => {
    const token = props.auth.data.tokenLogin;
    const genreId = props.data.genre_id;
    if (data.name !== props.data.name) {
      const formData = new FormData();
      formData.append('name', data.name)
      props.patchGenre(token, formData, genreId)
        .then((res) => {
          if (res.value.status === 200) {
            alert('Success', 'Genre updated successfully')
            getGenres()
          }
        })
        .catch((error) => {
          console.log(error);
          error.response.data.message
            ? alert('Failed', error.response.data.message)
            : alert('Failed', 'Update Genre Failed. Please try again later')
        })
    } else {
      alert('No Change', 'Please type new one')
    }
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
        <Text
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >Save</Text>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = {
  getGenres,
  patchGenre
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreEditModalBody)