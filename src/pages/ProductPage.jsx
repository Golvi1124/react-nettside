import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { productId } = useParams();

 // fetch('https://fakestoreapi.com/products/${productId}');

  return (
    <div>
      <p>This is site for product with Id: {productId} </p>
    </div>
  );
}
