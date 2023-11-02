import { AllRoutes } from './routes/AllRoutes';
import { Footer, Header } from './components';

function App() {
  return (
    <div className="App dark:bg-slate-700 bg-blue-400">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;