import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: (postId) => {
    console.log(`You deleted: ${postId}`);
  },
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId, title, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: postBody,
        reactions: reactions,
        userId: "user-9",
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Muree",
    body: "Hii friends its me I am going to murree to enjoy my vocation its my first trip after college along with college friends, Hope it will be best trip for us",
    reactions: 15,
    userId: "user-9",
    tags: ["enjoy", "trip", "vocations", "Muree"],
  },
  {
    id: "2",
    title: "Going to Skardu",
    body: "Hii friends its me I am going to Skardu to enjoy my vocation its my first trip after college along with college friends, Hope it will be best trip for us",
    reactions: 2,
    userId: "user-12",
    tags: ["enjoy", "trip", "vocations", "skardu"],
  },
];
export default PostListProvider;
