import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, json } from "react-router-dom";

const Categories = () =>{

    useEffect(() =>{
        getCategories();
    },[])

    const [categories, setCategories] = useState(null);

    const [category, setCategory] = useState(null);

    const getCategories = () =>{
        fetch("http://localhost:8080/categories")
        .then((response) =>{
            return response.json();
        }).then((data)=>{
            setCategories(data);
            console.log(data);
        }).catch((error) =>{
            console.log(error);
        });
    }

    const createCategory = (event) =>{
        event.preventDefault();

        const data = {
            "name": category
        }

        fetch("http://localhost:8080/categories",{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((response) =>{
            return response.json();
        }).then((data) =>{
            getCategories();
            console.log(data);
        }).catch((error)=>{
            console.log(error);
        });
    }
    return (
        <div>
            <h1>Categories</h1>

            {categories&&
                <>
                {categories.map((category) =>(
                    <ul>
                        <Link to={`/categories/${category.id}`}>{category.name}</Link>
                    </ul>
                ))}
                </>
            }
            <div>
                <h2>Create Category</h2>
                <form onSubmit={createCategory}>
                    <div >
                        <label className="form-label">Category Name</label><br></br>
                        <input type="text" required onChange={(e) =>{setCategory(e.target.value)}}></input>
                    </div><br></br>
                    <button className="btn btn-primary" type="submit" >Add New Category</button>
                </form>
            </div>
        </div>
    );
}

export default Categories;