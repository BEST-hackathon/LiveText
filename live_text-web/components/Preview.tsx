import 'github-markdown-css/github-markdown.css'
import { defaultSchema } from 'hast-util-sanitize'
import React from 'react'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkReact from 'remark-react'
import { unified } from 'unified'
import styles from '../styles/Preview.module.scss'
import { RemarkCode } from './RemarkCode'

type PreviewProps = {
    note: string
}

const schema = {
    ...defaultSchema,
    attributes: {
        ...defaultSchema.attributes,
        code: [...(defaultSchema.attributes?.code || []), 'className'],
    },
}

export const Preview: React.FC<PreviewProps> = ({ note }) => {
    const md = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkReact, {
            createElement: React.createElement,
            sanitize: schema,
            remarkReactComponents: {
                code: RemarkCode,
            },
        })
        .processSync(note).result

    return <div className={styles.preview}>{md}</div>
}
