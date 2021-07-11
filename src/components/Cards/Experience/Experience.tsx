import React, { forwardRef, useRef, useState } from 'react'

import { Box, useMediaQuery, useTheme } from '@material-ui/core'

import { ExperienceProps } from 'components/Cards/interfaces'
import Stack from 'components/Containers/Stack/Stack'
import Logo from 'components/Images/Logo/Logo'
import Subtitle from 'components/Text/Subtitle/Subtitle'
import Title from 'components/Text/Title/Title'

import useStyles from './styles'

const Experience = forwardRef<HTMLDivElement, ExperienceProps>(({
  company,
  date,
  bgColor,
  stack,
  job,
  logo,
}, ref) => {
  const classes = useStyles()
  const theme = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
 
  const containerStyle = {
    borderRadius: 8,
    backgroundColor: bgColor,
    border: `2px solid ${isHovered ? '#FFFFFF' : bgColor}`,
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={classes.experienceCard}
      style={containerStyle}
      ref={ref}
    >
      <Stack
        spacing={2}
        // className={classes.experienceCard}
        verticalAlign='center'
      >
        <Logo
          logo={logo}
          horizontalAlign='left'
          variant='tiny'
        />
        <Stack
          horizontalAlign='left'
          verticalAlign='center'
          spacing={1}
        >
          <Title variant='small'>{job}</Title>
          <Title
            color='#C0C0C0'
            variant='small'
          >{company}</Title>
          <Subtitle
            variant='tiny'
          >{date}</Subtitle>
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
    </div>
  )
})

Experience.displayName = 'Experience'

export default Experience
