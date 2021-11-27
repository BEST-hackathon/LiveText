import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { addNote } from '../hooks/useNote';

const Home: NextPage = () => {
    const router = useRouter()

    const onNoteCreate = async () => {
        const noteId = await addNote()
        router.push(`/editor/${noteId}`)
    }

    return <button onClick={onNoteCreate}>Create new Note</button>
}

export default Home
