import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem';
    
export const GifGrid = ({ category }) => {
  // Custom Hook
  const { images, isLoading } = useFetchGifs( category );

  return (
    <div>
      <h3>{category}</h3>
      {
        isLoading && <h2>Cargando...</h2>
      }
      <div className='card-grid'>
        {
          images.map( (image) => (
              <GifItem 
                key={image.id}
                {...image}
              />
            ))
        }
      </div>
    </div>
  )

}

