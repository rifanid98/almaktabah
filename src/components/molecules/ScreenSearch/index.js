import React, { memo } from 'react'
import { Text, View } from 'react-native'
import { useForm, Controller } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { moleculesStyles as styles } from 'assets/styles'
import { TextInput } from 'react-native-gesture-handler';

const ScreenSearch = memo((props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      search: props.route.params.keyword
    }
  });

  const onSubmit = data => {
    console.log(data)
  }
  return (
    <>
      <View style={styles.search}>
        <View style={styles.formControl}>
          <Controller control={control} render={({ onChange, onBlur, value }) => (
            <TextInput
              name="search"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
            name="search" defaultValue=""
          />
        </View>
        <Text
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <FontAwesomeIcon icon={faSearch} size={20} color='black' />
        </Text>
      </View>

    </>
  )
})

export default ScreenSearch;