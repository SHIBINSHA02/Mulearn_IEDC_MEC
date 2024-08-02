import { Button, Result } from "antd";
import TopGradient from "../../Components/TopGradientBg/TopGradientBg";
import style from "./portalpage.module.css";
import { Link } from "react-router-dom";



function IdeaSubmissionSuccessPage() {
  return (
     <main className={style.main}>
      <TopGradient zIndex={-1}></TopGradient>
      <section
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Result
          status="success"
          title="Idea Submission Success"
          subTitle=""
          style={{ justifyContent: "center", alignItems: "center" }}
          extra={[
            <Link key={"i"} to={"/"}>
              <Button>Home</Button>
            </Link>,
          ]}
        />
      </section>
    </main>
  );
}

export default IdeaSubmissionSuccessPage;
