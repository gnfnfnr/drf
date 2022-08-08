import React from "react";
import { useLocation, Link } from "react-router-dom";
import style from "styled-components";

const ResultBox = style.section`
  position: absolute;
  background: #E9F6FD;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  box-sizing: border-box;
  font-weight: 700;
  overflow-x: hidden;
`;

const ResultSectionInside = style.div`

`;

const ResultInfoBox = style.div`
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 47px;
  @media only screen and (max-width: 376px) {
    height: 400px;
  }
`;

const ResultText = style.div`
  color: #56AEDF;
  margin-top: 40px;
`;

const ResultInfo = style.ul`
  list-style: none;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ResultInfoList = style.li`
  font-size: 14px;
  margin-bottom: 10px;
  &:first-child{
    font-size: 16px;
  }
`;
const HomeBtn = style.div`
  background: #56AEDF;
  border-radius: 5px;
  width: 100%;
  padding: 13px 0;
  text-align: center;
  color: #FFFFFF;
  line-height: 22px;
  margin-bottom: 40px;
`;
function ProductResult() {
  const location = useLocation();
  const borrowItem = location.state.borrow;
  const borrowUser = location.state.borrower;
  return (
    <ResultBox>
      <div>
        <ResultInfoBox>
          <ResultText>대여신청완료</ResultText>
          <img src={require("../img/borrow_com.png")} />
          <ResultInfo>
            <ResultInfoList>{borrowItem.product_name}</ResultInfoList>
            <ResultInfoList>{borrowUser.borrowDate}</ResultInfoList>
            <ResultInfoList>-</ResultInfoList>
            <ResultInfoList>{borrowUser.borrowEndDate}</ResultInfoList>
            <ResultInfoList>보증금 {borrowItem.deposit} 원</ResultInfoList>
            <ResultInfoList>대여비 {borrowItem.rental_fee} 원</ResultInfoList>
            <ResultInfoList>
              {borrowItem.address} {borrowItem.detail_address}
            </ResultInfoList>
          </ResultInfo>
        </ResultInfoBox>
        <Link to={"/"} style={{ width: "100%" }}>
          <HomeBtn>더 둘러보기</HomeBtn>
        </Link>
      </div>
    </ResultBox>
  );
}

export default ProductResult;
