import React from "react";
import Box from "@material-ui/core/Box";
import styled from "styled-components";

const DataBox = styled.div`
  padding: 5px;
  max-width: 100%;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  text-align: left;
`;

const CardWrapper = styled.div`
  border: 1px red solid;
  width: 500px;
  height: 200px;
  border-radius: 10px;
  margin: 20px;
  display: inline-box;
  box-shadow: 19px 16px 50px -21px rgba(0, 0, 0, 0.35);
`;

const ImgBox = styled(Box)`
  max-width: 150px;
  max-height: 150px;
  padding: 5px;
  margin-top: auto;
  margin-bottom: auto;
`;

export default function GameCard(props) {
  return (
    <CardWrapper>
      <Box display="flex" p={1} flexWrap="nowrap">
        <ImgBox>
          <img
            alt="user-avatar"
            src={
              props.data
                ? `https://ubisoft-avatars.akamaized.net/${props.data.p_user}/default_146_146.png`
                : null
            }
          />
        </ImgBox>
        <DataBox>
          <p>
            <b>Nome:</b> {props.data.p_name}
          </p>
          <p>
            <b>MMR:</b> {props.data.p_currentmmr}
          </p>
          <p>
            <b>Level:</b> {props.data.p_level}
          </p>
          <p>
            <b>Plataforma:</b> {props.data.p_platform}
          </p>
        </DataBox>
      </Box>
    </CardWrapper>
  );
}
