import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  name: null,
  img: null,
  uid: null,
  email: null,
  user: false,
  adminUser: false,
  admin: false,
}


const AdminUserSlice = createSlice({
  name: 'AdminUser',
  initialState,
  reducers: {
    setLogin: (state, {payload}) => {
        state.uid = payload.uid;
        state.email = payload.email;
      },
      setLogOut: (state, {payload}) => {
        state.uid = null;
        state.email = null;
      },
      setUser: (state, {payload}) => {
        state.user = true;
        state.adminUser = false;
        state.admin = false;
      },
      setAdminUser: (state, {payload}) => {
        state.user = false;
        state.adminUser = true;
        state.admin = false;
      },
      setAdmin: (state, {payload}) => {
        state.user = false;
        state.adminUser = false;
        state.admin = true;
      },
  }
})

export const { setLogin, setLogOut,setUser,setAdminUser,setAdmin } = AdminUserSlice.actions;

export default AdminUserSlice.reducer;