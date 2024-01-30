const KawarbeSpecial = () => {
  return (
    <>
      <h1>使用方法</h1>
      <h2>ホームページ</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="public/IMG_2705.PNG"
          width="15%"
          height="15%"
          style={{ margin: "30px" }}
        />
        <img
          src="public/IMG_2706.PNG"
          width="15%"
          height="15%"
          style={{ margin: "30px" }}
        />
        <img
          src="public/IMG_2707.PNG"
          width="15%"
          height="15%"
          style={{ margin: "30px" }}
        />
        <img
          src="public/IMG_2715.PNG"
          width="15%"
          height="15%"
          style={{ margin: "30px" }}
        />
        <img
          src="public/IMG_2716.PNG"
          width="15%"
          height="15%"
          style={{ margin: "30px" }}
        />
      </div>
      <div>このページでは本棚を表示することができます。</div>
      <div>
        画面下部にあるスペースはストックスペースで、所持している本が表示されます。
      </div>
      <div>
        この本をスワイプで本棚に挿入することでレイアウトを変更することができます。複数選択にも対応しており、タップをすることでグループ選択することができます。
      </div>
      <div>
        右上のボタンを押すことで本棚を追加することができます。ぜひご自身の本棚を入力してみてください。入力する内容は本棚の名前、段数、幅となっています。
      </div>

      <div>
        本棚の幅と本の幅の情報から、追加した本が本棚の幅を超えてしまうことがないようにしています。
      </div>
      <h2>リストページ</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="public/IMG_2714.PNG"
          width="15%"
          height="15%"
          style={{ margin: "30px" }}
        />
      </div>
      <div>リストページでは、現在所持している本のリストを表示します。</div>
      <div>
        本棚ごとに本を表示しているため、どこの本棚に本が入っているのか、わかりやすくなっています。
      </div>
      <div>
        ストックとは、どこの本棚にも本が入っていないものを指しています。
      </div>
      <div>画面右下のボタンを押すと本を追加することができます</div>
      <h2>追加ページ</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="public/IMG_2709.PNG"
          width="15%"
          height="15%"
          style={{ margin: "30px" }}
        />
        <img
          src="public/IMG_2710.PNG"
          width="15%"
          height="15%"
          style={{ margin: "30px" }}
        />
        <img
          src="public/IMG_2713.PNG"
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
  );
};

export default KawarbeSpecial;
