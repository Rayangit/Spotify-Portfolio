import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    experienceCard: {
      height: 120,
      width: 240,
      padding: 24,
      transition: '0.8s',
      animationDuration: '0.8s',
      animationFillMode: 'forwards',
      animationTimingFunction: 'ease-in-out',
      '&:hover': {
        height: 160,
        width: 260,
        cursor: 'pointer',
        transition: '1s',
      },
      [theme.breakpoints.down('sm')]: {
        width: '180px !important',
        height: '120px !important'
      },
    },
  }),
)

export default useStyles