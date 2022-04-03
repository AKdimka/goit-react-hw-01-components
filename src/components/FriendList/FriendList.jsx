import PropTypes from "prop-types";
import css from "./FriendList.module.css"
import { FriendListItem } from '../FriendListItem/FriendListItem';


export function FriendList({ friends }) {
	return (
		<ul className={css.friendList}>
			{friends.map(({ avatar, name, isOnline }) => (
				<FriendListItem
					avatar={avatar}
					name={name}
					isOnline={isOnline}
				/>
			))}
		</ul>
	);
}

FriendList.propTypes = {
	friends: PropTypes.arrayOf(PropTypes.object.isRequired)
}

