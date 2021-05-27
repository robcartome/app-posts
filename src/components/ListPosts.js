import styled from "@emotion/styled";
import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, searchPost } from "../features/posts/PostsSlice";

export default function ListPosts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);
  const status = useSelector((state) => state.posts.status);

  if (status === "idle" || status === "created") {
    dispatch(fetchPosts());
  }

/*   dispatch(searchPost(posts || [], "TUBERIAS"))
console.log("Despouesde Searach:", posts) */

  return (
    <>
      {status === "failed" && (<h4>{posts.errors}</h4>)}
      {status === "succeeded" && (
        <ListWrapper>
          {posts.data.map((post) => (
            <PostCard
              key={post.id}
              id= {post.id}
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
  width: 100%;
  padding: 0 0 20% 0;
`;
