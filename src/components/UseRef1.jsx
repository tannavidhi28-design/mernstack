import React, { useEffect, useRef, useState } from 'react'

export const UseRef1 = () => {

    const [msg, setmsg] = useState(["HI", "Hello", "Bye"])
    const lastMsgRef = useRef()

    const addmsg = () => {
        setmsg([...msg, "Good Morning"])
    }

    useEffect(() => {
        lastMsgRef.current.focus()
    }, [msg])

    return (
        <div style={{ textAlign: "center" }}>
            <h1>UseRef1</h1>

            {
                msg.map((m, index) => {
                    return (
                        <h3
                            key={index}
                            ref={index === msg.length - 1 ? lastMsgRef : null}
                            style={{color: index === msg.length - 1 ? "red" : "black"}}>{m}
                        </h3>
                    )
                })
            }
            <button onClick={addmsg}>ADD MSG</button>
        </div>
    )
}