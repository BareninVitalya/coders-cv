import Image from 'next/future/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {Popover, Transition} from '@headlessui/react'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import avatarImage from '@/images/avatar-head.png'

import {Fragment, useEffect, useRef, useState} from 'react'
import { useTranslation } from 'next-i18next'

function CloseIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function ChevronDownIcon(props) {
    return (
        <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
            <path
                d="M1.75 1.75 4 4.25l2.25-2.5"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function SunIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"/>
            <path
                d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                fill="none"
            />
        </svg>
    )
}

function MoonIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function EnIcon(props) {
    return (
        <svg viewBox="0 0 101.52 48.81" fill="currentColor" {...props}>
            <path d="M18.21,48.77c-4.86,0-9.42-1.89-12.86-5.32C1.9,40.01,0,35.44,0,30.57V0H23.66c11.44,0,20.75,9.31,20.75,20.75v9.82H12.88c.32,1.27,.98,2.44,1.93,3.4,1.39,1.38,3.21,2.14,5.19,2.14l24.4-.05,.02,12.66-26.18,.06s-.02,0-.04,0ZM3.59,3.59V30.57c0,3.91,1.52,7.58,4.29,10.35,2.76,2.76,6.43,4.27,10.33,4.27h.03l22.59-.05v-5.48s-20.82,.05-20.82,.05h-.02c-2.91,0-5.65-1.13-7.71-3.19-2.07-2.06-3.2-4.81-3.2-7.73v-1.79h31.75v-6.24c0-9.46-7.7-17.16-17.16-17.16H3.59Zm5.49,17.91V9.07h15.63c5.87,0,10.64,4.77,10.64,10.64v1.79H9.07Zm3.59-3.59H31.52c-.8-3.02-3.55-5.26-6.82-5.26H12.66v5.26Z"/>
      <path d="M101.44,48.81l-12.66-.05,.08-22.76c.01-3.42-1.31-6.64-3.73-9.06-2.41-2.42-5.63-3.76-9.05-3.76h-10.03V48.78h-12.66V.51h22.75c6.8,0,13.18,2.65,17.98,7.47,4.79,4.81,7.42,11.21,7.4,18l-.09,22.83Zm-9.06-3.62l5.48,.02,.07-19.24c.02-5.83-2.23-11.32-6.35-15.46-4.12-4.13-9.6-6.41-15.43-6.41h-19.16V45.19h5.48V9.58h13.62c4.38,0,8.5,1.71,11.59,4.81,3.09,3.1,4.79,7.23,4.77,11.61l-.07,19.18Z"/>
        </svg>
    )
}

function RuIcon(props) {
    return (
        <svg viewBox="0 0 90.64 48.86" fill="currentColor" {...props}>
            <path d="M0,48.86V23C0,10.65,10.05,.6,22.4,.6h13.7V13.25h-12.35c-6.11,0-11.08,4.97-11.08,11.08v24.52H0Zm9.07-3.59V24.34c0-8.09,6.58-14.67,14.67-14.67h8.77V4.18h-10.11C12.14,4.18,3.77,12.44,3.59,22.66v22.62h5.48Z"/>
      <path d="M42.56,48.53l-.08-48.29,12.66-.02,.06,35.58,10.14-.06c3.4-.02,6.58-1.36,8.97-3.77,2.39-2.41,3.69-5.61,3.67-9.01l-.12-22.9,12.66-.07,.13,23.32c.04,6.66-2.53,12.94-7.21,17.68-4.69,4.74-10.94,7.37-17.6,7.4l-23.27,.12ZM46.07,3.82l.07,41.1,19.66-.11c5.71-.03,11.06-2.28,15.07-6.34,4.01-4.06,6.21-9.43,6.18-15.14l-.11-19.73-5.48,.03,.1,19.31c.02,4.35-1.65,8.46-4.71,11.55-3.06,3.1-7.15,4.81-11.5,4.84l-13.74,.08-.06-35.6h-5.48Z"/>
    </svg>
    )
}

function EnLogoItem({ icon: Icon, className }) {
  return (
    <Icon
      className={clsx(
        className,
        'w-6 h-6',
        'fill-zinc-400 stroke-zinc-500',
        'dark:fill-zinc-500 dark:stroke-zinc-500',
        'transition-colors duration-200 ease-in-out',
        'hover:fill-teal-600 hover:stroke-teal-700',
        'dark:hover:fill-teal-700 dark:hover:stroke-teal-300'
      )}
      aria-hidden="true"
    />
  )
}

