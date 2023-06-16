import {configureStore} from '@reduxjs/toolkit'
import movieSlice from './Reduder'

export default configureStore({
    //ตั้งค่า Redux Store
    reducer:{
        movies: movieSlice 
    }
})