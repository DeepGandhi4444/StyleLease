import React, { useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Ripple } from "primereact/ripple";
import { Oval } from "react-loader-spinner";
import { Eye, EyeOff } from "lucide-react";
const loginImage = require(`../data/login.jpg`);
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch users data on component mount
    fetch("/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        alert("data loaded!!")
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        alert("error fetching data pls try again !!")
      });
  }, []);
  console.log(users);
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email);

    if (user && user.password === password) {
      sessionStorage.setItem("name", user.name);
      sessionStorage.setItem("email", user.email);
      navigate("/home");
    } else {
      setError("Invalid email or password.");
    }
  };
  const handleShowPass = () => {
    setShowPass(!showPass);
  };  
  return (
    <>
      <section>
        <div className="img1">
          <img src={loginImage} alt="Login" loading="lazy" />
        </div>
        <div className="content">
          <div
            className="spinner"
            style={{
              backgroundColor: "#00000080",
              position: "absolute",
              height: "100vh",
              width: "100%",
              zIndex: "5",
              display: isLoading ? "grid" : "none",
              placeItems: "center",
            }}
          >
            <Oval
              visible={isLoading}
              height="80"
              width="80"
              color="#2D51A7"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              secondaryColor="#2D51A7"
              wrapperClass=""
            />
          </div>
          <div className="form1">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              {error && <p className="error">{error}</p>}
              <div className="input1">
                <span>E-Mail</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input1">
                <span>Password</span>
                <input
                  type={showPass?"text":"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="eye" onClick={handleShowPass}>
                  {showPass ? <Eye /> : <EyeOff />}
                </div>
              </div>
              <div className="remember">
                <label>
                  <input type="checkbox" />
                  Remember Me
                </label>
              </div>
              <div className="input1 p-ripple">
                <button type="submit" onClick={handleSubmit}>
                  Login
                </button>
                <Ripple />
              </div>
              <div className="input1">
                <p>
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
