import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import { getAuthors, addAuthor } from 'modules';
import { createUrlParamFromObj, alert, createFormData } from 'utils';

import { managerStyles as styles, colorScheme as color} from "assets/styles";

const AuthorAddModalBody = (props) => {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    addAuthor(data)
  }
  const getAuthors = () => {
    const pagination = {
      page: 1,
      limit: 10
    }
    const params = createUrlParamFromObj(pagination);
    const token = props.auth.data.tokenLogin;
    token
      ? props.getAuthors(token, params)
        .then((res) => {

        }).catch((error) => {
          console.log(`get authors failed`)
        })
      : alert('Token Failed', 'Cannot find token...')
  }
  const addAuthor = (data) => {
    const token = props.auth.data.tokenLogin;
    const formData = createFormData(data)
    props.addAuthor(token, formData)
      .then((res) => {
        if (res.value.status === 201) {
          alert('Success', 'Author added successfully')
          getAuthors()
        }
      })
      .catch((error) => {
        console.log(error);
        error.response.data.message
          ? alert('Failed', error.response.data.message)
          : alert('Failed', 'Add Author Failed. Please try again later')
      })
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Author Name</Text>
        <Controller control={control} render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            placeholder={errors.name && 'This is required'}
            value={value}
          />
        )}
          name="name" rules={{required: true}} defaultValue=""
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
})

const mapDispatchToProps = {
  getAuthors,
  addAuthor
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorAddModalBody)