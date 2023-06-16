import React from 'react'
import {useState, useEffect} from 'react'
import movieApi from '../../api/MovieApi'
import { APIKey } from '../../api/MovieApiKey'

import { useDispatch } from 'react-redux' //ฟังก์ชันเพื่อใช้อัพเดทค่าให้กับ Redux Store
import { addMovie } from '../../store/Reduder'

function Home() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('')

  useEffect(()=> {
    const fetchMovies = async() =>{
      const searchKey = search ? search : "Thor"
      const res = await movieApi.get(`?apikey=${APIKey}&s=${searchKey}&type=movie`)

      setTimeout(()=>{
          dispatch(addMovie(res.data.search)) //เอาข้อมูลจาก api ที่เราดึงมาได้ มา set State ให้กับ Redux Store
      },500)
    }
    fetchMovies();
  },[])
  return (
    <div>
      <Home />
    </div>
  )
}

export default Home
