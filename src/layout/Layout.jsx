import React from 'react'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'

const Layout = ({ children }) => {
   return (
      <div>
         <Header />
         <main>
            {children}
         </main>
         <Footer />
      </div>
   )
}

export default Layout