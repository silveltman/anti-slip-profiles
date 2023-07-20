import fs from 'fs'
import { ChatGPTAPI } from 'chatgpt'

const BASE_PATH = './rosey/'
const LOCALES = ['en', 'de', 'fr', 'da', 'sv']
const chatgpt = new ChatGPTAPI({
  apiKey: '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',
})
const gptSystemMessage = `
You are a translation service. The user will give you an array of strings and you will translate those string into the language the user provides.
The user will provide said language in locale format.
As a translation service, you will only reply with the translated array for the provided locale in JSON format. 
Here is en example of the JSON format I want you to reply with: ["string1", "string2", "string3"]
Respond with the JSON array only.
`

const gptMessage = (array, locale) => {
  return `
      language in locale: "${locale}"
      array of strings: ${array}
    `
}

function readJson(relativePath) {
  const jsonString = fs.readFileSync(BASE_PATH + relativePath, 'utf8')
  return JSON.parse(jsonString)
}

function writeJson(relativePath, data) {
  const jsonString = JSON.stringify(data, null, 2)
  fs.writeFileSync(BASE_PATH + relativePath, jsonString)
}

function formatBaseArray(baseKeys) {
  return Object.entries(baseKeys).map(([key, obj]) => ({
    key,
    original: obj.original,
    value: obj.value,
  }))
}

async function translate(baseArray, locale) {
  const arrayString = baseArray.map((item) => item.original)
  const message = gptMessage(arrayString, locale)
  const translatedArrayString = await chatgpt.sendMessage(message, {
    systemMessage: gptSystemMessage,
  })
  try {
    const resJSON = JSON.parse(translatedArrayString.text)
    console.log(typeof resJSON)
    const newArray = baseArray.map((item, i) => ({
      ...item,
      value: resJSON[i],
    }))
    return newArray
  } catch (error) {
    console.error('Error:', error)
    return baseArray
  }
}

function convertArrayToObject(array) {
  const obj = {}
  array.forEach((item) => {
    obj[item.key] = {
      original: item.original,
      value: item.value,
    }
  })
  return obj
}

async function setLocales() {
  const base = readJson('base.json')
  const baseArray = formatBaseArray(base.keys)
  const baseObject = convertArrayToObject(baseArray)
  const prevBaseObject = readJson('basePrev.json')

  const { updated, equal } = getDifference(prevBaseObject, baseObject)

  for (const locale of LOCALES) {
    const translatedArray = await translate(baseArray, locale)
    const translatedObject = convertArrayToObject(translatedArray)
    writeJson(`locales/${locale}.json`, translatedObject)
  }

  writeJson('basePrev.json', baseObject)
}

function getDifference(oldVersion, newVersion) {
  const updated = {}
  const equal = {}

  Object.entries(newVersion).forEach(([key, value]) => {
    console.log(key)
    if (!oldVersion[key]) updated[key] = value
    else equal[key] = value
  })

  console.log('added', updated)
  console.log('equal', equal)
  return { updated, equal }
}

setLocales()
