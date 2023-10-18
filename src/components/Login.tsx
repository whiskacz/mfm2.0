import { useState } from "react"

export const Login = () => {

  const[flag, setFlag] = useState<boolean>(false)

  return (
    <main className='loginWrapper'>
      <button onClick={(()=>setFlag(!flag))}>flaga</button>
      <>
        <div className={flag ? 'signInWrapper' : 'signInWrapperShort'}> 
        {flag ? 
        <>
          

        </>
        : 
        null}
        </div>
        <div className={flag ? 'signUpWrapperShort' : 'signUpWrapper'}>
        </div> 
      </>
    </main>
  )
}
