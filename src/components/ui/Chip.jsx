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
        background: '#FFF5F0',
        color: '#ff4f00',
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  )
}

export default Chip
