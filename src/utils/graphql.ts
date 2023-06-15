const PRODUCT_FRAGMENT = `#graphql
fragment productFragment on Product {
  id
  title
  handle
  description(truncateAt: 160)
  descriptionHtml
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
      priceV2 {
        amount
        currencyCode
      }
      selectedOptions {
          name
          value
      }
    }
  }
  featuredImage {
    url
    width
    height
    altText
  }
  priceRange {
    minVariantPrice {
      amount
      currencyCode
    }
  }
}
`

const CART_FRAGMENT = `#graphql
  fragment cartFragment on Cart {
    id
    totalQuantity
    checkoutUrl
    cost {
      totalAmount {
        amount
        currencyCode
      }
    }
    lines(first: 100) {
      nodes {
        id
        quantity
        merchandise {
          ...on ProductVariant {
            id
            title
            image {
              url
              altText
              width
              height
            }
            product {
              handle
              title
            }
          }
        }
        cost {
          amountPerQuantity{
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
        }
      }
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
        availableForSale
      }
    }
  }
`

export const CartCreateMutation = `#graphql
  mutation ($merchandiseId: ID!, $quantity: Int = 1) {
    cartCreate(input: {lines: {merchandiseId: $merchandiseId, quantity: $quantity}}) {
      cart {
        ...cartFragment
      }
    }
  }
  ${CART_FRAGMENT}
`

export const CartLinesAddMutation = `#graphql
  mutation MyMutation($cartId: ID!, $merchandiseId: ID!, $quantity: Int = 1) {
    cartLinesAdd(
      cartId: $cartId
      lines: {merchandiseId: $merchandiseId, quantity: $quantity}
    ) {
      cart {
        ...cartFragment
      }
    }
  }
  ${CART_FRAGMENT}
`
