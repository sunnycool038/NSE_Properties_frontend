import React, { useState } from 'react'
//import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import User from '../user/User';

const Users = () => {
const [users,setUsers] = useState([]);
    // useEffect(() => {
    //     return onSnapshot(
    //         query(collection(db, "users"), orderBy("timestamp", "desc")),
    //         (snapshot) => {
    //             setUsers(snapshot.docs);
    //         }
    //     );
    // }, []);
    return (
        <div>
            <h2>user</h2>
            {users.map((user)=>(
                <User 
                key={user.data().id}
                name={user.data().name}
                secondary={user.data().mainkey}
                email={user.data().email}
                data ={user.data().date}
                />
            ))}
        </div>
    )
}

export default Users
