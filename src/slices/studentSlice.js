import { createSlice } from "@reduxjs/toolkit";
//Redux has a triad of main components: state, reducers, actions
//State is the data that is stored in the store, state in redux should be immutable
//Reducers are functions that take the previous state and an action, and return the next state
//Reducers can also be imagined as event listeners, they are called when an action is dispatched
//Actions are plain javascript objects that describe what happened, can be represented as events
//Actions have two properties: type and payload

//The flow is as follows: action -> reducer -> state
// In redux we can imagine state updates as events
const initialState = {
    list: [
        { name: "Bobby", age: "20", classroom: "Advanced programming" },
        { name: "John", age: "30", classroom: "Advanced programming" },
        { name: "Mary", age: "40", classroom: "Advanced programming" },
      ]
}

export const studentSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        //in this case action.payload is the student object
        addStudent: (state, action) => {
            state.list.push(action.payload)
        }

    }
})
// Action creators are generated for each case reducer function
export const { addStudent } = studentSlice.actions

export default studentSlice.reducer