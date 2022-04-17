import type { NextPage } from 'next'
import GoogleMap from '../src/shared/map/Map';
import Sidebar from '../src/shared/sidebar/SideBar';
import TopBar from '../src/shared/topbar/TopBar';

const Home: NextPage = () => {

  return (
    <div className="flex flex-col w-screen h-screen">
      <TopBar />
      <div className="flex w-full h-full">
        <Sidebar />
        <main className="h-full w-full">
          <GoogleMap />
        </main>
      </div>
    </div>
  )
}

export default Home
