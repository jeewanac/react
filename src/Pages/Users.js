import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {

    const [users, setUsers] = useState(null);

    const [name, setName] = useState(null);

    const [email, setEmail] = useState(null);

    const [password, setPassword] = useState(null);

    const getUsers = () => {
        fetch("http://localhost:8080/users")
            .then((response) => {
                return response.json();
            }).then((data) => {
                setUsers(data);
                console.log(data);
            }).catch((error) => {
                console.log(error);
            });
    }

    const createUser = (event) => {
        event.preventDefault();

        const data = {
            "name": name,
            "email": email,
            "password": password
        }

        fetch("http://localhost:8080/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            getUsers();
            console.log(data);
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getUsers();
    }, [])


    return (
        <div className="">
            <h1>Users</h1>
            {users &&
                <>
                    {users.map((user) => (
                        <ul>
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </ul>
                    ))}
                </>

            }

            <div>
                <h2>Create User</h2>
                <form onSubmit={createUser}>
                    <div>
                        <label className="form-label">User Name</label><br></br>
                        <input className="" type="text" required onChange={(e) => { setName(e.target.value) }}></input>
                    </div>
                    <div>
                        <label className="form-label">User Email</label><br></br>
                        <input type="text" required onChange={(e) => { setEmail(e.target.value) }}></input>
                    </div>
                    <div>
                        <label className="form-label">Password</label><br></br>
                        <input type="password" required onChange={(e) => { setPassword(e.target.value) }}></input>
                    </div>
                    <br></br>
                    <button className="btn btn-primary" type="submit">Save User</button>
                </form>
            </div>
        </div>
    );
}

export default Users;