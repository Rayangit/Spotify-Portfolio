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
import TVShows from 'components/Cards/About/TVShows/TVShows'
import Education from 'components/Cards/Education/Education'
import Experience from 'components/Cards/Experience/Experience'
import Technology from 'components/Cards/Technology/Technology'
import Clickable from 'components/Containers/Clickable/Clickable'
import Modal from 'components/Containers/Modal/Modal'
import Stack from 'components/Containers/Stack/Stack'
import Footer from 'components/Layout/Footer/Footer'
import Header from 'components/Layout/Header/Header'
import Title from 'components/Text/Title/Title'
import { schools, experiences, TechnicalStack, TechnicalStackKeys, ModalPropsType } from 'data/data'

import { useStyles } from './styles'

const Body: React.FunctionComponent = () => {

  const classes = useStyles()
  const [isSwiping, setIsSwiping] = useState(false)

  const swipe = () => setIsSwiping(!isSwiping)
  const sliderProps = {
    dots: false,
    draggable: false,
    onSwipe: swipe,
    infinite: true,
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
          leftRef.current.style.animationName = isMobile ? 'bounceIn' : 'backInLeft' 
        else
          rightRef.current.style.animationName = isMobile ? 'bounceIn' : 'backInRight'
      }
    }
    else {
      const cardRef = experienceCardRef[experienceCardIndex.current].current
      
      if (cardRef) 
        cardRef.style.animationName = 'bounceIn'
      experienceCardIndex.current = -1
    }
    setModalData(undefined)
  }

  const openExperienceModal = (index: number, data?: ModalPropsType) => () => {
    const cardRef = experienceCardRef[index].current
    if (cardRef) 
      cardRef.style.animationName = 'bounceOut'
    experienceCardIndex.current = index
    setTimeout(() => {
      setModalData(data)
    }, 500)
  }
  const openEducationModal = (index: number, data?: ModalPropsType) => {
    if (index === 0) {
      if (leftRef.current)
        leftRef.current.style.animationName = isMobile ? 'bounceOut' : 'backOutLeft'
      setIsLeftCard(true)
    }
    else {
      if (rightRef.current)
        rightRef.current.style.animationName = isMobile ? 'bounceOut' : 'backOutRight'
      setIsLeftCard(false)
    }
    // setModalAnimation('bounceIn')
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
                  bgColor={experience.bgColor}
                  company={experience.subtitle}
                  date={experience.date}
                  isAnimated={!!modalData?.mainTechno}
                  job={experience.title}
                  logo={experience.source}
                  ref={experienceCardRef[index]}
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
                  bgColor={bgColor}
                  companies={frameworks}
                  language={key}
                  logo={icon}
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
                bgColor={school.bgColor}
                date={school.date}
                diplomaName={school.title}
                key={index}
                location={school.location}
                logo={school.source}
                onClick={() => openEducationModal(index, school)}
                ref={index === 0 ? leftRef : rightRef}
              />
            ))}
          </Slider> ) : (
          <Stack
            className={classes.educationStack}
            isRow
            spacing={2}
          >
            {schools.map((school: ModalPropsType , index: number) => (
              <Education
                bgColor={school.bgColor}
                date={school.date}
                diplomaName={school.title}
                key={index}
                location={school.location}
                logo={school.source}
                onClick={() => openEducationModal(index, school)}
                ref={index === 0 ? leftRef : rightRef}
              />
            ))}
          </Stack>
        )}
      </Box>
      <Box
        mt={5}
      >
        <Box mb={2}>
          <Title variant='medium'>About</Title>
        </Box>
        <TVShows />
      </Box>

      <Stack>
        <Modal
          color={modalData?.bgColor}
          date={modalData?.date}
          image={modalData?.source}
          isExperience={!!modalData?.mainTechno}
          location={modalData?.location}
          onClose={closeModal}
          open={!!modalData}
          popFrom={isLeftCard ? 'Left' : 'Right'}
          subtitle={modalData?.subtitle}
          text={modalData?.description}
          title={modalData?.title}
        />
      </Stack>
      <Box
        mt={5}
        pb={5}
      >
        <Footer />
      </Box>
    </Box>
  )
}

export default Body
