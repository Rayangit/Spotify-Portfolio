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
      },
      '&:hover $texte': {
        opacity: 0,
        maxHeight: 0
      },
      '& $texte': {
        transition: '1.2s',
        maxHeight: 100
      },
      '& $logo': {
        transition: '1.2s',
      },
      '&:hover $logo': {
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
    'logo': {
    },
    'nextAndPrevious': {
      cursor: 'pointer'
    }
  }),
)

export default useStyles