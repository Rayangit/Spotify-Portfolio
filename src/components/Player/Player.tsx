import React, { useRef } from 'react'

import { Howl, Howler } from 'howler'

import { SongsInformations, PlaylistProps } from 'data/data'

interface Songs {
  [title: string]: Howl;
}

const Player: React.FunctionComponent = () => {

  const initHowlerPlaylist = () => {
    const allSongs: Songs = {}
    for (const song of SongsInformations) {
      allSongs[song.title] = new Howl({
        src: song.src,
        volume: 0.2,
        onend: () => nextMusic()
      })
    }
    return allSongs
  }

  const playlistSong = useRef<Songs>(initHowlerPlaylist())
  const numberOfmusic = SongsInformations.length

  const currentSound = useRef<PlaylistProps>({
    title: SongsInformations[0].title,
    artist: SongsInformations[0].artist,
    src: SongsInformations[0].src
  })


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
  }


  const pauseMusic = () => {
    if (playlistSong.current[currentSound.current.title].playing() === true) {
      playlistSong.current[currentSound.current.title].pause()
    }
  }

  const stopMusic = () => {
    if (playlistSong.current[currentSound.current.title].playing() === true) {
      playlistSong.current[currentSound.current.title].stop()
    }
  }

  const playMusic = () => {
    if (playlistSong.current[currentSound.current.title].playing() === false) {
      playlistSong.current[currentSound.current.title].play()
    }
  }

  return (
    <div>
      <button onClick={() => playMusic()}>Play</button>
      <button onClick={() => stopMusic()}>Stop</button>
      <button onClick={() => pauseMusic()}>Pause</button>
      <button onClick={() => previousMusic()}>Previous</button>
      <button onClick={() => nextMusic()}>Next</button>
    </div>
  )
}

export default Player