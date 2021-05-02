import React, {useState} from "react"
import Sort from '../components/Sort'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

const Movies = ({ movies }) => {
const [data, setData] = useState(movies);
const [category, setCategory] = useState("")
// const [offset, setOffset] = useState(0);
// const [perPage] = useState(4);
// const [pageCount, setPageCount] = useState(0)

// we make a copy of the array and delete the movie wanted
const handleClickTrash = (index) => {
    const newMovies = [...data];
    newMovies.splice(newMovies.indexOf(newMovies[index]), 1);
    setData(newMovies);
    const newCategory = [...category];

  };

// const handlePageClick = (data) => {
//     const selectedPage = data.selected;
//     setOffset(selectedPage + 1)
// };

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
        {/* <Pagination handlePageClick={handlePageClick} pageCount={pageCount} /> */}
    </div>
  );
};

export default Movies;
