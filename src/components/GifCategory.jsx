
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifImagenes } from "./GifImagenes";

export const GifCategory = ({category}) => {

const {imagenes, isLoading}=useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2 className='loader'></h2>)
      }
      <div className='card-grid'>
      {
        imagenes.map((image)=>(
          <GifImagenes
            key={image.id}
            {...image} /* trae todas las props de image */
            
            />
      )
        )}
      </div>
    </>
  )
}


