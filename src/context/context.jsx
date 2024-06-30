import { useEffect, useState } from "react";
import { MyContext } from "./Mycontext";

export const ProviderContext = ({ children }) => {
  const [logedIn, setLoggedIn] = useState(true);
  const [allMembers, setAllMembers] = useState([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const [accessToken, setAccessToken] = useState("");
  // const [refreshToken, setRefreshToken] = useState("");

  const submitUser = (e) => {
    e.preventDefault();
    console.log(username, password);
    if (username === "admin" && password === "123456") {
      setLoggedIn(true);
      setUsername("");
      setPassword("");
    } else {
      alert("Wrong username or password");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:4000/membersList");
        const data = await res.json();
        setAllMembers(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, []);

  // const getAccessToken = async () => {
  //   try {
  //     // Make a request to your server to obtain the access token
  //     const response = await axios.post(
  //       "api/users/login",
  //       {
  //          email: "admin", password: "123456"
  //       }
  //     );

  //     const { accessToken, refreshToken } = response.data;

  //     // Set the access token and refresh token in state
  //     setAccessToken(accessToken);
  //     setRefreshToken(refreshToken);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const refreshAccessToken = async () => {
  //   try {
  //     // Make a request to server to refresh the access token using the refresh token
  //     const response = await axios.post(
  //       "api/users/refresh-token",
  //       null,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${refreshToken}`,
  //         },
  //       }
  //     );

  //     const newAccessToken = response.data.accessToken;
  //     // Set the new access token in state
  //     setAccessToken(newAccessToken);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const fetchData = async () => {
  //   try {
  //     // Make the API request with the access token
  //     const response = await axios.get(
  //       "http://localhost:4000/membersList",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       }
  //     );
  //     // Handle the response
  //     setAllMembers(response.data);
  //     // setIsLogedIn(true)
  //   } catch (error) {
  //     if (error.response && error.response.status === 401) {
  //       // Access token expired, try refreshing it
  //       refreshAccessToken();
  //     } else {
  //       // Handle other errors
  //       console.error(error);
  //     }
  //   }
  // };

  return (
    <MyContext.Provider
      value={{
        logedIn,
        setLoggedIn,
        allMembers,
        submitUser,
        username,
        setUsername,
        password,
        setPassword,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
