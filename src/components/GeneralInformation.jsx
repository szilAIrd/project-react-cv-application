import { useState } from "react"

// export default Name

function GeneralInformation(){
    const [data, setData] = useState({firstName: "John", lastName: "Smith", email:"johnsmith@gmail.com" , phone:"+4206969777"})

    // function handleOnChange(){

    // }

    return (
        <div>
            <div>General Information</div>
            <form action="example.com/path" method="post">
            <div>
            First Name
            <input onChange={(event)=>setData((prevData)=>({...prevData,firstName:event.target.value}))} value={data.firstName}></input>
            
            <br></br>
            Last Name
            <input onChange={(event)=>setData((prevData)=>({...prevData,lastName:event.target.value}))} value={data.lastName}></input>
            
            <br></br>
            Email
            <input onChange={(event)=>setData((prevData)=>({...prevData,lastName:event.target.value}))} value={data.email}></input>

            <br></br>
            Phone
            <input onChange={(event)=>setData((prevData)=>({...prevData,lastName:event.target.value}))} value={data.phone}></input>
            </div>

            <input type="submit" value="Submit"></input>
            </form>

            
        
        </div>
    )
}

export default GeneralInformation