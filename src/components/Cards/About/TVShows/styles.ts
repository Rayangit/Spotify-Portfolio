import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tvShow: {
    },
    slickAbout: {
      '& .slick-slide': {
        marginRight: 16,
      }
    },
    container: {
      width: '332px !important',
      height: 212,
      background: '#8D67AB',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 16,
      transition: '0.3s',
      animationDuration: '0.3s',
      animationFillMode: 'forwards',
      animationTimingFunction: 'ease-in-out',
      '&:hover $image': {
        animationName: '$appear'
      },
      '&:hover $neutralState': {
        animationName: '$disappear'
      },
      '& .slick-slider, .slick-slider div': {
        height: '100%',
      },
      '&:hover': {
        border: '2px solid #FFFFFF',
        cursor: 'pointer',
        background: 'transparent',
        transition: '0.3s',
      },
      '&:hover .slick-slider': {
      },
      [theme.breakpoints.down('sm')]: {
        width: '180px !important',
        height: '120px !important',
        padding: 24,
        position: 'relative',
        '& .slick-slider, .slick-slider': {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0
        },
      },
    },
    neutralState: {
      display: 'flex',
      flexDirection: 'column',
      animationDelay: '0.3s',
      animationDuration: '0.3s',
      animationFillMode: 'forwards',
      animationTimingFunction: 'ease-in-out',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    image: {
      opacity: 0,
      animationDelay: '.6s',
      animationDuration: '0.3s',
      animationFillMode: 'forwards',
      animationTimingFunction: 'ease-in-out',
      '& img':{
        height: '100%'
      }
    },
    '@keyframes disappear': {
      '0%': {
        opacity: 1
      },
      '100%': {
        opacity: 0
      }
    },
    '@keyframes appear': {
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