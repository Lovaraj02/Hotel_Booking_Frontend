import { Link } from "react-router-dom";

function Home() {
  return (
    <div
  className="container-fluid d-flex flex-column align-items-center justify-content-center text-center"
  style={{
    backgroundImage: "url('back2.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    width: "100%",
    minHeight: "100vh",
    paddingTop: "15px",
  }}
>

      <div
        className="text-white text-center px-3"
        style={{ textShadow: "3px 3px 5px black", marginTop: "-50px" }} 
      >
        <h1 className="fs-1">Welcome to Our Restaurant</h1>
        <h3 className="fs-4 mb-4">Have a successful reservation.</h3>
      </div>
      <div className="d-flex gap-3">
     <Link to="/mainlogin">
        <button className="px-4 py-2" style={{ backgroundColor: "white", color: "black",border:"none" }}>Login</button>
     </Link>

     <Link to="/signup">
      <button className="px-4 py-2" style={{ backgroundColor: "white", color: "black",border:"none"}}>Sign Up</button>
     </Link>


      </div>
    </div>
  );
}

export default Home;
