import React, { useRef, useState } from 'react'

import { Box, useMediaQuery, useTheme } from '@material-ui/core'
import { Howl, Howler } from 'howler'

import { Pause, Play, Previous, Next } from 'assets/img'
import { ExperienceProps } from 'components/Cards/interfaces'
import { SongsInterface } from 'components/Cards/interfaces'
import Stack from 'components/Containers/Stack/Stack'
import Logo from 'components/Images/Logo/Logo'
import Player from 'components/Player/Player'
import Subtitle from 'components/Text/Subtitle/Subtitle'
import Title from 'components/Text/Title/Title'
import { SongsInformations, PlaylistProps } from 'data/data'

import useStyles from './styles'

const Music: React.FunctionComponent<ExperienceProps> = ({
  company,
  date,
  bgColor,
  stack,
  job,
  logo,
}: ExperienceProps) => {
  const classes = useStyles()
  const theme = useTheme()
  const [ isHovered, setIsHovered ] = useState(false)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [ logoToDisplay, setLogoToDisplay ] = useState(logo)


  const initHowlerPlaylist = () => {
    const allSongs: SongsInterface = {}
    for (const song of SongsInformations) {
      allSongs[song.title] = new Howl({
        src: song.src,
        volume: 0.2,
        onend: () => nextMusic()
      })
    }
    return allSongs
  }

  const playlistSong = useRef<SongsInterface>(initHowlerPlaylist())
  const numberOfmusic = SongsInformations.length

  const currentSound = useRef<PlaylistProps>({
    title: SongsInformations[0].title,
    artist: SongsInformations[0].artist,
    src: SongsInformations[0].src
  })
  const [artist, setArtist] = useState(SongsInformations[0].artist)
  const [title, setTitle] = useState(SongsInformations[0].title)

  const getCurrentSound = () => {
    return SongsInformations.findIndex(x => x.title === currentSound.current.title)
  }

  const nextMusic = () => {
    const currentSoundIndex = getCurrentSound()
    playlistSong.current[currentSound.current.title].stop()
    if (currentSoundIndex === numberOfmusic - 1) {
      currentSound.current = {
        title: SongsInformations[0].title,
        artist: SongsInformations[0].artist,
        src: SongsInformations[0].src
      }
    }
    else {
      currentSound.current = {
        title: SongsInformations[currentSoundIndex + 1].title,
        artist: SongsInformations[currentSoundIndex + 1].artist,
        src: SongsInformations[currentSoundIndex + 1].src
      }
    }
    playlistSong.current[currentSound.current.title].play()
    setTitle(currentSound.current.title)
    setArtist(currentSound.current.artist)
  }

  const previousMusic = () => {
    const currentSoundIndex = getCurrentSound()
    playlistSong.current[currentSound.current.title].stop()

    if (currentSoundIndex === 0) {
      currentSound.current = {
        title: SongsInformations[numberOfmusic - 1].title,
        artist: SongsInformations[numberOfmusic - 1].artist,
        src: SongsInformations[numberOfmusic - 1].src
      }
    }
    else {
      currentSound.current = {
        title: SongsInformations[currentSoundIndex - 1].title,
        artist: SongsInformations[currentSoundIndex - 1].artist,
        src: SongsInformations[currentSoundIndex - 1].src
      }
    }
    playlistSong.current[currentSound.current.title].play()
    setTitle(currentSound.current.title)
    setArtist(currentSound.current.artist)
  }


  const pauseMusic = () => {
    if (playlistSong.current[currentSound.current.title].playing() === true) {
      playlistSong.current[currentSound.current.title].pause()
      setLogoToDisplay(Play)
    }
  }

  const stopMusic = () => {
    if (playlistSong.current[currentSound.current.title].playing() === true) {
      playlistSong.current[currentSound.current.title].stop()
    }
  }

  const playAndPauseMusic = () => {
    if (playlistSong.current[currentSound.current.title].playing() === false) {
      playlistSong.current[currentSound.current.title].play()
      setLogoToDisplay(Pause)
    }
    else {
      playlistSong.current[currentSound.current.title].pause()
      setLogoToDisplay(Play)
    }
  }


  if (isHovered === true) {
    setTimeout(() => {
      if (playlistSong.current[currentSound.current.title].playing() === false) {
        setLogoToDisplay(Play)
      }
      else {
        setLogoToDisplay(Pause)
      }
    }, 500)
  }
  else {
    setTimeout(() => {
      setLogoToDisplay(logo)
      stopMusic()
    }, 300)
  }

  const animation = isHovered ? 'biggerCard' : 'smallerCard'
  const containerStyle = {
    borderRadius: 8,
    border: `2px solid ${isHovered ? '#FFFFFF' : bgColor}`,
    transition: '.5s',
  }

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      bgcolor={bgColor}
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
          spacing={2}
        >
          <Title
            variant='huge'
            className={classes.texte}
          >Music</Title>
          <Stack
            horizontalAlign='center'
            verticalAlign='center'
            spacing={2}
            className={classes.songTitle}
          >
            <Title
              variant='medium'
              textAlign='center'
            >{artist + ' - ' + title}</Title>
          </Stack>
          <Stack
            isRow
            horizontalAlign='center'
            verticalAlign='center'
            spacing={4}
          >
            <Logo
              logo={Previous}
              horizontalAlign='center'
              variant='tiny'
              className={classes.nextAndPrevious}
              onClick={previousMusic}
            />
            <Logo
              logo={logoToDisplay}
              horizontalAlign='center'
              variant='medium'
              className={classes.logo}
              onClick={playAndPauseMusic}
            />
            <Logo
              logo={Next}
              horizontalAlign='center'
              variant='tiny'
              className={classes.nextAndPrevious}
              onClick={nextMusic}
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
              >{stack}</Subtitle>
            )}
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Music
