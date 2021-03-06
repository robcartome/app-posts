import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const response = await fetch(`${BASE_URI}/api/v1/posts`, {
      method: "GET",
    });

    const data = await response.json();
    if (!response.ok) {
      console.log(data);
      throw new Error("Something went wrong");
    }
    return { posts: data };
  }
);

export const fetchCreatePost = createAsyncThunk(
  "posts/fetchCreatePost",
  async ({formData, postsData}) => {
    const response = await fetch(`${BASE_URI}/api/v1/posts`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {"Content-type":"application/json; charset=UTF-8"}
    });

    const data = await response.json();
    console.log("data: ",data)

    if (!response.ok) {
      throw new Error(JSON.stringify(data));
    }
/*     const dataAddedPost = {...postsData, status: "succeeded" }
    dataAddedPost .data = [...dataAddedPost.data, data.data]
    console.log("da:", dataAddedPost ); */
    // console.log("prueba",postsData);

    return { post: data};
  }
);

export const fetchDeletePost = createAsyncThunk(
  "posts/fetchDeletePost",
  async (id) => {
    const response = await fetch(`${BASE_URI}/api/v1/posts/${id}`, {
      method: 'DELETE',
      headers: {"Content-type":"application/json; charset=UTF-8"}
    });

    const data = await response.json();
    console.log("data: ",data)
    if (!response.ok) {
      throw new Error(JSON.stringify(data));
    }
    return { post: data };
  }
);



const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },

  reducers: {
    searchPost: (state, action)=>{
     let searchData = {};
      for(let key in action.payload.data){
        const localData = action.payload.data[key];
        console.log(localData.id)
        if (localData.name == "TUBERIAS" ){
          console.log("Entro.", localData)
         /*  state = {...state, items: localdata} */
         searchData = localData;
        }
      }
      console.log(searchData)
      return searchData
    }
  },

  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.items = action.payload.posts;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [fetchCreatePost.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCreatePost.fulfilled]: (state, action) => {
      state.status = "created";
      state.items = action.payload.posts;
    },
    [fetchCreatePost.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const {searchPost } = postsSlice.actions;
export default postsSlice.reducer;
