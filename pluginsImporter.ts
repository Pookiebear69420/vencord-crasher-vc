import Vencord from './userplugins/Vencord';
import vencordCrasherVc from './userplugins/vencord-crasher-vc';

// Use the imported components or modules
const App = () => {
  return (
    <div>
      <Vencord />
      <vencordCrasherVc />
    </div>
  );
};

export default App;
