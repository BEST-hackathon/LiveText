import styles from '../../styles/Editor.module.scss'
import type { NextPage } from 'next'
import { Editor } from '../../components/Editor'
import { Preview } from '../../components/Preview'
import { useNote } from '../../hooks/useNote'
import { useRouter } from 'next/router'

const EditorContainer = ({noteId}) => {
    const { note, updateNote } = useNote(noteId as string)
    console.log({note})

    return (<main className={styles.main}>
        <Editor onChange={updateNote} initialDoc={note.formattedText} />
        <Preview doc={note.formattedText} />
    </main>)
}

const EditorPage: NextPage = () => {
    const router = useRouter()
    const { noteId } = router.query

    if (!noteId && typeof noteId !== 'string') return null

    return <EditorContainer noteId={noteId}/>
}

export default EditorPage
