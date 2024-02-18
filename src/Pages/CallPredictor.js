import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router";

const CallPredictor = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [category, setCategory] = useState();
  const [catScore, setCatScore] = useState();
  const [tnthScore, setTnthScore] = useState();
  const [twlthScore, setTwlthScore] = useState();
  const [gradScore, setGradScore] = useState();
  const [pgScore, setPgScore] = useState();
  const [exp, setExp] = useState();
  const [ans, setAns] = useState();

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    if (category === "General") {
      //  <90 90+ 92+
      if (gradScore < 60) {
        setAns(1);
        return;
      } else {
        setAns(catScore < 90 ? 1 : catScore >= 90 && catScore <= 92 ? 2 : 3);
        return;
      }
    }

    if (category === "General EWS" || category === "OBC") {
      // <80 80+ 85+
      if (gradScore < 55) {
        setAns(1);
        return;
      } else {
        setAns(catScore < 80 ? 1 : catScore >= 80 && catScore <= 85 ? 2 : 3);
        return;
      }
    }

    if (category === "SC" || category === "ST") {
      // <60 60+ 70+
      if (gradScore < 55) {
        setAns(1);
        return;
      } else {
        setAns(catScore < 60 ? 1 : catScore >= 60 && catScore <= 70 ? 2 : 3);
        return;
      }
    }
  };

  const getAnsString = () => {
    return ans === 1
      ? `Hi ${firstName} ${lastName}, You do not have a chance of receiving an interview call for the MBA programme at DoMS IIT Roorkee.`
      : ans === 2
      ? `Hi ${firstName} ${lastName}, You have a normal chance of receiving an interview call for the MBA programme at DoMS IIT Roorkee.`
      : `Hi ${firstName} ${lastName}, You have a high chance of receiving an interview call for the MBA programme at DoMS IIT Roorkee.`;
  };

  function CompExample() {
    const {
      isOpen: isVisible,
      onClose,
      onOpen,
    } = useDisclosure({ defaultIsOpen: true });

    return isVisible && ans !== undefined ? (
      <Alert
        backgroundColor={ans !== 1 ? "lightgreen" : "#F08080"}
        status={ans === 1 ? "error" : "success"}
      >
        <Box>
          <AlertTitle>{ans === 1 ? "Oops!" : " Success!"}</AlertTitle>
          <AlertDescription>{getAnsString()}</AlertDescription>
        </Box>
        <CloseButton
          alignSelf="flex-start"
          position="relative"
          right={-1}
          top={-1}
          onClick={onClose}
        />
      </Alert>
    ) : (
      <Button
        bg={"#4169e1"}
        color={"white"}
        height={"2.5vw"}
        marginTop={"5vh"}
        onClick={() => {
          handleSubmit();
          onOpen();
        }}
      >
        Predict Chances
      </Button>
    );
  }

  return (
    <div className="home">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        // height='40%'
        py={12}
        mb={2}
        flexDir={"column"}
      >
        <FormControl
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDir={"column"}
          height={"98%"}
          width={"60%"}
          bg={"white"}
          opacity={"0.8"}
          borderRadius={"2vw"}
          gap={"2vh"}
        >
          <Box display={"flex"} justifyContent={"space-between"} width={"90%"}>
            <FormLabel fontSize={"20px"}>First Name:</FormLabel>
            <Input
              w={"40%"}
              height={"1.5rem"}
              type="string"
              required={true}
              placeholder="Please enter your First name"
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} width={"90%"}>
            <FormLabel fontSize={"20px"}>Last Name:</FormLabel>
            <Input
              w={"40%"}
              height={"1.5rem"}
              required={true}
              type="string"
              placeholder="Please enter your Last name"
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} width={"90%"}>
            <FormLabel fontSize={"20px"}>Category:</FormLabel>
            <Select
              w={"41%"}
              fontSize={"15px"}
              height={"1.5rem"}
              required={true}
              placeholder="Category"
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            >
              <option>General</option>
              <option>General EWS</option>
              <option>OBC</option>
              <option>SC</option>
              <option>ST</option>
            </Select>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} width={"90%"}>
            <FormLabel fontSize={"20px"}>Engineer/Non-Engineer:</FormLabel>
            <Select
              w={"41%"}
              fontSize={"15px"}
              height={"1.5rem"}
              required={true}
              placeholder="Non Engineer"
              onChange={(event) => {
                // setCategory(event.target.value);
              }}
            >
              <option>Engineer</option>
            </Select>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} width={"90%"}>
            <FormLabel fontSize={"20px"}>CAT Percentile:</FormLabel>
            <Input
              w={"40%"}
              height={"1.5rem"}
              type="number"
              required={true}
              placeholder="CAT Percentile"
              onChange={(event) => {
                setCatScore(event.target.value);
              }}
            />
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} width={"90%"}>
            <FormLabel fontSize={"20px"}>10th Score:</FormLabel>
            <Input
              w={"40%"}
              height={"1.5rem"}
              type="number"
              required={true}
              placeholder="10th Score"
              onChange={(event) => {
                setTnthScore(event.target.value);
              }}
            />
          </Box>
          <Box display={"flex"} justifyContent={"space-between"} width={"90%"}>
            <Box
              width={"100%"}
              display={"flex"}
              gap={"2vw"}
              justifyContent={"flex-end"}
            >
              <Box display={"flex"}>
                <input type="radio" name="fav_language" value="CGPA" />
                <FormLabel>CGPA</FormLabel>{" "}
              </Box>

              <Box display={"flex"}>
                <input type="radio" name="fav_language" value="Percentage" />
                <FormLabel>Percentage</FormLabel>{" "}
              </Box>
            </Box>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} width={"90%"}>
            <FormLabel fontSize={"20px"}>12th Score:</FormLabel>
            <Input
              w={"40%"}
              height={"1.5rem"}
              required={true}
              type="number"
              placeholder="12th Score"
              onChange={(event) => {
                setTwlthScore(event.target.value);
              }}
            />
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} width={"90%"}>
            <FormLabel fontSize={"20px"}>Under Graduation Score:</FormLabel>
            <Input
              w={"40%"}
              height={"1.5rem"}
              required={true}
              type="number"
              placeholder="Under Graduation Score"
              onChange={(event) => {
                setGradScore(event.target.value);
              }}
            />
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} width={"90%"}>
            <FormLabel fontSize={"20px"}>Post Graduation Score:</FormLabel>
            <Input
              w={"40%"}
              height={"1.5rem"}
              type="number"
              placeholder="Post Graduation Score"
              onChange={(event) => {
                setPgScore(event.target.value);
              }}
            />
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} width={"90%"}>
            <FormLabel fontSize={"20px"}>Work Experience/Fresher:</FormLabel>
            <Select
              w={"41%"}
              fontSize={"15px"}
              height={"1.5rem"}
              required={true}
              onChange={(event) => {
                setExp(event.target.value);
              }}
            >
              <option>Fresher</option>
              <option>0 - 1 years</option>
              <option>1 - 2 years</option>
              <option>2 - 3 years</option>
              <option>3 - 4 years</option>
              <option>4 - 5 years</option>
              <option>5 - 6 years</option>
              <option>6 - 7 years</option>
              <option>7 - 8 years</option>
              <option>8 - 9 years</option>
              <option>9 - 10 years</option>
              <option>10+ years</option>
            </Select>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            gap={"4vw"}
            width={"90%"}
          >
            <Button
              bg={"#4169e1"}
              color={"white"}
              height={"2.5vw"}
              marginTop={"5vh"}
              onClick={goBack}
            >
              Go Back
            </Button>
            {/* <Button
              bg={"#4169e1"}
              color={"white"}
              height={"2.5vw"}
              marginTop={"5vh"}
               onClick={onOpen}
            >
              Check Eligibility
            </Button> */}
            <CompExample />
          </Box>
          {/* <Box marginTop={-60}> */}
          {/* {ans !== undefined && (
              <Text
                padding={"3vw"}
                textAlign={"center"}
                fontSize={25}
                display={"flex"}
                justifyContent={"space-around"}
                color={ans === 1 ? "red" : "green"}
              >
                {ans === 1
                  ? `Hi ${firstName} ${lastName}, You do not have a chance of receiving an interview call for the MBA programme at DoMS IIT Roorkee.`
                  : ans === 2
                  ? `Hi ${firstName} ${lastName}, You have a normal chance of receiving an interview call for the MBA programme at DoMS IIT Roorkee.`
                  : `Hi ${firstName} ${lastName}, You have a high chance of receiving an interview call for the MBA programme at DoMS IIT Roorkee.`}
              </Text>
            )} */}
          {/* </Box> */}
        </FormControl>
      </Box>
    </div>
  );
};

export default CallPredictor;
