import './styles/_styles.scss'
import AdminLayout from './layouts/AdminLayout';
import { useSelector } from "react-redux";

function App() {
  const {dark} = useSelector(state => state.site)


  return (
    <div className={dark ? 'dark': 'light'} >
      <AdminLayout />
    </div>
  );
}

export default App;


