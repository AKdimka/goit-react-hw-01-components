import { FriendListItem } from "components/FriendListItem/FriendListItem"

export function FriendList({ friends }) {
	return (
		<ul>
			{friends.map(friend => (
				<FriendListItem
					key={friend.id}
					isOnline={friend.IsOnline}
					avatar={friend.avatar}
					name={friend.name}
				/>
			))}
		</ul>
	)
}