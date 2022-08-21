import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { getCategoriesAndDocument } from "../firebase/firebase";



export const CategoriesContext = createContext({
    categoriesMap: []
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocument();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, [])
    // Add collection to Firebase
    // useEffect(() => {
    //     addCollectionAndDocument('catefories', SHOP_DATA)
    // },[])
    const value = {categoriesMap};
    return <CategoriesContext.Provider value = {value}>{children}</CategoriesContext.Provider>
    
}