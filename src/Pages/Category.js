import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import Product from "./Product";

const Category = () => {

    const [category, setCategory] = useState(null);

    const [products, setProducts] = useState(null);

    const params = useParams();

    useEffect(()=>{
        getCategory();
        getProductsByCategory();
    },[])

    const getCategory = () => {
        fetch(`http://localhost:8080/categories/${params.id}`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                setCategory(data);
                console.log(data);
            }).catch((error) => {
                console.log(error);
            });
    }

    const getProductsByCategory = () =>{
        fetch(`http://localhost:8080/categories/${params.id}/products`)
        .then((response) =>{
            return response.json();
        }).then((data) =>{
            setProducts(data);
            console.log(data);
        }).catch((error) =>{
            console.log(error);
        });
    }
    return (
        <div className="container-fluids">
            
            {category &&
                <>
                    <h1>Products in category {category.name}</h1><br></br>
                </>
            }

            {products &&
            <>
                {products.map(product =>(
                   
                       <ul>{product.name}</ul>
            
                ))}
            </>
            
            }


        </div>
    );
}

export default Category;