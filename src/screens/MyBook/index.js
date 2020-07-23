import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { ScreenHeader, ListItems } from 'components'
import { templateStyles as template, moleculesStyles as molecules } from 'assets/styles'
import { connect } from 'react-redux'
import { getHistories, getPendingHistories } from 'modules'
import { createUrlParamFromObj, convertDate } from 'utils'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const MyBook = (props) => {

  useEffect(() => {
    props.getHistories(props.auth.data.tokenLogin)
  }, [])

  useEffect(() => {
    console.log(props.histories.data);
  }, [props.histories])
  return (
    <>
      <View style={template.container}>
        <ScreenHeader navigation={props.navigation} title="My Book" />
      </View>
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  histories: state.histories
})

const mapDispatachToProps = {
  getHistories,
  getPendingHistories
}

export default connect(mapStateToProps, mapDispatachToProps)(MyBook);