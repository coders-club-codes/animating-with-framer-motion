import { GlobalStyles } from './styles';

export const App = () => {
  const title = 'Hello CodersClub';

  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
      <GlobalStyles />
    </div>
  );
};
