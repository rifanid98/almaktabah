import React from 'react'
import { Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { atomStyles as styles } from 'assets/styles'

const FixedAddButton = (props) => {
  return (
    <Text style={styles.fixedAddButtonWrapper} onPress={props.onPress}>
      <FontAwesomeIcon icon={faPlus} style={styles.fixedAddButton} size={25}/>
    </Text>
  )
}

export default React.memo(FixedAddButton);