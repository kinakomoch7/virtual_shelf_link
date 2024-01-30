import { SubText } from "./../SubText";

export const HomeIntro = () => {

  const  HomeImges = [
    '/IMG_2705.PNG',
    '/IMG_2706.PNG',
    '/IMG_2707.PNG',
    '/IMG_2715.PNG',
    '/IMG_2716.PNG'
  ]


  const HomeImgStyles = {
    width: "40%",
    height: '50%',
    style: { margin: "20px" },
  }

  const introduction = [
    'このページでは本棚を表示することができます。',
    '画面下部にあるスペースはストックスペースで、所持している本が表示されます。',
    'この本をスワイプで本棚に挿入することでレイアウトを変更することができます。複数選択にも対応しており、タップをすることでグループ選択することができます。',
    '右上のボタンを押すことで本棚を追加することができます。ぜひご自身の本棚を入力してみてください。入力する内容は本棚の名前、段数、幅となっています。',
    '本棚の幅と本の幅の情報から、追加した本が本棚の幅を超えてしまうことがないようにしています。',
  ]

  return (
    <>
      <SubText contents='ホームページ' />
      <div style={{ display: "flex", justifyContent: "space-evenly"}}>
        <div style={{ display: "flex", justifyContent: "center", maxWidth:'50vw', overflowX:'scroll' }}>
          {HomeImges.map((img, index) => {
            return <img src={img} key={index} {...HomeImgStyles} />
          })}
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", maxWidth:'30vw', height:'50vh'}}>
          {introduction.map((text, index) => {
            return <div key={index}>{text}</div>
          })}
        </div>
      </div>
    </>
  )
}
