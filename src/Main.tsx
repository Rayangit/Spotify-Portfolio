import React, { useEffect, useRef, useState } from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Box, useMediaQuery } from '@material-ui/core'
import { createStyles, Theme, useTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'

import {
  ChevronLeft,
  ChevronRight,
} from 'assets/img'
import { Spotify, Saitama } from 'assets/img'
import Education from 'components/Cards/Education/Education'
import Experience from 'components/Cards/Experience/Experience'
import Manga from 'components/Cards/Manga/Manga'
import Music from 'components/Cards/Music/Music'
import Technology from 'components/Cards/Technology/Technology'
import VideoGame from 'components/Cards/VideoGame/VideoGame'
import Clickable from 'components/Containers/Clickable/Clickable'
import Modal from 'components/Containers/Modal/Modal'
import Stack from 'components/Containers/Stack/Stack'
import Footer from 'components/Layout/Footer/Footer'
import Header from 'components/Layout/Header/Header'
import Player from 'components/Player/Player'
import Title from 'components/Text/Title/Title'
import { schools, experiences, TechnicalStack, TechnicalStackKeys, ModalPropsType } from 'data/data'

const Main: React.FunctionComponent = () => {

  const useStyles = makeStyles((theme: Theme) => createStyles({
    app: {
      display: 'flex',
      flexDirection: 'column',
      padding: '32px',
      transition: '0.3s',
      [theme.breakpoints.down('sm')]: {
        padding: '16px',
      },
    },
    educationStack: {
      '& > div': {
        flex: 0.5,
      } 
    },
    slick: {
      '&:hover .slick-prev, &:hover .slick-next': {
        display: 'block !important',
        [theme.breakpoints.down('sm')]: {
          display: 'none !important'
        },
      },
      '& .slick-prev': {
        width: 48,
        display: 'none !important',
        height: '100%',
        left: 0,
        zIndex: 10,
        transition: '0.8s',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        '&:hover': {
          '&::before': {
            width: 36,
            height: 36
          },
          background: '#00000073',
          transition: '0.8s'
        },
        '&::before': {
          content: '\' \' !important',
          backgroundSize: 'cover',
          width: '32px',
          margin: 'auto',
          display: 'block',
          backgroundImage: `url(${ChevronLeft})`,
          height: '32px',
          position: 'absolute',
          left: 0,
          transition: '0.8s',
          bottom: 0,
          top: 0
        },
      },
      '& .slick-next': {
        width: 48,
        display: 'none !important',
        height: '100%',
        zIndex: 10,
        transition: '0.8s',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        right: 0,
        '&:hover': {
          '&::before': {
            width: 36,
            height: 36
          },
          background: '#00000073',
          transition: '0.8s'
        },
        '&::before': {
          content: '\' \' !important',
          backgroundSize: 'cover',
          width: '32px',
          margin: 'auto',
          display: 'block',
          backgroundImage: `url(${ChevronRight})`,
          height: '32px',
          transition: '0.8s',
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
        },
      },
      '& .slick-slide': {
        marginRight: 16,
        width: 'fit-content !important',
        [theme.breakpoints.down('sm')]: {
          marginRight: 8,
        },
      }
    },
    slickTechnology: {
      '& .slick-prev, & .slick-next': {
        height: 292,
      },
    },
    slickEducation: {
      '& .slick-slide': {
        marginRight: 16,
        [theme.breakpoints.up('sm')]: {
          width: `calc(${window.innerWidth}px / 1.1) !important`,
        },
        [theme.breakpoints.down('sm')]: {
          marginRight: 8,
        }
      }
    },
  }))
  const classes = useStyles()
  const [isSwiping, setIsSwiping] = useState(false)

  const swipe = () => setIsSwiping(!isSwiping)
  const sliderProps = {
    dots: false,
    draggable: false,
    onSwipe: swipe,
    infinite: false,
    variableWidth: true,
    swipeToSlide: true,
    swipe: true,
    lazyload: false,
    speed: 300,
  }
  const [modalData, setModalData] = useState<ModalPropsType | undefined>(undefined)
  const [filter, setFilter] = useState<TechnicalStackKeys | undefined>(undefined)
  const [filteredExperiences, setFilteredExperiences] = useState<ModalPropsType[]>(experiences)
  const [isLeftCard, setIsLeftCard] = useState(false)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const experienceCardRef = Array(experiences.length).fill(0).map(() => useRef<HTMLDivElement>(null))
  const experienceCardIndex = useRef<number>(-1)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const closeModal = () => {
    if (!modalData?.mainTechno)
    {
      if (leftRef.current && rightRef.current)
      {
        if (isLeftCard)
          leftRef.current.style.animationName = isMobile ? 'backInDown' : 'backInLeft' 
        else
          rightRef.current.style.animationName = isMobile ? 'backInDown' : 'backInRight'
      }
    }
    else {
      const cardRef = experienceCardRef[experienceCardIndex.current].current
      
      if (cardRef) 
        cardRef.style.animationName = 'backInDown'
      experienceCardIndex.current = -1
    }
    setModalData(undefined)
  }

  const openExperienceModal = (index: number, data?: ModalPropsType) => () => {
    const cardRef = experienceCardRef[index].current
    if (cardRef) 
      cardRef.style.animationName = 'backOutDown'
    experienceCardIndex.current = index
    setTimeout(() => {
      setModalData(data)
    }, 500)
  }
  const openEducationModal = (index: number, data?: ModalPropsType) => {
    if (index === 0) {
      if (leftRef.current)
        leftRef.current.style.animationName = isMobile ? 'backOutDown' : 'backOutLeft'
      setIsLeftCard(true)
    }
    else {
      if (rightRef.current)
        rightRef.current.style.animationName = isMobile ? 'backOutDown' : 'backOutRight'
      setIsLeftCard(false)
    }
    // setModalAnimation('backInDown')
    setTimeout(() => {
      setModalData(data)
    }, 500)
  }
  useEffect(() => {
    filter 
      ? setFilteredExperiences(experiences.filter(experience => experience.mainTechno?.includes(filter) ))
      : setFilteredExperiences(experiences)
  }, [filter])
  const processFilter = (index: number) => () => {
    index === filter 
      ? setFilter(undefined)
      : setFilter(index)
  }
  return (
    <Box
      className={classes.app}
      style={{
        filter: modalData ? 'blur(10px)' : undefined
      }}
    >
      <Header />
      <Box mt={5}>
        <Box mb={2}>
          <Title variant='medium'>Experiences</Title>
        </Box>
        <Slider
          className={classes.slick}
          {
            ...{
              ...sliderProps,
            }
          }
        >
          {filteredExperiences.map((experience, index) => {
            return (
              <Clickable
                key={index}
                onClick={openExperienceModal(index, experience)}
              >
                <Experience
                  ref={experienceCardRef[index]}
                  isAnimated={!!modalData?.mainTechno}
                  bgColor={experience.bgColor}
                  date={experience.date}
                  company={experience.subtitle}
                  logo={experience.source}
                  job={experience.title}
                  stack={experience.stack}
                />
              </Clickable>
            )
          })}
        </Slider>
      </Box>
      <Box mt={5}>
        <Box mb={2}>
          <Title variant='medium'>Languages</Title>
        </Box>
        <Slider
          className={`${classes.slick} ${classes.slickTechnology}`}
          {...sliderProps}
        >
          {Object.keys(TechnicalStack).map((key: string , index: number) => {
            const { bgColor, frameworks, icon } = TechnicalStack[key]
            return (
              <Clickable
                key={index}
                onClick={processFilter(index + 1)}
              >
                <Technology
                  active={index + 1 === filter}
                  logo={icon}
                  language={key}
                  companies={frameworks}
                  bgColor={bgColor}
                />
              </Clickable>
            )
          })}
        </Slider>
      </Box>
      <Box
        mt={5}
      >
        <Box mb={2}>
          <Title variant='medium'>Education</Title>
        </Box>
        { isMobile ? (
          <Slider
            className={`${classes.slick} ${classes.slickEducation}`}
            {...{...sliderProps, infinite: false}}
          >
            {schools.map((school: ModalPropsType , index: number) => (
              <Education
                ref={index === 0 ? leftRef : rightRef}
                logo={school.source}
                diplomaName={school.title}
                onClick={() => openEducationModal(index, school)}
                key={index}
                bgColor={school.bgColor}
                location={school.location}
                date={school.date}
              />
            ))}
          </Slider> ) : (
          <Stack
            isRow
            className={classes.educationStack}
            spacing={2}
          >
            {schools.map((school: ModalPropsType , index: number) => (
              <Education
                ref={index === 0 ? leftRef : rightRef}
                logo={school.source}
                diplomaName={school.title}
                key={index}
                onClick={() => openEducationModal(index, school)}
                bgColor={school.bgColor}
                location={school.location}
                date={school.date}
              />
            ))}
          </Stack>
        )}
      </Box>

      <Stack>
        <Modal
          open={!!modalData}
          title={modalData?.title}
          subtitle={modalData?.subtitle}
          onClose={closeModal}
          location={modalData?.location}
          isExperience={!!modalData?.mainTechno}
          popFrom={isLeftCard ? 'Left' : 'Right'}
          date={modalData?.date}
          color={modalData?.bgColor}
          image={modalData?.source}
          text={modalData?.description}
        />
      </Stack>
      <Box
        mt={5}
        pb={5}
      >
        <div>
          {/* <Player /> */}
          <Slider
            className={classes.slick}
            {...sliderProps}
          >
            <Music
              company=''
              date=''
              bgColor='#1ED760'
              job=''
              logo={Spotify}
            />
            <Manga />
            <VideoGame />
          </Slider>
        </div>
        <Footer />
      </Box>
    </Box>
  )
}

export default Main
