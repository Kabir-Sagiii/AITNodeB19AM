import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductCategory() {
  let [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:2929/products/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setProducts(res.data.results);
        })
        .catch((error) => {
          alert("Error while getting data");
          console.log(error);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);
  return (
    <>
      {products.map((product) => {
        return (
          <div className="col-3">
            <div className="card">
              <div className="card-header">
                <img src={product.image} width="100%" height="200" />
              </div>
              <div className="card-body">
                <h6>{product.title}</h6>
                <p>$ {product.price}</p>
                <button className="btn btn-outline-success mx-3">
                  Product Details
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductCategory;
