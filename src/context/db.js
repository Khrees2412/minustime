import { useContext, useState, createContext } from "react";
import { database, createdAt } from "../firebaseConfig";

const DbContext = createContext();

export function useDb() {
	return useContext(DbContext);
}

export function DbProvider({ children }) {
	const [loading, setLoading] = useState(false);

	async function addCard(title, date, userID) {
		if (!title || !date) return;
		try {
			setLoading(true);
			await database.add({
				title,
				date,
				createdAt,
				userID,
			});
			setLoading(false);
		} catch (err) {
			console.error(err);
		}
	}

	function getAllPublicCards() {
		database.get().then((snapshot) => {
			snapshot.docs.forEach((doc) => console.log(doc.data()));
		});
	}
	function updateCard(userID, card) {
		database.docs(card.id).update({});
	}
	async function deleteCard(id) {
		try {
			setLoading(true);
			await database.doc(id).delete();
			setLoading(false);
		} catch (err) {
			console.error(err);
		}
	}

	const value = {
		loading,
		updateCard,
		deleteCard,
		addCard,
		getAllPublicCards,
	};

	return <DbContext.Provider value={value}>{children}</DbContext.Provider>;
}
