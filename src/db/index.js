import { database, createdAt } from "../firebaseConfig";
// import { v4 as uuidv4 } from "uuid";

export async function add(title, date, userID) {
	if (!title || !date) return;
	await database.add({
		title,
		date,
		createdAt,
		userID,
	});
}

export function getAllCards() {
	database.get().then((snapshot) => {
		snapshot.docs.forEach((doc) => console.log(doc.data()));
	});
}
export function updateCard(userID, card) {
	database.docs(card.id).update({
		// details,
	});
}
export async function deleteCard(id) {
	await database.doc(id).delete();
}
