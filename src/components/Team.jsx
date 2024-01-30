import Avatar from "antd/es/avatar/avatar"
import { SubText } from "./SubText"

const members = [
  {
    id : 5421050,
    name: '小出朋希',
    avatar: 'https://avatars.githubusercontent.com/u/114901771?v=4',
    url: 'https://github.com/kinakomoch7'
  },
  {
    id: 5421055,
    name: '川邉開人' ,
    avatar: 'https://avatars.githubusercontent.com/u/114901250?v=4',
    url: 'https://github.com/kawarbe'
  },
  {
    id: 5421071,
    name: '石川翼',
    avatar: 'https://avatars.githubusercontent.com/u/100782308?v=4',
    url: 'https://github.com/Ishi-eenn'
  },
  {
    id: 5421072,
    name: '井上隆大',
    avatar: 'https://avatars.githubusercontent.com/u/114901330?v=4',
    url:'https://github.com/inoue021231'
}]

const styles = {
  text: {
    fontWeight:'bolder',
    marginLeft:5,
    marginTop:5
  },
  memberContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    cursor: "pointer",
  },
}


export const Team = () => {

  const navigateTo = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div style={{ backgroundColor:'white', height:'30vh' }}>
      <div style={{ height:'2vh', backgroundColor:'white' }} />
      <SubText contents='チーム2 車輪の発明'  />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {members.map((item, index) => {
            return (
              <div key={index} style={styles.memberContainer} onClick={() => navigateTo(item.url)}>
                <Avatar src={item.avatar} />
                <div style={styles.text}>{item.id}</div>
                <div style={styles.text} >{item.name}</div>
              </div>
            )
          })}
      </div>
      <div style={{ height:'2vh', backgroundColor:'white' }} />
    </div>
  )
}
