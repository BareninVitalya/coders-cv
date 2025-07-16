import logoAmazon from '@/images/logos/aws.svg'
import logoClarity from '@/images/logos/clarity.jpg'
import logoMicrosoft from '@/images/logos/azure.svg'
import logoXOR from '@/images/logos/xor.jpg'
import logoVanilla from '@/images/logos/vanilla.svg'
import logoFleek from '@/images/logos/fleeksvg.svg'
import logoUblue from '@/images/logos/ublue.png'

import logoGolang from '@/images/logos/icons8-golang.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoCaptainhook from '@/images/logos/captainhook.svg'
import logoUSSI from '@/images/logos/ussi.svg'
import AboutAmazon, { frontmatter as amazonMeta }
  from '@/data/works/amazon/index.mdx'


const siteMeta = {
    title: "My name",
    description: "My description",
    copyright: "My name, CC-BY-SA",
    author: {
        name: "My name",
        email: "my@exemple.com",
        twitter: "https://twitter.com",
        mastodon: "https://tty0.social",
        instagram: "https://instagram.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitch: "https://twitch.tv",
        youtube: "https://youtube.com",
    },
    siteUrl: "https://mysite.dev",
    icon: '/favicon.png'
}
export const resume = [
    {
        company: amazonMeta.company,
        title: amazonMeta.title,
        logo: logoUSSI,
        start: '2022',
        end: {
            label: 'Present',
            dateTime: new Date().getFullYear(),
        },
        description: amazonMeta.description,
        skills: amazonMeta.skills,
        Component: AboutAmazon,
    },
    {
        company: 'Microsoft',
        title: 'Principal Cloud Developer Advocate',
        logo: logoMicrosoft,
        start: '2017',
        end: '2022',
        description: amazonMeta.description,
        skills: amazonMeta.skills,
        Component: AboutAmazon,
    },
    {
        company: 'XOR Data Exchange',
        title: 'CIO',
        logo: logoXOR,
        start: '2014',
        end: '2016',
        description: amazonMeta.description,
        skills: amazonMeta.skills,
        Component: AboutAmazon,
    },
    {
        company: 'Clarity Services, Inc.',
        title: 'COO',
        logo: logoClarity,
        start: '2008',
        end: '2014',
        description: amazonMeta.description,
        skills: amazonMeta.skills,
        Component: AboutAmazon,
    },
]
export const education = [
    {
        institution: 'University of Example',
        degree: 'B.Sc. in Computer Science',
        logo: logoAmazon,
        start: '2008',
        end: '2012',
    },
    {
        institution: 'Example Graduate School',
        degree: 'M.A. in Interactive Media',
        logo: logoUSSI,
        start: '2013',
        end: '2015',
    },
]
export const projects = [
    {
        name: 'Fleek',
        description:
            'Install and manage all the tools you need to be productive.',
        link: {href: 'https://getfleek.dev', label: 'getfleek.dev'},
        logo: logoFleek,
    },
    {
        name: 'Universal Blue',
        description:
            'Custom Operating System images based on Fedora.',
        link: {href: 'https://ublue.it', label: 'Universal Blue'},
        logo: logoUblue,
    },
    {
        name: 'Bluefin',
        description:
            'The next generation Linux workstation. Built for cloud-native, using cloud-native.',
        link: {href: 'https://projectbluefin.io', label: 'Bluefin'},
        logo: logoUblue,
    },
    {
        name: 'Vanilla OS',
        description:
            'Vanilla OS is an immutable and atomic Ubuntu Linux-based Point Release distribution, that receives updates at the right time, neither before nor after, without sacrificing security and functionality.',
        link: {href: 'https://vanillaos.org', label: 'vanillaos.org'},
        logo: logoVanilla,
    },
    {
        name: 'Captain Hook',
        description:
            'Custom commands as webhooks.',
        link: {href: 'https://github.com/bketelsen/captainhook', label: 'github.com'},
        logo: logoCaptainhook,
    },
    {
        name: 'Kubernetes',
        description:
            'Production-Grade Container Scheduling and Management',
        link: {href: 'https://github.com/kubernetes/kubernetes', label: 'github.com'},
        logo: logoKubernetes,
    },
    {
        name: 'Go',
        description:
            'Build fast, reliable, and efficient software at scale',
        link: {href: 'https://go.dev', label: 'go.dev'},
        logo: logoGolang,
    },


]


export default siteMeta;