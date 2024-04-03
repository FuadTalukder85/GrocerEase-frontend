import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const router = useRouter();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { category } = router.query;

      let apiUrl = `${process.env.BACKEND_URL}/all-product`;

      if (category) {
        apiUrl += `?category=${encodeURIComponent(category as string)}`;
      }

      const response = await fetch(apiUrl);
      const data = await response.json();
      setFilteredProducts(data);
    };

    if (router.query.category !== undefined) {
      fetchProducts();
    }
  }, [router.query]);

  return (
    <div>
      <h1>Filtered Products</h1>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product._id}>
            <h3>{product.price}</h3>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
