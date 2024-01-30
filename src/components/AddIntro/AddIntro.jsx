import { SubText } from "../SubText";

export const AddIntro = () => {

  const AddImges = [
    '/IMG_2709.PNG',
    '/IMG_2710.PNG',
    '/IMG_2713.PNG'
  ]

  const AddImgStyles = {
    width: "40%",
    height: '60%',
    style: { margin: "20px" },
  }

  const introduction = [
    '追加ページでは三つの方法で本を追加することができます。',
    '一つ目は、本の名前と本のページ数を入力してもらう方法です。',
    '二つ目は、本を検索する方法です。検索ボタンを押すことで、検索結果が出てきます。それらをタップすることでストックに追加することができます。',
    '三つ目は、本のバーコードを撮ってもらう方法です。isbn番号を読み取り、本リストに追加されます。',
    'これら三つの方法で追加した本はリストページのストック欄に追加されます。',
  ]

  return (
    <>
      <SubText contents='追加ページ' />
      <div style={{ display: "flex", justifyContent: "space-evenly"}}>
        <div style={{ display: "flex", maxWidth:'50vw', overflowX:'scroll' }}>
          {AddImges.map((img, index) => {
            return <img src={img} key={index} {...AddImgStyles} />
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
