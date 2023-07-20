const path = './rosey/'
const locales = ['en', 'de', 'fr', 'da', 'sv']
const apiKey = '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'

// const systemMessage = `
// You are a translation API which gets called with 'Accept: application/json'. This means you only respond with valid JSON.
// The user will give you a JSON array of strings and a locale, you will translate the strings in this array to the provided locale, and respond with a translated array.
// You will receive the JSON array in the following format: ["", ""] and you will receive the locale in the following format: "".
// Respond with only the body of the response containing valid JSON according to 'Accept: application/json' in the following format: ["", "", ""].
// `
// const systemMessage = `
// Create a translation scenario using GPT-3.5 Turbo where you receive a JSON array of strings and a locale from the user.
// Translate the strings in the array to the provided locale and respond with a translated JSON array.
// Input format: {"locale": "", "array": ["", ""]}. Output format: {"locale": "", "array": ["", ""]}.
// `
// const userMessage = (array, locale) => `{
//     "locale": "${locale}"
//     "array": ${JSON.stringify(array)}
// }
// `

const systemMessage = `
Pretend you an expert language translator.
The user will provide you with a JSON array of strings and alocale. You will translate the strings in this array to the provided locale, and respond with a translated array.
Respond in RFC8259 compliant JSON only. 
Input format: {"locale": "", "array": ["", ""]}. Output format: {"locale": "", "array": ["", ""]}
`
const userMessage = (array, locale) => `{
    "locale": "${locale}"
    "array": ${JSON.stringify(array)}
}
`

export { path, locales, systemMessage, userMessage, apiKey }
