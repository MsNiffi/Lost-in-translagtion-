import { logDOM } from "@testing-library/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import{useForm} from "react-hook-form";


const LoginForm = () => {  
// the url for the API is sotred in a vaiable, so it's easier to use it.
const APILink = 'https://noroff-api-translat-mm-production.up.railway.app'


// local states 
   const [username, setUsername] = useState("");
   const navigate = useNavigate()

// 
   const HandleSubmitLogIn = async (event) => {
      event.preventDefault();  // Keeps weird bugs from happening.
      
      // do Get request to see if there is a username in the API that matches to entered username.
      const response = await fetch(`${APILink}/translations?username=${username}`,{method: 'Get'}) 

      // converts the respons that is a datastream, to json format which is gives us back an array with the data requested.
      const data = await response.json();

      // if the returned array (data) isn't empty, then there have to be a username in the  API that matches the text entered in the input field. When this happens the user is redirected to the translate part of this app.
      if (data.length > 0){
         console.log(data)
         navigate('/translate')
      }
      else {
         console.log("entered uername does not match any username in the API");
      }

}


   return (
      // onSubmitt event happens either when user preses ENTER or the log in button.
      // The HandleSubmitLogIn funtion is executed when onSubmit event happens.
      // When checking if usernamme exists, the state is pudated.
      <form onSubmit={HandleSubmitLogIn}> 
         <input type="text" value= {username}onChange={(e) => setUsername(e.target.value)} /> 
         <button type='submit'> Log in </button>
      </form>
    )
  
}
export default LoginForm;
