import { AddIntro } from "./AddIntro/AddIntro";
import { HeadText } from "./HeadText";
import { HomeIntro } from "./HomeIntro/HomeIntro";
import { SubText } from "./SubText";

const KawarbeSpecial = () => {

  const introduction = [
    'このページでは本棚を表示することができます。',
    '画面下部にあるスペースはストックスペースで、所持している本が表示されます。',
    'この本をスワイプで本棚に挿入することでレイアウトを変更することができます。複数選択にも対応しており、タップをすることでグループ選択することができます。',
    '右上のボタンを押すことで本棚を追加することができます。ぜひご自身の本棚を入力してみてください。入力する内容は本棚の名前、段数、幅となっています。',
    '本棚の幅と本の幅の情報から、追加した本が本棚の幅を超えてしまうことがないようにしています。',
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
