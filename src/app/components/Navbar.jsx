import "./NavbarStyles.css";
import Image from 'next/image';
// import twitterIcon from "../../public/meter.jpg";

function Navbar() {
    return(
<>
<div id="navbar">
<div className="nav">
            <div className="navleft">
            <Image
      priority
      src="/meter.jpg"
      width={50}
      height={50}
      alt="Follow us on Twitter"
    />
                <pre>METER</pre>
            </div>
            <div className="navcenter">
                <a href="/plan" className="">Plan</a>
                <a href="tutorial">tutorial</a>
                <a href="/support">Supported device</a>
                <a href="contact">Contact</a>
            </div>
            <div className="navright">
                <a href="/chi">CH</a>
                <a href="/eng">EN</a>
            </div>
        </div>
</div>

</>
    );
}

export default Navbar