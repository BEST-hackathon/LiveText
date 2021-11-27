import Gun from 'gun'
import { useCallback, useEffect, useRef, useState } from 'react'

type NoteType = {
    formattedText: string
}

const gun = Gun({
    peers: ['http://localhost:3400/gun'],
})

const notesSet = gun.get('notes')

export const useNote = (key: string) => {
    const [note, setNote] = useState<NoteType>({ formattedText: '' })
    const [isLoading, setIsLoading] = useState(true)
    const isFirst = useRef(true)
    const noteNode = notesSet.get(key)

    useEffect(() => {
        noteNode.on((data: NoteType) => { 
            console.log("inside useEffect useNote", {data})
            if (isFirst.current) {
                isFirst.current = false
                setIsLoading(Boolean(data))
            }
            setNote(data)
        })

        return () => noteNode.off()
    }, [])

    const updateNote = useCallback((text: string) => {
        console.log("calling updatex")
        noteNode.put({ formattedText: text } as NoteType)
    }, [])

    return {
        note,
        isLoading,
        updateNote,
    }
}

export const addNote = (defaultText = ''): Promise<string> => {
    return new Promise((resolve, reject) => {
        notesSet
            .set({ formattedText: defaultText } as NoteType)
            .once((_, key) => (key ? resolve(key) : reject(key)))
    })
}
