import Data from './data.json'
export default function Home() {
  const isUserLoggedIn = true
  const UserName='ragul'
  const details  = Data.info
  const mentor_details= Data.mentor_info
  // const sample ={
  //   'name':'sanjay N'
  // }
  // const result = JSON.stringify(sample)
  // console.log(result)
  // console.log(JSON.parse(result))
  const author = Data.mentor_info.department
  console.log(author)
// console.log(details)
const mentor = Data.mentor_info
console.log(mentor)
return(
  
  <>
  <div>
    <h1>{mentor}</h1>
  </div>
{
  details.map((rathesh,index)=>{
    return (
      <div key={index}>
          <h3>{rathesh.name} is {rathesh.age} years old and he is pursuing {rathesh.course} </h3>
          
          {/* <h3>{rathesh.age}</h3>
          <h3>{rathesh.course}</h3> */}
      </div>
  
  
    );
  
  })


}</>)
  
}
