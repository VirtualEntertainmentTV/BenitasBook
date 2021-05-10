import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/kOxV5aCYUAE.png"
          title="COVID-19 Info Centre"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
          title="Friends"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
          title="Groups"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"
          title="Vidoes"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/DHBHg9MEeSC.png"
          title="Ads"
        />
        <SidebarRow
          url="https://i.ibb.co/PYLyths/VEM-trans.png"
          title="Virtual Entertainment Music"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/Doj4fJpfxHx.png"
          title="Business Suite"
        />
        <SidebarRow
          url="https://i.ibb.co/YRPd5c6/Soo-Kray-Kray-trans.png"
          title="Soo Kray Kray"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png"
          title="Events"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/SWt1APlIN82.png"
          title="Films"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/MN5ZSGIfEZ3.png"
          title="Friend Lists"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png"
          title="Fundraisers"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png"
          title="Games"
        />
        <SidebarRow
          url="https://i.ibb.co/HK1DnSW/G4A.png"
          title="Games4Autism"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/DO-SN-shaZL.png"
          title="Jobs"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/Nl9CPY6q_n-.png"
          title="Live videos"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png"
          title="Memories"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png"
          title="Most recent"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/NYOGcd-z-qs.png"
          title="Offers"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png"
          title="Pages"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/8OasGoQgQgF.png"
          title="Recent ad activity"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png"
          title="Saved"
        />
        <SidebarRow
          url="https://i.ibb.co/k2tKqHK/VIM.png"
          title="VET Instant Messenging"
        />
        <SidebarRow
          url="https://i.ibb.co/HhggYFQ/VET-Shop2-trans.png"
          title="VET Shopping"
        />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/bo0Zt72NIra.png"
          title="Weather"
        />
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottom--title">
          <h3>Your shortcuts</h3>
        </div>
        <SidebarRow
          src="https://wafid.co/wp-content/uploads/2020/02/Language-Learning-Tips-and-Tricks.jpg"
          title="Tips And Tricks"
        />
        <div className="sidebar__bottom--content">
          <SidebarRow
            url="https://i.ibb.co/djw07xd/2edf23e2609199d1c0808a0d19ded72c.png"
            title="Out Of The Box"
          />
          <SidebarRow
            url="https://media.apoplife.nl/nl/2020/04/Prince-And-The-Revolution-Around-The-World-In-A-Day-nummer.jpg"
            title="Around The World"
          />
          <SidebarRow
            url="https://lh3.googleusercontent.com/proxy/uO8tv60mHxav_JGNhCq9pK_AMgFUfNG6LIAduyfSwY_Oy8KX5BmFnHl6w2gaUSB2lG7vCsI8ZdhMMSDKzX7pQL2tc1_JHQfY_3_rYQui3-4RhjBwxu7mvQwdQUYszg"
            title="Github Social Coding"
          />
          <SidebarRow
            url="https://s2.coinmarketcap.com/static/img/coins/200x200/1808.png"
            title="OMG"
          />
          <SidebarRow
            url="https://i.ibb.co/FB9SkPy/MB.png"
            title="MoBigga Dating"
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
