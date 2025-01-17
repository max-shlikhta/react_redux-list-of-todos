import './App.scss';
import './components/styles/general.scss';
import { CurrentUser } from './components/CurrentUser/CurrentUser';
import { TodoList } from './components/TodoList/TodoList';

export const App: React.FC = () => (
  <div className="App">
    <div className="App__sidebar">
      <TodoList />
    </div>

    <div className="App__content">
      <div className="App__content-container">
        <CurrentUser />
      </div>
    </div>
  </div>
);
