import css from './FriendListItem.module.css';

export function FriendListItem({ id, avatar, name, isOnline }) {
	return (
		<li className={css.friend} key={id}>
			<span
				className={isOnline ? `${css.status__green}` : `${css.status__red}`}
			></span>
			<img className={css.avatar} src={avatar} alt="User avatar" width="48" />
			<p className={css.name}>{name}</p>
		</li>
	);
}