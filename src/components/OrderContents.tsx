import formatCurrency from '../helpers'
import { MenuItem, OrderItem } from '../types'

type OrderContentsProps = {
	order: OrderItem[]
	removeItem: (id: MenuItem['id']) => void
}

export default function OderContents({
	order,
	removeItem,
}: OrderContentsProps) {
	return (
		<div>
			<h2 className='font-black text-4xl'>Consumo</h2>

			<div className='space-y-3 mt-10'>
				{order.map(i => (
					<div
						key={i.id}
						className='flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b'>
						<div>
							<p className='text-lg'>
								{i.name} - {formatCurrency(i.price)}{' '}
							</p>
							<p className='font-black'>
								Cantidad: {i.quantity} -{' '}
								{formatCurrency(i.price * i.quantity)}{' '}
							</p>
						</div>

						<button
							className='bg-red-600 h-8 w-8 rounded-full text-white font-black'
							onClick={() => removeItem(i.id)}>
							X
						</button>
					</div>
				))}
			</div>
		</div>
	)
}
