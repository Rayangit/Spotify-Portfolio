import React, { useEffect, useRef, useState } from 'react'

import { Box, useMediaQuery, useTheme, CardMedia } from '@material-ui/core'
import { Howl, Howler } from 'howler'


import { Saitama, Play, SNK } from 'assets/img'
import { SNKVideo, KurokoVideo } from 'assets/videos'
import { ExperienceProps } from 'components/Cards/interfaces'
import Stack from 'components/Containers/Stack/Stack'
import Logo from 'components/Images/Logo/Logo'
import Player from 'components/Player/Player'
import Subtitle from 'components/Text/Subtitle/Subtitle'
import Title from 'components/Text/Title/Title'

import useStyles from './styles'

const Manga: React.FunctionComponent<ExperienceProps> = ({
  company,
  date,
  bgColor,
  stack,
  job,
  logo,
}: ExperienceProps) => {
  const classes = useStyles()
  const theme = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const [displayInformation, setDisplayInformation] = useState(false)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [logoToDisplay, setLogoToDisplay] = useState(Saitama)
  const video = useRef<HTMLVideoElement>(null)
  
  useEffect(() => {
    if (!isHovered) return setDisplayInformation(false)
  }, [isHovered])
  
  const toggleHover = (value: boolean) => () => {
    setIsHovered(value)
    if (video.current)
      if (value) {
        video.current.style.opacity = '1'
        video.current.play()
      } else {
        video.current.currentTime = 0
        video.current.style.opacity = '0'
      }
  }

  const containerStyle = {
    borderRadius: 8,
    border: `2px solid ${isHovered ? '#FFFFFF' : bgColor}`,
    transition: '.5s',
  }

  // const toggleDisplayInformation = () => setDisplayInformation(!displayInformation)

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
      bgcolor={isHovered ? 'rgba(0, 0, 0, 0)' : bgColor}
      style={containerStyle}
    >
      <Stack
        spacing={1}
        className={classes.experienceCard}
        verticalAlign='center'
      >
        <Stack
          horizontalAlign='center'
          verticalAlign='center'
          spacing={3}
        >
          <CardMedia
            component='video'
            width='100%'
            height='100%'
            image={SNKVideo}
            autoPlay
            muted
            className={classes.video}
            ref={video}
            onEnded={videoEnded}
            style={{
              opacity: 1
            }}
          />
          <Box
            className={classes.information}
          />
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
              logo={Saitama}
              horizontalAlign='center'
              variant='medium'
              className={classes.saitama}
            />
          </Stack>
          <Box
            position='absolute'
            style={{ bottom: 32 }}
          >
            {!isMobile && (
              <Subtitle
                animation='slideIn'
                animationExit='slideOut'
                animationDelay='0.3s'
                isHovering={isHovered}
                variant='tiny'
              >
                {stack}
              </Subtitle>
            )}
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Manga
