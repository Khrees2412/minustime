import { database, createdAt } from "../firebaseConfig";

export function add(title, date, uid) {
	if (!title || !date) return;
	database.add({
		details: {
			card: {
				title,
				date,
			},
			createdAt,
		},
		userID: uid,
	});
}

export function getAllUserTodos() {
	database.get().then((snapshot) => {
		snapshot.docs.forEach((doc) => console.log(doc.data()));
	});
}
// export const unsubscribe = database.get().then(snapshot => {
// 	const data = snapshot.docs.forEach(doc => {
// 		 {id: doc.id, ...doc.data() };
// 		//setTodos();
// 	});
// });

export function updateData() {
	database.docs("").update({});
}
export function deleteCard(id) {
	database.doc(id).delete();
}
