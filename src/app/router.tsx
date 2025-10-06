import { createBrowserRouter } from 'react-router-dom'

import { App } from './app'

export const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: '/',
				lazy: () => import('@/features/clipboard/clipboard.page')
			}
		]
	}
])
