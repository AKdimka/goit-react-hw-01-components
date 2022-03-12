import { FriendListItem } from '../FriendListItem/FriendListItem';

export function FriendList({ friends }) {
	return (
		<ul>
			{friends.map(friend => (
				<FriendListItem
					avatar={friend.avatar}
					name={friend.name}
					isOnline={friend.isOnline}
				/>
			))}
		</ul>
	);
}