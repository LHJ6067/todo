import React from "react";
import styled from "styled-components";

const HeadBox = styled.div`
  border: 1px solid #ddd;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 24px;
`;

function Header() {
  return (
    <HeadBox>
      <div>My Todo List</div>
      <div>React</div>
    </HeadBox>
  );
}
export default Header;
