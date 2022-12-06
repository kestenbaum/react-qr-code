import {useState, useEffect} from "react";

export default function useCheckedError () {
    const [error, setError] = useState(null)
    const [checkedUrl, setCheckedUrl] = useState('')
    const [inputValue, setInputValue] = useState('')


    useEffect(() => {
        if (inputValue.indexOf('http://') >= 0 || inputValue.indexOf('https://') >= 0) {
            setError(false)
            setCheckedUrl('')
        } else {
            setCheckedUrl('Please using http:// or https://')
            setError(true)
        }

    }, [inputValue])

    return {error, checkedUrl, inputValue, setInputValue}
}