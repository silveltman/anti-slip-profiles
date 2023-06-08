// shopify.ts

export async function fetchData(
  query: string,
  variables?: Record<string, any>
): Promise<any> {
  const domain = 'anti-slip-profiles.myshopify.com'
  const storefrontAccessToken = '39affaaa4eed2e40bd3ae3039736b182'
  const endpoint = `https://${domain}/api/2022-01/graphql`

  const headers = {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
  }

  const body = JSON.stringify({
    query,
    variables,
  })

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: headers,
      body: body,
    })

    const data = await response.json()

    if (data.errors) {
      console.error('Error fetching data from Shopify:', data.errors)
      return null
    }

    return data.data
  } catch (error) {
    console.error('Error fetching data from Shopify:', error)
    return null
  }
}

export const productsQuery = `
{
  products(first: 250) {
    nodes {
      id
      title
      handle
      description(truncateAt: 176)
      descriptionHtml
      featuredImage {
        altText
        url
      }
      priceRange {
        minVariantPrice {
          amount
        }
      }
    }
  }
}
`

export const productQuery = `
{
  products(first: 250) {
    nodes {
      id
      title
      handle
      description(truncateAt: 176)
      descriptionHtml
      featuredImage {
        altText
        url
      }
      priceRange {
        minVariantPrice {
          amount
        }
      }
    }
  }
}
`

export const cartCreateMutation = `
{
    cartCreate {
      cart {
        id
      }
    }
  }
`

export async function getAllProducts(cursor: string | undefined = undefined) {
  const amount = 2
  const options = cursor ? `first: ${amount}, after: "${cursor}"` : 'first: 2'
  const query = `
    {
      products(${options}) {
        edges {
          cursor
          node {
            id
          }
        }
      }
    }
  `
  const response = await fetchData(query)
  const length = response.products.edges.length

  if (length < amount) {
    console.log('done')
    return response
  } else {
    console.log('not done')
    const last = length - 1
    const lastCursor = response.products.edges[last].cursor
    await getAllProducts(lastCursor)

    return response
  }
}

console.log(await getAllProducts())
