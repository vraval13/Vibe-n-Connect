import MessageContainer from "@/app/components/messages/MessageContainer.js";
import SideBar from "@/app/components/sideBar/SideBar.js";
// import SideBar from "./components/sideBar/SideBar.js";
import '@/app/globals.css';

function Home() {
  return (
    <>
      <div
        className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden'
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          borderRadius: '12px',
          // backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent white for blur effect
          backdropFilter: 'blur(15px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          backgroundColor: 'white', // Cool blue gradient
          padding: '20px',
          margin: 'auto',
          // border: '2px solid black',
          borderRadius: '10px',
          boxShadow: 'blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px;',
        }}
      >
        <SideBar />
        <MessageContainer />
      </div>
    </>
  );
}
export default Home;
