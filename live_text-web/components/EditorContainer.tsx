import React, { useState } from 'react'
import styles from '../styles/Editor.module.scss'
import { Editor } from './Editor'
import { PresentationPreview } from './PresentationPreview'
import { TextPreview } from './TextPreview'

const EditorContainer = ({ noteId }: { noteId: string }) => {
    const [note, setNote] = useState('')

    return (
        <main className={styles.main}>
            <Editor onChange={setNote} noteId={noteId} />
            {/* <PresentationPreview note={note} /> */}
            <TextPreview note={note} />
        </main>
    )
}

export default EditorContainer
