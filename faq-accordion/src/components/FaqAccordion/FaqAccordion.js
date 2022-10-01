import "../FaqAccordion/FaqAccordion.css"
import {useState} from "react"
import FaqAccordionData from "../FaqAccordion/FaqAccordionData"

function App() {

  // const [loading,setLoading] = useState(false);
  const [showAns,setShowAns] = useState(false);
  const [changeIcon,setChangeIcon] = useState(true);
  const [knowMoreBox,setKnowMoreBox] = useState();
  const [backgroundImg,setBackgroundImg] = useState(false);

  function showAnsBox(e){
    console.log(showAns)
    if(showAns){
       return (
       setShowAns(false) ,
       setChangeIcon(!changeIcon)
      ) 
    }
     setShowAns(e)
     setChangeIcon(!changeIcon)
  }

  function showKnowMoreBox(e){
    setKnowMoreBox(!knowMoreBox)
  if(knowMoreBox){
    return (setKnowMoreBox(false),setBackgroundImg(false))
  }
  setKnowMoreBox(e)
  setBackgroundImg(true)
  }

  function closeAll(){
    
    setKnowMoreBox(!knowMoreBox)  
    setBackgroundImg(!backgroundImg)

  }
  
  return (
    <div className='main-faq-container'>
    <div className='faq-container'>
      <div className=''>
      <h2>Faq</h2>

        {
          FaqAccordionData.map((val)=>{

            return(
              <div className='faq-all-div-container'>
              <div className='faq-div'>
              <div className='ques-button-container' onClick={()=>{showAnsBox(val.ques)}}>
              <p>{val.ques}</p>
              <button onClick={()=>{showAnsBox(val.ques)}}>{changeIcon ?"+":"-"}</button>
              </div>
              {showAns === val.ques && <p>{val.ans}<a href="#" onClick={()=>{showKnowMoreBox(val.ques)}}>Know More</a></p>}

              {knowMoreBox === val.ques && 
              <div className="know-more-box-container">
              <div className="know-more-box">
                <div className="cross-sign-div">
                <p onClick={closeAll}>❌</p>
                </div>
                <h2>Know More</h2>
                <p className="know-more-desc">{val.desc}</p>
                <button className="know-more-button">Visit Help</button>
                </div>
                </div>
              }
            </div>
            
            </div>
            
            )
          })
        }
              {backgroundImg && <div className="bg-div"></div>}

      </div>
    </div>    
    </div>
    );
}

export default App;
