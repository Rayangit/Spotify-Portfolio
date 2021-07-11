import React, { ReactNode } from 'react'

export interface ContainerProps {
  bgColor?: string | undefined
  children: ReactNode
  className?: string | undefined
  horizontalAlign?: 'left' | 'center' | 'right' | 'space-between'
  isRow?: boolean
  spacing?: number
  verticalAlign?: 'top' | 'center' | 'bottom'
  style?: React.CSSProperties
}

export interface ClickableProps {
  children: ReactNode
  onClick(): void
}

// export interface ModalProps {
//   children: ReactNode
//   onClick(): void
// }

export interface ModalProps {
  title?: string
  open?: boolean
  subtitle?: string
  // eslint-disable-next-line no-unused-vars
  onClose(currentRef?: React.RefObject<HTMLDivElement>): void
  isExperience: boolean
  popFrom?: string
  location?: string
  date?: string
  color?: string
  image?: string
  text?: string
}