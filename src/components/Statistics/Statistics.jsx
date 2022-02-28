import { StatisticItem } from "components/StatisticItem/StatisticItem";

import css from './Statistics.module.css';

export function Statistics({ stats }) {
	return (<section className={css.statistics}>
		<h2 className={css.title}>Upload stats</h2>

		<ul className={css.statList}>
			{stats.map(el => (
				<StatisticItem
					key={el.id}
					label={el.label}
					percentage={el.percentage}
				/>
			))}
		</ul>
	</section>)
};