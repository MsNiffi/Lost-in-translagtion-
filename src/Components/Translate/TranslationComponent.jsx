import parse from 'html-react-parser';
import { createElement } from 'react';
import { useState } from "react";

const TranslationComponent = ()  => {
let fetchedAPI = []; 

// Having trouble with getting the API to compleate the fetch before the rest of the progam runned. THis is the backup solution. Instead of fetcing the API, the info is stored directly in this file. This Array contains the location of all the sign images.

const ArrayBackupPlanSigns = [
   { id: "a", 
   ref: "/individual_signs/a.png"},
 
   { id: "b", 
   ref: "/individual_signs/b.png"},
 
   { id: "c", 
   ref: "/individual_signs/c.png"},
 
   { id: "d", 
   ref: "/individual_signs/d.png"},
 
   { id: "e", 
   ref: "/individual_signs/e.png"},
 
   { id: "f", 
   ref: "/individual_signs/f.png"},
 
   {id: "g", 
   ref: "/individual_signs/g.png"},
 
   {id: "h", 
   ref: "/individual_signs/h.png"},
 
   {id: "i", 
   ref: "/individual_signs/i.png"},
 
   {id: "j", 
   ref: "/individual_signs/j.png"},
 
   {id: "k", 
   ref: "/individual_signs/k.png"},
 
   {id: "l", 
   ref: "/individual_signs/l.png"},
 
   {id: "m", 
   ref: "/individual_signs/m.png"},
 
   {id: "n", 
   ref: "/individual_signs/n.png"},
 
   {id: "o", 
   ref: "/individual_signs/o.png"},
 
   {id: "p", 
   ref: "/individual_signs/p.png"},
 
   {id: "q", 
   ref: "/individual_signs/q.png"},
 
   {id: "r", 
   ref: "/individual_signs/r.png"},
 
   {id: "s", 
   ref: "/individual_signs/s.png"},
 
   {id: "t", 
   ref: "/individual_signs/t.png"},
 
   {id: "u", 
   ref: "/individual_signs/u.png"},
 
   {id: "v", 
   ref: "/individual_signs/v.png"},
 
   {id: "w", 
   ref: "/individual_signs/w.png"},
 
   {id: "x", 
   ref: "/individual_signs/x.png"},
 
   {id: "y", 
   ref: "/individual_signs/y.png"},
 
   {id: "z", 
   ref: "/individual_signs/z.png"}         
  ];

      // This link is not in use now because the fetch part of this component isnæt working properly.
      const APILink = 'https://noroff-api-translat-mm-production.up.railway.app'
      
      // Local state.
      const [translateInput, setTranslateInput] = useState("");
 //  const getSignAPI = async () =>{
   const getSignArray = (event) =>{

  
   
   // This is currently not in use. 
      const response = /*await */fetch(`${APILink}/signs`)
      const data = /*await*/ response.json();
      if (data.length > 0){
        // fetchedAPI = data 
        // thsis is commented out becuse fetchedAPI is linked to ArrayBackupPlanSigns in order for the code to work now.
 
         return fetchedAPI
      }
      else console.log("gikk til els");

      
   }   
   // Using the rest of the program as intended, but "linking" the pasted inn array ArrayBackupPlanSigns insted of the fethc.
   fetchedAPI = ArrayBackupPlanSigns;

  // getSignAPI()

  // converting the entered text in the input field, to an array of characters.
let arrayNY = Array.from(translateInput)

// Storing the file-paths (ref) of the characters that are equal to the charcters entered by the user.
let inputStr = [];

// Looping through the text user entered, comping the characters to the ArrayBackupPlanSigns id. When a match is found, tha filepath is saved in the inputStr array.
 arrayNY.forEach(element => {
   for (let i = 0; i < fetchedAPI.length; i++){
      if (element == fetchedAPI[i].id){ 
        inputStr.push (fetchedAPI[i].ref)  
      }  
   }
});
// mapping over the inputStr putting <img src= in front of, and /> behind each filepath. And store all of that in a the variable result.
let result = inputStr.map(i => 
<img src= {i} />)


// The onSUbmit event is currently not working. The button do not save the translation yet.
// The current input in the field is displayed in sign-language where the varable result is displayed.
return( 
<div> 
<form onSubmit={getSignArray}>
         <input type="text" value= {translateInput}onChange={(e) => setTranslateInput(e.target.value)} /> 
         <button type='submit'> Save translate </button>
      </form>
<p>{result} </p>
   
</div>
     )
 }
export default TranslationComponent;

