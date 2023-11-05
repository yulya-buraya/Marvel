import ErrorMessage from "../components/errorMessage/ErrorMessage";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Page404 = () => {
  return (
    <div style={{ padding: "100px 0" }}>
      <Helmet>
        <meta name="description" content={`404 error page`} />
        <title>404 Error</title>
      </Helmet>
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
          color: "#9f0013",
          textDecoration: "underline",
        }}
        to="/"
      >
        BACK TO MAIN PAGE
      </Link>
    </div>
  );
};

export default Page404;
