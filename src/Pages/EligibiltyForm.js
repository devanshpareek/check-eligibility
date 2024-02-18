import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState, Component, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router";
import { InfoIcon } from "@chakra-ui/icons";
// import Select, { components } from "react-select";
import { components } from "react-select";

const EligibiltyForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [criteria, setCriteria] = useState("");
  const [caste, setCaste] = useState("");
  const [catScore, setCatScore] = useState();
  const [gradScore, setGradScore] = useState();
  const [eligible, setEligible] = useState();
  const [IITGradCGPA, setIITGradCGPA] = useState();

  const goBack = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    if (criteria === "CAT Score") {
      if (caste === "General") {
        setEligible(() => catScore >= 90 && gradScore >= 60);
        return;
      }

      if (caste === "General EWS" || caste === "OBC") {
        setEligible(() => catScore >= 80 && gradScore >= 55);
        return;
      }

      if (caste === "SC" || caste === "ST") {
        setEligible(() => catScore >= 60 && gradScore >= 55);
        return;
      }
    } else {
      if (criteria === "IIT Graduate") {
        console.log(IITGradCGPA);
        if (IITGradCGPA >= 7) {
          setEligible(true);
        } else {
          setEligible(false);
        }
      } else {
        setEligible(true);
      }
    }
  };

  console.log(eligible);

  const options = [
    {
      value: " Golden Girl Scheme",
      label: " Golden Girl Scheme",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            height: "1vw",
            width: "1vw",
          }}
          viewBox="0 0 512 512"
          onClick={() => {
            console.log("helloooo");
          }}
        >
          <path
            h="20"
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
          />
        </svg>
      ),
    },
    {
      value: " IIT Graduate",
      label: " IIT Graduate",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            height: "1vw",
            width: "1vw",
          }}
          viewBox="0 0 512 512"
        >
          <path
            h="20"
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
          />
        </svg>
      ),
    },

    {
      value: "CAT Score",
      label: "CAT Score",
      icon: <></>,
    },
  ];

  const { Option } = components;
  const IconOption = (props) => (
    <Option {...props}>
      {props.data.icon}
      {props.data.label}
    </Option>
  );

  class App extends Component {
    constructor() {
      super();
      this.state = {
        name: "React",
      };
    }
  }

  useEffect(() => {
    if (criteria === "Golden Girl Scheme") {
      alert(
        "Golden Girl Scheme is valid for all the first rank holders(Gold Medalist). Female candidates from an IIT and/or Institute/University within the top 50 ranks(in the overall category) in the NIRF ranking of the most recent year."
      );
    }
  }, [criteria]);
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
          height={"80%"}
          width={"40%"}
          bg={"white"}
          opacity={"0.8"}
          borderRadius={"2vw"}
          gap={"2vh"}
        >
          <Box display={"flex"} justifyContent={"space-between"} width={"90%"}>
            <FormLabel fontSize={"20px"}>Name:</FormLabel>
            <Input
              w={"40%"}
              height={"1.5rem"}
              type="string"
              placeholder="Please enter your name"
              onChange={(event) => {
                setEligible();
                setName(event.target.value ?? "");
              }}
            />
          </Box>
          <Box display={"flex"} justifyContent={"space-between"} width={"90%"}>
            <FormLabel fontSize={"20px"}>
              Please Select Your Criteria:
            </FormLabel>
            {/* <Box
              display={"flex"}
              justifyContent={"space-between"}
              width={"90%"}
            >
              <FormLabel fontSize={"20px"}>Caste:</FormLabel>
              <Select
                w={"40%"}
                fontSize={"15px"}
                height={"1.5rem"}
                placeholder="Catse"
                onChange={(event) => {
                  setCaste(event.target?.value ?? "");
                }}
                defaultValue={options[0]}
                options={options}
                components={{ Option: IconOption }}
              ></Select>
            </Box> */}
            <Select
              w={"42%"}
              fontSize={"15px"}
              height={"1.5rem"}
              placeholder="Criteria"
              onChange={(event) => {
                setEligible();
                setCriteria(event.target.value ?? "");
              }}
            >
              <option>Golden Girl Scheme</option>
              <option>IIT Graduate</option>
              <option>CAT Score</option>
            </Select>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{
                height: "1vw",
                width: "1vw",
              }}
              viewBox="0 0 512 512"
            >
              <path
                h="20"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
              />
            </svg>{" "} */}
          </Box>

          {criteria === "CAT Score" ? (
            <>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                width={"90%"}
              >
                <FormLabel fontSize={"20px"}>Category:</FormLabel>
                <Select
                  w={"42%"}
                  fontSize={"15px"}
                  height={"1.5rem"}
                  placeholder="Category"
                  onChange={(event) => {
                    setEligible();
                    setCaste(event.target.value ?? "");
                  }}
                >
                  <option>General</option>
                  <option>General EWS</option>
                  <option>OBC</option>
                  <option>SC</option>
                  <option>ST</option>
                </Select>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                width={"90%"}
              >
                <FormLabel fontSize={"20px"}>Cat Percentile:</FormLabel>
                <Input
                  w={"40%"}
                  height={"1.5rem"}
                  type="number"
                  placeholder="Cat Percentile"
                  onChange={(event) => {
                    setEligible();
                    setCatScore(event.target.value ?? "");
                  }}
                />
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                width={"90%"}
              >
                <FormLabel fontSize={"20px"}>Graduation Score:</FormLabel>
                <Input
                  w={"40%"}
                  height={"1.5rem"}
                  type="number"
                  placeholder="Graduation Score"
                  onChange={(event) => {
                    setEligible();
                    setGradScore(event.target.value ?? "");
                  }}
                />
              </Box>
            </>
          ) : criteria === "IIT Graduate" ? (
            <>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                width={"90%"}
              >
                <FormLabel fontSize={"20px"}>Enter your CGPA:</FormLabel>
                <Input
                  w={"40%"}
                  height={"1.5rem"}
                  type="number"
                  placeholder="CGPA"
                  onChange={(event) => {
                    setEligible();
                    setIITGradCGPA(event.target.value ?? "");
                  }}
                />
              </Box>
            </>
          ) : (
            <></>
          )}

          <Box display={"flex"} justifyContent={"space-around"} width={"90%"}>
            <Button
              bg={"#4169e1"}
              color={"white"}
              height={"2.5vw"}
              marginTop={"5vh"}
              onClick={goBack}
            >
              Go Back
            </Button>
            <Button
              bg={"#4169e1"}
              color={"white"}
              height={"2.5vw"}
              marginTop={"5vh"}
              onClick={handleSubmit}
            >
              Check Eligibility
            </Button>

            {eligible !== undefined && (
              <Button
                bg={"#4169e1"}
                color={"white"}
                height={"2.5vw"}
                marginTop={"5vh"}
                onClick={() => {
                  setEligible();
                  navigate("/eligibility");
                }}
              >
                Clear
              </Button>
            )}
          </Box>
          <Box>
            {eligible !== undefined && (
              <Text
                padding={"3vw"}
                textAlign={"center"}
                fontSize={25}
                display={"flex"}
                justifyContent={"space-around"}
                color={eligible ? "green" : "red"}
              >
                {eligible
                  ? `Congracts ${
                      criteria === "Golden Girl Scheme"
                        ? "Golden Girl " + name
                        : name
                    }, we are pleased to inform you that you are eligible to apply for DoMS IIT Roorkee!`
                  : `Hey ${name}, we are sorry to inform you that you are not eligible to apply for DoMS IIT Roorkee.`}
              </Text>
            )}
          </Box>
        </FormControl>
      </Box>
    </div>
  );
};

export default EligibiltyForm;
