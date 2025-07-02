import axios from 'axios';
import React from 'react'
import CategoryList from '../components/CategoryList';

const Recipe = () => {
  const [cat, setCat] = React.useState([]);

//FETCH CATEGORIES
  React.useEffect(() => {
    const URLCat = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    axios.get(URLCat)
    .then(function (response) {
      setCat(response.data.categories);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);


  return (
    <>
      <CategoryList categories={cat} />
    </>
  )
}

export default Recipe