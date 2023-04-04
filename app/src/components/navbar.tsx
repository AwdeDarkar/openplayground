import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Sun, Moon } from "lucide-react"

import { GlobalContext } from "../app"

export default function NavBar({ tab, children }: any) {
  const { globalContext, globalContext: { darkMode }, setGlobalContext } = useContext(GlobalContext)
  console.log("globalContext", globalContext)
  console.log("setGlobalContext", setGlobalContext)

  const menu = ["playground", "compare", "settings"].map((menuName, index) => (
    <div key = {menuName} className="align-middle mt-1 flex items-center">
      <Link
        to={`/${index > 0 ? menuName: ''}`}
        className={
          tab === menuName
          ? "cursor-default"
          : "cursor-pointer"
        }>
        <p
          className={
            tab === menuName
            ? "text-xl font-semibold"
            : "text-xl font-medium text-gray-500 hover:text-gray-900"
          }
        >
          {menuName.charAt(0).toUpperCase() + menuName.slice(1)}
        </p>
      </Link>
    </div>
  ))

  return (
    <div className="flex flex-col font-display mb-3 border dark:border-slate-800">
      <div className="flex inline-block mx-5 my-4 gap-x-4 flex-wrap">
        {menu}
        
        <div className ="flex-1" />

        <div
          className = "ml-4 mt-1 cursor-pointer flex justify-end items-center self-flex-end"
          onClick={() => {
            setGlobalContext({ darkMode: !darkMode });
          }}
        >
          {darkMode ? (
            <Sun className="h-[20px]" />
          ) : (
            <Moon className="h-[20px]" />
          )}
        </div>

        <div
          className = "ml-4 mt-1 cursor-pointer flex justify-end items-center self-flex-end"
          onClick={() => {
            window.open("https://discord.gg/J8sFfUK2N2", "_blank")
          }}
          >
          <img
            className = "h-[20px]"
            src= "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
          />
        </div>

        <div
          className = "ml-4 mt-1 cursor-pointer flex justify-end items-center self-flex-end"
          onClick={() => {
            window.open("https://github.com/nat/openplayground", "_blank")
          }}
        >
            <img
              className = "h-[35px]"
              src= "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            />
        </div>
        {children}
      </div>
    </div>
  )
}