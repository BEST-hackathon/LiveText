import React from 'react'
import { useCodeMirror } from '../hooks/useCodeMirror'
import styles from '../styles/Editor.module.scss'

type EditorProps = {
    onChange: (doc: string) => void
    noteId: string
}

export const Editor: React.FC<EditorProps> = React.memo(
    ({ onChange, noteId }) => {
        const [refContainer] = useCodeMirror<HTMLDivElement>({
            onChange: ({ doc }) => onChange(doc.toString()),
            noteId,
        })

        return <div className={styles.editorWrapper} ref={refContainer} />
    }
)
