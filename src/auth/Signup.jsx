import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Ripple } from "primereact/ripple";
import { Toast } from "primereact/toast";
import { Oval } from "react-loader-spinner";
const loginImage = require(`../data/login.jpg`);
export default function Signup() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const toast = useRef(null);
  useEffect(() => {
    // Fetch users data on component mount
    fetch("/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setIsLoading(false);
      });
  }, []);
  console.log(users);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
    };
    const user = users.find((user) => user.email === email);
    if (user) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Email already exists! Please try a different email.",
        life: 3000,
      });
    } else {
      fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((response) => response.json())
        .then((data) => {
          setUsers([...users, data]);
          setName("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => console.error("Error adding user:", error));
    }
  };

  return (
    <>
      {" "}
      <Toast className="custom-toast-warning" ref={toast} />
      <section>
        <div className="img1">
          <img src={loginImage} alt="" />
        </div>
        <div className="content">
          <div
            className="spinner"
            style={{
              backgroundColor: "#00000080",
              position: "absolute",
              height: "100vh",
              width: "100vw",
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
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="input1">
                <span>Username</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="input1">
                <span>Email </span>
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
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="remember">
                <label>
                  <input type="checkbox" name="" />
                  Remember Me
                </label>
              </div>
              <div className="input1 p-ripple">
                <button type="submit" onClick={handleSubmit}>
                  Login
                </button>{" "}
                <Ripple />
              </div>
              <div className="input1">
                <p>
                  Have an account? <Link to="/">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
