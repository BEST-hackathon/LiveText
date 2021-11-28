import React, { useState } from 'react'
import { Rnd } from 'react-rnd'
import styles from '../styles/Editor.module.scss'
import { Editor } from './Editor'
import { Preview } from './Preview'

const EditorContainer = ({ noteId }: { noteId: string }) => {
    const [note, setNote] = useState('')

    return (
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
                minWidth="30%"
                maxWidth="70%"
                minHeight="100vh"
            >
                <Editor onChange={setNote} noteId={noteId} />
            </Rnd>

            <Preview note={note} />
        </main>
    )
}

export default EditorContainer
