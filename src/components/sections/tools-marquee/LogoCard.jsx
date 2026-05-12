const LogoCard = ({ logo }) => {
   return (
      <div
         className="
        w-[180px]
        h-[110px]
        md:w-[240px]
        md:h-[140px]
        flex-shrink-0
        border border-[#222]
        bg-[#F9F3F3]
        flex items-center justify-center
        px-8 py-6
        transition-all duration-300
        hover:bg-white
      "
      >
         <img
            src={logo}
            alt="software logo"
            className="
          max-w-full
          max-h-[55px]
          object-contain
          pointer-events-none
          select-none
        "
            draggable={false}
         />
      </div>
   )
}

export default LogoCard
