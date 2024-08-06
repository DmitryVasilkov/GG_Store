import React, { useEffect, useState } from "react";
import styles from "./Filter.module.css";

const Filter = ({ placeholderText, handleFilterGames }) => {
    const [query, setquery] = useState('');

    const handleInputChange = (evt) => {
        setquery(evt.currentTarget.value)
    }

    useEffect(() => {
    handleFilterGames(query)
    })

    return (
        <>
            <input onChange={handleInputChange} type="text" value={query} placeholder={placeholderText} className={styles.input} />
        </>
    )
}

export default Filter;