import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';

const View = () => {
  const [recipe , setRecipe] = useState({})
  const {id} = useParams()

  useEffect(()=>{
    if(sessionStorage.getItem("allRecipes")){
      const allRecipes = JSON.parse(sessionStorage.getItem("allRecipes"))
      setRecipe(allRecipes.find(item=>item.id==id))
      
    }
},[])
  return (
    
    <>
      <Header />
      <div className='flex flex-col mx-5' >
      <div className="grid grid-cols-2 items-center h-screen">
       <div style={{marginLeft:'200px'}}>
          <img width={'350px'} height={'250px'} src={recipe?.image} alt="" />
        
       </div>
       <div className='mt-20'>
  <h1 className='text-2xl font-bold'>Name: {recipe?.name}</h1>
  <div className="flex items-center mt-3">
    <div className="flex flex-col bg-yellow-100 shadow-lg rounded p-6 w-1/2">
      <h1 className="text-2xl font-bold mb-4">Ingredients:</h1>
      <div className="p-4 rounded shadow-md bg-black bg-opacity-5 w-full text-center">
        {recipe?.ingredients?.map((ingredient, index) => (
          <li style={{ textAlign: 'justify' }} key={index}>{ingredient}</li>
        ))}
      </div>
    </div>
    <div className="flex flex-col bg-yellow-100 shadow-lg rounded p-6 w-1/2 ml-10">
      <h1 className="text-2xl font-bold mb-4">Instructions:</h1>
      <div className="p-4 rounded shadow-md bg-black bg-opacity-5 w-full text-center">
        {recipe?.instructions?.map((instruction, index) => (
          <li style={{ textAlign: 'justify' }} key={index}>{instruction}</li>
        ))}
      </div>
    </div>
  </div>
  <div className='bg-white rounded shadow mt-5 text-xl font-semibold '>
    <h1>Preparation Time:{recipe?.prepTimeMinutes}</h1>
    <h1>Cooking Time: {recipe?.cookTimeMinutes}</h1>
    <h1>Difficulty:{recipe?.difficulty}</h1>
    <h1>Cuisine:{recipe?.cuisine}</h1>
    <h1>caloriesPerServing:{recipe?.caloriesPerServing}</h1>
  </div>
</div>

      </div>
      </div>
    </>
  );
};

export default View;
