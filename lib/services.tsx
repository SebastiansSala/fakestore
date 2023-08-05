import { Category, Product } from "./types"
import { API_URL } from "@/consts/db"

export const getProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch(API_URL)
    if (!res.ok) {
      throw new Error("Something went wrong")
    }
    return res.json()
  } catch (e) {
    console.log(e)
    return []
  }
}

export const getProductsByCategory = async (
  category: string
): Promise<Product[] | undefined> => {
  try {
    const res = await fetch(API_URL + `/category/${category}`)
    if (!res.ok) {
      throw new Error("Something went wrong")
    }
    return res.json()
  } catch (e) {
    console.log(e)
    return []
  }
}

export const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(API_URL + "/categories")
    if (!res.ok) {
      throw new Error("Something went wrong")
    }
    return res.json()
  } catch (e) {
    console.log(e)
    return []
  }
}

export const getImages = async (take: number): Promise<string[]> => {
  try {
    const products = await getProducts()
    const images = products.slice(0, take).map((product) => product.image)
    return images
  } catch (e) {
    console.log(e)
    return []
  }
}
