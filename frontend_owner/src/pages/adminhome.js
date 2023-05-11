import { useHistory } from "react-router"
import homePic from "../images/A.png"
const AdminHome = ()=> {

    let history=useHistory()
    return (
        <>
        <div>
        <h1>Admin Dashboard</h1>
        </div>
        <div style={{ display: "flex", flexDirection: "row"}}>
               
               <div>
            <button onClick={()=>
            {
                history.push("view-customers")
            }}
            className="btn btn-success">
             View Customers     
            </button>
            </div>

            <div style={{ marginLeft: '2rem' }}>
            <button onClick={()=>
            {
                history.push("view-staff")
            }}
            className="btn btn-success">
             View Staff     
            </button>
            </div>

            <div style={{ marginLeft: '2rem' }}>
            <button onClick={()=>
            {
                history.push("add-staff")
            }}
            className="btn btn-success">
             Add Staff    
            </button>
            </div>
        
        </div>
        <div style={{marginLeft:300,marginTop:60,align:'center'}}>
            <img src = {homePic} style={{height:300,width:600}} alt="....." />
        </div>
        </>
    )
}

export default AdminHome