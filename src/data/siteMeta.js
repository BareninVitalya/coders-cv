import logoMIT from '@/images/logos/MIT.png'
import logoBerkeley from '@/images/logos/UCBerkeley.png'
import logoMicrosoft from '@/images/logos/azure.svg'
import logoGoogle from '@/images/logos/google.png'

import logoGolang from '@/images/logos/icons8-golang.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import AboutMicrosoft, { frontmatter as microsoftMeta }
  from '@/data/works/microsoft/microsoft-internship.mdx'
import AboutGoogle, { frontmatter as googleMeta }
  from '@/data/works/google/google.mdx'

const siteMeta = {
    title: "My name",
    description: "My description",
    copyright: "My name, CC-BY-SA",
    author: {
        name: "My name",
        email: "my@exemple.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitch: "https://twitch.tv",
        youtube: "https://youtube.com",
    },
    siteUrl: "https://mysite.dev",
    icon: '/favicon.ico'
}
export const resume = [
    {
        company: microsoftMeta.company,
        title: microsoftMeta.title,
        logo: logoMicrosoft,
        start: microsoftMeta.start,
        end: microsoftMeta.end,
        description: microsoftMeta.description,
        skills: microsoftMeta.skills,
        Component: AboutMicrosoft,
    },
    {
        company: googleMeta.company,
        title: googleMeta.title,
        logo: logoGoogle,
        start: googleMeta.start,
        end: googleMeta.end,
        description: googleMeta.description,
        skills: googleMeta.skills,
        Component: AboutGoogle,
    },
]
export const education = [
    {
        institution: 'Massachusetts Institute of Technology',
        degree: 'M.Sc. in Computer Science and Artificial Intelligence',
        logo: logoMIT,
        start: '2014',
        end: '2016',
    },
    {
        institution: 'University of California, Berkeley',
        degree: 'B.Sc. in Electrical Engineering and Computer Sciences',
        logo: logoBerkeley,
        start: '2010',
        end: '2014',
    },
]
export const projects = [
    {
        name: 'Google Query Analytics',
        description:
            'A real-time analytics tool for monitoring and optimizing large-scale search queries across distributed systems at Google.',
        link: { href: 'https://opensource.google', label: 'opensource.google' },
        logo: logoGoogle,
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