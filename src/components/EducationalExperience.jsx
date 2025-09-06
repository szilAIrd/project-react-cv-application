import { useState } from "react"

function EducationalExperience(){
    const [data, setData] = useState({school: "Berzsenyi Daniel terroris training center", yearOfGraduation: "Never", titleOfStudies: "explosive vest expert"})
    return (
        <div>
            Education
            <br></br>
            School
            <input onChange={(event)=>setData((prevData)=>({...prevData,school:event.target.value}))} value={data.school}></input>
            <br></br>

            Year of graduation
            <input onChange={(event)=>setData((prevData)=>({...prevData,yearOfGraduation:event.target.value}))} value={data.yearOfGraduation}></input>
            <br></br>

            Title of studies
            <input onChange={(event)=>setData((prevData)=>({...prevData,titleOfStudies:event.target.value}))} value={data.titleOfStudies}></input>
            <br></br>

            <input type="submit" value="Submit"></input>
        </div>

    )
}

export default EducationalExperience