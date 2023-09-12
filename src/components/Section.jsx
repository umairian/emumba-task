import ProductCard from "./ProductCard";

export default function Section({ id, heading, products }) {
    return (
      <>
        <h2 id={id}>{heading}</h2>
        {products.map((element) => (
          <ProductCard
            title={element.title}
            description={element.description}
            url={element.images[0]}
            price={element.price}
            category={element.category?.name}
          />
        ))}
      </>
    );
  }
  