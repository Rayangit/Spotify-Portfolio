import React, { useRef } from 'react'

import { Box } from '@material-ui/core'
import Slider from 'react-slick'

import { TVShowLogo } from 'assets/img'
import Stack from 'components/Containers/Stack/Stack'
import Logo from 'components/Images/Logo/Logo'
import Title from 'components/Text/Title/Title'
import { TVShowInterface, TVShowsData } from 'data/data'

import useStyles from './styles'

const TVShows: React.FunctionComponent = () => {
  const classes = useStyles()
  const sliderRef = useRef<Slider>(null)
  const isPaused = useRef(false)
  const sliderProps = {
    dots: false,
    arrows: false,
    draggable: false,
    infinite: true,
    variableWidth: true,
    swipeToSlide: false,
    autoplay: false,
    swipe: false,
    pauseOnHover: false,
    slidesToShow: 2,
    autoplaySpeed: 300,
    lazyload: false,
    speed: 1200,
  }
  const waitForHoverAndPlay = () => {
    setTimeout(() => {
      playSlider()
    }, 1500)
  }

  const stopSlider = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause()
      sliderRef.current.slickGoTo(0)
    }
  }

  const playSlider = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay()
    }
  }


  const toggleSlider = () => {
    if (sliderRef.current) {
      if (!isPaused?.current)
        sliderRef.current.slickPause()
      else
        sliderRef.current.slickPlay()
      isPaused.current = !isPaused.current
    }
    return isPaused.current

  }
  return (
    <Box
      className={classes.container}
      onClick={toggleSlider}
      onMouseEnter={waitForHoverAndPlay}
      onMouseLeave={stopSlider}
    >
      <Stack 
        className={classes.neutralState}
        horizontalAlign='center'
        spacing={4}
        verticalAlign='center'
      >
        <Title variant='huge'>TV Shows</Title>
        <Logo
          logo={TVShowLogo}
          variant='medium'
        />
      </Stack>
      <Slider
        {...sliderProps}
        className={classes.slickAbout}
        ref={sliderRef}
      >
        {TVShowsData.map((tvShow: TVShowInterface, index: number) =>  
          (
            <>
              <Box
                className={classes.tvShow}
                key={index}
              >
                <Logo
                  className={classes.image}
                  logo={tvShow.image}
                  variant='huge'
                />
              </Box>
            </>
          )    
        )}
      </Slider>
    </Box>
  )
}

export default TVShows
