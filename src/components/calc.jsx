import { useState } from "react";


const Calc = () => {

    const [selectNums, setSelectNums] = useState(3);    
    const [numArr, setNumArr] = useState([]);
    const  [opString,setOpstring]=useState('');
    const [res,setRes]=useState([]);
    
    const increaseNums = () => {
        console.log('inc');
        setSelectNums((e) => {
            if (e === 5) {
                return e;
            }
            

            return e + 1;
        })

    }
    const decreaseNums = () => {
        setSelectNums((e) => {
            if (e === 3) {
                return e;
            }
            return e - 1;
        })
    }

    const change = () => {
        const newArr = [];
        setRes("")
        console.log(Math.floor((Math.random() * 9999)));
        for (let i = 0; i < selectNums; i++) {
            newArr.push(Math.floor((Math.random() * 99999)))
        }
        console.log(newArr, "newAr");
        let str='';
        for(let i=0;i<selectNums-1;i++){
            let rand= Math.random()<0.5 ? '+':'-';
            console.log(newArr[i]);
            str=str+String(newArr[i])+String(rand);
        }
        console.log(str,"stttt");
        str+=newArr[newArr.length-1]
        setOpstring(str);
        setNumArr(newArr);

    }

    return (
        <>
            <div>
                Select Number
                <div>

                </div>
                <div style={{ userSelect: 'none' }}>
                    <span style={{ cursor: 'pointer', height: '300px' }} onClick={increaseNums}>+</span>
                    {selectNums}
                    <span style={{ cursor: 'pointer', height: '300px' }} onClick={decreaseNums}>-</span>
                </div>
                <button onClick={change}>
                    change
                </button>
                <div>
                    {/* {numArr.join(' + ')} */}
                    {opString}
                    <div>
                     <button onClick={()=>{ 
                        setRes(eval(opString))

                     }}>
                     check
                     </button>
                     <div>
                        {res}
                     </div>

                    </div>

                   
                    
                </div>
            </div>



        </>

    )
}

export default Calc;