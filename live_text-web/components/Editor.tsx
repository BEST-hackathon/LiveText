import { useCallback, useEffect } from 'react'
import { useCodeMirror, UseCodeMirrorProps } from '../hooks/useCodeMirror'
import styles from '../styles/Editor.module.scss'

interface Props {
    initialDoc: string
    onChange: (doc: string) => void
}

export const Editor: React.FC<Props> = ({ initialDoc, onChange }) => {
    // Special callback for codemirror
    const handleChange = useCallback<
        NonNullable<UseCodeMirrorProps['onChange']>
    >(({ doc }) => onChange(doc.toString()), [onChange])

    const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
        initialDoc,
        onChange: handleChange,
    })

    useEffect(() => {
        if (editorView) {
            // TODO: create a note
        }
    }, [editorView])

    return <div className={styles.editorWrapper} ref={refContainer}></div>
}
