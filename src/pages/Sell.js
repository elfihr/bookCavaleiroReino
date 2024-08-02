import React from 'react'
import { TotalSell } from '../helper/helper'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import '../style/Sell.css'

const Sell = () => {
    return (
        <section className='sell'>
        <h3 className='title'>&#x268A;&#x26AC; Números &#x26AC;&#x268A;</h3>
            <div className='sell_wrapper'>
                {TotalSell.map((item, index) => {
                    return (
                        <div key={index} className='sell_container'>
                            <i className={item.ico}></i>
                            <CountUp end={item.end} redraw={true}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            <p>{item.label}</p>
                        </div>


                    )
                })}
            </div>
        </section>
    )
}

export default Sell