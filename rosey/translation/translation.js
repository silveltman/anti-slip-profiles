import { ChatGPTAPI } from 'chatgpt'
import { locales, systemMessage, userMessage, apiKey } from './config.js'
import {
  readJson,
  writeJson,
  objectToArray,
  arrayToStrings,
  replaceStrings,
  arrayToObject,
} from './utils.js'

const chatgpt = new ChatGPTAPI({ apiKey: apiKey })

async function translateStrings(strings, locale) {
  console.log('Translation started for locale:', locale)
  const translatedStrings = await chatgpt.sendMessage(
    userMessage(strings, locale),
    {
      systemMessage: systemMessage,
      temperature: 0.2,
    }
  )
  console.log('Translation completed for locale:', locale)
  try {
    const resJSON = JSON.parse(translatedStrings.text)
    const array = resJSON.array
    const isArray = Array.isArray(array)
    if (!isArray) throw new Error('Response is not an array')
    const hasStrings = array.every((item) => typeof item === 'string')
    if (isArray && hasStrings) return array
  } catch (error) {
    console.error('Error:', error)
    return strings
  }
}

async function setLocales() {
  const base = readJson('base.json')
  const baseObject = base.keys
  const baseArray = objectToArray(baseObject)
  const baseStrings = arrayToStrings(baseArray)

  for (const locale of locales) {
    const translatedStrings = await translateStrings(baseStrings, locale)
    const translatedArray = replaceStrings(baseArray, translatedStrings)
    const translatedObject = arrayToObject(translatedArray)
    writeJson(`locales/${locale}.json`, translatedObject)
  }

  writeJson('basePrev.json', baseObject)
}

export { setLocales }
