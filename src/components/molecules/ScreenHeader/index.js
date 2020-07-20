import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { moleculesStyles as styles } from 'assets/styles'

const ScreenHeader = (props) => {

  return (
    <>
      <View style={styles.header}>
        <View style={styles.a}>
          <TouchableOpacity style={styles.backButtonContainer} onPress={() => props.navigation.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} size={20} style={{ margin: 10 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.b}>
          <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
        <TouchableOpacity style={[styles.backButtonContainer, styles.clearButtonContainer]}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} style={styles.clearButton} />
        </TouchableOpacity>
      </View>
    </>
  )
}

export default React.memo(ScreenHeader);