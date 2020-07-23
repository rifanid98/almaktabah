import React, { useEffect } from 'react'
import { Text, Image, View } from 'react-native'
import Button from 'react-native-button'
import { onboardStyles as styles } from 'assets/styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux'
import { firstRun } from 'modules'

const Slide3 = (props) => {
  const disableFirstRun = () => {
    props.firstRun(false);
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.hero}>
          <Image
            style={{
              height: 300, width: 400,
              resizeMode: 'stretch',
            }}
            source={require('assets/images/exciting.png')} resizeMethod="resize" />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Books is Exciting</Text>
          <Text style={styles.subTitle}>You can find many</Text>
          <Text style={styles.subTitle}>new things everyday</Text>
          <View style={styles.indicator}>
            <View style={[styles.dotIndicator, styles.inActiveIndicator]}></View>
            <View style={[styles.dotIndicator, styles.inActiveIndicator]}></View>
            <View style={[styles.dotIndicator, styles.activeIndicator]}></View>
          </View>
          <Text style={styles.reader}>999 Readers</Text>
          <View style={styles.footer}>
            <View style={styles.a}></View>
            <View style={styles.b}>
              <Button
                style={styles.button}
                containerStyle={styles.buttonContainer}
                onPress={() => disableFirstRun()}
              >
                <FontAwesomeIcon icon={faArrowRight} color="white" size={20} />
              </Button>
            </View>
            <View style={styles.c}></View>
          </View>
        </View>
      </View>
    </>
  )
}

const mapStateToProps = state => ({
  apps: state.apps
})

const mapDispatchToProps = {
  firstRun
}

export default connect(mapStateToProps, mapDispatchToProps)(Slide3);