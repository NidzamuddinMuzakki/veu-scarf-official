import React from "react";
import "./Header.css"
const Header = ()=>{
    return(
        <div className="HeaderSticky" style={{position:'sticky',zIndex:100,top:0,width:'100%', background:'rgba(222, 173, 174,1)'}}>

            <div className="TitleHeader" style={{fontWeight:'500',fontSize:'35px',fontFamily:'Nunito',letterSpacing:4,color:'white',width:'100vw', display:'flex', justifyContent:'center', alignItems:'center'}}>
                Veu Scarf Official
            </div>
            <div className="MenuParent" style={{letterSpacing:3,margin:'auto',width:'82%',marginTop:'3px',fontWeight:600,fontSize:'12px',color:'white',fontFamily:'Nunito',justifyContent:'space-around'}}>
                <div className="Menu"> BEST SELLER
                    <div className="MenuBorder"></div>
                </div>
                <div className="Menu">HIJAB
                    <div className="MenuBorder"></div>
                </div>
                <div className="Menu">SYARI
                    <div className="MenuBorder"></div>
                </div>
                <div className="Menu">OUTFIT
                    <div className="MenuBorder"></div>
                </div>
                <div className="Menu">COLLABORATION
                <div className="MenuBorder"></div>
                </div>
                <div className="Menu">LOOKBOOK
                <div className="MenuBorder"></div>
                </div>
                <div className="Menu">DIRECT SALE
                <div className="MenuBorder"></div>
                </div>




            </div>
        </div>
    )
}

export default Header