import React from 'react'

function ProductByCatagorySkeleton() {
  return (
    <div style={{marginTop:"95px", display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:78}}>
        {/* 1st div */}
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:25}}>
            <div style={{width:"157px",height:"157px",backgroundColor:"#ddd"}}>

            </div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:8}}>
                <div style={{width:"658px",height:"25px",backgroundColor:"#ddd",}}>
                            
                </div>
                <div style={{width:"458px",height:"25px",backgroundColor:"#ddd",}}>
                    
                </div>
            </div>
        </div>
        {/* 2nd div */}
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:25}}>
            <div style={{width:"157px",height:"157px",backgroundColor:"#ddd"}}>

            </div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:8}}>
                <div style={{width:"456px",height:"25px",backgroundColor:"#ddd",}}>
                            
                </div>
                <div style={{width:"658px",height:"25px",backgroundColor:"#ddd",}}>
                    
                </div>
            </div>
        </div>

        {/* 3rd div */}
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:25}}>
            <div style={{width:"157px",height:"157px",backgroundColor:"#ddd"}}>

            </div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:8}}>
                <div style={{width:"658px",height:"25px",backgroundColor:"#ddd",}}>
                            
                </div>
                <div style={{width:"458px",height:"25px",backgroundColor:"#ddd",}}>
                    
                </div>
            </div>
        </div>
        {/* 4th div */}
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:25}}>
            <div style={{width:"157px",height:"157px",backgroundColor:"#ddd"}}>

            </div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:8}}>
                <div style={{width:"658px",height:"25px",backgroundColor:"#ddd",}}>
                            
                </div>
                <div style={{width:"456px",height:"25px",backgroundColor:"#ddd",}}>
                    
                </div>
            </div>
        </div>
        {/* 5th div */}
        <div style={{marginBottom:"55px",display:"flex",justifyContent:"center",alignItems:"center",gap:25}}>
            <div style={{width:"157px",height:"157px",backgroundColor:"#ddd"}}>

            </div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:10}}>
                <div style={{width:"658px",height:"25px",backgroundColor:"#ddd",}}>      
                </div>

                <div style={{width:"458px",height:"25px",backgroundColor:"#ddd",}}>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ProductByCatagorySkeleton;