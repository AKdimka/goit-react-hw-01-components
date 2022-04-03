import propTypes from "prop-types";
import css from './FriendListItem.module.css';

export function FriendListItem({ id, avatar, name, isOnline }) {
	return (
		<li className={css.friend} >
			<span
				className={isOnline ? `${css.status__green}` : `${css.status__red}`}
			></span>
			<img className={css.avatar} src={avatar} alt="User avatar" width="48" />
			<p className={css.name}>{name}</p>
		</li>
	);
}

FriendListItem.propTypes = {
	avatar: propTypes.string.isRequired,
	name: propTypes.string.isRequired,
	isOnline: propTypes.bool.isRequired,
}