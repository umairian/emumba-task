import { useCallback, useState } from "react";
import useProductApi from "../hooks/useProductApi";
import useCategoryApi from "../hooks/useCategoryApi";
import Section from "../components/Section";

function Home() {
  const { data } = useProductApi();
  const { data: categoryData, active, setActive } = useCategoryApi();

  const categories = categoryData?.map((el) => el.name);
  const products = useCallback(() => {
    const availableCategories = categoryData?.map((category) => category.name);
    const products = {};
    availableCategories.forEach(
      (category) => {
        products[category] = data?.filter(
          (product) => product.category.name === category
        );
      },
      [categoryData, data]
    );
    return products;
  });

  return (
    <>
      {categories.length > 0 &&
        categories.map((category) => (
          <a
            href={`#${category}`}
            className={`tab ${active === category && "active"}`}
            onClick={() => setActive(category)}
          >
            {category}
          </a>
        ))}
      {data.length > 0 &&
        Object.keys(products()).map((key) => (
          <>
            <Section id={key} heading={key} products={products()[key]} />
          </>
        ))}
    </>
  );
}

export default Home;
