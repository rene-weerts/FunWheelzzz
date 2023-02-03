import React, {useEffect} from 'react';

const MemoryLeak = () => {

    const interval= setInterval(()=>{},1000)
    useEffect(()=>{
        return function cleanup(){
            clearInterval(interval)
        }
    },[])

    return (<>
            <div>
                <h1>There seems to be a memory leak.....</h1>

            </div>
        </>

    );
};
export default MemoryLeak;