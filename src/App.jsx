import {useEffect} from 'react';
import UserProfile from './components/UserProfile';
import ProductList from './components/ProductList';
import Recommendations from './components/Recommendations';
import useGlobalStore from './store/useStore';

function App() {
  const { fetchProducts, fetchRandomUser } = useGlobalStore();

  useEffect(() => {
    fetchProducts();
    fetchRandomUser();
  }, [fetchProducts, fetchRandomUser]);

  return (
      <main className="w-[100vw] mx-auto ">
        <UserProfile />
        <Recommendations />
        <ProductList />
      </main>
  )
}

export default App;
