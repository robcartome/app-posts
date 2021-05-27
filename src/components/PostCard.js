import styled from "@emotion/styled";
import { RiDeleteBin2Line  } from "react-icons/ri";
import { useDispatch , useSelector } from "react-redux";
import { fetchDeletePost, fetchPosts } from "../features/posts/PostsSlice";

export default function PostCard({ type, id, name, description, onDelete }) {
  const dispatch = useDispatch();
  const handleDelete = async (id) =>{
    await dispatch(fetchDeletePost(id))
    dispatch(fetchPosts());
  }
  const header = (
    <>
      <h3>Nombre</h3>
      <h3>Descripción</h3>
      <div><h3>Accion</h3></div>
    </>
  );
  const list = (
    <>
      <ColumnName><p>{name}</p></ColumnName>
      <ColumnDesc><p>{description}</p></ColumnDesc>
      <div type="submit">
        <button onClick = {()=>handleDelete(id)}>
          <RiDeleteBin2Line  size="25"/>
        </button>
      </div>
    </>
  );
  return <CardWrapper>{type === "header" ? header : list}</CardWrapper>;
}

const CardWrapper = styled.li`
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-width: 480px;
  width: 100%;
  // max-height: 90px;
  position: relative;
  button {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    position: absolute;
    bottom: 7px;
    right: 7px;
    background: #b8b8bb;
    outline: none;
    color: white;
    :hover{
      background-color: ${"#FF5733"};
      cursor: pointer;
    }
  }
`;

const ColumnName = styled.div`
  width: 20%;
  padding: 0 2px;
  border-right: solid 2px rgba(0, 0, 0, 0.3);
  font-size: 1.3rem;
`;

const ColumnDesc = styled.div`
  width: 70%;
  font-size: 1.4rem;
`;
