import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        class_name: 'Class Name',
        class_day: 'Class Day',
        class_time: 'Class Time',
    },
    reducers: {
        chooseClassName: (state, action) => { state.class_name = action.payload},
        chooseClassDay: (state, action) => { state.class_day = action.payload},
        chooseClassTime: (state, action) => { state.class_time = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseClassName, chooseClassDay, chooseClassTime } = rootSlice.actions