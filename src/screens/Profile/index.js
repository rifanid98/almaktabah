import React from 'react'
import { Text, View, Image, Button } from 'react-native'
import { useForm, Controller } from 'react-hook-form';
import {  ScrollView, TextInput } from 'react-native-gesture-handler';
import { ScreenHeader } from 'components';
import { profileStyles as styles } from 'assets/styles'
import { connect } from 'react-redux';
import { getRole } from 'utils';
import { logout } from 'modules';

const Profile = (props) => {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data)
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <ScreenHeader navigation={props.navigation} title="Profile" />
          <View style={styles.header}>
            <View style={styles.profileImage}>
              <Image style={styles.image} source={{uri: props.auth.data.image}} />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.name}>{props.auth.data.username}</Text>
              <Text style={styles.email}>{props.auth.data.email}</Text>
              <Text style={styles.role}>{getRole(props.auth.data.role)}</Text>
            </View>
          </View>
          <View style={styles.edit}>
            <Text
              style={styles.text}
              onPress={() => props.logout()}
            >Logout</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.formControl}>
              <Text style={styles.label}>Username</Text>
              <Controller control={control} render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
                name="username" defaultValue=""
              />
              {errors.username && <Text>This is required.</Text>}
            </View>
            <View style={styles.formControl}>
              <Text style={styles.label}>Full Name</Text>
              <Controller control={control} render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
                name="full_name" defaultValue=""
              />
              {errors.full_name && <Text>This is required.</Text>}
            </View>
            <View style={styles.formControl}>
              <Text style={styles.label}>Email</Text>
              <Controller control={control} render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
                name="email" defaultValue=""
              />
              {errors.email && <Text>This is required.</Text>}
            </View>
            <View style={styles.formControl}>
              <Text style={styles.label}>Password</Text>
              <Controller control={control} render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  secureTextEntry={true}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
                name="password" defaultValue=""
              />
              {errors.password && <Text>This is required.</Text>}
            </View>
            <View style={styles.forget}>
              <Text style={styles.forgetText}>Forgot Password?</Text>
            </View>
            <View style={styles.buttonWrapper}>
              <Text style={styles.button} onPress={handleSubmit(onSubmit)}>Save</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)