import Link from 'next/link'
import React, { useState } from 'react'
import { Rnd } from 'react-rnd'
import styles from '../styles/Editor.module.scss'
import { Editor } from './Editor'
import { TextPreview } from './TextPreview'

const EditorContainer = ({ noteId }: { noteId: string }) => {
    const [note, setNote] = useState('')

    return (
        <>
            <header className={styles.header}>
                <Link href="/">Home</Link>
            </header>

            <main className={styles.main}>
                <Rnd
                    disableDragging
                    className={styles.resizableEditor}
                    bounds="parent"
                    enableResizing={{
                        bottom: false,
                        bottomLeft: false,
                        bottomRight: false,
                        left: false,
                        top: false,
                        topLeft: false,
                        topRight: false,
                        right: true,
                    }}
                    default={{ width: '60%', x: 0, y: 0, height: 'unset' }}
                    minWidth="30%"
                    maxWidth="70%"
                    minHeight="100vh"
                >
                    <Editor onChange={setNote} noteId={noteId} />
                </Rnd>

                <TextPreview note={note} />
            </main>
        </>
    )
}

export default EditorContainer
