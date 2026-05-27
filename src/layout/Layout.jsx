import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'

const Layout = ({ children }) => {
   const { pathname } = useLocation()

   const hideLayoutRoutes = ['/thank-you-page']

   const shouldHideLayout = hideLayoutRoutes.includes(pathname)

   return (
      <div>
         {!shouldHideLayout && <Header />}

         <main>
            {children}
         </main>

         {!shouldHideLayout && <Footer />}
      </div>
   )
}

export default Layout