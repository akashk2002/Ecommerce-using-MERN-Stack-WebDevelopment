import IdleTimer from 'react-idle-timer'
import React,{ useState, useRef } from 'react'
import Modal from 'react-modal'



Modal.setAppElement('#root')
function IdleTimerContainer(){
    const [isLoggedIn, setisLoggIn] = useState(true)
    const [modalIsOpen, setModal] = useState(false)
    const idleTimerRef = useRef(null)
    
    const onIdle = () =>{
        console.log('User is idle')
        setModal(true)

    }
    const stayActive =() =>{
        setModal(true)
        
        console.log('User is active')
    }
    const signout = () =>{
        setModal(false)
        setisLoggIn(false)
        console.log('User has logged out')
    }

    return(
        <div>
            {
                
            }
            <Modal isOpen={modalIsOpen}>
                <h2>You've been idle for a while!</h2>
                
                <div>
                    <button className='Extend' onClick={signout}> Extend Session</button>
                    
                </div>
            </Modal>
            <IdleTimer ref={idleTimerRef} timeout={60 * 1000} onIdle={onIdle}>
                

            </IdleTimer>

        </div>
    )
}
export default IdleTimerContainer