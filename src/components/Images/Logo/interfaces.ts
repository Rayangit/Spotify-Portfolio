export interface LogoProps {
  className?: string
  horizontalAlign?: 'left' | 'center' | 'right'
  logo: string | undefined
  variant: 'huge' | 'big' | 'medium' | 'small' | 'tiny'
  onClick?: () => void | undefined
}