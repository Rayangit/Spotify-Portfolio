import React, { useEffect, useRef, useState } from 'react'

import { Box, Modal as ModalMUI, useMediaQuery, useTheme } from '@material-ui/core'

import { Cross } from 'assets/img'
import { ModalProps } from 'components/Containers/interfaces'
import Stack from 'components/Containers/Stack/Stack'
import Logo from 'components/Images/Logo/Logo'
import Body from 'components/Text/Body/Body'
import Subtitle from 'components/Text/Subtitle/Subtitle'
import Title from 'components/Text/Title/Title'

import useStyles from './styles'

const Modal: React.FunctionComponent<ModalProps> = ({
  title,
  subtitle,
  location,
  date,
  onClose,
  isExperience,
  open,
  color,
  popFrom,
  image,
  text
}) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const modalContainerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (open)
    {
      const body = document.getElementsByTagName('body')
      const overflowMode = isOpen ? 'hidden' : 'unset'
      body[0].style.overflow = overflowMode
      setIsOpen(true)
    }
  }, [open])
  const closeModal = () => {
    if (modalContainerRef.current) 
      modalContainerRef.current.style.animationName = isMobile || isExperience ? 'bounceOut' : `backOut${popFrom}`
    setTimeout(() => {
      onClose()
      setIsOpen(false)
    }, 500)
  }
  return (
    <div>
      <ModalMUI
        open={isOpen}
        aria-labelledby='server-modal-title'
        aria-describedby='server-modal-description'
        container={() => modalContainerRef.current}
        className={classes.modal}
      >
        <div
          ref={modalContainerRef}
          className={classes.modalContainer}
          style={{
            animationName: isMobile || isExperience ? 'bounceIn' : `backIn${popFrom}`
          }}
        >
          <Box
            className={classes.overlay}
            style={{ 
              backgroundColor: color
            }}
          />
          <Stack
            className={classes.mainStack}
            horizontalAlign='space-between'
          >
            <Stack
              horizontalAlign='center'
              verticalAlign='center'
              spacing={isMobile ? 3 : 4}
            >
              <Title
                textAlign={isMobile ? 'center' : 'left'}
                variant='huge'
              >{title}</Title>
              <Box className={classes.divider}  />
              <Title variant='medium'>{subtitle}</Title>
            </Stack>
            <Box className={classes.linebreak}>
              <Box 
                className={classes.description}
              >
                <Body
                  variant='big'
                >{text}</Body> 
              </Box>
            </Box>
            <Stack
              isRow={!isMobile}
              className={classes.bottomBar}
              verticalAlign='center'
            >
              <Stack
                horizontalAlign='center'
                className={classes.modalBottomItem}
                verticalAlign='center'
              >
                <Subtitle
                  textAlign={isMobile ? 'center' : 'left'}
                  variant='big'
                >{location}</Subtitle>
                <Subtitle
                  textAlign={isMobile ? 'center' : 'left'}
                  variant='medium'
                >{date}</Subtitle>
              </Stack>
              <Stack
                className={classes.modalBottomItem}
              >
                <Logo
                  logo={image}
                  variant={isMobile ? 'tiny' : 'medium'}
                />
              </Stack>
            </Stack>
          </Stack>
          <Box
            className={classes.cross}
            onClick={closeModal}
          >
            <img
              src={Cross}
            />
          </Box>
        </div>
      </ModalMUI>
    </div>
  )
}

export default Modal
