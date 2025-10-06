import { useClipboardStore } from './use-clipboard-store'

document.addEventListener('copy', () => {
	const text = window.getSelection()?.toString()
	if (text) {
		useClipboardStore.getState().addItem(text)
	}
})

export default function Popup() {
	const { items, clear } = useClipboardStore()

	return (
		<div style={{ padding: 16, maxWidth: 400 }}>
			<h2>Clipboard History</h2>
			<button onClick={clear}>Clear All</button>
			<ul>
				{items.map((text, i) => (
					<li key={i}>
						<button onClick={() => navigator.clipboard.writeText(text)}>
							{text.length > 30 ? text.slice(0, 30) + '…' : text}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
