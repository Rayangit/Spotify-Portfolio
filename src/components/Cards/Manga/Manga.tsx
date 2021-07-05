import React, { useRef, useState } from 'react'

import { Box, useMediaQuery, useTheme } from '@material-ui/core'
import { Howl, Howler } from 'howler'

import { Saitama, Play, SNK } from 'assets/img'
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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [logoToDisplay, setLogoToDisplay] = useState(Saitama)

  if (isHovered === true) {
    setTimeout(() => {
      if (// playlistSong.current[currentSound.current.title].playing() === false
        isMobile
      ) {
        setLogoToDisplay(Play)
      } else {
        setLogoToDisplay(Play)
      }
    }, 500)
  } else {
    setTimeout(() => {
      setLogoToDisplay(logo)
    }, 300)
  }

  const containerStyle = {
    borderRadius: 8,
    border: `2px solid ${isHovered ? '#FFFFFF' : bgColor}`,
    transition: '.5s',
    backgroundImage: `url(${SNK})`
  }

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // bgcolor={isHovered ? 'rgba(0, 0, 0, 0)' : bgColor}
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
