import config from './config'
import {
  ProductsQuery,
  ProductQuery,
  VariantBySelectedOptionsQuery,
} from './graphql'

export async function fetchStorefront(query: string, variables = {}) {
  const endpoint = `${config.shopDomain}/api/${config.apiVersion}/graphql.json`
  const key = config.publicToken

  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key,
      },
      body: { query, variables } && JSON.stringify({ query, variables }),
    })

    const body = await result.json()
    if (body.errors) {
      console.error('Error fetching data from Shopify:', body.errors)
      return null
    }
    return body.data

    // return {
    //   status: result.status,
    //   body: await result.json(),
    // }
  } catch (error) {
    console.error('Error:', error)
    return {
      status: 500,
      error: 'Error receiving data',
    }
  }
}

export async function getProducts(first: number = 250) {
  const response = await fetchStorefront(ProductsQuery, { first })
  return response?.products.nodes
}

export async function getProduct(id: string) {
  const response = await fetchStorefront(ProductQuery, { id })
  return response?.product
}

export async function getVariantBySelectedOptions(
  id: string,
  selectedOptions: { name: string; value: string }[]
) {
  const response = await fetchStorefront(VariantBySelectedOptionsQuery, {
    id,
    selectedOptions,
  })
  return response
}
