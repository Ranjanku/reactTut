import React, { useEffect, useState } from "react";

const MyComponent = () => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(10)

    useEffect(() => {
        console.log("My Component is mounting")
    }, [])

    useEffect(() => {
        console.log("count1 is updated", count, `count2 ${count2}`)
    }, [count, count2])

    return (
        <div>
            <p>count : {count}</p>
            <p>count2 : {count2}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount2(count2 + 1)}>Increment2</button>
        </div>
    )
}

export default MyComponent;