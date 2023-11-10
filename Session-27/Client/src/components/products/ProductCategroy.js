import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductCategroy() {
  let { category } = useParams();
  //   alert(category);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:2929/products/${category}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.results);
      })
      .catch((error) => {
        alert("error while getting products data");
        console.log(error);
      });
  }, [category]);
  return (
    <>
      {products.length > 0 ? (
        <>
          {products.map((product) => {
            return (
              <div className="col-3">
                <div className="card">
                  <div className="card-header">
                    <img src={product.image} width={"100%"} height={"200"} />
                  </div>

                  <div className="card-body">
                    <h6>{product.title}</h6>
                    <p>$ {product.price}</p>
                    <button className="btn btn-outline-primary">
                      Product Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <h2
          style={{
            margin: "100px auto",
            textAlign: "center",
            fontSize: "32px",
            color: "red",
          }}
        >
          No Products
        </h2>
      )}
    </>
  );
}

export default ProductCategroy;
