import { useState } from "react"
import { AddCategory, GifCategory } from "./components";


export const GifExpertApp = ({setInputValue,inputValue}) => {

  const [categories, setCategories] = useState([])
  
  const addCategory=(newCategory)=>{
    if(categories.includes(newCategory)) return;
  setCategories([newCategory, ...categories])

  }

  return (
    <>
      <h1 className='title'> GIFS</h1>
      <p className='parrafo'> Buscá el Gif que más te gusta </p>
      <AddCategory className='nombre' onNewCategory={addCategory}/>
        {
          categories.map(category=>
          (
            <GifCategory key={category} category={category}/>
            
          ))
          
        }
        
      
    </>
  )
}


