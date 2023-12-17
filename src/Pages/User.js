import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () =>{
    const [user, setUser] = useState(null);

    const params = useParams();

    useEffect(() =>{
        getUser();
    },[])

    const getUser = () =>{
        fetch(`http://localhost:8080/users/${params.id}`)
        .then((response) =>{
            return response.json();
        }).then((data) =>{
            setUser(data);
            console.log(data);
        }).catch((error) =>{
            console.log(error);
        });
    }
    return (
        <div className="mb-3">
            <h1>User</h1>

                {user&&
                    <>
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                    </>
                
                }
        </div>
    );
}

export default User;