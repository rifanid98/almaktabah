import React, { useEffect } from 'react'
import { Text, Image, View } from 'react-native'
import Button from 'react-native-button'
import { onboardStyles as styles } from 'assets/styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Slide2 = (props) => {
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
              resizeMode: 'stretch',
            }}
            source={require('assets/images/connected.png')} resizeMethod="resize" />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Gate of The World</Text>
          <Text style={styles.subTitle}>A lot of knowledge</Text>
          <Text style={styles.subTitle}>that you can take</Text>
          <View style={styles.indicator}>
            <View style={[styles.dotIndicator, styles.inActiveIndicator]}></View>
            <View style={[styles.dotIndicator, styles.activeIndicator]}></View>
            <View style={[styles.dotIndicator, styles.inActiveIndicator]}></View>
          </View>
          <Text style={styles.reader}>999 Readers</Text>
          <View style={styles.footer}>
            <View style={styles.a}></View>
            <View style={styles.b}>
              <Button
                style={styles.button}
                containerStyle={styles.buttonContainer}
                onPress={() => navigation.jumpTo('slide3')}
              >
                <FontAwesomeIcon icon={faArrowRight} color="white" size={20} />
              </Button>
            </View>
            <View style={styles.c}>
              <Text style={styles.skip} onPress={() => navigation.jumpTo('slide3')}>Skip</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

export default Slide2;