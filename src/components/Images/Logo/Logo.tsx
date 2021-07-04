import React from 'react'

import { Box } from '@material-ui/core'

import { LogoProps } from './interfaces'
import useStyles from './styles'

const Logo: React.FunctionComponent<LogoProps> = ({ className, horizontalAlign = 'left', logo, variant, onClick }) => {
  const classes = useStyles()
  const horizontal = horizontalAlign === 'left' ? { marginRight: 'auto' } : horizontalAlign === 'right' ? { marginLeft: 'auto' } : { margin: '0 auto' }
  return (
    <Box
      className={`${classes.logo} ${className}`}
      onClick={onClick}
    >
      <img
        className={classes[variant]}
        src={logo}
        style={{ ...horizontal }}

      />
    </Box>
  )
}

export default Logo