function MobileNavItem({href, children}) {
    return (
        <li>
            <Popover.Button as={Link} href={href} className="block py-2">
                {children}
            </Popover.Button>
        </li>
    )
}

function MobileNavigation(props) {
    const { t } = useTranslation('common')
    return (
        <Popover {...props}>
            <Popover.Button
                className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
                Menu
                <ChevronDownIcon
                    className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"/>
            </Popover.Button>
            <Transition.Root>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80"/>
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
                    >
                        <div className="flex flex-row-reverse items-center justify-between">
                            <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400"/>
                            </Popover.Button>
                            <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                                Navigation
                            </h2>
                        </div>
                        <nav className="mt-6">
                            <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                                <MobileNavItem href="/">{t('About')}</MobileNavItem>
                                <MobileNavItem href="/about">{t('Experience')}</MobileNavItem>
                                <MobileNavItem href="/projects">{t('Projects')}</MobileNavItem>
                            </ul>
                        </nav>
                    </Popover.Panel>
                </Transition.Child>
            </Transition.Root>
        </Popover>
    )
}

function NavItem({href, children}) {
    let isActive = useRouter().pathname === href

    return (
        <li>
            <Link
                href={href}
                className={clsx(
                    'relative block px-3 py-2 transition',
                    isActive
                        ? 'text-teal-700 dark:text-teal-400'
                        : 'hover:text-teal-700 dark:hover:text-teal-400'
                )}
            >
                {children}
                {isActive && (
                    <span
                        className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-700/0 via-teal-700/40 to-teal-700/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"/>
                )}
            </Link>
        </li>
    )
}

function DesktopNavigation(props) {
    const { t } = useTranslation('common')
    return (
        <nav {...props}>
            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                <NavItem href="/">{t('About')}</NavItem>
                <NavItem href="/about">{t('Experience')}</NavItem>
                <NavItem href="/projects">{t('Projects')}</NavItem>
            </ul>
        </nav>
    )
}

function ModeToggle() {
    function disableTransitionsTemporarily() {
        document.documentElement.classList.add('[&_*]:!transition-none')
        window.setTimeout(() => {
            document.documentElement.classList.remove('[&_*]:!transition-none')
        }, 0)
    }

    function toggleMode() {
        disableTransitionsTemporarily()

        let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        let isSystemDarkMode = darkModeMediaQuery.matches
        let isDarkMode = document.documentElement.classList.toggle('dark')

        if (isDarkMode === isSystemDarkMode) {
            delete window.localStorage.isDarkMode
        } else {
            window.localStorage.isDarkMode = isDarkMode
        }
    }

    return (
        <button
            type="button"
            aria-label="Toggle dark mode"
            className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
            onClick={toggleMode}
        >
            <SunIcon
                className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-700 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-700"/>
            <MoonIcon
                className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-700"/>
        </button>
    )
}

export function LocaleToggle() {
    const router = useRouter()
    const current = router.locale === 'ru' ? 'ru' : 'en'
    function toggleLocale() {
        const next = current === 'en' ? 'ru' : 'en'
        router.push(router.pathname, router.asPath, { locale: next })
    }

    return (
        <button
            type="button"
            aria-label="Toggle language"
            onClick={toggleLocale}
            className="group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
        >
            {current === 'en' ? (
                <EnLogoItem icon={EnIcon}/>
            ) : (
                <EnLogoItem icon={RuIcon}/>
            )}
        </button>
    )
}

function clamp(number, a, b) {
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    return Math.min(Math.max(number, min), max)
}

function AvatarContainer({className, ...props}) {
    return (
        <div
            className={clsx(
                className,
                'h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'
            )}
            {...props}
        />
    )
}

function Avatar({large = false, className, ...props}) {
    return (
        <Link
            href="/"
            aria-label="Home"
            className={clsx(className, 'pointer-events-auto')}
            {...props}
        >
            <Image
                src={avatarImage}
                alt=""
                sizes={large ? '4rem' : '2.25rem'}
                className={clsx(
                    'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
                    large ? 'h-16 w-16' : 'h-9 w-9'
                )}
                priority
            />
        </Link>
    )
}

