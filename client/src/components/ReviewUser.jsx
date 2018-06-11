import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 15px;
`;

const RoundedImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  margin: 15px auto 10px auto;
`;

const Text = styled.div`
  color: #444;
`;

const ReviewUser = (props) => {
  return (
    <Wrapper>
      <RoundedImg src={props.img} />
      <Text>Reviewed by<br />
        {props.username}
      </Text>
    </Wrapper>
  )
}

export default ReviewUser;
