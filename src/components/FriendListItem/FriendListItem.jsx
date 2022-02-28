import css from './FriendListItem.module.css';

export function FriendListItem({ id, isOnline, avatar, name }) {

	return (
		<li className={css.friend} key={id}>
			<span className={isOnline ? `${css.statusGreen}` : `${css.statusRed}`}></span>
			<img className={css.avatar} src={avatar} alt="User avatar" width="48" />
			<p className={css.name}>{name}</p>
		</li >)
}