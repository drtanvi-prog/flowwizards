const Chip = ({
  children,
  className = '',
  style = {},
  ...props
}) => {
  return (
    <span
      className={`inline-block w-max px-4 py-2 rounded-lg font-poppins text-sm font-bold ${className}`}
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
