import React from "react";

function Card({username, discription = "not Known"}){
    
    return(
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black m-10">
        <img
          src="https://images.unsplash.com/photo-1741768019347-7fd7730dc9ec?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">this is user</h2>
        </div>
        <p className="text-gray-300">
          {discription}
        </p>
      </div>
    )
}

export default Card