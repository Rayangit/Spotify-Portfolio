import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    experienceCard: {
      width: 280,
      height: 160,
      padding: 24,
      transition: '0.8s',
      '&:hover': {
        transition: '0.8s',
        backgroundColor: 'rgba(255, 255, 255, 0)'
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




      '& $saitama': {
        transition: '1.2s',
      },
      '&:hover $saitama': {
        transform: 'rotate(1080deg)',
        cursor: 'pointer'
      },
      '&:hover $nextAndPrevious': {
        transitionDelay: '0.8s',
        visibility: 'visible',
      },
      '& $nextAndPrevious': {
        transitionDelay: '0.3s',
        visibility: 'hidden'
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
    'songTitle': {
      // display: 'none',
      // maxHeight: 0,
      // visibility: 'hidden'
    },
  }),
)

export default useStyles