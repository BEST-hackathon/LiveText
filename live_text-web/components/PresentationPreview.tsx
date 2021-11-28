import { Marp } from '@marp-team/marp-core'
import React from 'react'
import { Deck, MarkdownSlideSet } from 'spectacle'

export const PresentationPreview: React.FC<{ note: string }> = ({ note }) => {
    const marp = new Marp()
    const { html, css } = marp.render(note)

    return (
        <>
            <style jsx>{css}</style>
            <div
                dangerouslySetInnerHTML={{ __html: html }}
                style={{ height: '100%', width: '100%' }}
            />
        </>
    )

    // return (
    //     <Deck>
    //         <MarkdownSlideSet>{"# HEloo\n---\n"}</MarkdownSlideSet>
    //     </Deck>
    // )
}
