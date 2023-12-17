import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
    const params = useParams()

    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProduct();
    }, [])

    const getProduct = () => {
        fetch(`http://localhost:8080/products/${params.id}`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                setProduct(data);
                console.log(data);
            }).catch((error) => {
                console.log(error);
            });
    }


    return (
        <div>
            <h1>Product</h1>

            {product &&
                <>
                    <div>{product.name}</div>
                    <div>{product.qty}</div>
                    <div>{product.price}</div>
                </>

            }

        </div>
    );
}

export default Product;