import React, { useState } from 'react'
import { Select } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const sty= {height:"23px",width:"23px",marginLeft:"17px"}
const sty1={fontSize:"23px",textAlign:"left",paddingLeft:"15px",paddingTop:"20px"}


const Sidebar = () => {
    const [status1,setStatus1]=useState(false)
    const [status2,setStatus2]=useState(false)   
const [status3,setStatus3]=useState(false)
const [status4,setStatus4]=useState(false)
const [status5,setStatus5]=useState(false)
const [status6,setStatus6]=useState(false)
const [status7,setStatus7]=useState(false)
const [status8,setStatus8]=useState(false)
const [status9,setStatus9]=useState(false)

     
    const handelClick1=()=>{
setStatus1(!status1)
}

const handelClick2=()=>{
    setStatus2(!status2)
        }


const handelClick3=()=>{
setStatus3(!status3)
                }

const handelClick4=()=>{
setStatus4(!status4)
               }

const handelClick5=()=>{
setStatus5(!status5)
     }

const handelClick6=()=>{
setStatus6(!status6)
}

const handelClick7=()=>{
setStatus7(!status7)
}

const handelClick8=()=>{
setStatus8(!status8)
}

const handelClick9=()=>{
setStatus9(!status9)
 }

    
  return (
    <div> 
        <div><h2 style={{fontSize:"33px",fontFamily:"fantasy",textAlign:"left",paddingLeft:"15px",paddingTop:"20px"}}>Filters</h2></div>
<hr />
       <div style={{alignItems:"center"}}>
        <h2 style={sty1}>CATEGORIES</h2>
        
{/* <h2 style={{fontSize:"20px",textAlign:"left",paddingLeft:"15px",paddingTop:"20px"}}>BottemWear</h2> */}

 <Select placeholder='Bottem Wears' w={{  sm:"90%", md: "75%", lg: "70%" ,xl:"70%"}} fontSize="20px" bg="lightgray" ml="10px">
  <option value='option1'>Jen's Wear</option>
  <option value='option2'>Canvas</option>
  <option value='option3'>Denin</option>
</Select>
<br />
<br />
<hr/>
<h1 style={{fontSize:"26px",textAlign:"left",paddingLeft:"15px",paddingTop:"20px"}}>Gender</h1>
<br />
<div style={{textAlign:"left"}}>
<hr />
<Link to="#" style={sty1}>Mens</Link>
<hr />
<Link to="#" style={sty1}>Womens</Link>
<hr />
<Link to="#" style={sty1}>Kids</Link>
<hr />
</div>
<br />
<div style={{alignItems:"center",display:"flex"}}  >
<input type="checkbox" style={{height:"23px",width:"23px",marginLeft:"20px"}}/> 
   <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" width="30%" style={{marginLeft:"25px"}}/>
</div>
<br />
<hr />

<div style={{textAlign:"left"}}>
<h1 style={sty1} onClick={handelClick1}> <Link to="#">DISCOUNT {status1?"⬆":"⬇"}</Link> </h1>

{status1? <div>
    <h1> hhhhhh</h1>
<input type="checkbox" style={sty}/>
<label style={sty1}>20% off</label> <br/> <br />

<input type="checkbox" style={sty}/>
<label style={sty1}>30% off</label> <br /><br />

<input type="checkbox" style={sty}/>
<label style={sty1}>40% off</label><br /><br />

<input type="checkbox" style={sty}/>
<label style={sty1}>50% off</label><br /><br />

<input type="checkbox" style={sty}/>
<label style={sty1}>60% off</label><br /><br />

</div>:""}

</div>
{/* <br /> */}
<hr />



<div style={{textAlign:"left"}}>
<h1 style={{fontSize:"23px",textAlign:"left",paddingLeft:"15px",paddingTop:"20px",paddingBottom:"20px"}} onClick={handelClick2}> <Link to="#">BRAND {status2?"⬆":"⬇"}</Link> </h1>

{status2? <div>
    
<input type="checkbox" style={sty}/>
<label style={sty1}>ADIDAS</label> <br/> <br />

<input type="checkbox" style={sty}/>
<label style={sty1}>
Allen Solly</label> <br /><br />

<input type="checkbox" style={sty}/>
<label style={sty1}>CUTIEKINS</label><br /><br />

<input type="checkbox" style={sty}/>
<label style={sty1}>Dressberry</label><br /><br />

<input type="checkbox" style={sty}/>
<label style={sty1}>FILA</label><br /><br />

</div>:""}

</div>
{/* <br /> */}
<hr />


<div style={{textAlign:"left"}}>
<h1 style={{fontSize:"23px",textAlign:"left",paddingLeft:"15px",paddingTop:"20px",paddingBottom:"20px"}} onClick={handelClick3}> <Link to="#">CUSTOMER RATINGS {status3?"⬆":"⬇"}</Link> </h1>

{status3? <div>
    
<input type="checkbox" style={sty}/>
<label style={sty1}>4★ & above</label> <br/> <br />

<input type="checkbox" style={sty}/>
<label style={sty1}>3★ & above</label> <br /><br />

</div>:""}

</div>
<hr/>

<div style={{textAlign:"left"}}>
<h1 style={{fontSize:"23px",textAlign:"left",paddingLeft:"15px",paddingTop:"20px",paddingBottom:"20px"}} onClick={handelClick4}> <Link to="#">SIZE {status4?"⬆":"⬇"}</Link> </h1>

{status4? <div>
    
<input type="checkbox" style={sty}/>
<label style={sty1}>Sm</label> <br/> <br />

<input type="checkbox" style={sty}/>
<label style={sty1}>Large</label> <br /><br />

<input type="checkbox" style={sty}/>
<label style={sty1}>ExtraLarge</label><br /><br />

<input type="checkbox" style={sty}/>
<label style={sty1}>X</label><br /><br />

<input type="checkbox" style={sty}/>
<label style={sty1}>XL</label><br /><br />

</div>:""}

</div>
<hr />


{/* ---------------------price ------------------------------*/}
       <div style={{alignItems:"center"}}>
        <h2 style={sty1}>PRICE</h2>
        
{/* <h2 style={{fontSize:"20px",textAlign:"left",paddingLeft:"15px",paddingTop:"20px"}}>BottemWear</h2> */}

 <Select  w={{  sm:"90%", md: "75%", lg: "70%" ,xl:"70%"}} fontSize="20px" bg="lightgray" ml="10px">
 <option value='option2'>Filter (Price)</option>
  <option value='option1'>Low to High</option>
  <option value='option2'>High to Low</option>
 
</Select>
<br />
<br />
<hr/>
</div> 
{/* 
========================colors------------------- */}

<div style={{textAlign:"left"}}>
<h1 style={{fontSize:"23px",textAlign:"left",paddingLeft:"15px",paddingTop:"20px",paddingBottom:"20px"}} onClick={handelClick5}> <Link to="#">COLORS {status5?"⬆":"⬇"}</Link> </h1>

{status5? <div>
    
<input type="checkbox" style={sty}/>
<label style={sty1}>Black</label> <br/> <br />

<input type="checkbox" style={sty}/>
<label style={sty1}>White</label> <br /><br />

<input type="checkbox" style={sty}/>
<label style={sty1}>Pink</label><br /><br />

<input type="checkbox" style={sty}/>
<label style={sty1}>Blue</label><br /><br />

<input type="checkbox" style={sty}/>
<label style={sty1}>Grey</label><br /><br />

</div>:""}

</div>
<hr />



{/* -------------------------------FIT-------------------- */}

<div style={{textAlign:"left"}}>
<h1 style={{fontSize:"23px",textAlign:"left",paddingLeft:"15px",paddingTop:"20px",paddingBottom:"20px"}} onClick={handelClick6}> <Link to="#">FIT {status6?"⬆":"⬇"}</Link> </h1>

{status6? <div>
    
<input type="checkbox" style={sty}/>
<label style={sty1}>
Regular Fit</label> <br/> <br />

<input type="checkbox" style={sty}/>
<label style={sty1}>Wide leg</label> <br /><br />

<input type="checkbox" style={sty}/>
<label style={sty1}>Fit</label><br /><br />

<input type="checkbox" style={sty}/>
<label style={sty1}>Super Skinny</label><br /><br />

<input type="checkbox" style={sty}/>
<label style={sty1}>Boyfriend</label><br /><br />

</div>:""}

</div>
<hr />

{/* 
--------------------offers================ */}

<div style={{textAlign:"left"}}>
<h1 style={{fontSize:"23px",textAlign:"left",paddingLeft:"15px",paddingTop:"20px",paddingBottom:"20px"}} onClick={handelClick7}> <Link to="#">OFFERS{status7?"⬆":"⬇"}</Link> </h1>

{status7? <div>
    
<input type="checkbox" style={sty}/>
<label style={sty1}>Buy More, Save More</label> <br/> <br />

<input type="checkbox" style={sty}/>
<label style={sty1}>Special Price</label> <br /><br />



</div>:""}

</div>
<hr />
{/* 
-------------------------FABRIC--------------- */}
{/* -------------------------- */}


<div style={{textAlign:"left"}}>
<h1 style={{fontSize:"23px",textAlign:"left",paddingLeft:"15px",paddingTop:"20px",paddingBottom:"20px"}} onClick={handelClick8}> <Link to="#">SIZE {status8?"⬆":"⬇"}</Link> </h1>

{status8? <div>
    
<input type="checkbox" style={sty}/>
<label style={sty1}>Chiffon Blend</label> <br/> <br />

<input type="checkbox" style={sty}/>
<label style={sty1}>Cotton Capri</label> <br /><br />

<input type="checkbox" style={sty}/>
<label style={sty1}>Cotton Crepe Blend</label><br /><br />

<input type="checkbox" style={sty}/>
<label style={sty1}>Cotton Fleece Blend</label><br /><br />

<input type="checkbox" style={sty}/>
<label style={sty1}>Cotton Satin Blend</label><br /><br />

</div>:""}

</div>
<hr />

{/* 
-----------------------------AVAILABILITY--------------- */}


<div style={{textAlign:"left"}}>
<h1 style={{fontSize:"23px",textAlign:"left",paddingLeft:"15px",paddingTop:"20px",paddingBottom:"20px"}} onClick={handelClick9}> <Link to="#">AVAILABILITY {status9?"⬆":"⬇"}</Link> </h1>

{status9? <div>
    
<input type="checkbox" style={sty}/>
<label style={sty1}>Include Out of Stock</label> <br/> <br />

</div>:""}

</div>
<hr />


       </div> 
    </div>
  )
}

export default Sidebar







