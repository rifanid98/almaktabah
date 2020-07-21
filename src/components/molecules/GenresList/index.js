import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { moleculesStyles as styles, colors, colorScheme as color, font } from 'assets/styles';
import { connect } from 'react-redux';
import { NotFound } from 'components/atoms';

const GenresList = (props) => {
  const getColor = () => {
    let colours = [];
    Object.keys(colors).map(color => colours.push(color))
    let item = colours[Math.floor(Math.random() * colours.length)];
    return colors[item]
  }

  return (
    <>
      {props.genres.data !== undefined 
        ? props.genres.data.length > 0
          ? props.genres.data.map((genre, index) => (
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
              onPress={() => props.onPress(genre.name)}
            >
              {genre.name}
            </Text>
          ))
          : <NotFound />
        : <NotFound />
      }
    </>
  )
}

const mapStateToProps = (state) => ({
  genres: state.genres
})

export default connect(mapStateToProps)(React.memo(GenresList))