export function Header() {
    let isHomePage = useRouter().pathname === '/'

    let headerRef = useRef()
    let avatarRef = useRef()
    let isInitial = useRef(true)

    useEffect(() => {
        let downDelay = avatarRef.current?.offsetTop ?? 0
        let upDelay = 64

        function setProperty(property, value) {
            document.documentElement.style.setProperty(property, value)
        }

        function removeProperty(property) {
            document.documentElement.style.removeProperty(property)
        }

        function updateHeaderStyles() {
            let {top, height} = headerRef.current.getBoundingClientRect()
            let scrollY = clamp(
                window.scrollY,
                0,
                document.body.scrollHeight - window.innerHeight
            )

            if (isInitial.current) {
                setProperty('--header-position', 'sticky')
            }

            setProperty('--content-offset', `${downDelay}px`)

            if (isInitial.current || scrollY < downDelay) {
                setProperty('--header-height', `${downDelay + height}px`)
                setProperty('--header-mb', `${-downDelay}px`)
            } else if (top + height < -upDelay) {
                let offset = Math.max(height, scrollY - upDelay)
                setProperty('--header-height', `${offset}px`)
                setProperty('--header-mb', `${height - offset}px`)
            } else if (top === 0) {
                setProperty('--header-height', `${scrollY + height}px`)
                setProperty('--header-mb', `${-scrollY}px`)
            }

            if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
                setProperty('--header-inner-position', 'fixed')
                removeProperty('--header-top')
                removeProperty('--avatar-top')
            } else {
                removeProperty('--header-inner-position')
                setProperty('--header-top', '0px')
                setProperty('--avatar-top', '0px')
            }
        }

        function updateAvatarStyles() {
            if (!isHomePage) {
                return
            }

            let fromScale = 1
            let toScale = 36 / 64
            let fromX = 0
            let toX = 2 / 16

            let scrollY = downDelay - window.scrollY

            let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
            scale = clamp(scale, fromScale, toScale)

            let x = (scrollY * (fromX - toX)) / downDelay + toX
            x = clamp(x, fromX, toX)

            setProperty(
                '--avatar-image-transform',
                `translate3d(${x}rem, 0, 0) scale(${scale})`
            )

            let borderScale = 1 / (toScale / scale)
            let borderX = (-toX + x) * borderScale
            let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

            setProperty('--avatar-border-transform', borderTransform)
            setProperty('--avatar-border-opacity', scale === toScale ? 1 : 0)
        }

        function updateStyles() {
            updateHeaderStyles()
            updateAvatarStyles()
            isInitial.current = false
        }

        updateStyles()
        window.addEventListener('scroll', updateStyles, {passive: true})
        window.addEventListener('resize', updateStyles)

        return () => {
            window.removeEventListener('scroll', updateStyles, {passive: true})
            window.removeEventListener('resize', updateStyles)
        }
    }, [isHomePage])

    return (
        <>
            <header
                className="pointer-events-none relative z-50 flex flex-col"
                style={{
                    height: 'var(--header-height)',
                    marginBottom: 'var(--header-mb)',
                }}
            >
                {isHomePage && (
                    <>
                        <div
                            ref={avatarRef}
                            className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
                        />
                        <Container
                            className="top-0 order-last -mb-3 pt-3"
                            style={{position: 'var(--header-position)'}}
                        >
                            <div
                                className="top-[var(--avatar-top,theme(spacing.3))] w-full"
                                style={{position: 'var(--header-inner-position)'}}
                            >
                                <div className="relative">
                                    <AvatarContainer
                                        className="absolute left-0 top-3 origin-left transition-opacity"
                                        style={{
                                            opacity: 'var(--avatar-border-opacity, 0)',
                                            transform: 'var(--avatar-border-transform)',
                                        }}
                                    />
                                    <Avatar
                                        large
                                        className="block h-16 w-16 origin-left"
                                        style={{transform: 'var(--avatar-image-transform)'}}
                                    />
                                </div>
                            </div>
                        </Container>
                    </>
                )}
                <div
                    ref={headerRef}
                    className="top-0 z-10 h-16 pt-6"
                    style={{position: 'var(--header-position)'}}
                >
                    <Container
                        className="top-[var(--header-top,theme(spacing.6))] w-full"
                        style={{position: 'var(--header-inner-position)'}}
                    >
                        <div className="relative flex gap-4">
                            <div className="flex flex-1">
                                {!isHomePage && (
                                    <AvatarContainer>
                                        <Avatar/>
                                    </AvatarContainer>
                                )}
                            </div>
                            <div className="flex flex-1 justify-end md:justify-center">
                                <MobileNavigation className="pointer-events-auto md:hidden"/>
                                <DesktopNavigation className="pointer-events-auto hidden md:block"/>
                            </div>
                            <div className="flex justify-end md:flex-1">
                                <div className="pointer-events-auto flex space-x-2">
                                    <ModeToggle/>
                                    <LocaleToggle/>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </header>
            {isHomePage && <div style={{height: 'var(--content-offset)'}}/>}
        </>
    )
}
