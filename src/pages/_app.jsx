import { useEffect, useRef } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import SEO from '../next-seo.config'
import { DefaultSeo } from 'next-seo';

import '@/styles/tailwind.css'
import 'focus-visible'


import { MDXProvider } from '@mdx-js/react'
import  Pre  from '@/components/Pre'
import { appWithTranslation } from 'next-i18next'


const components = {

  pre: Pre,

}

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
   <>
   <DefaultSeo {...SEO} />
        <MDXProvider components={components}>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </MDXProvider>
    </>
  )
}

export default appWithTranslation(App)
