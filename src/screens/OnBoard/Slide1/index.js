import React, { useEffect } from 'react'
import { Text, Image, View } from 'react-native'
import Button from 'react-native-button'
import { onboardStyles as styles} from 'assets/styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Slide1 = (props) => {
  const {
    navigation
  } = props;
  
  return (
    <>
      <View style={styles.container}>
        <View style={styles.hero}>
          <Image
            style={{
              height: 300, width: 400,
              resizeMode: 'stretch',}}
            source={require('assets/images/reading_book.png')} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Books is life</Text>
          <Text style={styles.subTitle}>Let's start reading your</Text>
          <Text style={styles.subTitle}>favourite books with Maktabah</Text>
          <View style={styles.indicator}>
            <View style={[styles.dotIndicator, styles.activeIndicator]}></View>
            <View style={[styles.dotIndicator, styles.inActiveIndicator]}></View>
            <View style={[styles.dotIndicator, styles.inActiveIndicator]}></View>
          </View>
          <Text style={styles.reader}>999 Readers</Text>
          <View style={styles.footer}>
            <View style={styles.a}></View>
            <View style={styles.b}>
              <Button
                style={styles.button}
                containerStyle={styles.buttonContainer}
                onPress={() => navigation.jumpTo('slide2')}
              >
                <FontAwesomeIcon icon={faArrowRight} color="white" size={20} />
              </Button>
            </View>
            <View style={styles.c}>
              <Text style={styles.skip} onPress = {() => navigation.jumpTo('slide3')}>Skip</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

export default Slide1;