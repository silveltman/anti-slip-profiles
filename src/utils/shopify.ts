// Docs https://github.com/shopify/js-buy-sdk/
import Client from 'shopify-buy'

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: 'anti-slip-profiles.myshopify.com',
  storefrontAccessToken: '39affaaa4eed2e40bd3ae3039736b182',
})

// Fetch all products in your shop
export async function getProducts() {
  return client.product.fetchAll()
}

// // Fetch a single product by productId or handle
// async function getProduct(product: string) {
//   // If an ID was passed, we'll fetch a product by ID
//   if (product.startsWith('gid://shopify/Product/')) {
//     return client.product.fetch(product)
//   }
//   // Otherwise, we'll fetch a product by handle
//   else {
//     return client.product.fetchByHandle(product)
//   }
// }

// // Fetch all collections in your shop
// async function getCollections() {
//   return client.collection.fetchAllWithProducts()
// }

// // Fetch a single collection by collectionId
// async function getCollection(collectionId: string, options: object) {
//   client.collection.fetchWithProducts(collectionId, options)
// }

// Create a checkout
async function createCheckout() {
  return client.checkout.create()
}

// Update checkout attributes
async function updateCheckoutAttributes(checkoutId: string, input: object) {
  return client.checkout.updateAttributes(checkoutId, input)
}

// Add item(s) to the checkout
async function addLineItems(checkoutId: string, lineItemsToAdd: object[]) {
  return client.checkout.addLineItems(checkoutId, lineItemsToAdd)
}

// // Update item(s) in the checkout
// async function updateLineItems(
//   checkoutId: string,
//   lineItemsToUpdate: object[]
// ) {
//   return client.checkout.updateLineItems(checkoutId, lineItemsToUpdate)
// }

// // Remove item(s) from the checkout
// async function removeLineItems(
//   checkoutId: string,
//   lineItemIdsToRemove: string[]
// ) {
//   return client.checkout.removeLineItems(checkoutId, lineItemIdsToRemove)
// }

// // Fetch a checkout by ID
// async function getCheckout(checkoutId: string) {
//   return client.checkout.fetch(checkoutId)
// }

// // Add a discount to the checkout
// async function addDiscount(checkoutId: string, discountCode: string) {
//   return client.checkout.addDiscount(checkoutId, discountCode)
// }

// // Remove a discount from the checkout
// async function removeDiscount(checkoutId: string) {
//   return client.checkout.removeDiscount(checkoutId)
// }

// // Update shipping address on the checkout
// async function updateShippingAddress(
//   checkoutId: string,
//   shippingAddress: object
// ) {
//   return client.checkout.updateShippingAddress(checkoutId, shippingAddress)
// }

// function imageForSize(image, options: { maxWidth: number; maxHeight: number }) {
//   return client.image.helpers.imageForSize(image, options)
// }

// function getSrcset(image: object, sizes: number[]) {
//   let generatedImages = []
//   sizes.forEach((size) => {
//     let url = client.image.helpers.imageForSize(image, {
//       maxWidth: size,
//       maxHeight: 9999,
//     })
//     let string = `${url} ${size}w`
//     generatedImages.push(string)
//   })
//   return generatedImages.toString()
// }

// export {
//   getProducts,
//   getProduct,
//   getCollections,
//   getCollection,
//   createCheckout,
//   updateCheckoutAttributes,
//   addLineItems,
//   updateLineItems,
//   removeLineItems,
//   getCheckout,
//   addDiscount,
//   removeDiscount,
//   updateShippingAddress,
//   imageForSize,
//   getSrcset,
// }
