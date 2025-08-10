import React, {useEffect, useState} from "react";

const Timer = () => {

    const [time, setTime] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => setTime(time + 1), 1000);
        console.log("adding interval")

        return  function() {
            clearInterval(timer)
            console.log("removing interval")
        }
    }, [time])

    return (
        <div>
            <h1>StopWatch</h1>
            <p>Current time is : {time}</p>
        </div>
    )
}

export default Timer
