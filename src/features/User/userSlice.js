import { createSlice } from '@reduxjs/toolkit'

const user = {
    token:"",
    name:""
}

const noUser = {
    token:"",
    name:""
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: user,
  },
  reducers: {
    setUser: (state) => {
        state.value = user;
    },
    removeUser: (state) => {
        state.value = noUser;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser, removeUser} = userSlice.actions

export default userSlice.reducer