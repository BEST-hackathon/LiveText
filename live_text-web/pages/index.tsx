import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { v4 } from 'uuid'
import { Feature, FeatureProps } from '../components/Feature'
import styles from '../styles/Home.module.scss'

const CallToAction = () => {
    const router = useRouter()

    const onNoteCreate = async () => {
        router.push(`/editor/${v4()}`)
    }

    return (
        <button className={styles.button} onClick={onNoteCreate}>
            Take a Note
        </button>
    )
}

const Home: NextPage = () => {
    const features: FeatureProps['feature'][] = [
        {
            title: 'Live markdown preview',
            description: 'Take advantage of the impressive markup language.',
            image: '/preview.svg',
        },
        {
            title: 'Collaborate, share, present',
            description:
                'Notes are versatile. From personal notes to creating neat presentations together with your team!',
            image: '/collaboration.svg',
        },
        {
            title: 'Offline support',
            description:
                "Lost connection? We'll cover you. Text will be saved immediately after the connection is restored",
            image: '/offline.svg',
        },
    ]

    return (
        <main className={styles.main}>
            <Head>
                <title>LiveText</title>
            </Head>

            <div className={styles.wrapper}>
                <section className={styles.header}>
                    <div>
                        <h2 className={styles.title}>
                            Collaborative Notes made simple
                        </h2>
                        <CallToAction />
                    </div>
                    <div>
                        <Image
                            src="/main.svg"
                            alt="Main illustration"
                            width={800}
                            height={800}
                        />
                    </div>
                </section>
            </div>

            <section>
                {features.map((feature, idx) => (
                    <Feature key={idx} feature={feature} />
                ))}
            </section>

            <section className={styles.try}>
                <h1 className={styles.title}>Give it a try!</h1>
                <div>
                    <CallToAction />
                </div>
            </section>
        </main>
    )
}

export default Home
