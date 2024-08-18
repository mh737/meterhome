import "./HomeStyles.css";
import Image from "next/image";
import Script from 'next/script'

function HomeP() {
  return (
    <>
  
       <Script src="/nav.js">
      
       
         </Script>
  
      <div className="home">
        <div className="meterfore">
          <h1 className="meter">METER</h1>
          
        </div>
        <div className="actionhome flex align-middle flex-wrap">
           <h2 className="ml-auto mr-auto mt-0 mb-0 text-4xl">Ultra-wide Band Anchor</h2>
           <div className="flex justify-center align-middle">
          <a href="" className="m-2 p-2 border-2 bg-black" >How to Use</a>
          <a href="" className="m-2 p-3 bg-blue-800">Select Plan</a>
           </div>
        </div>
       
          <h4>scroll</h4>
        </div>
          <div className="container w-screen">
            <div className="detail w-screen ">
              <div className="detailchild  flex">
                <h1>Ultrawide</h1>
              </div>
              <div className="detailchild flex">
                <h1>Ultrawide</h1>
              </div>
              <div className=" detailchild flex">
                <h1>Ultrawide</h1>
           
            </div>
          </div>
        </div>
        <div className="scrollspec">
        <Image
      priority
      src="/1.png"
      width={500}
      height={50}
      alt="Follow us on Twitter"
    /><Image
    priority
    src="/1.png"
    width={500}
    height={50}
    alt="Follow us on Twitter"
  />
    <Image
      priority
      src="/1.png"
      width={500}
      height={50}
      alt="Follow us on Twitter"
    />
        </div>
        <p className="footer">&copy; METER Limited 2024</p>
    </>
  );
}

export default HomeP;
