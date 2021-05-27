import styled from "@emotion/styled";
import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/PostsSlice";

export default function ListPosts({ expenses, onDelete }) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  if (status === "idle") {
    dispatch(fetchPosts());
  }
  if (status === "created"){
    dispatch(fetchPosts());
    console.log("after create:", posts)
  }

  return (
    <>
      {/*   <ListWrapper> */}

      {status === "succeeded" && (
        <ListWrapper>
          {posts.data.map((post) => (
            <PostCard
              key={post.id}
              name={post.name}
              description={post.description}
            />
          ))}
        </ListWrapper>
      )}
    </>
  );
}

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  /*   background-color: red; */
  width: 100%;
  padding: 0 0 20% 0;
`;
