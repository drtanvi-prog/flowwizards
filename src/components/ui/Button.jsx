import React from 'react'

const variants = {
   primary:
      'bg-[#FD4900] text-white hover:bg-[#E04200] active:bg-[#CC3B00]',
   secondary:
      'bg-[#1A1A1A] text-white hover:bg-[#2D2D2D] active:bg-[#111111]',
   ghost:
      'bg-transparent text-[#FD4900] hover:bg-[#FD4900]/10',
   outline:
      'bg-white text-[#FD4900] border-2 border-[#FD4900] hover:bg-[#FD4900] hover:text-white',
}

const sizes = {
   sm: 'px-3 py-1.5 text-[11px]',
   md: 'px-5 py-2 text-sm',
   lg: 'px-7 py-3 text-base',
}

const Button = ({
   children,
   variant = 'primary',
   size = 'md',
   className = '',
   disabled = false,
   type = 'button',
   onClick,
   ...props
}) => {
   return (
      <button
         type={type}
         onClick={onClick}
         disabled={disabled}
         className={[
            'inline-flex items-center justify-center gap-2 font-semibold cursor-pointer font-roboto',
            'transition-all duration-200 ease-in-out',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4f00] focus-visible:ring-offset-2',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'rounded-md',
            variants[variant] ?? variants.primary,
            sizes[size] ?? sizes.md,
            className,
         ]
            .filter(Boolean)
            .join(' ')}
         {...props}
      >
         {children}
      </button>
   )
}

export default Button
