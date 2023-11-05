import { useEffect, useState } from "react";
import { auth } from "../../firebase-config";

const userEmail = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   console.log(isLoggedIn)
   const [userEmail, setUserEmail] = useState("")
   useEffect(() => {
     auth.onAuthStateChanged((user:any) => {
         if(user){
            setIsLoggedIn(true);
            setUserEmail(user.email)
            
         } else {
            setIsLoggedIn(false);
         }
        // setInit(true)
      })
   }, [])
   
   return (
      userEmail
   )
 
}

export default userEmail;