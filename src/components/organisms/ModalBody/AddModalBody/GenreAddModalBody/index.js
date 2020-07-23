import React from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { managerStyles as styles, colorScheme as color} from "assets/styles";
import { connect } from 'react-redux';
import { getGenres, addGenre } from 'modules';
import { createUrlParamFromObj, alert, createImageFormData } from 'utils';

const GenreAddModalBody = (props) => {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    addGenre(data)
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
  const addGenre = (data) => {
    const token = props.auth.data.tokenLogin;
    const formData = createImageFormData(data)
    props.addGenre(token, formData)
      .then((res) => {
        if (res.value.status === 201) {
          alert('Success', 'Genre added successfully')
          getGenres()
        }
      })
      .catch((error) => {
        console.log(error);
        error.response.data.message
          ? alert('Failed', error.response.data.message)
          : alert('Failed', 'Add Genre Failed. Please try again later')
      })
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
            placeholder={errors.name && 'This is required'}
            value={value}
          />
        )}
          name="name" rules={{required: true}} defaultValue=""
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
  addGenre
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreAddModalBody)