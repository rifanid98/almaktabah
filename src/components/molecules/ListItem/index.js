import React from 'react'
import { ListItemNoImage, ListItemWithImage } from 'components/atoms';

const ListItem = (props) => {
  const showListItem = (getListItem, propsItem) => {
    switch (getListItem) {
      case 'listItemNoImage':
        return <ListItemNoImage {...propsItem} />
      
      case 'listItemWithImage':
        return <ListItemWithImage {...propsItem} />
    
      default:
        break;
    }
  }
  
  return (
    <>
      {showListItem(props.layout, props)}
    </>
  )
}
export default ListItem;