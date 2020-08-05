import { StyleSheet } from 'react-native'
import { font } from './font';
import {colorScheme as color} from './index';

/**
 * Style Variables
 */
const wrapper = {
  flexDirection: 'column',
  // marginHorizontal: 20,
  marginBottom: 50,
}
const title = {
  fontFamily: font.title,
  fontSize: 27,
  marginHorizontal: 20,
  marginBottom: 10,
}
const items = {
  flex: 1,
  flexDirection: 'row',
  paddingRight: 20
}
const dimension = {
  height: 150,
  width: 110,
}
const item = {
  ...dimension,
  marginRight: 10,
  backgroundColor: color.secondary,
  borderWidth: 1,
  borderColor: color.accent,
  overflow: 'hidden'
}
/**
 * Main Styles
 */
const mainStyles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: color.primary,
  },
  /**
   * Header
   */
  header: {
    marginTop: 45,
    marginHorizontal: 20,
    marginBottom: 50,
    flexDirection: 'column',
  },
  // Brand
  brand: {
    fontFamily: font.title,
    fontSize: 25
  },

  // Info
  info: {
    flexDirection: 'row',
  },

  // Date
  dates: {
    flex: 1,
    paddingTop: 10,
    flexDirection: 'row',
  },
  mainDate: {
    fontFamily: font.bodyBold,
    fontSize: 65,
    marginTop: -15,
  },
  day: {
    fontFamily: font.bodyBold,
    fontSize: 20
  },
  monthYear: {
    fontFamily: font.bodyBold,
    fontSize: 20
  },

  // Administrator
  admin: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20
  },
  adminIcon: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  // Profile
  profileIcon: {
    // flex: 1,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 100,
    overflow: 'hidden'
  },
  myText: {
    marginTop: -25,
    width: 60, 
    height: 87,
    textAlign: 'right'
  },
  profileImage: {
    height: 60, width: 60,
    resizeMode: 'cover',
    borderRadius: 500
  },
  search: {
    marginTop: 20,
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

  // content
  content: {
    flex: 1,
    flexDirection: 'column',
  },

  // Global ScrollView
  scrollView: {
    paddingLeft: 20
  },

  // New Arrivals
  newArrivals: {
    ...wrapper
  },
  newArrivalsTitle: {
    ...title
  },
  newArrivalsItems: {
    ...items
  },
  newArrivalsItem: {
   ...item
  },

  // Categories
  categories: {
    ...wrapper
  },
  categoriesTitle: {
    ...title
  },
  categoriesItems: {
    ...items
  },
  categoriesItem: {
    ...item,
    height: 30,
    padding: 7,
    width: 'auto'
  },

  // Trending
  trending: {
    ...wrapper
  },
  trendingTitle: {
    ...title
  },
  trendingItems: {
    ...items
  },
  trendingItem: {
    ...item
  },

  // All Books
  allBooks: {
    ...wrapper,
    marginLeft: 20,
    marginRight: 0,
  },
  allBooksTitle: {
    ...title
  },
  allBooksItems: {
    ...items,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  allBooksItem: {
    ...item,
    height: 195,
    width: 143,
    marginBottom: 10,
  },

  bookImage: {
    ...dimension
  }
})

export default mainStyles;