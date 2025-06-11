import React from "react";
import star from "../assets/star.svg";
import takeaway from "../assets/homeMain.png";
import Button from "../components/button/button.jsx";
import styled from "styled-components";

const MainHome = styled.main`
  background: url("../public/home.png") center/cover no-repeat;
  padding: 100px 120px;
  display: flex;
  gap: 32px;
  align-items: center;
`;

const HomeContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainTitle = styled.h1`
  font-weight: 400;
  font-size: 60px;
  line-height: 1;
  letter-spacing: 1.8px;
  margin-bottom: 26px;
`;

const TextAccent = styled.span`
  color: #35b8be;
`;

const Subtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.32px;
  color: #546285;
  max-width: 540px;
  margin-bottom: 52px;
`;

const HomeBtn = styled.div`
  margin-bottom: 40px;
`;

const TrustpilotRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;
  margin-bottom: 10px;
`;

const TrustpilotLogo = styled.img`
  width: 18px;
  height: 18px;
`;

const RatingText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #08090a;
`;

const HomeImage = styled.img`
  max-width: 100%;
`;

const HomeMain = () => (
  <MainHome>
    <HomeContent>
      <MainTitle>
        Beautiful food &<br />
        takeaway, <TextAccent>delivered</TextAccent>
        <br />
        to your door.
      </MainTitle>
      <Subtitle>
        Lorem Ipsum is simply dummy text of the printing and<br />
        typesetting industry. Lorem Ipsum has been the industry's<br />
        standard dummy text ever since the 1500.
      </Subtitle>
      <HomeBtn>
        <Button type="btn__primary btn--large">Place an Order</Button>
      </HomeBtn>
      <TrustpilotRow>
        <TrustpilotLogo src={star} alt="star" />
        <span>Trustpilot</span>
      </TrustpilotRow>
      <RatingText>
        <TextAccent>4.8 out of 5</TextAccent> based on 2000+ reviews
      </RatingText>
    </HomeContent>
    <HomeImage src={takeaway} alt="Take Away" />
  </MainHome>
);

export default HomeMain;