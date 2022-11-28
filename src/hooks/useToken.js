import { useEffect, useState } from "react"

const useToken = (user, userOrSeller = "user") => {
    const [token, setToken] = useState('')
    const email = user?.user?.email;
    useEffect(() => {
        if (email) {
            const currentUser = { email: email, role: userOrSeller }
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
                    localStorage.setItem("accessToken", data.accessToken)
                })
        }
    }, [user, email, userOrSeller])
    return [token]
}

export default useToken;