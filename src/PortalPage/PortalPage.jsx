import { useState } from "react";
import Button from "../../Components/Button/Button";
import { Input, TextInput } from "../../Components/FormInput/FormInput";
import SubHeading2 from "../../Components/SubHeading2/Subheading2";
import TopGradient from "../../Components/TopGradientBg/TopGradientBg";
import style from "./portalpage.module.css";
import {
  getValidatedFormData,
  submitPortalData,
} from "../../services/PortalFormService";
import { useNavigate } from "react-router";
import { ROUTES } from "../../Constants/RouterPaths";

function PoralPage() {
  const navigate = useNavigate()
  const [error, setError] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    number: "",
    problem: "",
    solution: "",
    targetaudience: "",
    skills: "",
    classdetails:""
  });

  const handleInputChange = (event, name) => {
    const { value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      setError("");
      const data = getValidatedFormData({
        email: formState.email,
        username: formState.name,
        phonenumber: formState.number,
        problemstatement: formState.problem,
        solution: formState.solution,
        targetcustomers: formState.targetaudience,
        currentskills: formState.skills,
        classdetails: formState.classdetails,
      });
      // console.log(val);

      submitPortalData(
        data,
        (response) => {
          console.log(response);
          navigate(ROUTES.IDEA_SUBMISSION_SUCCESS_PAGE , {
            replace: true
          })
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (error) {
      setError(error.toString());
    }
  };
  return (
    <main className={style.main}>
      <TopGradient zIndex={-1}></TopGradient>
      <section className={style.section}>
        <div>
          <SubHeading2 title={"Build a Startup"}></SubHeading2>
          <p className={style.description}>Accelerate your startup idea.</p>

          <div action="none">
            <Input
              title={"Mail Id *"}
              placeholder={"eg: xxxxx@marian.ac.in"}
              description={"Use your college email id only"}
              onChange={(e) => handleInputChange(e, "email")}
            ></Input>
            <Input
              title={"Name *"}
              description={"Enter your name"}
              placeholder={""}
              onChange={(e) => handleInputChange(e, "name")}
              type="email"
            ></Input>
            <Input
              title={"Class & Department *"}
              description={
                "Enter your Class and Depatrment including current semester"
              }
              placeholder={"eg: S6R2 CSE"}
              onChange={(e) => handleInputChange(e, "classdetails")}
              type="email"
            ></Input>
            <Input
              title={"Whatsapp Number *"}
              description={"Use your college email id only"}
              type="number"
              placeholder={""}
              onChange={(e) => handleInputChange(e, "number")}
            ></Input>
            <TextInput
              title={"Problem Statement"}
              description={
                "Write a Description of the problem you would like to solve. (max 500 words)"
              }
              onChange={(e) => handleInputChange(e, "problem")}
            ></TextInput>
            <TextInput
              title={"Your Solution *"}
              description={
                "Write the description of your solution. Try to write your idea in detailed way. (max 1000 words) "
              }
              onChange={(e) => handleInputChange(e, "solution")}
            ></TextInput>
            <TextInput
              title={"Target Customers"}
              description={
                "Write the type of the customers who will use your product/service. (max 100 words)"
              }
              onChange={(e) => handleInputChange(e, "targetaudience")}
            ></TextInput>
            <TextInput
              title={"Your current Skills (max 500 words)"}
              description={
                "Mention your current skills that would help to build your startup.(Leave it blank if No)"
              }
              placeholder={"eg: programming , communication ... "}
              onChange={(e) => handleInputChange(e, "skills")}
            ></TextInput>
            <p
              style={{
                color: "red",
                fontSize: "16px",
                width: "fit-content",
                margin: "10px",
              }}
            >
              {error}
            </p>
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PoralPage;
