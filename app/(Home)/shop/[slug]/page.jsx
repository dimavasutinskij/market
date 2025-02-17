import Banner from "@/components/Banner";
import { getProducts, getProductsCount } from "@/sanity/actions";
import ProductDetails from "../_components/ProductDetails";
import ProductInfo from "../_components/ProductInfo";
import RelatedProducts from "../_components/RelatedProducts";

// Оновлення параметрів для статичної генерації
export const revalidate = 90;

export async function generateStaticParams() {
    // Отримуємо кількість продуктів
    const count = await getProductsCount();

    // Отримуємо всі продукти
    const products = await getProducts(0, count);

    // Повертаємо масив параметрів для кожного продукту
    return products.map((product) => ({
        slug: [product.slug.current], // Масив для використання в динамічному маршруті
    }));
}

// Головна сторінка продукту
const ProductPage = async ({ params: { slug } }) => {
    // Отримуємо кількість продуктів
    const count = await getProductsCount();

    // Отримуємо продукти
    const products = await getProducts(0, count);

    // Знаходимо продукт, що відповідає поточному `slug`
    const product = products.find((product) => product.slug.current === slug);

    // Отримуємо схожі продукти, що належать до тієї ж категорії
    const related = products.filter((item) => item.category === product.category).slice(0, 4);

    return (
        <main className="overflow-hidden">
            {/* Виводимо банер для сторінки продукту */}
            <Banner bgUrl="/productPage.png" title="Product's Details" />

            {/* Виводимо деталі продукту */}
            <ProductDetails product={product} />

            {/* Інформація про продукт */}
            <ProductInfo product={product} />

            {/* Виводимо схожі продукти */}
            <RelatedProducts related={related} />
        </main>
    );
};

export default ProductPage;
