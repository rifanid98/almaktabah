import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { ScreenHeader, ListItems } from 'components'
import { templateStyles as template, moleculesStyles as molecules } from 'assets/styles'
import { connect } from 'react-redux'
import { getHistories } from 'modules'
import { createUrlParamFromObj, convertDate } from 'utils'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const MyHistory = (props) => {

  useEffect(() => {
    getHistoriesByUserId()
  }, [])

  useEffect(() => {
    console.log(props.histories, 'props histories');
  }, [props.histories])
  
  const getData = (datas) => {
    let collection = []
    // Interface Setter
    let i = 1
    datas.map((data, index) => {
      data.number = i
      collection.push({
        image: getItemImage(data),
        info: getItemInfo(data)
      })
      i++;
    })
    return collection;
  }
  const getItemImage = (item) => {
    return item.image
  }
  const getItemInfo = (item) => {
    return (
      <>
        <Text style={molecules.listItemTitleNoImage}>{item.number}.</Text>
        <Text style={molecules.listItemBodyNoImage}>{item.title}</Text>
        <Text style={molecules.listItemBodyNoImage}>{convertDate(item.updated)}</Text>
      </>
    )
  }
  const getHistoriesByUserId =  () => {
    const token = props.auth.data.tokenLogin
    if (token) {
      const userId = props.auth.data.user_id
      const params = createUrlParamFromObj(userId);
      props.getHistories(token, params)
        .then((res) => {
        }).catch((error) => {
          console.log(`get my histories failed`)
        })
    }
  }
  return (
    <>
      <View style={template.container}>
        <ScreenHeader navigation={props.navigation} title="My History" />
        <ListItems layout="listItemNoImage" data={getData(props.histories.data ? (props.histories.data.length > 0 ? props.histories.data : []) : [])}/>
      </View>
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  histories: state.histories
})

const mapDispatachToProps = {
  getHistories
}

export default connect(mapStateToProps, mapDispatachToProps)(MyHistory);