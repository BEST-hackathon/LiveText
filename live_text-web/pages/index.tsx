import type { NextPage } from 'next'
import { useCallback, useState } from 'react'
import { Editor } from '../components/Editor'
import { Preview } from '../components/Preview'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
    const [doc, setDoc] = useState<string>('# Hello world!\n')

    const handleDocChange = useCallback((updatedDoc) => {
        setDoc(updatedDoc)
    }, [])

    return (
        <main className={styles.main}>
            <Editor onChange={handleDocChange} initialDoc={doc} />
            <Preview doc={doc} />
        </main>
    )
}

export default Home
