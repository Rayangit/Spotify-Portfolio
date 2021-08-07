import React, {  useState } from 'react'

import { Box } from '@material-ui/core'

import { Controller, LeftChevron, RightChevron } from 'assets/img'
import Stack from 'components/Containers/Stack/Stack'
import Logo from 'components/Images/Logo/Logo'
import Title from 'components/Text/Title/Title'
import { VideoGames } from 'data/data'

import useStyles from './styles'

const VideoGame: React.FunctionComponent = () => {
  const classes = useStyles()
  
  const [ isHovered, setIsHovered ] = useState(false)
  const [ currentBackground, setCurrentBackground ] = useState(0)

  const nextBackground = () => {
    if (currentBackground === VideoGames.length - 1)
      setCurrentBackground(0)
    else
      setCurrentBackground(currentBackground + 1)
  }

  const previousBackground = () => {
    if (currentBackground === 0)
      setCurrentBackground(VideoGames.length - 1)
    else
      setCurrentBackground(currentBackground - 1)
  }

  return (
    <Box 
      className={classes.mainContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        className={classes.imageBackground}
        style={{
          backgroundImage: `url(${VideoGames[currentBackground].img})`,
        }}
      />
      <Stack
        className={classes.videoGamesCard}
        spacing={1}
        verticalAlign='center'
      >
        <Stack
          horizontalAlign='center'
          spacing={2}
          verticalAlign='center'
        >
          <Title variant='huge'>Video Game</Title>
          <Logo
            horizontalAlign='center'
            logo={Controller}
            variant='medium'
          />
        </Stack>
      </Stack>
      <Stack
        className={classes.buttonsContainer}
      >
        <Logo
          className={classes.button}
          logo={LeftChevron}
          onClick={() => previousBackground()}
          variant='tiny'
        />
        <Title
          textAlign='center'
          variant='big'
        >{VideoGames[currentBackground].type}</Title>
        <Logo
          className={classes.button}
          logo={RightChevron}
          onClick={() => nextBackground()}
          variant='tiny'
        />
      </Stack>
    </Box>
  )
}

export default VideoGame
