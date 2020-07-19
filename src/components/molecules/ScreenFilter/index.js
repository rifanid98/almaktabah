import React, { memo, useState, useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { moleculesStyles as styles } from 'assets/styles'

const ScreenFilter = memo((props) => {
  const [sort, setSort] = useState(true)
  const [sortBy, setSortBy] = useState(null)
  
  // const getSort = ;
  const sortType = props.filterItems.sortType[sort ? 'asc' : 'desc']
  const searchSortBy = props.filterItems.sortBy
  return (
    <>
      
      <View style={styles.filter}>
        <View style={styles.filterItemsLeft}>
          <Text style={[styles.filterItem]}>Result</Text>
        </View>
        <View style={styles.filterItemsRight}>
          <Text style={[styles.filterItem, styles.filterItemRight]} onPress={() => setSort(!sort)}>{sortType}</Text>
          {Object.keys(searchSortBy).map((sortBy, index) => <Text key={index} style={[styles.filterItem, styles.filterItemRight]} onPress={() => setSortBy(sortBy)}>{searchSortBy[`${sortBy}`]}</Text>)}
        </View>
      </View>
    </>
  )
})

export default ScreenFilter;