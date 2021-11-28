import React, { useState } from 'react'
import styles from '../styles/Editor.module.scss'
import { Editor } from './Editor'
import { Preview } from './Preview'

const EditorContainer = ({ noteId }: { noteId: string }) => {
    const [note, setNote] = useState('')

    return (
        <main className={styles.main}>
            <Editor onChange={setNote} noteId={noteId} />
            <Preview note={note} />
        </main>
    )
}

export default EditorContainer
