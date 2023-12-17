import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>

            <button className="btn btn-warning"><Link to={"/products"}>Products</Link></button>
            <button className="btn btn-warning"><Link to={"/categories"}>Categories</Link></button>
            <button className="btn btn-warning"><Link to={"/users"}>Users</Link></button>
            <button className="btn btn-warning"><Link to={"/orders"}>Orders</Link></button>
        </div>
    )
}

export default Home;