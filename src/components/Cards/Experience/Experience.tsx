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
      className={classes.experienceCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={ref}
      style={containerStyle}
    >
      <Stack
        spacing={2}
        // className={classes.experienceCard}
        verticalAlign='center'
      >
        <Logo
          horizontalAlign='left'
          logo={logo}
          variant='tiny'
        />
        <Stack
          horizontalAlign='left'
          spacing={1}
          verticalAlign='center'
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
                animationDelay='0.3s'
                animationExit='slideOut'
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
