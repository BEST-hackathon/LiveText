import { basicSetup, EditorState, EditorView } from '@codemirror/basic-setup'
import { highlightActiveLineGutter, lineNumbers } from '@codemirror/gutter'
import { defaultHighlightStyle } from '@codemirror/highlight'
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { indentOnInput } from '@codemirror/language'
import { languages } from '@codemirror/language-data'
import { bracketMatching } from '@codemirror/matchbrackets'
import { oneDark } from '@codemirror/theme-one-dark'
import { highlightActiveLine, keymap } from '@codemirror/view'
import { useEffect, useRef, useState } from 'react'
import { yCollab, yUndoManagerKeymap } from 'y-codemirror.next'
import { WebrtcProvider } from 'y-webrtc'
import * as Y from 'yjs'
import { userColor } from '../utils/userColor'

export type UseCodeMirrorProps = {
    noteId: string
    onChange?: (state: EditorState) => void
}

export const useCodeMirror = <T extends Element>({
    onChange,
    noteId,
}: UseCodeMirrorProps): [React.MutableRefObject<T | null>, EditorView?] => {
    const refContainer = useRef<T>(null)
    const [editorView, setEditorView] = useState<EditorView>()

    useEffect(() => {
        if (!refContainer.current) return

        const ydoc = new Y.Doc()
        const provider = new WebrtcProvider(noteId, ydoc)
        const ytext = ydoc.getText('note')

        provider.awareness.setLocalStateField('user', {
            name: 'Anonymous ' + Math.floor(Math.random() * 100),
            color: userColor.color,
            colorLight: userColor.light,
        })

        const state = EditorState.create({
            doc: ytext.toString(),
            extensions: [
                keymap.of([...yUndoManagerKeymap]),
                basicSetup,
                yCollab(ytext, provider.awareness),
                lineNumbers(),
                highlightActiveLineGutter(),
                indentOnInput(),
                bracketMatching(),
                defaultHighlightStyle.fallback,
                oneDark,
                highlightActiveLine(),
                EditorView.lineWrapping,
                markdown({
                    base: markdownLanguage,
                    codeLanguages: languages,
                    addKeymap: true,
                }),
                EditorView.theme({
                    '&': {
                        height: '100%',
                    },
                }),
                EditorView.updateListener.of(
                    (update) => update.changes && onChange?.(update.state)
                ),
            ],
        })

        const view = new EditorView({
            state: state,
            parent: refContainer.current,
        })

        setEditorView(view)

        return () => {
            ydoc.destroy()
            view.destroy()
            provider.destroy()
        }
    }, [refContainer])

    return [refContainer, editorView]
}
