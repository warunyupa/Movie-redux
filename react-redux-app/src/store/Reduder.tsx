import { createSlice, current} from '@reduxjs/toolkit'

const initialState = {
    movie: []
}

const movieSlice = createSlice({
    name: "movieListing",
    initialState,
    reducers:{
        addMovie: (state, action) => {
            state.movie = action.payload //เอาค่าไปเก็บใน state , เข้าถึงข้อมูลจาก action
            console.log(current(state))
        }
    }
})

export const {addMovie} = movieSlice.actions //export มาจาก movieSlice, เข้าถึง action
export default movieSlice.reducer