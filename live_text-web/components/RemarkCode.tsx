import { Language } from '@codemirror/language'
import React, { useEffect, useState } from 'react'
import { getLanguage } from '../utils/getLanguage'
import { runmode } from '../utils/runmode'

export type Tokens = {
    text: string
    style: string | null
}[]

export const RemarkCode: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
    const [spans, setSpans] = useState<Tokens>([])

    useEffect(() => {
        const langName = (props.className || '').substr(9)

        getLanguage(langName).then((language) => {
            if (language) {
                const body =
                    props.children instanceof Array ? props.children[0] : null
                const tokens: Tokens = []
                runmode(
                    body as string,
                    language,
                    (
                        text: string,
                        style: string | null,
                        _from: number,
                        _to: number
                    ) => {
                        tokens.push({ text, style })
                    }
                )
                setSpans(tokens)
            }
        })
    })

    return (
        <code>
            {spans.length > 0 ? (
                spans.map((span, idx) => (
                    <span key={idx} className={span.style || ''}>
                        {span.text}
                    </span>
                ))
            ) : (
                <code>{props.children}</code>
            )}
        </code>
    )
}
