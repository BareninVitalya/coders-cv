import Image from 'next/future/image'
import Link from 'next/link'
import clsx from 'clsx'
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

import {Button} from '@/components/Button'
import {Card} from '@/components/Card'
import {Container} from '@/components/Container'
import {
    TwitterIcon,
    InstagramIcon,
    GitHubIcon,
    LinkedInIcon,
    XIcon
} from '@/components/SocialIcons'

import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

import image3 from '@/images/photos/event.png'
import image2 from '@/images/photos/swim.png'
import image1 from '@/images/photos/NewYork.png'
import image5 from '@/images/photos/Moscow.png'
import image4 from '@/images/photos/coding.png'


import {formatDate} from '@/lib/formatDate'
import siteMeta, {resume} from '@/data/siteMeta'
import {NextSeo} from 'next-seo';
import AboutEnPageText, {frontmatter as aboutEnPageMeta} from '@/data/about.mdx'
import AboutRuPageText, {frontmatter as aboutRuPageMeta} from '@/data/about_ru.mdx'
import {useState} from 'react'
import {useRouter} from 'next/router'
import {getMdxByLocale} from '@/lib/universalMdxByLocale'


const files = {
    en: {Component: AboutEnPageText, meta: aboutEnPageMeta},
    ru: {Component: AboutRuPageText, meta: aboutRuPageMeta},
}

function ArrowRightIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" {...props}>
            <path
                d="M6.75 5.75 9.25 8l-2.5 2.25"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function MailIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    )
}

function BriefcaseIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    )
}

function SkillIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
        </svg>
    )
}

function ArrowDownIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function SocialLink({icon: Icon, ...props}) {
    return (
        <Link className="group -m-1 p-1" {...props}>
            <Icon
                className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"/>
        </Link>
    )
}

function Newsletter() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email}),
            })

            if (res.ok) {
                router.push('/thank-you')
            } else {
                const data = await res.json()
                setError(data.error || 'Something went wrong')
            }
        } catch (err) {
            console.error(err)
            setError('Network error')
        } finally {
            setLoading(false)
        }
    }
    const {t} = useTranslation('common')
    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
        >
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <MailIcon className="h-6 w-6 flex-none"/>
                <span className="ml-3">{t('Get a PDF version')}</span>
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {/*{t('email')}*/}
                Provide your email, and I will send you a PDF version of my resume.
            </p>
            <div className="mt-6 flex">
                <input
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                />
                <Button type="submit" className="ml-4 flex-none">
                    {t('Get')}
                </Button>
            </div>
        </form>
    )
}

function Resume() {
    const {t} = useTranslation('common')
    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                <BriefcaseIcon className="h-6 w-6 flex-none"/>
                <span className="ml-3">{t('Work')}</span>
            </h2>
            <ol className="space-y-4">
                {resume.map((role, idx) => {
                    const slug = role.company
                        .toLowerCase()
                        .replace(/\s+/g, '-')
                        .replace(/[^a-z0-9\-]/g, '');
                    return (
                        <li key={idx}>
                            <Link
                                href={`/about#${slug}`}
                                className="group block rounded-2xl bg-white dark:bg-zinc-800/40 p-4
                         transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="relative flex h-10 w-10 items-center justify-center
                             rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5
                             dark:border dark:border-zinc-700/50 dark:bg-zinc-800"
                                    >
                                        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized/>
                                    </div>
                                    <dl className="flex flex-auto flex-wrap gap-x-2">
                                        <dt className="sr-only">Company</dt>
                                        <dd className="w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                            {role.company}
                                        </dd>
                                        <dt className="sr-only">Role</dt>
                                        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                            {role.title}
                                        </dd>
                                        <dt className="sr-only">Date</dt>
                                        <dd className="ml-auto text-xs text-zinc-500 dark:text-zinc-500">
                                            <time dateTime={role.start.dateTime ?? role.start}>
                                                {role.start.label ?? role.start}
                                            </time>
                                            {' — '}
                                            <time dateTime={role.end.dateTime ?? role.end}>
                                                {role.end.label ?? role.end}
                                            </time>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="mt-4 flex items-center text-sm font-medium text-teal-500 ml-14">
                                    Read more
                                    <ArrowRightIcon className="ml-1 h-4 w-4 stroke-current"/>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

function Skills() {
    const {t} = useTranslation('common')
    const skills = [
        ...new Set(resume.flatMap((item) => item.skills || []))
    ]

    if (skills.length === 0) {
        return null
    }
    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                <SkillIcon className="h-6 w-6 flex-none"/>
                <span className="ml-3">{t('Skills')}</span>
            </h2>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="
              inline-block
              rounded-full
              border border-transparent
              bg-zinc-100 dark:bg-zinc-800
              px-2 py-1 text-[0.75rem] font-medium
              text-zinc-800 dark:text-zinc-200
              transition-colors duration-200
              hover:border-teal-500
              hover:bg-teal-50
              hover:text-teal-600
              dark:hover:bg-teal-900
              dark:hover:text-teal-400
            "
                    >
            {skill}
          </span>
                ))}
            </div>
        </div>
    )
}

function Photos() {
    const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];
    const images = [image1, image2, image3, image4, image5];

    return (
        <div className="mt-16 sm:mt-20">
            {/* Контейнер с горизонтальным скроллом */}
            <div
                className="
                  -my-4
                  flex
                  gap-5
                  overflow-x-auto
                  overflow-y-visible
                  py-4
                  sm:gap-8
                  sm:justify-center
                  scrollbar-hide
                "
                style={{
                  WebkitOverflowScrolling: 'touch', // плавный тач-скролл на iOS
                }}
            >
                {images.map((image, imageIndex) => (
                    <div
                        key={image.src}
                        className={clsx(
                            "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
                            rotations[imageIndex % rotations.length]
                        )}
                    >
                        <Image
                            src={image}
                            alt=""
                            sizes="(min-width: 640px) 18rem, 11rem"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Home() {
    const {locale} = useRouter()
    const {Component, meta} = getMdxByLocale({locale, files})
    return (
        <>
            <NextSeo
                title="Me"
                description={siteMeta.description}
                canonical="https://my.site"
            />
            <Container className="mt-9">
                <div className="max-w-2xl text-lg">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        {meta.title}
                    </h1>
                    <div className="prose dark:prose-invert text-zinc-600 dark:text-zinc-400">
                        <Component/>
                    </div>
                    <div className="mt-6 flex gap-6">
                        <SocialLink
                            href={siteMeta.author.twitter}
                            aria-label="Follow on Twitter"
                            icon={XIcon}
                        />

                        <SocialLink
                            href={siteMeta.author.instagram}
                            aria-label="Follow on Instagram"
                            icon={InstagramIcon}
                        />
                        <SocialLink
                            href="https://github.com"
                            aria-label="Follow on GitHub"
                            icon={GitHubIcon}
                        />
                        <SocialLink
                            href={siteMeta.author.linkedin}
                            aria-label="Follow on LinkedIn"
                            icon={LinkedInIcon}
                        />
                    </div>
                </div>
            </Container>
            <Photos/>
            <Container className="mt-24 md:mt-28">
                <div
                    className="mx-auto grid max-w-xl lg:grid-cols-[3fr_1fr] gap-y-10 gap-x-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-20 lg:gap-x-10">
                    <div className="space-y-10 lg:col-start-1">
                        <Resume/>
                    </div>
                    <div className="space-y-5 lg:col-start-2">
                        <Skills/>
                        <Newsletter/>
                    </div>
                </div>
            </Container>
        </>
    )
}

export async function getStaticProps({locale}) {

    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    }
}
