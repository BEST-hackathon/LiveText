import { LanguageDescription } from '@codemirror/language'
import { languages } from '@codemirror/language-data'

export function findLanguage(langName: string): LanguageDescription | null {
    const i = languages.findIndex((lang: LanguageDescription) => {
        if (lang.alias.indexOf(langName) >= 0) {
            return true
        }
    })
    if (i >= 0) {
        return languages[i]
    } else {
        return null
    }
}
