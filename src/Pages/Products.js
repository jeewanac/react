import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Categories from "./Categories";

const Products = () => {

    const [products, setProducts] = useState(null);

    const [categories, setCategories] = useState(null);

    const [name, setName] = useState(null);

    const [price, setPrice] = useState(null);

    const [qty, setQty] = useState(null);

    const [categoryId, setCategoryId] = useState(null);

    const getProducts = () => {
        fetch("http://localhost:8080/products")
            .then((response) => {
                return response.json();
            }).then((data) => {
                setProducts(data);
                console.log(data);
            }).catch((error) => {
                console.log(error);
            });
    }

    const getCategories = () => {
        fetch("http://localhost:8080/categories")
            .then((response) => {
                return response.json();
            }).then((data) => {
                setCategories(data);
                console.log(data);
            }).catch((error) => {
                console.log(error);
            });
    }

    const createProduct = (event) => {
        event.preventDefault();

        const data = {
            "name": name,
            "price": price,
            "qty": qty,
            "categoryId": categoryId
        }

        fetch("http://localhost:8080/products", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            getProducts();
            console.log(data);
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getProducts();
        getCategories();
    }, [])


    return (
        <div>
            <div>
                <form onSubmit={createProduct}>
                    <h2>Create Product</h2><br></br>
                    <div>
                        <label className="form-label">Product Name : </label><br></br>
                        <input type="text" required onChange={(e) => { setName(e.target.value) }}></input>
                    </div>
                    <div>
                        <label className="form-label">Product Price : </label><br></br>
                        <input type="text" required onChange={(e) => { setPrice(e.target.value) }}></input>
                    </div>
                    <div>
                        <label className="form-label">Product Quantity : </label><br></br>
                        <input type="text" required onChange={(e) => { setQty(e.target.value) }}></input>
                    </div>
                    <div>
                        <label className="form-label">Category : </label><br></br>
                        <select required onChange={(e) => { setCategoryId(e.target.value) }}>
                            <option >Please select Option</option>
                            {categories && categories.map((category) => (
                                <option value={category.id}>{category.name}</option>
                            ))}

                        </select>
                    </div><br></br>
                    <button className="btn btn-primary" type="submit">Save Product</button>
                </form>
            </div>

            <h1>Products</h1>
            {products &&
                <>
                    {products.map((product) => (
                        <ul>
                            <Link to={`/products/${product.id}`}>{product.name}</Link>
                        </ul>
                    ))}
                </>
            }
        </div>
    );
}

export default Products;