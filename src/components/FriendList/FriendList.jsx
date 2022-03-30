import propTypes from "prop-types";
import { FriendListItem } from '../FriendListItem/FriendListItem';

export function FriendList({ friends }) {
	return (
		<ul>
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

