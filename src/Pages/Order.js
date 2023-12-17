 import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'

export default function Order() {

    const [products, setProducts] = useState(null);
    const [orders, setOrders] = useState([]);
    const [total, setTotal] = useState(0);
    const [tax, setTax] = useState(0);

    const getProducts = async () => {
        const response = await axios.get("http://localhost:8080/products");
        setProducts(response.data);
    }

    const CalculateTax = (total) => {
        setTax(total / 100 * 15);
    }

    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
        CalculateTax(total);
    }, [total])

    const SaveOrder = async () =>{
    
        const productIds = orders.map(product => product.id)//assign ID,s of the products to a single array

        const data = {
            "products" : productIds
        }

        const response = await axios.post("http://localhost:8080/orders", data);
        if(response.status == 200){
            setOrders([]);
            setTax(0);
            setTotal(0);
        }else{
            //show error message
        }
    }
    return (
        <div className="container-fluids">
            <div className='heading text-center'>
                <h1>Orders</h1>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <h2>Order</h2><br></br>

                    {products && products.map(product => (
                        <div key={product.id}>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5>{product.name}</h5>
                                    <h5>{product.price}</h5>
                                </div>
                                <div>
                                    <button className='btn btn-primary' onClick={() => {
                                        setOrders([...orders, product]);
                                        let productTotal = total + product.price;
                                        setTotal(productTotal);
                                    }}>Add</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='col-md-6'>
                    <h2>Products</h2>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>
                                    Product Id
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(products => (
                                <tr>
                                    <td>{products.id}</td>
                                    <td>{products.name}</td>
                                    <td>{products.price}</td>
                                </tr>
                            ))}
                        </tbody>
                        <thead>
                            <tr>
                                <th colSpan={2}>
                                    Total
                                </th>

                                <th colSpan={2}>
                                    {total}
                                </th>

                            </tr>
                            <tr>

                                <th colSpan={2}>
                                    Tax
                                </th>
                                <th>
                                    {tax}
                                </th>

                            </tr>
                        </thead>
                    </table>

                    <button className='btn btn-primary' onClick={SaveOrder}>Save Orders</button>
                </div>

            </div>
        </div>

    )
}
