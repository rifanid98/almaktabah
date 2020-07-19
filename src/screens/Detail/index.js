import React from 'react'
import { Text, View, Image } from 'react-native'
import { detailStyles as styles } from 'assets/styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { ScreenHeader } from 'components';

const Detail = (props) => {
  return (
    <>
      <View style={styles.container}>
        <ScreenHeader navigation={props.navigation} title="Detail Book"/>
        
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.image}>
              <Image style={styles.bookImage} source={require('assets/images/default.png')} />
            </View>
            <Text style={styles.title}>Lorem ipsum dolor sit amet</Text>
            <Text style={styles.author}>Ipsum Amet</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo atque debitis voluptatum in porro ipsum esse aliquam accusantium. Sit eos officia eveniet facilis ex, fugit ad provident veniam velit!Id ipsam nisi repellat ex ad exercitationem pariatur a possimus illo! Aut itaque debitis atque velit inventore suscipit! Quisquam eveniet ut sit, minima eum laborum totam ex impedit quidem autem?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo atque debitis voluptatum in porro ipsum esse aliquam accusantium. Sit eos officia eveniet facilis ex, fugit ad provident veniam velit!Id ipsam nisi repellat ex ad exercitationem pariatur a possimus illo! Aut itaque debitis atque velit inventore suscipit! Quisquam eveniet ut sit, minima eum laborum totam ex impedit quidem autem?
            </Text>

            
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Borrow</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Detail;