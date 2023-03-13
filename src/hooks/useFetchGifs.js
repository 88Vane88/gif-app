import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  const [imagenes, setImagenes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImagenes=async()=>{
    const newImage=await getGifs(category)
    setImagenes(newImage)
    setIsLoading(false)
  }
  
  useEffect(() => {
    getGifs(category);
    getImagenes(imagenes)
    
  }, [])

  return {
    imagenes,
    isLoading,
  }
    
  
}


