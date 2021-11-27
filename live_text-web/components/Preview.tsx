import 'github-markdown-css/github-markdown.css'
import styles from '../styles/Preview.module.scss'
import { unified } from 'unified'
import { defaultSchema } from 'hast-util-sanitize'
import { RemarkCode } from './RemarkCode'
import React from 'react'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkReact from 'remark-react'

type PreviewProps = {
    doc: string
}

const schema = {
    ...defaultSchema,
    attributes: {
        ...defaultSchema.attributes,
        code: [...(defaultSchema.attributes?.code || []), 'className'],
    },
}

export const Preview: React.FC<PreviewProps> = ({ doc }) => {
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
        .processSync(doc).result

    return <div className={styles.preview}>{md}</div>
}
