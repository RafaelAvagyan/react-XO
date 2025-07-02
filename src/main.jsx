import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { store } from './store.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function render() {
	root.render(
		<StrictMode>
			<App state={store.getState()} dispatch={store.dispatch} />
		</StrictMode>,
	);
}

store.subscribe(render);

render();
