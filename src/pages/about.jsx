import Image from 'next/future/image'
import Link from 'next/link'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import {
    TwitterIcon,
    InstagramIcon,
    GitHubIcon,
    LinkedInIcon,
    MailIcon
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar-head.png'
import {NextSeo} from 'next-seo';
import siteMeta, {resume, education} from '@/data/siteMeta'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import ExperiencePageText, {frontmatter as experiencePageMeta} from '@/data/experience.mdx'


function SocialLink({className, href, children, icon: Icon}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
                <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500"/>
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}

export default function About() {
    const {t} = useTranslation('common')
    return (
        <>
            <NextSeo
                title="About - Me"
                description={siteMeta.description}
                canonical="https://my.site"
            />
            <Container className="mt-16 sm:mt-32">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            <Image
                                src={portraitImage}
                                alt=""
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
                            />
                        </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                            {experiencePageMeta.title}
                        </h1>
                        <div
                            className="mt-6 text-lg prose space-y-7 dark:prose-invert text-zinc-600 dark:text-zinc-400">
                            <ExperiencePageText/>
                        </div>
                    </div>
                    <div className="mt-12 lg:pl-20">
                        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
                            {t('Education')}
                        </h2>
                        <div className="space-y-6">
                            {education.map((edu) => (
                                <div key={edu.institution} className="flex items-center gap-4">
                                    <div
                                        className="relative flex flex-none h-10 w-10 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800">
                                        <Image src={edu.logo} alt="" className="h-7 w-7 object-contain" unoptimized/>
                                    </div>
                                    <dl className="flex flex-col flex-auto w-full gap-y-1">
                                        <div className="flex items-baseline">
                                            <dt className="sr-only">Institution</dt>
                                            <dd className="text-sm font-medium whitespace-pre-line leading-snug text-zinc-900 dark:text-zinc-100">
                                                {edu.institution}
                                            </dd>
                                            <dt className="sr-only">Date</dt>
                                            <dd className="ml-auto text-xs text-zinc-500 flex-shrink-0 dark:text-zinc-500">
                                                <time dateTime={edu.start}>{edu.start}</time>
                                                —{' '}
                                                <time dateTime={edu.end}>{edu.end}</time>
                                            </dd>
                                        </div>
                                        <div className="flex items-baseline">
                                            <dt className="sr-only">Degree</dt>
                                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                                {edu.degree}
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12">
                            <ul role="list">
                                <SocialLink href={siteMeta.author.twitter} icon={TwitterIcon}>
                                    Follow on Twitter
                                </SocialLink>
                                <SocialLink href={siteMeta.author.instagram} icon={InstagramIcon} className="mt-4">
                                    Follow on Instagram
                                </SocialLink>
                                <SocialLink href={siteMeta.author.github} icon={GitHubIcon} className="mt-4">
                                    Follow on GitHub
                                </SocialLink>
                                <SocialLink href={siteMeta.author.linkedin} icon={LinkedInIcon} className="mt-4">
                                    Follow on LinkedIn
                                </SocialLink>
                                <SocialLink
                                    href={`mailto:${siteMeta.author.email}`}
                                    icon={MailIcon}
                                    className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-700/40"
                                >
                                    {siteMeta.author.email}
                                </SocialLink>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="mt-12">
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-8">
                        {t('Experience')}
                    </h2>
                    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-[1px_minmax(0,3fr)] lg:gap-x-8 lg:gap-y-24">
                        <div className="self-stretch w-px bg-zinc-300 dark:bg-zinc-600"/>
                        <div className="space-y-20 prose w-full">
                            {resume.map((role) => {
                                const slug = role.company
                                    .toLowerCase()
                                    .replace(/\s+/g, '-')
                                    .replace(/[^a-z0-9\-]/g, '');
                                return (
                                    <div
                                        id={slug}
                                        key={role.company}
                                        className="
                                                    grid
                                                    grid-cols-[min-content_1fr_auto]
                                                    grid-rows-[auto_auto]
                                                    lg:grid-rows-1
                                                    gap-x-4
                                                    gap-y-4
                                                    items-start
                                                  "
                                    >
                                        <div
                                            className="relative flex h-12 w-12 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800">
                                            <Image
                                                src={role.logo}
                                                alt={role.company}
                                                className="h-9 w-9"
                                                unoptimized
                                            />
                                        </div>
                                        <dl className="flex flex-col">
                                            <dt className="sr-only">Company</dt>
                                            <dd className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                                {role.company}
                                            </dd>
                                            <dt className="sr-only">Role</dt>
                                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                                {role.title}
                                            </dd>
                                        </dl>
                                        <div className="text-xs text-zinc-500 dark:text-zinc-500">
                                            <time dateTime={role.start.dateTime ?? role.start}>
                                                {role.start.label ?? role.start}
                                            </time>
                                            {' — '}
                                            <time dateTime={role.end.dateTime ?? role.end}>
                                                {role.end.label ?? role.end}
                                            </time>
                                        </div>
                                        <div className="
                                                          row-start-2
                                                          col-start-1 col-end-4
                                                          prose min-w-0 dark:prose-invert text-zinc-600 dark:text-zinc-400
                                                          lg:col-start-2 lg:col-end-3
                                                        ">
                                            <role.Component/>
                                            {role.skills && role.skills.length && (

                                                <div
                                                    className="rounded-2xl border border-zinc-100 p-2 dark:border-zinc-700/40">
                                                    <div className="flex flex-wrap gap-2">
                                                        {role.skills.map((skill) => (
                                                            <span
                                                                key={skill}
                                                                className="
                                                                          inline-block
                                                                          rounded-full
                                                                          border border-transparent
                                                                          bg-zinc-100 dark:bg-zinc-800
                                                                          px-4 text-[0.75rem] font-medium
                                                                          text-zinc-800 dark:text-zinc-200
                                                                          transition-colors duration-200
                                                                          hover:border-teal-500
                                                                          hover:bg-teal-50
                                                                          hover:text-teal-600
                                                                          dark:hover:bg-teal-900
                                                                          dark:hover:text-teal-400
                                                                        ">
                                                                {skill}
                                                              </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
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
