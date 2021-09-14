import logo from "./logo.svg";
import "./App.css";
import BackImage from "./image/image.jpg";
import BucketMain from "./comps/BucketMain";
import Footer from "./comps/Footer";

function App() {
  const backgroudStyle = {
    // import한 이미지를 이용해서 스타일을 지정하기
    // css를 사용하지 않고 스타일을 지정하고 넣어주기
    // css 똑같이 써야 함 안그러면 안나옴
    backgroundImage: `url(${BackImage})`,
    backgroundRepeat: `no-repeat`,
    backgroundAttachment: `scroll`,
    backgroundSize: "contain",
  };
  return (
    <div className="App">
      <header className="App-header" style={backgroudStyle}></header>
      <section className="w3-container w3-margin">
        <BucketMain />
      </section>
      <Footer />
    </div>
  );
}

export default App;
