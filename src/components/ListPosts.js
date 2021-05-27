import styled from "@emotion/styled";
import PostCard from "./PostCard";

export default function ListPosts({ expenses, onDelete }) {
  return (
    <ListWrapper>
      <PostCard name="RObert Carlos" description="Priemr posts del dia 1"/>
      <PostCard name="Carlos Tolentino" description="Priemr posts del dia 1 Priemr posts del dia 2 Priemr posts del dia 3"/>
      <PostCard name="Carlos Tolentino mendoza" description="Priemr posts del dia 1 Priemr posts del dia 2 Priemr posts del dia 1 Priemr posts del dia 2 Priemr posts del dia 1 Priemr posts del dia 2 Priemr posts del dia 3"/>
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
/*   background-color: red; */
  width: 100%;
  padding: 0;
`;