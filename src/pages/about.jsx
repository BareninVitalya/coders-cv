import Image from 'next/future/image'
import Link from 'next/link'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import {
    TwitterIcon,
    InstagramIcon,
    GitHubIcon,
    LinkedInIcon,
    MastodonIcon
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar-head.png'
import {NextSeo} from 'next-seo';
import siteMeta, {resume, education} from '@/data/siteMeta'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import ExperiencePageText, {frontmatter as experiencePageMeta} from '@/data/experience.mdx'


function EducationIcon(props) {
    return (
        <svg viewBox="0 0 14.29 15.88" fill="currentColor" {...props}>
            <path
                d="M11.54,10.17l.15,.15c.05-.11,.05-.09,.13-.27-.14,.07-.15,.07-.28,.12Zm-.81-1.05c.23,.35,.37,.56,.62,.85,.35-.15,.3-.14,.63-.27,.12-.39,.3-.85,.39-1.27-.48,.26-.97,.51-1.64,.69Zm-.45-1.19c.08,.33,.19,.65,.33,.95,.66-.17,1.29-.45,1.85-.83,.07-.37,.16-.81,.18-1.19-.7,.53-1.5,.89-2.36,1.07Zm-.19-1.37c.01,.37,.06,.75,.14,1.11,.91-.18,1.77-.6,2.46-1.21,.02-.44,.07-.9,.08-1.35-.77,.81-1.73,1.31-2.68,1.45h0Zm.03-1.37c-.03,.37-.05,.73-.05,1.1,1.02-.16,2.04-.77,2.71-1.61,0-.48,0-1.01,0-1.49-.18,.33-.85,1.71-2.67,1.99Zm.13-1.13c-.04,.29-.07,.57-.1,.86,1.35-.22,2.31-1.31,2.62-2.44,0-.56-.01-.85-.01-1.4,0,0-.16,.02-.44,.06,.18,1.23-.54,2.65-2.07,2.92Zm.15-1.02l-.11,.73c1.04-.12,2.02-1.4,1.75-2.61-.17,.03-.25,.04-.42,.06,.16,.72-.33,1.64-1.22,1.82h0Zm.05-.28c.65-.22,1.05-.84,.9-1.52-.28,.02-.35,.02-.62,.03-.14,.72-.18,.82-.28,1.49ZM1.56,1.06c.06,3.4-.35,6.3,1.06,9.23,.39-.13,1.32-.56,2.14-1.15C2.48,7.1,2.08,4,3.03,1.26c-.52-.04-.98-.11-1.47-.19h0Zm2.55,.16s-.18,.05-.8,.05c-.73,1.9-.7,4.25,.34,6.07,.35,.64,.76,1.17,1.32,1.64,.36-.26,.55-.44,.88-.72-1.35-.99-2.1-2.62-2.17-4.27,0-.13,0-.26,0-.38l-.25-.07,.25-.07c.02-.77,.17-1.53,.44-2.26h0Zm1.21-.26c-.32,.12-.34,.13-.91,.24-.27,.71-.45,1.43-.45,2.2l.7-.19,.32-1.2h0c.08-.35,.2-.71,.35-1.05h0Zm.35-.13c-.27,.56-.45,1.16-.53,1.77l.17,.61,.71,.2c-.02-.14-.03-.28-.03-.42-.03-1.04,.36-2.15,.99-2.98-.4,.35-.9,.62-1.3,.81h0Zm.62,2.66l.18,.05-.16,.05c.03,.15,.06,.29,.11,.44,.24,.78,.78,1.5,1.49,1.9,.23-.33,.44-.66,.65-1-1.61-.82-1.85-3.04-.72-4.55-.17-.11-.26-.18-.51-.37-.96,1.17-1.18,2.49-1.03,3.49h0ZM8.5,.74c-.2-.09-.22-.12-.46-.23-.96,1.26-.93,3.37,.63,4.18,.15-.26,.29-.53,.43-.8-1.19-.67-1.29-2.08-.6-3.14Zm.68,.28c-.15-.06-.3-.1-.44-.17-.64,.86-.53,2.33,.5,2.79,.12-.24,.22-.47,.33-.72-.69-.41-.77-1.2-.38-1.91Zm.26,.08c-.38,.55-.32,1.26,.23,1.57,.18-.42,.38-1.02,.52-1.45-.25-.03-.5-.07-.74-.12Zm-4.32,3.96l-.16,1.11-.32-2.31-.7-.18c0,1.9,.78,3.43,2.09,4.39,.26-.26,.54-.52,.78-.8-.8-.52-1.37-1.32-1.69-2.21h0Zm.92-1.41l-.75,.21-.08,.58c.08,.34,.2,.66,.35,.97,.32,.67,.82,1.23,1.43,1.64,.26-.31,.52-.62,.75-.95-.94-.49-1.51-1.46-1.7-2.46h0Z"/>
            <path
                d="M6.73,12.34c.14-.12,.26-.09,.38,0-.11,.15-.28,.15-.38,0h0Zm.53-.05c.32-.16,.58-.02,.83,0h-.83Zm-1.63-.03c.44-.03,.77-.14,1.01,.02l-1.01-.02Zm1.73-2.14c-.29-.2-.66-.11-.98-.03-.2,.04-.48,.15-.68,.04l-.71,2.12c.38,.07,.76-.16,1.13-.21,.2-.02,.42-.02,.57,.15,.17-.09,.26-.09,.42,0,.23-.14,.55-.14,.8-.05,.28,.09,.58,.15,.87,.14l.42-2.2c-.71,.07-1.28-.41-1.84,.05h0Zm1.25,1.96c-.73,.05-.85-.47-1.56-.08l.37-1.7c.55-.39,1.07,.03,1.53-.04-.05,.31-.23,1.22-.35,1.82h0Zm-1.36-1.8l-.39,1.69c-.7-.41-1.06,.09-1.62,.09l.56-1.74c.53,.18,.98-.36,1.45-.05h0Z"/>
            <path
                d="M10.08,2.59c-1.18,2.96-2.9,5.75-5.47,7.71-.49,.38-.89,.62-1.41,.95,1.03,1.47,2.36,2.34,3.97,2.99,1.54-.61,3.04-1.66,3.93-2.93-.87-1.08-1.58-2.8-1.59-4.41-.03-1.52,.27-2.88,.57-4.31Zm-.62,7.3l-.36,2.61c-1.02,0-1.27,0-1.92,0-.07,.28-.49,.25-.55-.02-1.24,0-1.32,.01-1.92,.01l.83-2.57c.6,.25,1.29-.37,1.89-.05,1.1-.43,.99,.24,2.04,.01Z"/>
            <path
                d="M3.39,11.87c-.42-.52-.78-1.09-1.07-1.69-1.1-.12-.92,1.53-2.18,1.15,1.12,.94,1.89-.3,2.51-.15-.05,.31-.13,.61,.17,1.04,.23-.47,.33-.02,.58-.36Zm.37,1.41c-.28,.23-.46,.13-.38,.19,.08,.06,.13,.1,.29,.16,0,0,.09-.33,.08-.35Zm7.18-1.39c.43-.54,.67-.96,1.05-1.71,1.1-.12,.92,1.52,2.18,1.15-1.12,.94-1.89-.3-2.51-.15,.05,.31,.12,.61-.17,1.04-.23-.47-.32,0-.56-.34ZM.34,9.03c.58-.42,1.61,.27,.92,.82-.39,.31-.72-.11-1.26,.62,.11-.6,.35-.73,.36-.75,1.12,.06,.74-.97-.02-.69Zm.29,1.3c-.72,.18-.79,1.06,.15,.7-.46-.08-.43-.36-.15-.7h0Zm2.58,2.88c.75-.11,.58-.46-.06-.55-.34-.07-.99-.42-.73-1.14l-.57,1.05c0,.9,.75,1.13,1.3,1.31l.05-.67ZM.71,9.18c-.12-.09-.34,.18-.12,.24l-.15,.15c-.34-.21,.04-.54,.26-.39Zm13.23-.15c-.59-.42-1.61,.27-.92,.82,.39,.31,.72-.11,1.26,.62-.11-.6-.35-.73-.36-.75-1.12,.06-.74-.97,.02-.69Zm-.29,1.3c.72,.18,.79,1.06-.15,.7,.46-.08,.43-.36,.15-.7Zm-2.58,2.98c-.75-.11-.58-.46,.06-.55,.34-.07,1.01-.52,.75-1.25l.55,1.15c-.01,.9-.75,1.13-1.3,1.3l-.05-.67Zm-.7-.04c.28,.23,.46,.13,.38,.19-.08,.06-.13,.1-.29,.16,0,0-.09-.33-.09-.35Zm3.2-4.09c.12-.09,.33,.18,.12,.24l.15,.15c.34-.21-.04-.54-.26-.39ZM3.43,13.72c1.57,1.05,5.35,1.29,7.43-.05l.09,1.16c-1.48,1.39-6.21,1.39-7.6,0l.08-1.11Z"/>
        </svg>
    )
}

function EducationLogoItem({icon: Icon}) {
    return <Icon className="w-7 h-7 fill-current text-black dark:text-white"/>
}

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

function MailIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
        </svg>
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
                        <div className="mt-6 text-lg prose space-y-7 dark:prose-invert text-zinc-600 dark:text-zinc-400">
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
                                        className="relative flex h-10 w-10 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800">
                                        {/*<EducationLogoItem icon={EducationIcon}/>*/}
                                        <Image src={edu.logo} alt="" className="h-7 w-7" unoptimized/>
                                    </div>
                                    <dl className="flex flex-auto flex-wrap gap-x-2">
                                        <dt className="sr-only">Institution</dt>
                                        <dd className="w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                            {edu.institution}
                                        </dd>
                                        <dt className="sr-only">Degree</dt>
                                        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                            {edu.degree}
                                        </dd>
                                        <dt className="sr-only">Date</dt>
                                        <dd className="ml-auto text-xs text-zinc-500 dark:text-zinc-500">
                                            <time dateTime={edu.start}>{edu.start}</time>
                                            —{' '}
                                            <time dateTime={edu.end}>{edu.end}</time>
                                        </dd>
                                    </dl>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12">
                            <ul role="list">
                                <SocialLink href={siteMeta.author.twitter} icon={TwitterIcon}>
                                    Follow on Twitter
                                </SocialLink>
                                <SocialLink href={siteMeta.author.mastodon} icon={MastodonIcon} className="mt-4">
                                    Follow on Mastodon
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
                        <div className="space-y-20">
                            {resume.map((role) => {
                                const slug = role.company
                                    .toLowerCase()
                                    .replace(/\s+/g, '-')
                                    .replace(/[^a-z0-9\-]/g, '');
                                return (
                                    <div
                                        id={slug}
                                        key={role.company}
                                        className="grid grid-cols-[auto_1fr_auto] items-start gap-x-4"
                                    >
                                        <div
                                            className="relative flex h-10 w-10 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800">
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
                                        <div
                                            className="col-start-2 mt-2 prose dark:prose-invert text-zinc-600 dark:text-zinc-400">
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
