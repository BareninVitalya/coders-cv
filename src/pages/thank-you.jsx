import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
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
  return (
    <>
      <Head>
        <title>You’re request my resume as a PDF</title>
        <meta
          name="description"
          content="Thanks you!"
        />
      </Head>
      <SimpleLayout
        title="Thanks you!"
        intro="I’ll send you an email with a PDF version of my resume. No subscriptions, no spam just the document you requested."
      />
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
