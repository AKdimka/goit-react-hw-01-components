import propTypes from "prop-types";
import css from "./FriendList.module.css"
import { FriendListItem } from '../FriendListItem/FriendListItem';


export function FriendList({ friends }) {
	return (
		<ul className={css.friendList}>
			{friends.map(({ id, avatar, name, isOnline }) => (
				<FriendListItem
					key={id}
					avatar={avatar}
					name={name}
					isOnline={isOnline}
				/>
			))}
		</ul>
	);
}

FriendList.propTypes = {
	id: propTypes.number,
	avatar: propTypes.string,
	name: propTypes.string,
	isOnline: propTypes.bool,
}

