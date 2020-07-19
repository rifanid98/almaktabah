import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { moleculesStyles as styles, colors, colorScheme as color, font } from 'assets/styles';

const GenresList = (props) => {
  const genres = props.genresData;
  const goToCategories = (genreId) => {
    props.navigation.navigate('searchBookByCategory', {genre_id: genreId})
  }
  
  const getColor = () => {
    let colours = [];
    Object.keys(colors).map(color => colours.push(color))
    let item = colours[Math.floor(Math.random() * colours.length)];
    return colors[item]
  }

  return (
    <>
      {genres.map((genre, index) => (
        <Text
          key={index}
          style={
            [styles.categoriesItem,
              {
                color: color.secondary,
                backgroundColor: `${getColor()}`,
                borderWidth: 0,
                borderRadius: 5,
                fontFamily: font.heading
              }]
          }
          onPress={() => goToCategories(genre.genre_id)}
        >
          {genre.genre_name}
        </Text>
      ))}
    </>
  )
}

export default GenresList;