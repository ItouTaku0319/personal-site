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
