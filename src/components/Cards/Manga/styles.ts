import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    spinner: {
      '&:hover': {
        transform: 'rotate(360deg)',
        transition: '.8s',
      },
      transition: '.8s',
    },
    information: {

    },
    logoMute: {
      position: 'absolute',
      right: 8,
      bottom: 18,
      zIndex: 1,
      '& img': {
        height: 30
      }
    },
    informationTitle: {
      position: 'absolute',
      top: 24,
      left: 0,
      right: 0,
    },
    logoInformation: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      '& img': {
        height: 125
      }
    },
    experienceCard: {
      width: 280,
      height: 160,
      padding: 24,
      position: 'relative',
      transition: '0.8s',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0)'
      },

      '&:hover $texte': {
        opacity: 0,
        maxHeight: 0
      },
      '& $texte': {
        transition: '0.8s',
        maxHeight: 100
      },


      '&:hover $video': {
        transition: '0.8s',
        // opacity: '1',
      },

      '& $video': {
        transition: '0.8s'
        // opacity: '0',
      },



      '& $saitama': {
        transition: '0.8s',
        maxHeight: 100
      },
      '&:hover $saitama': {
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
    'saitama': {
      // height: 100
    },
    'video': {
      position: 'absolute',
      left: 0,
      top: 0,
      'zIndex': -1
    }
  }),
)

export default useStyles