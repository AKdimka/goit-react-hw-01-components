import PropTypes from "prop-types";
import css from './FriendListItem.module.css';

export function FriendListItem({ avatar, name, isOnline }) {
	return (
		<li className={css.friend}>
			<span
				className={isOnline ? `${css.status__green}` : `${css.status__red}`}
			></span>
			<img className={css.avatar} src={avatar} alt="User avatar" width="48" />
			<p className={css.name}>{name}</p>
		</li>
	);
}

FriendListItem.propTypes = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
}