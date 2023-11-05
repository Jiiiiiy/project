import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase-config";
import { collection, getFirestore, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

const firestoreRead = () => {
   const app = initializeApp(firebaseConfig);
   const db = getFirestore(app);

   const [records, setRecords] = useState([{
      key: "",
      date: "",
      title: "",
      price: "",
      description: "",
      timestamp: ""
   }])
   const homeHref = `https://jiiiiiy.github.io/project/`;
   const href = window.location.href;
   if (href == homeHref) {
      var q = query(collection(db, "records"), orderBy("timestamp", "desc"), limit(4));
   // } else if (href == ListHref) {
   //    var q = query(collection(db, "records"), orderBy("timestamp", "desc"), limit(5));
   } else {
      var q = query(collection(db, "records"), orderBy("timestamp", "desc"));
   }
   useEffect(() => {
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
         const items:any = [];
         querySnapshot.forEach((doc) => {
            items.push({
               ...doc.data(),
               key: doc.id,
            });
         });
         setRecords(items)

      });
      return () => unsubscribe()
   }, [])
   
   return (
      records
   )
}

export default firestoreRead