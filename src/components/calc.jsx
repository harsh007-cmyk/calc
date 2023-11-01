import { useState } from "react";


// const Calc = () => {

//     const [selectNums, setSelectNums] = useState(3);    
//     const [numArr, setNumArr] = useState([]);
//     const  [opString,setOpstring]=useState('');
//     const [res,setRes]=useState([]);
    
//     const increaseNums = () => {
//         console.log('inc');
//         setSelectNums((e) => {
//             if (e === 5) {
//                 return e;
//             }
            

//             return e + 1;
//         })

//     }
//     const decreaseNums = () => {
//         setSelectNums((e) => {
//             if (e === 3) {
//                 return e;
//             }
//             return e - 1;
//         })
//     }

//     const change = () => {
//         const newArr = [];
//         setRes("")
//         console.log(Math.floor((Math.random() * 9999)));
//         for (let i = 0; i < selectNums; i++) {
//             newArr.push(Math.floor((Math.random() * 99999)))
//         }
//         console.log(newArr, "newAr");
//         let str='';
//         for(let i=0;i<selectNums-1;i++){
//             let rand= Math.random()<0.5 ? '+':'-';
//             console.log(newArr[i]);
//             str=str+String(newArr[i])+String(rand);
//         }
//         console.log(str,"stttt");
//         str+=newArr[newArr.length-1]
//         setOpstring(str);
//         setNumArr(newArr);

//     }

//     return (
//         <>
//             <div>
//                 Select Number
//                 <div>

//                 </div>
//                 <div style={{ userSelect: 'none' }}>
//                     <span style={{ cursor: 'pointer', height: '300px' }} onClick={increaseNums}>+</span>
//                     {selectNums}
//                     <span style={{ cursor: 'pointer', height: '300px' }} onClick={decreaseNums}>-</span>
//                 </div>
//                 <button onClick={change}>
//                     change
//                 </button>
//                 <div>
//                     {/* {numArr.join(' + ')} */}
//                     {opString}
//                     <div>
//                      <button onClick={()=>{ 
//                         setRes(eval(opString))

//                      }}>
//                      check
//                      </button>
//                      <div>
//                         {res}
//                      </div>

//                     </div>

                   
                    
//                 </div>
//             </div>



//         </>

//     )
// }

const Calc=()=>{
    const [first,setFirst]=useState();
    const [sec,setSec]=useState();
    const [value,setVale]=useState();
    const [check,setCheck]=useState(false);
   const generateRandomNumber = (a,b,c,d) => {
        console.log(a,c,d);
        const randomNum1 = Math.floor(Math.random() * (b - a + 1)) + a;
        setFirst(randomNum1)
        const randomNum2 = Math.floor(Math.random() * (d - c + 1)) + c;
        setSec(randomNum2)
      }
    const mult=(a,b,c,d)=>{
            generateRandomNumber(a,b,c,d)
    }
    const next=()=>{

    }
    return (
        <div>
               <div className="d-flex bg-demo">
            <button onClick={()=>{mult(1000,9999,10,99)}}>
                4 x 2
            </button>
            <button onClick={()=>{mult(1000,9999,100,999)}}>
                4 x 3
            </button>
            <button onClick={()=>{mult(1000,9999,1000,9999)}}>
                4 x 4
            </button>
            <button onClick={()=>{mult(100,999,100,999)}}>
                3 x 3
            </button>
        </div>
        <div className="mt-1rem ht-prim d-flex flex-center bg-demo">
           <div>{first}  {sec}</div> 
        </div>
        <div className="bg-white flex-center ht-prim">
            {value}
        </div>
        <div  onKeyUp={(e)=>{
            console.log(e.target.value);
            const reversed = e.target.value.split('').reverse().join('');
            setVale((reversed))

            // console.log(first*sec,"ans");

            // console.log(reversed,"rev");
            console.log(first*sec===Number(reversed));
            if(Number(reversed)===(first*sec)){
                console.log(reversed,"hello");
                
                // console.log("helllllo");
                    setCheck(true); 
            }
            console.log(e.key,"ennene");
        }} className=" inpBox">

            <input type="number" />
        </div>
        <div>
            {(check) && (value) ?  <div>true</div> : !check ? <div>false</div>: <></>}
        </div>
        
        </div>
     
    )
}

export default Calc;