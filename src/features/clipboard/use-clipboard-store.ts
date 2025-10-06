import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ClipboardState {
	items: string[]
	addItem: (text: string) => void
	clear: () => void
}

export const useClipboardStore = create<ClipboardState>()(
	persist(
		set => ({
			items: [],
			addItem: text =>
				set(state => ({ items: [text, ...state.items.slice(0, 9)] })),
			clear: () => set({ items: [] })
		}),
		{ name: 'clipboard-history' }
	)
)
