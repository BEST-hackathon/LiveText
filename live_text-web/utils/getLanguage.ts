import type { Language } from '@codemirror/language'
import { findLanguage } from "./findLanguage";

export const getLanguage = async (
    langName: string
): Promise<Language | null> => {
    const desc = findLanguage(langName)

    if (!desc) return null

    return (await desc.load()).language
}
