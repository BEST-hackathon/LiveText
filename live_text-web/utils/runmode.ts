import { highlightTree } from '@codemirror/highlight'
import { Language } from '@codemirror/language'
import { oneDarkHighlightStyle } from '@codemirror/theme-one-dark'

type RunModeCallback = (
    text: string,
    style: string | null,
    from: number,
    to: number
) => void

export function runmode(
    textContent: string,
    language: Language,
    callback: RunModeCallback
): void {
    const tree = language.parser.parse(textContent)
    let pos = 0
    highlightTree(tree, oneDarkHighlightStyle.match, (from, to, classes) => {
        if (from > pos) {
            callback(textContent.slice(pos, from), null, pos, from)
        }
        callback(textContent.slice(from, to), classes, from, to)
        pos = to
    })
    if (pos !== tree.length) {
        callback(textContent.slice(pos, tree.length), null, pos, tree.length)
    }
}
