import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"

function Products() {

  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //       setProducts(json);
  //      });
  // },[]);

  useEffect(function () {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    }
  })
  
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-start items-center w-full max-w-[950px] m-auto">
        <h1 className="font-display font-medium text-heading text-2xl mb-5 self-baseline">
          Products
        </h1>
        <div className="flex justify-center items-center flex-wrap ">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center justify-center bg-[#f7f6ff] w-[300px] h-[350px]"
            >
              <div>
                <img
                  src={product.image}
                  className="flex items-center justify-center object-contain w-[200px] h-[200px]"
                />
              </div>
              <div className="w-[300px] px-6 ">
                <h6 className="font-display text-xl text-heading font-normal overflow-hidden whitespace-nowrap text-ellipsis">
                  {product.title}
                </h6>
                <p className="font-display text-normal text-sm text-[#6B7280]  ">
                  ${product.price}
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products
