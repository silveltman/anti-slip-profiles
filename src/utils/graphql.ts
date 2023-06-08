const PRODUCT_FRAGMENT = `#graphql
fragment productFragment on Product {
  id
  title
  handle
  images (first: 30) {
    nodes {
      url
      width
      height
      altText
    }
  }
  options (first: 50) {
    id
    name
    values
  }
  variants(first: 250) {
    nodes {
      id
      title
      availableForSale
      quantityAvailable
      price {
        amount
        currencyCode
      }
    }
  }
  featuredImage {
    url
    width
    height
    altText
  }
}
`
export const ProductsQuery = `#graphql
    query ($first: Int!) {
        products(first: $first) {
            nodes {
                ...productFragment
            }
        }
    }
    ${PRODUCT_FRAGMENT}
`

export const ProductQuery = `#graphql
  query ($id: ID!) {
    product(id: $id) {
      ...productFragment
    }
  }
  ${PRODUCT_FRAGMENT}
`

export const VariantBySelectedOptionsQuery = `#graphql
  query ($id: ID!, $selectedOptions: [SelectedOptionInput!]!) {
    product(id: $id) {
      variantBySelectedOptions(selectedOptions: $selectedOptions) {
        id
        title
      }
    }
  }
`
