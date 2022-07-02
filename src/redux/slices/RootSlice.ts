import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: 'Name',
        email: 'Email',
        class_name: 'Class Name',
        class_day: 'Class Day',
        class_time: 'Class Time',
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseEmail: (state, action) => { state.email = action.payload},
        chooseClassName: (state, action) => { state.class_name = action.payload },
        chooseClassDay: (state, action) => { state.class_day = action.payload},
        chooseClassTime: (state, action) => { state.class_time = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseEmail, chooseClassName, chooseClassDay, chooseClassTime } = rootSlice.actions