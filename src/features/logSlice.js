import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: false
}

export const logSlice = createSlice({
    name: 'log',
    initialState,
    reducers: {
        setLog: (state) => {
            state.value = true
        }
    },
})

export const { setLog } = logSlice.actions
export default logSlice.reducer