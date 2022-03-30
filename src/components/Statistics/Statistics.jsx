import propTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ stats, title }) => {
	return (
		<section className={css.statistics}>
			<h2 className={css.title}>{title}</h2>

			<ul className={css.statList}>
				{stats.map(({ id, label, percentage }) => (
					<li className={css.item} key={id}
						style={{
							backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
								16
							)}`,
						}}>
						<span className="label">{label}</span>
						<span className="percentage">{percentage}</span>
					</li>
				))}
			</ul>
		</section>)
};

Statistics.propTypes = {
	stats: propTypes.array,
	title: propTypes.string,
}