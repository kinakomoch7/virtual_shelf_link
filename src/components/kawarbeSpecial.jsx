import { AddIntro } from "./AddIntro/AddIntro";
import { HeadText } from "./HeadText";
import { HomeIntro } from "./HomeIntro/HomeIntro";
import { SubText } from "./SubText";

const KawarbeSpecial = () => {

  const introduction = [
    'リストページでは、現在所持している本のリストを表示します。。',
    '本棚ごとに本を表示しているため、どこの本棚に本が入っているのか、わかりやすくなっています。',
    'ストックとは、どこの本棚にも本が入っていないものを指しています。',
    '画面右下のボタンを押すと本を追加することができます',
  ]


  return (
    <>
      <HeadText style={{margin:30}} contents='使用方法' />

      <HomeIntro />

      <div style={{ backgroundColor:'white', height:'90vh' }}>
        <div style={{ height:'2vh', backgroundColor:'white' }} />
        <SubText contents='リストページ'  />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <img
            src="/IMG_2714.PNG"
            width="13%"
            height="13%"
            style={{ margin: "30px" }}
          />
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", maxWidth:'30vw', height:'50vh'}}>
            {introduction.map((text, index) => {
              return <div key={index}>{text}</div>
            })}
          </div>
        </div>
        <div style={{ height:'2vh', backgroundColor:'white' }} />
      </div>

      <AddIntro />
    </>
  );
};

export default KawarbeSpecial;
