import React, { useEffect, useRef, useState } from 'react'

import { Box, useMediaQuery, useTheme, CardMedia } from '@material-ui/core'

import { Replay, SoundOff, SoundOn } from 'assets/img'
import Stack from 'components/Containers/Stack/Stack'
import Logo from 'components/Images/Logo/Logo'
import Title from 'components/Text/Title/Title'
import { Mangas } from 'data/data'

import useStyles from './styles'


const Manga: React.FunctionComponent = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const [displayInformation, setDisplayInformation] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const mangaIndex = useRef<number>(0)
  const video = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if(video.current) video.current.muted = isMuted
  }, [isMuted])
  useEffect(() => {
    if (video.current) {
      video.current.volume = 0.1
    }
  }, [])
  useEffect(() => {
    if (isHovered) {
      setTimeout(() => {
        video.current?.play()
      }, 800)
    } else {
      setTimeout(() => {
        video.current?.pause()
      }, 800)
      setDisplayInformation(false)
    } 
  }, [isHovered])

  const toggleHover = (value: boolean) => () => {
    setIsHovered(value)
    if (video.current)
      if (value) video.current.style.opacity = '1'
      else video.current.style.opacity = '0'
    if (!value) {
      if (Mangas.length - 1 === mangaIndex.current) mangaIndex.current = 0
      else mangaIndex.current++
    }
  }
  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const replayVideo = () => {
    setDisplayInformation(false)
    if (video.current) {
      video.current.currentTime = 0
      video.current.play()
      video.current.style.opacity = '1'
    }
  }

  const bottomButton = {
    logo: displayInformation ? Replay : isMuted ? SoundOff : SoundOn,
    onClick: displayInformation ? replayVideo : toggleMute
  }
  const containerStyle = {
    borderRadius: 8,
    border: `2px solid ${isHovered ? '#FFFFFF' : '#DB0D16'}`,
    transition: '.5s',
  }

  const videoEnded = () => {
    if (video.current) {
      video.current.style.opacity = '0'
    }
    setTimeout(() => {
      setDisplayInformation(true)
    }, 800)
  }

  return (
    <Box
      onMouseEnter={toggleHover(true)}
      onMouseLeave={toggleHover(false)}
      bgcolor={isHovered && !displayInformation ? 'rgba(0, 0, 0, 0)' : '#DB0D16'}
      style={containerStyle}
    >
      <Stack
        spacing={4}
        className={classes.experienceCard}
        horizontalAlign='center'
        verticalAlign='center'
      >
        <CardMedia
          component='video'
          width='100%'
          height='100%'
          image={Mangas[mangaIndex.current].src}
          className={classes.video}
          ref={video}
          onEnded={videoEnded}
          style={{
            opacity: 1
          }}
        />
        { displayInformation && (
          <Box
            className={classes.information}
          >
            <Title
              variant='medium'
              textAlign='center'
              className={classes.informationTitle}
            >{Mangas[mangaIndex.current].title}</Title>
            <Logo
              logo={Mangas[mangaIndex.current].icon}
              horizontalAlign='center'
              variant='tiny'
              className={classes.logoInformation}
            />
          </Box>
        )}
        <Title
          variant='huge'
          className={classes.texte}
        >
            Manga
        </Title>
      
        <Stack
          isRow
          horizontalAlign='center'
          verticalAlign='center'
        >
          <Logo
            logo={Mangas[mangaIndex.current].thumb}
            horizontalAlign='center'
            variant='medium'
            className={classes.saitama}
          />
        </Stack>
        { isHovered && 
          <Logo
            className={`${classes.logoMute} ${displayInformation && classes.spinner}`}
            logo={bottomButton.logo}
            variant='tiny'
            onClick={bottomButton.onClick}
          />}
      </Stack>
    </Box>
  )
}

export default Manga
