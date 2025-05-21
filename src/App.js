import React from "react";
import "./App.css";

function App() {
  return (
    <div>
<header style={styles.header}>
  <div style={styles.headerInnerCenter}>
    <img
      src={`${process.env.PUBLIC_URL}/logo_itu_header.png`}
      alt="ロゴ"
      style={styles.logo}
    />
    <h1 style={{ margin: 0 }}>伊東拓</h1>
  </div>
  <p style={{ textAlign: "center", marginTop: "0.5rem" }}>
    23歳｜将来はサイドFIREを目指すエンジニア志望
  </p>
</header>



      <main style={styles.main}>
        <section>
          <h2 style={styles.heading}>プロフィール</h2>
          <p>
            こんにちは！現在、投資と副業で将来のサイドFIREを目指しながら、プログラミングを学んでいます。
            React や Go を使ったWeb開発を勉強中です。
          </p>
        </section>

        <section>
          <h2 style={styles.heading}>スキル</h2>
          <ul>
            <li>HTML / CSS</li>
            <li>JavaScript（学習中）</li>
            <li>React（ポートフォリオ制作中）</li>
            <li>Go（バックエンド勉強中）</li>
						<h4>以下は仕事で経験あり</h4>
						<li>Power Builder</li>
						<li>Vue3</li>
						<li>Laravel</li>
          </ul>
        </section>

        <section>
          <h2 style={styles.heading}>趣味</h2>
          <ul>
            <li>野球観戦(阪神タイガース)</li>
            <li>読書</li>
            <li>ジム</li>
          </ul>
        </section>

        <section>
          <h2 style={styles.heading}>目標</h2>
          <p>
            45歳でサイドFIREを達成し、自分の好きな仕事だけを選んで生きていくこと。
          </p>
        </section>

				<section>
					<h2 style={styles.heading}>なぜエンジニアを目指したのか？</h2>
					<p>
						小さいときからモノづくりをするのが好きだったからです。<br />
						自分が実際に手を動かし出来たモノが思うように動いてくれたりそうじゃなかったりする。<br />
						その思考錯誤の時間がとても好きです。(このサイトを作るときもChatGptを使いながら四苦八苦したものです・・・)<br />
						また、自分はとにかく物事の全容を知りたい、把握したいという欲求が強いです。<br />
						なぜその作業が必要なのか？上流ではどういった思考で物事が進められているのか？<br />
						それを深く知ったうえで自らの業務の糧にしたいという思いがあります。
						</p>
				</section>

				<section>
					<h2 style={styles.heading}>影響を受けた、読んでよかった本ベスト3</h2>
						<ol>
							<li>
								エッセンシャル思考 最小の時間で成果を最大にする 著 グレッグ・マキューン <br />
								仕事の進め方や考え方。本当に大切な物をつかみ取るために何が必要か常に考え続けることを学びました。
							</li>
							<li>
								夢をかなえるゾウ 1 著 水野敬也 <br />
								この本の影響で毎週土曜日に靴磨き、日曜にトイレ掃除と部屋の掃除を習慣にしました。
							</li>
							<li>
								反応しない練習 著 草薙龍瞬 <br />
								人はなぜ不幸になるのか。心が反応するから不幸になるのだと学びました。
							</li>
						</ol>
				</section>

        <section>
          <h2 style={styles.heading}>GitHub</h2>
          <p>
            <a
              href="https://github.com/ItouTaku0319"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub アカウントを見る
            </a>
          </p>
        </section>
      </main>

      <footer style={styles.footer}>
        &copy; 2025 Itou Taku. All rights reserved.
      </footer>
    </div>
  );
}

const styles = {
header: {
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "1.5rem 2rem",
},
headerInnerCenter: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
},

logo: {
  width: "48px",
  height: "48px",
  objectFit: "contain",
},

  main: {
    padding: "2rem",
    maxWidth: "800px",
    margin: "0 auto",
  },
  heading: {
    borderBottom: "2px solid #4CAF50",
    paddingBottom: "0.5rem",
  },
  footer: {
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#eee",
    fontSize: "0.9rem",
    color: "#777",
  },
};

export default App;
