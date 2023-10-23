import ErrorMessage from "../components/errorMessage/ErrorMessage";
import { Link } from "react-router-dom";
const Page404 = () => {
  return (
    <div style={{padding: "100px 0"}}>
      <ErrorMessage />
      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "48px" }}>
        Page doesn't exist
      </p>
      <Link
        style={{
          display: "block",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          marginTop: "40px",
          color:"#9f0013",
          textDecoration:"underline"
        }}
        to="/"
      >
        BACK TO MAIN PAGE
      </Link>
    </div>
  );
};

export default Page404;