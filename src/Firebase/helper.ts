import { collection , addDoc, getDocs} from "firebase/firestore";
import {db}  from "./config";
import { currentTime } from "../utils/helper";


export const myDocPath = "/channels/hassaan-professor/msgs/hassaan-msgs" 
export const yourDocPath = "/channels/hassaan-professor/msgs/professor-msgs" 


export const addMsg = async (name:string,msg:string)=>{

    try{

       let collectionRef  =  `channels/hassaan-professor/msgs/${name.toLowerCase()}-msgs/data` ;
       let currentTimestamp =  currentTime();

        const docRef = await addDoc(collection(db,collectionRef),
                        {name, msg, currentTimestamp} // data to be added
                        );
              
                console.log("Document written with ID: ", docRef.id);
        
    }catch(error){
        console.error("Error adding document: ", error);
    }


}

export const getMsgs = async (name:string)=>{

    let collectionRef  =  `channels/hassaan-professor/msgs/${name.toLowerCase()}-msgs/data` ;

    
    await getDocs(collection(db,collectionRef))
    .then((snapShot)=>{
        
       const data =  snapShot.docs.map((doc)=>(doc.data()));
       
       console.log(data);
       

            })

}