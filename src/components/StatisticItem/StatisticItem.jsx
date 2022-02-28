import css from './StatisticItem.module.css'

export function StatisticItem({ id, label, percentage }) {

	return (
		<li className={css.item} key={id}
			style={{
				backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
					16
				)}`,
			}}>
			<span className="label">{label}</span>
			<span className="percentage">{percentage}</span>
		</li>
	)
}
