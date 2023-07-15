import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/app/components/gallery";
import Info from "@/app/components/info";
import ProductList from "@/app/components/product-list";
import Container from "@/app/components/ui/container";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  console.log(product);
  const suggestedProducts = await getProducts({
    categoryId: product.category?.id,
  });
  console.log(suggestedProducts);

  if (!product) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 sm:px-6 lg:px-9 py-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            <Gallery images={product?.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related products" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
