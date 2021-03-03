import s from './HomePage.module.css';
function HomePage(props) {
  return (
    <>
      <div className={s.container}>
        <h1>Welcome to my little app</h1>
      </div>
      <div className={s.container}>
        <img
          src="https://img5.goodfon.ru/wallpaper/nbig/b/68/uzor-risunok-grafika-welcome-dobro-pozhalovat.jpg"
          alt="welcome"
          width="450"
        />
      </div>
    </>
  );
}

export default HomePage;
