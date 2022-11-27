// import { useEffect, useState } from "react"

// const useToken = user => {
//     const [token, setToken] = useState("")
//     const email = user?.user?.email || user?.email;
//     useEffect(() => {
//         fetch('https://evening-basin-87782.herokuapp.com/login', {
//             method: "post",
//             headers: {
//                 'content-type': "application/json"
//             },
//             body: JSON.stringify({ email: email })
//         })
//             .then(res => res.json())
//             .then(data => {
//                 localStorage.setItem("accessToken", data.token)
//                 setToken(data.token)
//             }
//             )
//     }, [user])

//     return [token, setToken]
// }

// export default useToken;

import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('')
    const email = user?.user?.email;
    const currentUser = { email: email }
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/${email}`, {
                method: "put",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    setToken(data.accessToken)
                    console.log(data);
                    localStorage.setItem("accessToken", data.accessToken)
                })
        }
    }, [user, email, currentUser])
    return [token]
}

export default useToken;