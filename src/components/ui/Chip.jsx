const Chip = ({
  children,
  className = '',
  style = {},
  ...props
}) => {
  return (
    <span
      className={`inline-block w-max px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-poppins text-xs sm:text-sm font-bold ${className}`}
      style={{
        background: '#FFF6F7',
        color: '#f87171',
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  )
}

export default Chip
