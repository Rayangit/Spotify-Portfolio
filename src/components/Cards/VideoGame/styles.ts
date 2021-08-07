import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'

import { ChevronLeft, ChevronRight } from 'assets/img'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    videoGamesCard: {
      width: 280,
      position: 'relative',
      height: 160,
      padding: 24,
      transition: '0.8s',
      '&:hover $title': {
        opacity: 0
      },

      [theme.breakpoints.down('sm')]: {
        width: '180px !important',
        height: '120px !important'
      },
    },
    title: {
      transition: '.8s'
    },
    imageBackground: {
      backgroundSize: 'cover',
      position: 'absolute',
      top: 0,
      bottom: 0,
      opacity: 0,
      left: 0,
      right: 0
    },
    mainContainer: {
      background: '#006450',
      borderRadius: 16,
      border: '2px solid',
      overflow: 'hidden',
      position: 'relative',
      borderColor: '#006450',
      display: 'flex',
      flexDirection: 'column',
      transition: '.5s',
      '&:hover': {
        borderColor: '#FFFFFF'
      },
      '&:hover $imageBackground': {
        opacity: 1,
        transition: '0.8s'
      },
      '&:hover $buttonsContainer': {
        animation: '$waitAndAppear 0.5s ease-in-out forwards',
        animationDelay: '0.8s'
      },
      '&:hover $videoGamesCard': {
        opacity: 0
      },
    },
    'buttonsContainer': {
      display: 'flex',
      flexDirection: 'row',
      position: 'absolute',
      bottom: '24px',
      left: 0,
      right: 0,
      background: 'rgba(0, 0, 0, 0.35)',
      alignItems: 'center',
      opacity: 0,
      justifyContent: 'space-between',
      padding: '16px 0px',
      '& div': {
        marginBottom: 0,
      }
    },
    'button': {
      cursor: 'pointer',
      '& img': {
        height: 24,
      },
    },
    '@keyframes waitAndAppear': {
      '0%': {
        opacity: 0
      },
      '100%': {
        opacity: 1
      }
    }
  }),
)

export default useStyles