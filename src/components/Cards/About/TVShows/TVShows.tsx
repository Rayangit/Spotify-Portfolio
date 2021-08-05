import React, { useRef } from 'react'

import { Box } from '@material-ui/core'
import Slider from 'react-slick'

import Logo from 'components/Images/Logo/Logo'
import Subtitle from 'components/Text/Subtitle/Subtitle'
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
    }, 2400)
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
      <Box className={classes.neutralState}>
        <Subtitle variant='big'>TV Shows</Subtitle>
      </Box>
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
