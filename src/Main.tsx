import React, { useEffect, useState } from 'react'

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
import { Spotify } from 'assets/img'
import Education from 'components/Cards/Education/Education'
import Experience from 'components/Cards/Experience/Experience'
import Music from 'components/Cards/Music/Music'
import Technology from 'components/Cards/Technology/Technology'
import Clickable from 'components/Containers/Clickable/Clickable'
import Modal from 'components/Containers/Modal/Modal'
import Stack from 'components/Containers/Stack/Stack'
import Footer from 'components/Layout/Footer/Footer'
import Header from 'components/Layout/Header/Header'
import Player from 'components/Player/Player'
import Title from 'components/Text/Title/Title'
import { schools, experiences, TechnicalStack, TechnicalStackKeys, ModalPropsType } from 'data/data'
import { useWindowSize } from 'functions/useWindowSize'

const Main: React.FunctionComponent = () => {
  const { width, height } = useWindowSize()

  const useStyles = makeStyles((theme: Theme) => createStyles({
    app: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '32px',
      [theme.breakpoints.down('sm')]: {
        padding: '8px',
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
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
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
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
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
        width: `calc(${width}px / 1.1) !important`,
        [theme.breakpoints.down('sm')]: {
          marginRight: 8
        }
      }
    },
  }))
  const classes = useStyles()
  const sliderProps = {
    dots: false,
    draggable: true,
    infinite: true,
    variableWidth: true,
    swipeToSlide: true,
    swipe: true,
    lazyload: true,
    speed: 300,
  }
  const [modalData, setModalData] = useState<ModalPropsType | undefined>(undefined)
  const [filter, setFilter] = useState<TechnicalStackKeys | undefined>(undefined)
  const [filteredExperiences, setFilteredExperiences] = useState<ModalPropsType[]>(experiences)
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
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box
      className={classes.app}
    >
      <Header />
      <Box mt={5}>
        <Box mb={2}>
          <Title variant='medium'>Experiences</Title>
        </Box>
        <Slider
          className={classes.slick}
          {...sliderProps}
        >
          {filteredExperiences.map((experience, index) => {
            return (
              <Clickable
                key={index}
                onClick={() => setModalData(experience)}
              >
                <Experience
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
            {...sliderProps}
          >
            {schools.map((school: ModalPropsType , index: number) => (
              <Clickable
                key={index}
                onClick={() => setModalData(school)}
              >
                <Education
                  logo={school.source}
                  diplomaName={school.title}
                  bgColor={school.bgColor}
                  location={school.location}
                  date={school.date}
                />
              </Clickable>
            ))}
          </Slider> ) : (
          <Stack
            isRow
            className={classes.educationStack}
            spacing={2}
          >
            {schools.map((school: ModalPropsType , index: number) => (
              <Clickable
                key={index}
                onClick={() => setModalData(school)}
              >
                <Education
                  logo={school.source}
                  diplomaName={school.title}
                  bgColor={school.bgColor}
                  location={school.location}
                  date={school.date}
                />
              </Clickable>
            ))}
          </Stack>
        )}
      </Box>

      <Stack>
        <Modal
          open={!!modalData}
          title={modalData?.title}
          subtitle={modalData?.subtitle}
          onClose={() => setModalData(undefined)}
          location={modalData?.location}
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
          </Slider>
        </div>
        <Footer />
      </Box>
    </Box>
  )
}

export default Main
