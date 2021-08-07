import React, { useRef, useState } from 'react'

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
  const [isPaused, setisPaused] = useState(true)
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
    autoplaySpeed: 500,
    lazyload: false,
    speed: 1800,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1
        },
      }
    ],
  }
  const waitForHoverAndPlay = () => {
    setTimeout(() => {      
      sliderRef?.current?.slickPlay()
    }, 900)
  }

  const stopSlider = () => {
    sliderRef.current?.slickPause()
  }

  const playSlider = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay()
    }
  }

  const toggleSlider = () => {
    if (sliderRef.current) {
      if (!isPaused)
        sliderRef.current.slickPause()
      else
        sliderRef.current.slickPlay()
      setisPaused(!isPaused)
    }
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
          )    
        )}
      </Slider>
    </Box>
  )
}

export default TVShows
