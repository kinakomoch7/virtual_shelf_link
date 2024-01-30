

export const AddIntro = () => {

  const AddImgStyles = {
    width: "40%",
    height: '50%',
    style: { margin: "20px" },
  }

  return (
    <>
      <SubText contents ='追加ページ' />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/IMG_2709.PNG"
          width="15%"
          height="15%"
          style={{ margin: "30px" }}
        />
        <img
          src="/IMG_2710.PNG"
          width="15%"
          height="15%"
          style={{ margin: "30px" }}
        />
        <img
          src="/IMG_2713.PNG"
          width="15%"
          height="15%"
          style={{ margin: "30px" }}
        />
      </div>
      <div>追加ページでは三つの方法で本を追加することができます。</div>
      <div>一つ目は、本の名前と本のページ数を入力してもらう方法です。</div>
      <div>
        二つ目は、本を検索する方法です。検索ボタンを押すことで、検索結果が出てきます。それらをタップすることでストックに追加することができます。
      </div>
      <div>
        三つ目は、本のバーコードを撮ってもらう方法です。isbn番号を読み取り、本リストに追加されます。
      </div>
      <div>
        これら三つの方法で追加した本はリストページのストック欄に追加されます。
      </div>
    </>
  )
}
