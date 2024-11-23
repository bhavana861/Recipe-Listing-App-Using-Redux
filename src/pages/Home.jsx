import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link,  } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecipes } from '../redux/slices/recipeSlice'

const Home = () => {
  const dispatch = useDispatch()
  const { allRecipes,loading ,errorMsg } = useSelector(state=>state.RecipeReducer)

  const [currentPage,setCurrentPage] = useState(1)
  const productsPerPage = 8
  const totalPages = Math.ceil(allRecipes?.length / productsPerPage);
  const currentPageProductLastIndex = currentPage * productsPerPage;
  const currentPageProductFirstIndex = currentPageProductLastIndex - productsPerPage;
  const visibleAllRecipes = allRecipes?.slice(currentPageProductFirstIndex, currentPageProductLastIndex);
  
  useEffect(() => {
    dispatch(fetchRecipes());
    console.log(allRecipes); 
  }, [dispatch]);
  

const navigateToNextPage = ()=>{
  if(currentPage!=totalPages){
    setCurrentPage(currentPage+1)
  }
}
const navigateToPrevPage = ()=>{
  if(currentPage!=1){
    setCurrentPage(currentPage-1)
  }
}

  return (
    <>
    <Header insideHome={true}/>
    <div style={{ paddingTop: '100px' }} className="container p-4 mx-auto">
    {
  loading?
  <div className="flex justify-center items-center my-5 text-lg">
    <img width={'70px'} height={'70px'} className='me-3' src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" alt="" />
      Loading...
  </div>
  :
  <>
    <div className="grid grid-cols-4 gap-4">
    {
      allRecipes?.length>0?
      visibleAllRecipes?.map(recipe=>(
        <div className=" rounded p-2 border shadow" style={{ width: '350px', height: '300px' }} >
        <img src={recipe.image} alt="" className="object-cover w-full h-full rounded"
        />
        <div style={{ marginTop: '-100px' }} className=" left-24 flex flex-col justify-start items-center p-4 text-black">
          <h1 className='text-2xl font-bold text-white bg-black bg-opacity-50'>{recipe.name}</h1>
          <Link to={`/${recipe.id}/view`} className="bg-yellow-300 rounded px-4 py-2 mt-3 text-white shadow-lg transform transition-transform duration-300 hover:scale-110">
            View Details...
          </Link>
        </div>
      </div>
      ))
      :
      <div className="flex justify-center font-bold text-red-600 items-center my-5 text-lg">
      Product Not Found!!!
    </div>
    }
    </div>
    <div className="text-2xl text-center font-bold mt-20">
    <span className='cursor-pointer'><i onClick={navigateToPrevPage} className="fa-solid fa-backward me-5"></i></span>
    <span > {currentPage} of {totalPages } </span>
    <span className='cursor-pointer'><i onClick={navigateToNextPage}  className="fa-solid fa-forward me-5"></i></span>

  </div>
  </>
}
</div>


    </>
  )
}

export default Home
