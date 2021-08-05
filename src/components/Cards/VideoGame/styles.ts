import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'

import { ChevronLeft, ChevronRight } from 'assets/img'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    experienceCard: {
      width: 280,
      height: 160,
      padding: 24,
      transition: '0.8s',
      '&:hover': {
        transition: '0.8s',
      },



      '&:hover $texte': {
        opacity: 0,
        maxHeight: 0
      },
      '& $texte': {
        transition: '1.2s',
        maxHeight: 100
      },
      '&:hover $songTitle': {
        opacity: 1,
        maxHeight: 100
      },
      '& $songTitle': {
        transition: '1.2s',
        opacity: 0,
        maxHeight: 0
      },




      '& $logo': {
        // transition: '1.2s',
        transition: '1.2s',
        opacity: 1,
        maxHeight: 100
      },
      '&:hover $logo': {
        opacity: 0,
        maxHeight: 0
      },
      [theme.breakpoints.down('sm')]: {
        width: '180px !important',
        height: '120px !important'
      },
    },
    'texte': {
    },
    'logo': {
    },
    'songTitle': {
      // display: 'none',
      // maxHeight: 0,
      // visibility: 'hidden'
    },
    'button': {
      cursor: 'pointer'
    },
    'slick': {
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
  }),
)

export default useStyles