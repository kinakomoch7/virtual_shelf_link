import { SubText } from "./../SubText";

export const HomeIntro = () => {
  const HomeImges = [
    "/IMG_2717.PNG",
    "/IMG_2718.PNG",
    "/IMG_2719.PNG",
    "/IMG_2715.PNG",
    "/IMG_2716.PNG",
  ];

  const HomeImgStyles = {
    style: { marginRight: "40px" },
  };

  const introduction = [
    "このページでは本棚を表示することができます。",
    "画面下部にあるスペースはストックスペースで、所持している本が表示されます。",
    "この本をスワイプで本棚に挿入することでレイアウトを変更することができます。複数選択にも対応しており、タップをすることでグループ選択することができます。",
    "右上のボタンを押すことで本棚を追加することができます。ぜひご自身の本棚を入力してみてください。入力する内容は本棚の名前、段数、幅となっています。",
    "本棚の幅と本の幅の情報から、追加した本が本棚の幅を超えてしまうことがないようにしています。",
    "保存ボタンを押すことでローカルストレージに保存されます。",
  ];

  return (
    <>
      <SubText contents="ホームページ" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          height: "40vh",
          margin: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            maxWidth: "40vw",
            overflowX: "scroll",
          }}
        >
          {HomeImges.map((img, index) => {
            return <img src={img} key={index} {...HomeImgStyles} />;
          })}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            maxWidth: "30vw",
          }}
        >
          {introduction.map((text, index) => {
            return <div key={index}>{text}</div>;
          })}
        </div>
      </div>
    </>
  );
};
