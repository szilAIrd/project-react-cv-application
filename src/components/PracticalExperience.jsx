import { useState } from "react"

function PracticalExperience(){
    const [data, setData] = useState({company: "Audi Hungaria zombie factory", yearOfEmployment: "Never", jobTitle: "explosive vest expert"})
    return (
        <div>
            Practical Experience
            <br></br>
            Company
            <input onChange={(event)=>setData((prevData)=>({...prevData,school:event.target.value}))} value={data.school}></input>
            <br></br>

            Year of employment
            <input onChange={(event)=>setData((prevData)=>({...prevData,yearOfGraduation:event.target.value}))} value={data.yearOfGraduation}></input>
            <br></br>

            Job title
            <input onChange={(event)=>setData((prevData)=>({...prevData,titleOfStudies:event.target.value}))} value={data.titleOfStudies}></input>
            <br></br>

            <input type="submit" value="Submit"></input>
        </div>

    )
}

export default PracticalExperience