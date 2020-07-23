import * as React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import {useForm} from 'react-hook-form';
import { RHFInput } from "react-hook-form-input";
import { managerStyles as styles } from "assets/styles";

const ModalBody = (props) => {
  const { register, setValue, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  const image = { uri: 'http://192.168.42.15:3000/libraryapp-api/images/2020-06-17T05:00:48.720ZHideaway.jpg'}
  const onChange = args => ({
    value: args[0].nativeEvent.text,
  });


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.formImage} onPress={() => console.log('touched')}>
        <Image source={image} style={styles.image} resizeMethod="resize" />
        <Text style={{textAlign: 'center'}}>Touch to upload an image</Text>
      </TouchableOpacity>
      <Text style={styles.label}>Username</Text>
      <RHFInput
        register={register}
        setValue={setValue}
        as={<TextInput style={styles.input}/>}
        onChangeEvent={onChange}
        name="username"
      />
      
      <Text style={styles.label}>Full Name</Text>
      <RHFInput
        register={register}
        setValue={setValue}
        as={<TextInput style={styles.input}/>}
        onChangeEvent={onChange}
        name="full_name"
      />
      
      <Text style={styles.label}>Email</Text>
      <RHFInput
        register={register}
        setValue={setValue}
        as={<TextInput style={styles.input}/>}
        onChangeEvent={onChange}
        name="email"
      />
      
      <Text style={styles.label}>Password</Text>
      <RHFInput
        register={register}
        setValue={setValue}
        as={<TextInput style={styles.input}/>}
        onChangeEvent={onChange}
        name="password"
      />

      <Button
        title="Button"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}

export default ModalBody