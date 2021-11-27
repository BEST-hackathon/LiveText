import { useEffect, useState, useRef } from 'react'
import { EditorState } from '@codemirror/state'
import { EditorView, keymap, highlightActiveLine } from '@codemirror/view'
import { defaultKeymap } from '@codemirror/commands'
import { history, historyKeymap } from '@codemirror/history'
import { indentOnInput } from '@codemirror/language'
import { bracketMatching } from '@codemirror/matchbrackets'
import { lineNumbers, highlightActiveLineGutter } from '@codemirror/gutter'
import { defaultHighlightStyle } from '@codemirror/highlight'
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { oneDark } from '@codemirror/theme-one-dark'

export type UseCodeMirrorProps = {
    initialDoc: string
    onChange?: (state: EditorState) => void
}

export const useCodeMirror = <T extends Element>({
    onChange,
    initialDoc,
}: UseCodeMirrorProps): [React.MutableRefObject<T | null>, EditorView?] => {
    const refContainer = useRef<T>(null)
    const [editorView, setEditorView] = useState<EditorView>()

    useEffect(() => {
        if (!refContainer.current) return

        const startState = EditorState.create({
            doc: initialDoc,
            extensions: [
              keymap.of([...defaultKeymap, ...historyKeymap]),
              lineNumbers(),
              highlightActiveLineGutter(),
              history(),
              indentOnInput(),
              bracketMatching(),
              defaultHighlightStyle.fallback,
              highlightActiveLine(),
              markdown({
                base: markdownLanguage,
                codeLanguages: languages,
                addKeymap: true
              }),
              oneDark,
              // transparentTheme,
              // syntaxHighlighting,
              EditorView.lineWrapping,
                EditorView.updateListener.of((update) => {
                    if (update.changes) {
                        onChange && onChange(update.state)
                    }
                }),
            ],
        })

        const view = new EditorView({
            state: startState,
            parent: refContainer.current,
        })

        setEditorView(view)
    }, [refContainer])

    return [refContainer, editorView]
}