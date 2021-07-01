import React, { useEffect, useState } from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Box } from '@material-ui/core'
import { createStyles, Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'

import {
  ChevronLeft,
  ChevronRight,
  VueJS,
} from 'assets/img'
import Experience from 'components/Cards/Experience/Experience'
import Technology from 'components/Cards/Technology/Technology'
import Clickable from 'components/Containers/Clickable/Clickable'
import Modal from 'components/Containers/Modal/Modal'
import Stack from 'components/Containers/Stack/Stack'
import Footer from 'components/Layout/Footer/Footer'
import Header from 'components/Layout/Header/Header'
import { experiences, ExperienceType, TechnicalStack, TechnicalStackKeys } from 'data/data'

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
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
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
  }
}))

const Main: React.FunctionComponent = () => {
  const classes = useStyles()
  const sliderProps = {
    dots: false,
    draggable: true,
    infinite: true,
    variableWidth: true,
    className: classes.slick,
    swipeToSlide: true,
    swipe: true,
    lazyload: true,
    speed: 300,
  }
  const [modalData, setModalData] = useState<ExperienceType | undefined>(undefined)
  const [filter, setFilter] = useState<TechnicalStackKeys | undefined>(undefined)
  const [filteredExperiences, setFilteredExperiences] = useState<ExperienceType[]>(experiences)
  useEffect(() => {
    filter 
      ? setFilteredExperiences(experiences.filter(experience => experience.mainTechno.includes(filter) ))
      : setFilteredExperiences(experiences)
  }, [filter])
  return (
    <Box
      className={classes.app}
    >
      <Header />
      <Box mt={10}>
        <Slider
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
                  company={experience.company}
                  logo={experience.source}
                  job={experience.job}
                  stack={experience.stack}
                />
              </Clickable>
            )
          })}
        </Slider>
      </Box>
      <Box mt={10}>
        <Slider
          {...sliderProps}
        >
          {Object.keys(TechnicalStack).map((key: string , index: number) => {
            const { bgColor, frameworks, icon } = TechnicalStack[key]
            return (
              <Clickable
                key={index}
                onClick={() => setFilter(index + 1)}
              >
                <Technology
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
      <Stack>
        <Modal
          open={!!modalData}
          title={modalData?.job}
          subtitle={modalData?.company}
          onClose={() => setModalData(undefined)}
          location={modalData?.location}
          date={modalData?.date}
          color={modalData?.bgColor}
          image={modalData?.source}
          text={modalData?.text}
        />
      </Stack>
      <Footer />
    </Box>
  )
}

export default Main
