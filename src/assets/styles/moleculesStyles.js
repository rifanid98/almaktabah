import { StyleSheet } from 'react-native'
import { font } from './font';
import { colorScheme as color } from './index';
import colors from './colors';

/**
 * Style Variables
 */
const dimension = {
  // height: 150,
  // width: 120,

  height: 190,
  width: 138,
}

const textHeading = {
  fontFamily: font.heading,
  fontSize: 20
}
const textBody = {
  fontFamily: font.body,
  fontSize: 20
}
const actionItemText = {
  padding: 7,
  color: color.primary,
  borderRadius: 3,
  fontFamily: font.heading
}

/**
 * Main Styles
 */
const moleculesStyles = StyleSheet.create({
  header: {
    marginTop: 45,
    marginBottom: 30,
    flexDirection: 'row',
  },
  a: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  b: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  c: {
    // flex: 1
  },
  headerTitle: {
    fontFamily: font.title,
    color: color.font.primary,
    fontSize: 40,
  },
  clearButton: {
    margin: 10,
    color: color.primary,

  },
  clearButtonContainer: {
    borderColor: color.primary
  },

  // Search
  search: {
    flexDirection: 'row'
  },
  formControl: {
    flex: 1
  },
  button: {
    width: 50,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginTop: -2,
    borderBottomWidth: 2,
  },
  buttonContainer: {
    height: 50.5,
    width: 50,
    // backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: color.accent
  },
  input: {
    fontFamily: font.body,
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: color.accent,
  },

  // Search Filter
  filter: {
    marginTop: 50,
    marginBottom: 20,
    flexDirection: 'row',
  },
  filterItemsLeft: {
    flex: 1,
  },
  filterItemsRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  filterItem: {
    fontFamily: font.bodyBold,
    fontSize: 21,
    textTransform: "capitalize"
  },
  filterItemRight: {
    marginLeft: 10
  },

  /**
   * Grid Items Item
   */
  gridItem: {
    marginHorizontal: 6,
    marginBottom: 20,
    flexDirection: 'column',
  },
  bookImage: {
    ...dimension,
    resizeMode: 'stretch'
  },
  bookInfo: {
    // paddingHorizontal: 15,
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    ...textBody,
    width: 138,
    fontFamily: font.heading,
    textAlign: 'center'
  },
  author: {
   ...textBody
  },
  genre: {
    ...textBody,
    color: 'brown'
  },
  reads: {
   ...textBody
  },
  
  // categoriesItem
  categoriesItems: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
    marginRight: 20
  },
  categoriesItem: {
    marginRight: 10,
    backgroundColor: color.secondary,
    borderWidth: 1,
    borderColor: color.accent,
    overflow: 'hidden',
    height: 30,
    padding: 7,
  },

  /**
   * List Items (with image)
   */
  // Wrapper
  listItem: {
    flexDirection: 'row',
    marginBottom: 10
  },
  listItemImage: {
    height: 150,
    width: 110,
    marginRight: 10,
    resizeMode: 'cover',
  },

  // Item Info
  listItemItemInfo: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  listItemTitle: {
    ...textHeading
  },
  listItemBody: {
    ...textBody
  },
  listItemBodyHighlight: {
    ...textBody,
    color: color.font.accent
  },
  listItemAction: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  listItemActionItem: {
    marginRight: 10,
  },
  listItemActionIcon: {
    color: color.primary
  },
  listItemEdit: {
    ...actionItemText,
    backgroundColor: colors.yellow,
  },
  listItemDelete: {
    ...actionItemText,
    backgroundColor: colors.red,
  },

  /**
   * List Items (no image)
   */
  // Wrapper
  listItemNoImage: {
    flexDirection: 'row',
    marginBottom: 10
  },

  
  listItemTitleNoImage: {
    ...textHeading,
    marginRight: 10
  },
  listItemBodyNoImage: {
    ...textBody,
    flex: 1
  },
  listItemBodyHighlightNoImage: {
    ...textBody,
    color: color.font.accent
  },
  listItemActionNoImage: {
    flexDirection: 'row',
  },
  listItemActionItemNoImage: {
    marginLeft: 10,
  },
  listItemActionIconNoImage: {
    color: color.primary
  },
  listItemEditNoImage: {
    ...actionItemText,
    backgroundColor: colors.yellow,
  },
  listItemDeleteNoImage: {
    ...actionItemText,
    backgroundColor: colors.red,
  },

  /**
   * MyForms
   */
  // General Input
})

export default moleculesStyles;