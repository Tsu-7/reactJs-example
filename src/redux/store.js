import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer';

export default configureStore({
  reducer: {
    authName: userReducer,  // đăng ký trạng thái sử dụng như token, userInfo, v,v
  }
})