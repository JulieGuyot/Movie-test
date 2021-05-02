import React, {useState} from "react"
import Sort from '../components/Sort'
import MovieCard from '../components/MovieCard'

const Movies = ({ movies }) => {
const [data, setData] = useState(movies);
const [category, setCategory] = useState("")

// we make a copy of the array and delete the movie wanted
const handleClickTrash = (index) => {
    const newMovies = [...data];
    newMovies.splice(newMovies.indexOf(newMovies[index]), 1);
    setData(newMovies);
    const newCategory = [...category];

  };

return (
    <div className="container">
        <Sort 
            data={data} 
            setCategory={setCategory} 
        />
        <div className="cards">
            {data.map((element, index) => {
                // the condition is used to sort by category
                if(!category || element.category === category ){
                    return (
                        <MovieCard 
                            data={data} 
                            element={element}
                            index={index} 
                            setData={setData}
                            handleClickTrash={handleClickTrash}/>
                    )
                }
            })}
        </div>
        {/* <Pagination /> */}
    </div>
  );
};

export default Movies;
