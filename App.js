import TabBottomComponent from './components/TabBottom'
import HeaderComponent from './components/Header';
import { Provider as PaperProvider } from 'react-native-paper';


export default function App() {
  return (
    <PaperProvider>
        <HeaderComponent />
        <TabBottomComponent />
    </PaperProvider>
  );
}
