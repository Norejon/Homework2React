import './App.css';
import Users from "./components/Users/Users";
import UserDetails from "./components/userDetails/userDetails";
import SpaceX_launches from "./components/spaceX_launches/SpaceX_launches";

function App() {
  return (
    <div className="App">

        {/*part1||- з jsonplaceholder отримати всіх юзерів в компоненту Users.js*/}
        {/*відобразити кожного інформацію (id,name) з кожного юзера (компонента User)*/}
        {/*Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете детальну інфомацію про користувача(довільно обрану інформацію)*/}

        {/*<Users/>*/}
      {/*  <UserDetails/>*/}

        {/*part2||-є API от SpaceX*/}
        {/*https://api.spacexdata.com/v3/launches/*/}
        {/*потрібно вивести всі запуски кораблів окрім 2020 року*/}
        {/*репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)*/}

      {<SpaceX_launches/>}

    </div>
  );
}

export default App;
