import { createSlice } from '@reduxjs/toolkit'

export const userReducer = createSlice({
  name: 'user', // tên của 1 State 
  initialState: {
    value: 'init name' // tạo giá trị ban đầu, thường là null
  },
  reducers: {  // bộ xử lý , tác động trực tiếp giá trị state đã có trước đó, mặc đinh là initialState
    editState: (state,data) => {  // tạo hàm để xử lý 
      const {payload} = data;
      state.value = payload.newName;
    },

    deleteState: (state) => {
      state.value = '';
    },
  }
})

// Action creators are generated for each case reducer function
export const { editState, deleteState } = userReducer.actions    // xuất hàm đã định nghĩa ra bên ngoài cho toàn bộ app sử dụng chung

export default userReducer.reducer // xuất 1 bộ xử lý cho 1 trạng thái