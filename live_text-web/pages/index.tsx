import styles from '../styles/Home.module.scss'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { addNote } from '../hooks/useNote'
import { Header } from '../components/Header'
import { Feature, FeatureProps } from '../components/Feature'

const Home: NextPage = () => {
    const router = useRouter()

    const onNoteCreate = async () => {
        const noteId = await addNote()
        router.push(`/editor/${noteId}`)
    }

    const features: FeatureProps['feature'][] = [
        {
            title: 'Live preview',
            description: 'Lorem ipsum dolor sit amet',
            image: '/preview.svg',
        },
        {
            title: 'Offline support',
            description: 'Lorem ipsum dolor sit amet',
            image: '/offline.svg',
        },
        {
            title: 'Collaborate, collaborate, collaborate!',
            description: 'Lorem ipsum dolor sit amet',
            image: '/preview.svg',
        },
    ]

    // collaboration
    // offline
    // live preview
    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <section className={styles.page}>
                    <div>
                        <span className={styles.logo}>LiveText</span>
                        <h1 className={styles.title}>
                            Lorem ipsum dolor sit amet
                        </h1>
                        <button
                            className={styles.button}
                            onClick={onNoteCreate}
                        >
                            I love purple color
                        </button>
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
                    <button className={styles.button} onClick={onNoteCreate}>
                        I love purple color
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Home
