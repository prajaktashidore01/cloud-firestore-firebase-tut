import { getFirestore,collection, addDoc,doc, getDoc,query, where,getDocs,updateDoc } from "firebase/firestore";
import {app} from "./firebase"
import './App.css';

const firestore = getFirestore(app);

function App() {

  const writeData=async()=>{
    const result= await addDoc(collection(firestore,'cities'),{
      name:'Delhi',
      pincode: 123456,
      lat:345,
      lon:678,
    });
    console.log("result",result)
  };

  const makesubcollection=async()=>{
       await addDoc(collection(firestore,'cities/e3DlqMLKoVSgwY8deAIE/Places'),{
             name:'Noida',
             decription: "This is a nice place",
       });
  };

  const getDocument=async()=>{
    const ref =doc(firestore,"cities","e3DlqMLKoVSgwY8deAIE");
    const snap= await getDoc(ref); 

    console.log(snap.data);
  };
   const getdocumentquery=async()=>{
    const collectionref= collection(firestore,'users');
    const q=query(collectionref,where("isFemale","==",false));
    const snapshot= await getDocs(q);
    snapshot.forEach(data=> console.log(data.data));
   };
   const updatedocument=async()=>{
    const docref= doc(firestore,'cities','e3DlqMLKoVSgwY8deAIE');
    await updateDoc(docref,{
      name:'New Delhi',
    })
   }
  return (
    <div className="App">
     <h1>Firebase Firestore</h1>
     <button  onClick={writeData}>Put Data</button>
     <button onClick={makesubcollection}>Put sub Data</button>
     <button onClick={getDocument}>Get Data</button>
     <button onClick={getdocumentquery}>Get Documents by query</button>
     <button onClick={updatedocument}>Update document</button>

    </div>
  );
}

export default App;
