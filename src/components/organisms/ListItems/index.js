import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { organismsStyles as styles} from 'assets/styles';
import { ListItem } from 'components/molecules';

const ListItems = (props) => {
  const datas = props.data
  return (
    <>
      <ScrollView>
        <View style={styles.listItems}>
          {datas.map((data, index) => (
            <ListItem
              key={index}
              image={data.image}
              info={data.info}
              layout={props.layout}
              />
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default ListItems;