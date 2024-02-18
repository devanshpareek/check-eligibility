import React, { useEffect, useState } from "react";
import BackgroundImage from "../Images/backgroundImage.jpg";
import InitialCarousel from "../Components/InitialCarousel";
import "./Home.css";
import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";
const Home = () => {
  const [display, setDisplay] = useState(true);
  const navigate = useNavigate();

  const myTimeout3 = setTimeout(() => {
    setDisplay(false);
  }, 1500);

  useEffect(() => {
    if (display === false) {
      myStopFunction();
    }
  }, [display]);

  function myStopFunction() {
    clearTimeout(myTimeout3);
  }

  return (
    <Box>
      <div className="home">
        <InitialCarousel display={display} />
        {display === false && (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            // height='40%'
            py={12}
            mb={2}
            flexDir={"column"}
            // bg={'white'}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDir={"column"}
              height={"40%"}
              width={"40%"}
              bg={"white"}
              opacity={"0.8"}
              borderRadius={"2vw"}
            >
              <Text
                display={"flex"}
                justifyContent={"center"}
                fontSize={"35px"}
              >
                Welcome to DoMS IIT Roorkee
              </Text>
              <ButtonGroup gap="4">
                <Button
                  colorScheme="red"
                  bg={"#4169e1"}
                  color={"white"}
                  height={"2.5vw"}
                  onClick={() => {
                    navigate("eligibility");
                  }}
                >
                  Check Eligibility
                </Button>
                <Button
                  colorScheme="blackAlpha"
                  bg={"#4169e1"}
                  color={"white"}
                  onClick={() => {
                    navigate("call-predictor");
                  }}
                >
                  Predict Interview Call
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        )}
      </div>
    </Box>
  );
};

export default Home;
