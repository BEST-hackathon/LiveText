import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Editor } from '../../components/Editor'
import { Preview } from '../../components/Preview'
import { useNote } from '../../hooks/useNote'
import styles from '../../styles/Editor.module.scss'

const EditorContainer = ({ noteId }: { noteId: string }) => {
    const { note, updateNote } = useNote(noteId)

    return (
        <main className={styles.main}>
            <Editor onChange={updateNote} initialDoc={note.formattedText} />
            <Preview doc={note.formattedText} />
        </main>
    )
}

const EditorPage: NextPage = () => {
    const router = useRouter()
    const { noteId } = router.query

    if (!noteId && typeof noteId !== 'string') return null

    return <EditorContainer noteId={noteId as string} />
}

export default EditorPage
