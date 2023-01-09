import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='flex flex-auto'></div>
      <footer className='flex bg-orange-400 h-12 justify-center items-center'>
        <div className='footer-container'>
          {/* <div className='footer-icons'>
            <a href="https://github.com/aryanchourey4" target={'_blank'}><FontAwesomeIcon className='icons' icon={brands('github')} /></a>
            <a href="https://www.linkedin.com/in/aryan-chourey/" target={'_blank'}><FontAwesomeIcon className='icons' icon={brands('linkedin')} /></a>
            <a href="mailto: aryanchourey4@gmail.com"><FontAwesomeIcon className='icons' icon={solid('envelope')} /></a>
          </div> */}
          <div className='footer-text'>
            Made with &lt;3 by Aryan Chourey.
          </div>
        </div>
      </footer>
    </>
  )
}
