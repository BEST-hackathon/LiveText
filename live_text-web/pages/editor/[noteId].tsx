import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'

const EditorContainerNoSsr = dynamic(
    () => import('../../components/EditorContainer'),
    { ssr: false }
)

const EditorPage: NextPage = () => {
    const router = useRouter()
    const { noteId } = router.query

    if (!noteId && typeof noteId !== 'string') return null

    return (
        <>
            <Head>
                <title>LiveText: Editor</title>
            </Head>
            <EditorContainerNoSsr noteId={noteId as string} />
        </>
    )
}

export default EditorPage
