import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const ProductCategory = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-category`, {
    method: "GET",
    next: {
      revalidate: 30,
    },
  });
  const allCategory = await res.json();
  return (
    <div className="mt-7">
      <div className="flex justify-between">
        <h1 className="text-xl md:text-3xl font-semibold text-[#333333]">
          Shop by Categories
        </h1>
        <Link href="/categories">
          <h1 className="font-semibold text-[#333333] flex items-center gap-1">
            See All <MdKeyboardArrowRight className="text-3xl" />
          </h1>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-5 mt-5">
        {allCategory.map((category) => (
          <li key={category.id}>
            <Link href={`/product/category/${category.name}`}>
              <p>{category.name}</p>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
