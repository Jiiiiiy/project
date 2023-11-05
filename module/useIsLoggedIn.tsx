import { useEffect, useState } from "react";
import { auth } from "../../firebase-config";

const useIsLoggedIn = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   useEffect(() => {
     auth.onAuthStateChanged((user) => {
         if(user){
            setIsLoggedIn(true);
         } else {
            setIsLoggedIn(false);
         }
        // setInit(true)
      })
   }, [])
   
   return (
     isLoggedIn
   )
 
}

export default useIsLoggedIn;