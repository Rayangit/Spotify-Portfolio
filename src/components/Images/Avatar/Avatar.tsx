import React from 'react'

import { Box } from '@material-ui/core'

import { AvatarProps } from './interface'
import useStyles from './styles'

const Avatar: React.FunctionComponent<AvatarProps> = 
({ isAnimated, isBordered, source, variant }) => {
  const classes = useStyles()

  return (
    <Box className={[
      classes.imageContainer,
      isBordered && classes.bordered,
      isAnimated && classes.animatedAvatar
    ].join(' ')}
    >
      <img
        className={classes[variant]}
        src={source}
      />
    </Box>
  )
}

export default Avatar
