import { BsWhatsapp}  from "react-icons/bs"
import { Link } from "react-router-dom"

function InitialNav() {
  return (
    <>
        <nav className="h-[30vh] z-[9] bg-[#00a884] w-full absolute flex justify-center">
          <div className="w-3/5 h-[13vh] flex items-center"><Link to="/" className="w-full flex items-center gap-3"><BsWhatsapp className="text-white bg-green-400 shadow rounded rounded-t-full rounded-r-full w-[39px] h-[39px] hover:animate-spin" /> <span className="text-white">WHATSAPP CLONE BY MOISES-PH</span></Link></div>
        </nav>
    </> 
  )
}

export default InitialNav