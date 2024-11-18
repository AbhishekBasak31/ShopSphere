import React from 'react'


function HeroesSkeleton() {
  return (
    <div style={{width:"100%",height:"auto",}} >
        <div style={{width:"96%", height:"550px",backgroundColor: "#ddd", margin:"auto",marginTop:"80px"}}>

        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"96%", height:"250px", margin:"auto",marginTop:"20px"}}>
            <div style={{width:"250px",height:"250px",borderRadius:"0.25rem",backgroundColor:"#ddd"}}></div>
            <div style={{width:"250px",height:"250px",borderRadius:"0.25rem",backgroundColor:"#ddd"}}></div>
            <div style={{width:"250px",height:"250px",borderRadius:"0.25rem",backgroundColor:"#ddd"}}></div>
            <div style={{width:"250px",height:"250px",borderRadius:"0.25rem",backgroundColor:"#ddd"}}></div>
            <div style={{width:"250px",height:"250px",borderRadius:"0.25rem",backgroundColor:"#ddd"}}></div>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"96%", height:"250px", margin:"auto",marginTop:"20px"}}>
            <div style={{width:"250px",height:"250px",borderRadius:"0.25rem",backgroundColor:"#ddd"}}></div>
            <div style={{width:"250px",height:"250px",borderRadius:"0.25rem",backgroundColor:"#ddd"}}></div>
            <div style={{width:"250px",height:"250px",borderRadius:"0.25rem",backgroundColor:"#ddd"}}></div>
            <div style={{width:"250px",height:"250px",borderRadius:"0.25rem",backgroundColor:"#ddd"}}></div>
            <div style={{width:"250px",height:"250px",borderRadius:"0.25rem",backgroundColor:"#ddd"}}></div>
        </div>

        <div style={{display:'flex',justifyContent:"center",alignItems:"center", gap:"15px",marginTop:"20px"}}>
            <div style={{width:"55%",height:"650px",borderRadius:"0.2rem",backgroundColor:"#ddd"}}>
               
            </div>
            <div style={{width:"40%",height:"650px",borderRadius:"0.2rem",backgroundColor:"#ddd" }}>

            </div>
        </div>

        <div style={{width:"96%", height:"550px",backgroundColor: "#ddd", margin:"auto",marginTop:"20px"}}></div>
        <div style={{display:'flex',justifyContent:"center",alignItems:"center", gap:"15px",marginTop:"20px"}}>
            <div style={{width:"55%",height:"450px",borderRadius:"0.2rem",backgroundColor:"#ddd"}}>
               
            </div>
            <div style={{width:"40%",height:"450px",borderRadius:"0.2rem",backgroundColor:"#ddd" }}>

            </div>
        </div>
        <div style={{display:'flex',justifyContent:"center",alignItems:"center", gap:"15px",marginTop:"20px" ,marginBottom:"20px"}}>
            <div style={{width:"55%",height:"450px",borderRadius:"0.2rem",backgroundColor:"#ddd"}}>
               
            </div>
            <div style={{width:"40%",height:"450px",borderRadius:"0.2rem",backgroundColor:"#ddd" }}>

            </div>
        </div>
        
    </div>
  )
}

export default HeroesSkeleton