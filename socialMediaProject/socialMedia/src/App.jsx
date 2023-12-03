
import './App.css'
import Header from './components/mediaHeader'
import Footer from './components/mediaFooter'
import CreatePost from './components/CreatePost'
import SideBar from './components/MediaSideBar'
import PostList from './components/PostList'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import PostListProvider from './store/post-list-store'
function App() {
   const [selectedTap, SetSelectedTap] = useState('Home')
 

  return (
    <>
    <PostListProvider>

    <div className="app-container">
    <SideBar selectedTap ={selectedTap} SetSelectedTap= {SetSelectedTap}></SideBar>
    <div className="content">
    <Header></Header>
    <Outlet/>
    <Footer></Footer>
    </div>
    </div>
    </PostListProvider>
    </>
  )
}

export default App;
