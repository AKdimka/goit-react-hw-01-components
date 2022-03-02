import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

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