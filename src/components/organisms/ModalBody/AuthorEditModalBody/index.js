import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import { getAuthors, patchAuthor } from 'modules';
import { createUrlParamFromObj, alert } from 'utils';

import { managerStyles as styles, colorScheme as color} from "assets/styles";

const AuthorEditModalBody = (props) => {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    updateAuthor(data)
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
  const updateAuthor = (data) => {
    const token = props.auth.data.tokenLogin;
    const authorId = props.data.author_id;
    if (data.name !== props.data.name) {
      const formData = new FormData();
      formData.append('name', data.name)
      props.patchAuthor(token, formData, authorId)
        .then((res) => {
          if (res.value.status === 200) {
            alert('Success', 'Author updated successfully')
            getAuthors()
          }
        })
        .catch((error) => {
          console.log(error);
          error.response.data.message
            ? alert('Failed', error.response.data.message)
            : alert('Failed', 'Update Author Failed. Please try again later')
        })
    } else {
      alert('No Change', 'Please type new one')
    }
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

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = {
  getAuthors,
  patchAuthor
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorEditModalBody)