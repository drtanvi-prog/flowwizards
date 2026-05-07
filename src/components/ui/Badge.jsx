import React from 'react'

const variantStyles = {
  orange: {
    background: '#FFF0EC',
    color: '#E8521A',
    borderColor: '#FBBFA9',
  },
  amber: {
    background: '#FFF8E6',
    color: '#B8860B',
    borderColor: '#F5D87A',
  },
  olive: {
    background: '#F5F7E8',
    color: '#5C6B10',
    borderColor: '#C8D87A',
  },
  gray: {
    background: '#F4F4F4',
    color: '#555555',
    borderColor: '#DDDDDD',
  },
}

const Badge = ({
  children,
  variant = 'orange',
  className = '',
  style = {},
  ...props
}) => {
  const vs = variantStyles[variant] ?? variantStyles.orange

  return (
    <span
      className={`inline-block text-xs font-medium px-4 py-1.5 border ${className}`}
      style={{
        borderRadius: '8px',
        background: vs.background,
        color: vs.color,
        borderColor: vs.borderColor,
        letterSpacing: '0.02em',
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
