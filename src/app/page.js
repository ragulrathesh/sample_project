'use client'
import  data from './data.json'
import { useState } from "react";

const Home = () => {

  const [d,newdata] = useState([]);

  const isUserLoggedIn = true;

  const userName = 'Persis';

  //console.log(data.info)  //displaying the contents of the json file
  //console.table(data.info) //displaying the contents of the json file in a table

  const information = data.info
  //console.table(information) //displays a table of informaion from the definition

  /*const getUsers = () => { // use of fetch and .then
    const APIUrl = 'https://jsonplaceholder.typicode.com/albums/1'

    const result = fetch(APIUrl)
    .then(res => res.json())
    .then(json => console.log(json))

    return result

  
  };*/

  const getUsers = async () => { // use of async await
    const APIUrl = 'https://jsonplaceholder.typicode.com/albums'

    const url = await fetch(APIUrl)
    const result = await url.json()

    const newdata1 = {
      userId : 11, 
      id : 101,
      mentor : 'Persis'
    }
    result.push(newdata1) //use of push operator

    const newdata2 = {
      userId : 12, 
      id : 102,
      mentor : 'tina'
    }
    

    const anotherdata = [...result, newdata2] //use of spread operator
    newdata(anotherdata)  //updated state

    localStorage.setItem('album', JSON.stringify(anotherdata)) // adding items to local storage
    //console.table(JSON.parse(localStorage.getItem('album'))) //fetching items from local storage
  
  };

  



  return (


    <div>
      <center><strong>{isUserLoggedIn?<h1>Welcome {userName}</h1>:<p>PLEASE LOG IN !</p>}</strong></center>

       <center><h2>The following students have got  full precent in practical</h2>
        </center>       
      

      {
        information.map((info, index) =>{
          return(
            <center key= {index}>
              
              <h3> Name:{info.name} </h3>
              <h3> Department{info.department}</h3>
              <h3> Roll No{info.exam_roll}</h3>
            </center>
           
          )
        })
      }
      <center><button onClick={()=>{getUsers()}}>ok</button></center>
    </div>
  );
};

export default Home;