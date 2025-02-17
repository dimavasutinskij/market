import { client } from "./lib/client";
import { groq } from "next-sanity";



export const getProducts = async (page, pageSize, category) => {

  const start = (page - 1) * pageSize
  const end = (start - 1) + pageSize

  try {

    let query

    if (category && category != "all") {
      query = `*[_type == "product" && category == '${category}']`
    } else {
      query = `*[_type == "product"]`
    }

    const products = await client.fetch(

      groq`${query} | order(_id) [${start}...${end}]{
        _id,
        title,
        summary,
        description,
        benifits,
        versatility,
        storage,
        price,
        slug,
        discount,
        rating,
        "image": image.asset->url,
        category,
      }`
    );

    return products;

  } catch (error) {

    console.log(error);

  }
}

export const getProductsCount = async (category) => {
  
  try {

    let query
    if (category && category != "all") {
      query = `*[_type == "product" && category == '${category}']`
    } else {
      query = `*[_type == "product"]`
    }


    const productsCount = await client.fetch(
      groq`count(${query})`
    );

    return productsCount;
  } catch (error) {
    console.log(error);
  }
}


