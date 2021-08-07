import React from 'react'

import { Box, useMediaQuery, useTheme } from '@material-ui/core'

import { TechnologieProps } from 'components/Cards/interfaces'
import Stack from 'components/Containers/Stack/Stack'
import Logo from 'components/Images/Logo/Logo'
import Subtitle from 'components/Text/Subtitle/Subtitle'
import Title from 'components/Text/Title/Title'

import useStyles from './styles'


const Technologie: React.FunctionComponent<TechnologieProps> = ({
  active,
  bgColor,
  language,
  companies,
  logo,
}) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box 
      className={classes.technologieCard} 
      style={{ border: `2px solid ${bgColor}` }}
    >
      <Box
        className={classes.cardOverlay}
        style={{ background: bgColor, opacity: active ? 0.3 : undefined }}
      />
      <Box
        style={{ zIndex: 1 }}
      >
        <Title variant={isMobile ? 'medium' : 'big'}>{language}</Title>
      </Box>
      <ul>
        <Stack
          horizontalAlign='left'
          spacing={1}
        >
          {companies && companies.map((company, index) => {
            return (
              <li
                key={index}
                style={{ paddingLeft: 16 }}
              >
                <Stack
                  horizontalAlign='left'
                  isRow
                  spacing={1}
                >
                  <Subtitle variant={isMobile ? 'tiny' : 'medium'}>●</Subtitle>
                  <Subtitle variant={isMobile ? 'tiny' : 'medium'}>{company}</Subtitle>
                </Stack>
              </li>
            )
          })}
        </Stack>
      </ul>
      <Box className={classes.logoBottomRight}>
        <Logo
          logo={logo}
          variant={isMobile ? 'small' : 'big'}
        />
      </Box>
    </Box>
  )
}

export default Technologie
