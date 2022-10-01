import "../FaqAccordion/FaqAccordion.css"
import {useState} from "react"
import FaqAccordionData from "../FaqAccordion/FaqAccordionData"

function App() {

  // const [loading,setLoading] = useState(false);
  const [showAns,setShowAns] = useState(false);
  const [changeIcon,setChangeIcon] = useState(true);

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
              {showAns === val.ques && <p>{val.ans}</p>}
    
            
            </div>
            </div>
            )
          })
        }

      </div>
    </div>    
    </div>
    );
}

export default App;
