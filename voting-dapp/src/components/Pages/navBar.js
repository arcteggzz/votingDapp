import React from "react"

export default function App() {
  return (
    <div>
      <div className="mx-auto flex items-center justify-between">
        <div className="text-black text-2xl">
          <a href="./">
            Zuri <span className="text-red-600">.</span> Blockgames
          </a>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex justify-around text-white items-center mx-2 lg:mx-3">
            <a href="" className="lg:mx-10 hover:text-red-500 mx-5 underline block">Admin</a>
            <a href="" className="lg:mx-10 hover:text-red-500 mx-5 underline block">Vote</a>
            <a href="" className="lg:mx-10 hover:text-red-500 mx-5 underline block">Result</a>
          </ul>
          <span
            style="font-size: 12px;"
            id="walletAddressButton"
            className="font-sans text-sm font md:mx-3 py-2 px-5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full cursor-pointer"
          >
            connect to metamask
          </span>
        </div>
      </div>
    </div>
  )
}