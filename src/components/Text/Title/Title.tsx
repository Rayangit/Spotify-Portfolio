import React from 'react'

import { TitleProps } from 'components/Text/interface'

import useStyles from './styles'


const Title: React.FunctionComponent<TitleProps> = ({
  color = '#FFFFFF',
  children,
  variant,
  textAlign = 'left',
  className
}) => {
  const classes = useStyles()

  return (
    <h2
      className={[classes.text, classes[variant], className].join(' ')}
      style={{
        color: color,
        textAlign: textAlign 
      }}
    >{children}</h2>
  )
}

export default Title
