import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const Home = () => {
    const authInfo =useContext(AuthContext)
    // console.log(authInfo)
    return (
        <div>
          <h1> this is home page </h1>
        </div>
    );
};

export default Home;