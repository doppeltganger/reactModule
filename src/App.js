import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import Theme from './components/UI/Theme/Theme';
import Header from './components/Layout/Header/Header';
import Routes from './routes/Routes';
import Footer from './components/Layout/Footer/Footer';

function App() {
	return (
		<div className='wrapper'>
			<Provider store={store}>
				<Theme>
					<BrowserRouter>
						<Header/>
						<Routes/>
						<Footer/>
					</BrowserRouter>
				</Theme>
			</Provider>
		</div>
	);
}

export default App;
