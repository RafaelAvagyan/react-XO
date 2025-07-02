import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // <-- Заменили на swc

export default defineConfig(({ mode }) => {
	const isDev = mode !== 'production';

	return {
		plugins: [
			react({
				babel: {
					plugins: isDev ? ['check-prop-types'] : [],
				},
			}),
		],
	};
});
