import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function Products() {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [cart, setCart] = useState([]);


  const handleAddToCart = (id) => {
    const addedProduct = products.find(product => product.id === id);
    const cartProductObject = {
      id,
      product: addedProduct,
      quantity: 1
    }

    const isAdded = cart.find((product) => product.id === id);

    if (isAdded) {
      setCart((prevItem) =>
        prevItem.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
      );
      return;
    }

    setCart([...cart, cartProductObject]);
    console.log(addedProduct);
  }

  useEffect(function () {
    async function fetchProducts() {
      try {

        setIsLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        setProducts(data);
        console.log(data);
        
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [])




  
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-start items-center w-full max-w-[950px] m-auto">
        <h1 className="font-display font-medium text-heading text-2xl m-5 self-baseline">
          Products
        </h1>
        {isLoading && <Loader />}
        {!isLoading && !error &&
        
          <div className="flex justify-center items-center flex-wrap gap-2  ">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center justify-center rounded-2xl bg-[#f7f6ff] w-[300px] h-[350px]"
              >
                <div>
                  <img
                    src={product.image}
                    className="flex items-center justify-center object-contain w-[200px] h-[200px]"
                  />
                </div>
                <div className="w-[300px] px-6 ">
                  <h6 className="font-display text-xl text-heading font-normal overflow-hidden whitespace-nowrap text-ellipsis mt-3 mb-1">
                    {product.title}
                  </h6>
                  <p className="font-display text-normal text-sm text-[#6B7280]  ">
                    ${product.price}
                  </p>
                  <button onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(product.id)
                  }} className="mt-6 border-2 rounded-lg bg-purple text-white font-display font-medium py-2 px-3 text-sm">Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        }
        {error && <ErrorMessage message={error} />}
      </div>
    </div>
  );
}

export default Products
