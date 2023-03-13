import { useState } from "react"
import { AddCategory, GifCategory } from "./components";


export const GifExpertApp = ({setInputValue,inputValue}) => {

  const [categories, setCategories] = useState(['One Punch'])
  
  const addCategory=(newCategory)=>{
    if(categories.includes(newCategory)) return;
  setCategories([newCategory, ...categories])

  }

  return (
    <>
      <h1> GIFS</h1>
      <p> Buscá el Gif que más te gusta </p>
      <AddCategory onNewCategory={addCategory}/>
        {
          categories.map(category=>
          (
            <GifCategory key={category} category={category}/>
            
          ))
          
        }
        
      
    </>
  )
}


