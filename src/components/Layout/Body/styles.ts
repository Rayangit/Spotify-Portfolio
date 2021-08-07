import { createStyles, makeStyles, Theme } from '@material-ui/core'

import { ChevronLeft, ChevronRight } from 'assets/img'

export const useStyles = makeStyles((theme: Theme) => createStyles({
  app: {
    display: 'flex',
    flexDirection: 'column',
    padding: '32px',
    transition: '0.3s',
    [theme.breakpoints.down('sm')]: {
      padding: '16px',
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
      [theme.breakpoints.up('sm')]: {
        width: `calc(${window.innerWidth}px / 1.1) !important`,
      },
      [theme.breakpoints.down('sm')]: {
        marginRight: 8,
      }
    }
  },
}))