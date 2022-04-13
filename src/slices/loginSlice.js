import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const initialState = {
    token: "",
    status: "idle",
    error: null
}

//createAsyncThunk is a helper function that creates an action creator
//that returns a promise

//createAsyncThunk accepts two arguments: the name of the action creator and am async function
//by default fetch performs a GET request
export const loginToAccount = createAsyncThunk('login/enter', async (credentials) => {
    const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    return response.json()
})

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
    },
    //Builder object provides methods that let us define additional case reducers that will 
    //run in response to actions defined outside the slice
    //Reminder: Promise can have three states: pending, fulfilled, rejected
    extraReducers(builder) {
        builder.addCase(loginToAccount.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(loginToAccount.fulfilled, (state, action) => {
            // in our case payload is {token: "token"}
            state.token = action.payload.token
            state.status = 'succeeded'
        })
        builder.addCase(loginToAccount.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'failed'
        })
    }
})

export default loginSlice.reducer