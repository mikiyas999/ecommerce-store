import getBillbaord from "@/actions/get-billboard";
import Container from "../components/ui/container";
import Billboard from "../components/ui/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "../components/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillbaord("6ea7d811-04c4-41e4-adc1-5a77a37187d0");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured products" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
