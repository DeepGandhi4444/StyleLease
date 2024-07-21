import React ,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Ripple } from "primereact/ripple";
export default function Signup() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
    };

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
  };
  

  return (
    <>
      {/**/}
      <section>
        <div className="img1">
          <img src="images/login.jpg" />
        </div>
        <div className="content">
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
                <input type="submit" defaultValue="Sign In" name="" />
                <Ripple/>
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
