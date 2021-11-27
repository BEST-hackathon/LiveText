import { useCallback } from 'react'
import { useCodeMirror, UseCodeMirrorProps } from '../hooks/useCodeMirror'
import styles from '../styles/Editor.module.scss'

type EditorProps = {
    initialDoc: string
    onChange: (doc: string) => void
}

export const Editor: React.FC<EditorProps> = ({ initialDoc, onChange }) => {
    // Special callback for codemirror
    const handleChange = useCallback<
        NonNullable<UseCodeMirrorProps['onChange']>
    >(({ doc }) => onChange(doc.toString()), [onChange])

    const [refContainer] = useCodeMirror<HTMLDivElement>({
        initialDoc,
        onChange: handleChange,
    })

    return <div className={styles.editorWrapper} ref={refContainer} />
}
