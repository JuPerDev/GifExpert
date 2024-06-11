import { useState } from "react";
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(
        []
    );

    const addCategory = ( nuevaCategoria) => {
        if(categories.includes(nuevaCategoria)) return;
        setCategories( [ nuevaCategoria, ...categories ]);
    }


  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory onAddCategory = { addCategory } />

            {
                categories.map( category => (
                    <GifGrid 
                        key={ category }
                        category={ category }/>
                ))
            }

    </>
    )
};