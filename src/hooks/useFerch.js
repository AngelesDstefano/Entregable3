import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const useFerch = url  => {

    const [response, setResponse] = useState()

    useEffect(() => {
        axios.get(url)
        .then (res => setResponse(res.data))
        .catch(err => console.log (err))
    }, [])

    return response
}
export default useFerch
