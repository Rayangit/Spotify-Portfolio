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
    borderRadius: 16,
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
      bgcolor={isHovered && !displayInformation ? 'rgba(0, 0, 0, 0)' : '#DB0D16'}
      onMouseEnter={toggleHover(true)}
      onMouseLeave={toggleHover(false)}
      style={containerStyle}
    >
      <Stack
        className={classes.experienceCard}
        horizontalAlign='center'
        spacing={4}
        verticalAlign='center'
      >
        <CardMedia
          className={classes.video}
          component='video'
          height='100%'
          image={Mangas[mangaIndex.current].src}
          onEnded={videoEnded}
          ref={video}
          style={{
            opacity: 1
          }}
          width='100%'
        />
        { displayInformation && (
          <Box
            className={classes.information}
          >
            <Title
              className={classes.informationTitle}
              textAlign='center'
              variant='medium'
            >{Mangas[mangaIndex.current].title}</Title>
            <Logo
              className={classes.logoInformation}
              horizontalAlign='center'
              logo={Mangas[mangaIndex.current].icon}
              variant='tiny'
            />
          </Box>
        )}
        <Title
          className={classes.texte}
          variant='huge'
        >
            Manga
        </Title>
        <Logo
          className={classes.saitama}
          horizontalAlign='center'
          logo={Mangas[mangaIndex.current].thumb}
          variant='medium'
        />
        { isHovered && 
          <Logo
            className={`${classes.logoMute} ${displayInformation && classes.spinner}`}
            logo={bottomButton.logo}
            onClick={bottomButton.onClick}
            variant='tiny'
          />}
      </Stack>
    </Box>
  )
}

export default Manga
