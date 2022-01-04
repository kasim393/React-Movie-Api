import React, { useEffect, useState } from 'react'
import Category from '../../components/category/Category'
import Coming from '../../components/coming/Coming'
import Popular from '../../components/popular/Popular'
import axios from 'axios'
import apiConfig from '../../api'
const Home = () => {
  const [popular,setPopular] = useState([]);
  const [upcoming,setUpcoming] = useState([]);
  const [category,setCategory] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
    const API_KEY = apiConfig.apiKey;
    const BASE = apiConfig.baseUrl;
    const POPULAR = apiConfig.popular;
   await axios.get(BASE + POPULAR+ API_KEY)
      .then(res => {
         setPopular(res.data.results)
      }).catch(error => console.log(error));
    }
    fetchPopular()
    }, [])

    useEffect(() => {
      const fetchUpcoming = async () => {
      const API_KEY = apiConfig.apiKey;
      const BASE = apiConfig.baseUrl;
      const UPCOMING = apiConfig.upcoming;
      await axios.get(BASE + UPCOMING+ API_KEY)
        .then(res => {
          setUpcoming(res.data.results)
        }).catch(error => console.log(error));
      }
      fetchUpcoming()
      }, [])

      //category
      useEffect(() => {
        const fetchCategory = async () => {
        const API_KEY = apiConfig.apiKey;
        const BASE = apiConfig.baseUrl;
        const GENRE = apiConfig.genre;
        await axios.get(BASE + GENRE+ API_KEY)
          .then(res => {
            console.log(res.data);
            setCategory(res.data.genres)
          }).catch(error => console.log(error));
        }
        fetchCategory()
        }, [])


  return (
    <div>
      <Popular popular={popular} />
      <Category category={category}/>
      <Coming upcoming={upcoming} />
    </div>
  )
}

export default Home
