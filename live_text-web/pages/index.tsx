import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { v4 } from 'uuid'

const Home: NextPage = () => {
    const router = useRouter()

    const onNoteCreate = async () => {
        router.push(`/editor/${v4()}`)
    }

    return <button onClick={onNoteCreate}>Create new Note</button>
}

export default Home
