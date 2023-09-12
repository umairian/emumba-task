import Card from "./Card";

export default function ProductCard({ url, title, description, price, category }) {
    return (
      <Card>
        <div className="flex align-start">
            <img src={url} alt="image" />
            <div>
                <h4>{title}</h4>
                <p>{description}</p>

                <div className="flex align-center justify-between">
                    <div><b>$ {price}</b></div>
                    <div>{category}</div>
                </div>
            </div>
        </div>
      </Card>
    );
  }
  