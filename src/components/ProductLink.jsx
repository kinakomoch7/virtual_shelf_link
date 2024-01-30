import {
	ProjectReport,
	GithubRepogitory,
	WebSite,
} from "./Product/Ultra_Ishi_eenn";
import YouTubePage from "./Product/YouTubePage";
import { HeadText } from "./HeadText";

export const ProductLink = () => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignContent:'center', justifyContent:'space-evenly', backgroundColor: "#021529", width:'100vw', height:'90vh' }}>
        <HeadText contents='Productについて' style={{ color:' white' }} />
        <div style={{ display: "flex", justifyContent:'space-evenly',alignItems:'center'}}>
          <YouTubePage />
          <div style={{ display: 'flex', flexDirection: 'column', alignContent:'center', justifyContent:'space-around' }}>
            <ProjectReport />
            <GithubRepogitory />
            <WebSite />
          </div>
        </div>
      </div>
    </>
  )
}
