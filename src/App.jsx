import Header from './Components/Header/Header'
import User from './Components/User/User'

import userData from './assets/users.json'

const App = () => {
  return <>
    <Header />
    <h2>Lesson 2. Styles</h2>
    <ul>
      {userData.map(user => (
        <User key={user.id} {...user} />
      ))}
    </ul>
  </>
}

export default App;