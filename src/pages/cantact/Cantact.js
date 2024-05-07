import React from 'react'
import "./cantact.scss"

const Cantact = () => {
  return (
    <div id='cantact'>
        <div className="container cantact">
            <div className="cantact__left">
                <h3 className="cantact__title">
                    Get in touch
                </h3>
                <p>contact@e-comm.ng</p>
                <p>+234 4556 6665 34</p>
                <p>20 Prince Hakerem Lekki Phase 1, Lagos.</p>
            </div>
            <div className="cantact__right">
                <label for="">Fullname</label>
                <input type="text" placeholder='James Doe' />
                <label for="">Email</label>
                <input type="text" placeholder="jamesdoe@gmail.com"/>
                <label for="">Message</label>
                <textarea rows="10" name="" id="" placeholder="Type your message"></textarea>
            </div>
        </div>
    </div>
  )
}

export default Cantact