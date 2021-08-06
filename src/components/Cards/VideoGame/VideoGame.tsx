import React, { useRef, useState } from 'react'

import { Box, useMediaQuery, useTheme } from '@material-ui/core'
import Slider from 'react-slick'

import { Spotify } from 'assets/img'
import { Controller, Pause, Play, Previous, Next, LeftChevron, RightChevron } from 'assets/img'
import { ExperienceProps } from 'components/Cards/interfaces'
import Clickable from 'components/Containers/Clickable/Clickable'
import Stack from 'components/Containers/Stack/Stack'
import Logo from 'components/Images/Logo/Logo'
import Title from 'components/Text/Title/Title'
import { getImgUrl, VideoGames } from 'data/data'

import useStyles from './styles'

const VideoGame: React.FunctionComponent = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [ isHovered, setIsHovered ] = useState(false)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [ currentBackground, setCurrentBackground ] = useState(0)
  // const [ logoToDisplay, setLogoToDisplay ] = useState(Controller)
  // const [ backgroundToDisplay, setBackgroundToDisplay ] = useState(0)

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

  if (isHovered === true) {
    setTimeout(() => {
      // if (playlistSong.current[currentSound.current.title].playing() === false) {
      // setLogoToDisplay(Play)
      // }
      // else {
      // setLogoToDisplay(Pause)
      // }
    }, 500)
  }
  else {
    setTimeout(() => {
      // setLogoToDisplay(Controller)
      // stopMusic()
    }, 300)
  }

  const animation = isHovered ? 'biggerCard' : 'smallerCard'
  const containerStyle = {
    borderRadius: 8,
    border: `2px solid ${isHovered ? '#FFFFFF' : '#006450'}`,
    transition: '.5s',
  }
  const sliderProps = {
    // dots: false,
    // draggable: false,
    // onSwipe: swipe,
    // infinite: true,
    // variableWidth: true,
    // swipeToSlide: true,
    // swipe: true,
    // lazyload: false,
    // speed: 300,
    // slidesToShow: 1,
    // slidesToScroll: 1
    dots: false,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Box style={{
      display: 'flex',
      flexDirection: 'column'
    }}
    >

      <Box
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        bgcolor='#006450'
        style={containerStyle}
      >
        <Stack
          spacing={1}
          className={classes.experienceCard}
          verticalAlign='center'
          style={isHovered ? {
            backgroundColor: 'transparent',
            backgroundImage: `url(${VideoGames[currentBackground].img})`,
            // backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            transition: '.8s',
          } : {
            // opacity: 0
          }}
        >
          <Stack
            horizontalAlign='center'
            verticalAlign='center'
            spacing={2}
          >
            <Title
              variant='huge'
              className={classes.texte}
            >Video Game</Title>
            {/* <Stack
            isRow
            horizontalAlign='center'
            verticalAlign='center'
            spacing={4}
          > */}
            <Logo
              logo={getImgUrl(Controller)}
              horizontalAlign='center'
              variant='medium'
              className={classes.logo}
            />
            {/* </Stack> */}
          </Stack>
          {/* <Slider
            className={`${classes.slick}`}
            {...sliderProps}
          >
            {Object.keys(VideoGames).map((key: string , index: number) => {
              const { title, img, type } = VideoGames[index]
              return (
                <Logo
                  key={key}
                  logo={img}
                  horizontalAlign='center'
                  variant='medium'
                  // className={classes.logo}
                  // active={index + 1 === filter}
                  // logo={icon}
                  // language={key}
                  // companies={frameworks}
                  // bgColor={bgColor}
                />
              )
            })}
          </Slider> */}
        </Stack>
        <Stack
          // horizontalAlign='left'
          // verticalAlign='center'
          spacing={2}
          // className={classes.songTitle}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'transparent',
          }}
        >
          <Logo
            logo={getImgUrl(LeftChevron)}
            horizontalAlign='center'
            variant='small'
            className={classes.button}
            onClick={() => previousBackground()}
          />
          <Title
            variant='big'
            textAlign='center'
            className={classes.songTitle}
          >{VideoGames[currentBackground].type}</Title>
          <Logo
            logo={getImgUrl(RightChevron)}
            horizontalAlign='center'
            variant='small'
            className={classes.button}
            onClick={() => nextBackground()}
          />
        </Stack>
      </Box>
    </Box>
  )
}

export default VideoGame
