import fs from 'fs'
import { path } from './config.js'

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path + relativePath, 'utf8'))
}

function writeJson(relativePath, data) {
  fs.writeFileSync(path + relativePath, JSON.stringify(data, null, 2))
}

function objectToArray(object) {
  return Object.entries(object).map(([key, obj]) => ({
    key,
    original: obj.original,
    value: obj.value,
  }))
}

function arrayToObject(array) {
  const obj = {}
  array.forEach((item) => {
    obj[item.key] = {
      original: item.original,
      value: item.value,
    }
  })
  return obj
}

function arrayToStrings(array) {
  return array.map((item) => item.original)
}

function replaceStrings(array, newStrings) {
  return array.map((item, i) => ({
    ...item,
    value: newStrings[i],
  }))
}

export {
  readJson,
  writeJson,
  objectToArray,
  arrayToObject,
  arrayToStrings,
  replaceStrings,
}
