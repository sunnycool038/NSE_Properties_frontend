import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";
import AdminSlice from "./AdminSlice";
import AdminUserSlice from "./AdminUserSlice"
import UserSlice from "./UserSlice";


export const store = configureStore({
    reducer:{
        backend:LoginSlice,
        admin:AdminSlice,
        AdminUser:AdminUserSlice,
        user:UserSlice,

    },
})