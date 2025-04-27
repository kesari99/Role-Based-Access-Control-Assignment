import { LogOut, SearchSlash, User, LucideCircleArrowOutDownLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { AuthContext } from "@/context/auth-context"
import { useContext, useEffect, useState } from "react"
import CreateList from "@/components/admin-view/CreateList"
import { getAllBlogService } from "@/services"

const Listings = () => {
  const { resetCredentials } = useContext(AuthContext)
  const [activeTab, setActiveTab] = useState('')
  const [allBlogsData, setAllBlogsData] = useState([])

  const getAllBlogs = async () => {
    const data = await getAllBlogService()
    if (data.success) {
      console.log(data.data)
      setAllBlogsData(data.data)
    }
  }

  useEffect(() => {
    getAllBlogs()
  }, [])

  const menuItems = [
    {
      icon: LucideCircleArrowOutDownLeft,
      label: 'Create List',
      value: 'create-list',
      component: <CreateList listOfBlogs={allBlogsData} refreshBlogs={getAllBlogs} />
    },
   
    {
      icon: LogOut,
      label: 'Logout',
      value: 'logout',
      component: null
    }
  ]

  const handleLogout = () => {
    resetCredentials()
    sessionStorage.clear();
  }

  return (
    <div className='flex h-full min-h-screen bg-gray-50'>
      <aside className="w-64 p-5 bg-white">
        <h2 className="font-extrabold text-3xl mb-5">Dash Board</h2>
        <nav>
          {menuItems.map(eachItem => (
            <Button
              key={eachItem.value}
              className='w-full mb-2 justify-start'
              variant={activeTab === eachItem.value ? "secondary" : "ghost"}
              onClick={
                eachItem.value === 'logout' ? handleLogout : () => setActiveTab(eachItem.value)
              }
            >
              <eachItem.icon />
              <span>{eachItem.label}</span>
            </Button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-2xl font-extrabold">Dashboard</h1>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
        >
          {menuItems.map((menuItem) => (
            <TabsContent key={menuItem.value} value={menuItem.value}>
              {menuItem.component !== null ? menuItem.component : null}
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  )
}

export default Listings
