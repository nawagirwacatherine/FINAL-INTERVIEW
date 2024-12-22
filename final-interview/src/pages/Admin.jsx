
import AdminBar from "./AdminBar.jsx"
import SideBar from "./SideBar.jsx"
import Icon from "./Icon.jsx"
import Content from "./Content.jsx"

function Admin () {

  return (
    <>
     < SideBar />
     <div className="admin-icon">
     < Icon />
  < AdminBar />
  < Content />
 </div>
 </>
  )
}

export default Admin;