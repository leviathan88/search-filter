// context
import { useContext } from "react"
import { Context } from "../context/useContext"

export const Search = () => {
  const { change } = useContext(Context)

  return (
    <div className="search">
      <h1> User Data </h1>
      <input type="search"
        placeholder="Search..."
        onChange={change} />
    </div>
  )
}