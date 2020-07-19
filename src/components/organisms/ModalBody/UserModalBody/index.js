import React, { useState } from 'react';
import { Text, View, TextInput, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Picker } from '@react-native-community/picker';

import { managerStyles as styles, colorScheme as color} from "assets/styles";

const UserModalBody = (props) => {
  const [role, setRole] = useState(props.data.role)
  const image = { uri: 'http://192.168.42.15:3000/libraryapp-api/images/2020-06-17T05:00:48.720ZHideaway.jpg'}

  const { control, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    data.role = role
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
        
        <Text style={styles.label}>Username</Text>
        <Controller control={control} render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
          name="username" rules={{}} defaultValue={props.data.name}
        />

        <Text style={styles.label}>Full Name</Text>
        <Controller control={control} render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
          name="full_name" rules={{}} defaultValue={props.data.full_name}
        />

        <Text style={styles.label}>Email</Text>
        <Controller control={control} render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
          name="email" rules={{}} defaultValue={props.data.email}
        />

        <Text style={styles.label}>Role</Text>
        <Picker
          selectedValue={role}
          style={[styles.input, { marginBottom: 0 }]}
          onValueChange={(itemValue, itemIndex) => setRole(itemValue)}>
          <Picker.Item label="Admin" value={1} />
          <Picker.Item label="Staff" value={2} />
          <Picker.Item label="User" value={3} />
        </Picker>

        <Text style={styles.label}>Password</Text>
        <Controller control={control} render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            secureTextEntry={true}
          />
        )}
          name="password" rules={{}} defaultValue=""
        />

      </ScrollView>
      <View style={{ height: 60 }}>
        <Text style={styles.button} onPress={handleSubmit(onSubmit)}>Save</Text>
      </View>
    </View>
  );
}

export default UserModalBody