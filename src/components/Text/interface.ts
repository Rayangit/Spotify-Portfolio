import React from 'react'

export interface TitleProps {
  color?: string
  children: React.ReactNode
  variant: 'huge' | 'big' | 'medium' | 'small'
  textAlign?: 'left' | 'center' | 'right'
  className?: string | undefined
}

export interface SubtitleProps {
  animation?: 'slideIn'
  animationExit?: 'slideOut'
  animationDelay?: string
  children: React.ReactNode
  isHovering?: boolean
  variant: 'big' | 'medium' | 'small' | 'tiny'
  textAlign?: 'left' | 'center' | 'right'
}

export interface BodyProps {
  children: React.ReactNode
  variant: 'huge' | 'big' | 'medium' | 'small'
  textAlign?: 'left' | 'center' | 'right'
}