import {Head, Html, Main, NextScript} from 'next/document'
import siteMeta from '@/data/siteMeta'

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

export default function Document() {
    return (
        <Html className="h-full antialiased" lang="en">
            <Head>
                <script dangerouslySetInnerHTML={{__html: modeScript}}/>
                <link rel="icon" href={siteMeta.icon}/>
            </Head>
            <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
