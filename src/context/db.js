import { useContext, useState, useEffect, createContext } from "react";
import { database, createdAt } from "../firebaseConfig";
import { useAuth } from "./auth";

const DbContext = createContext();

export function useDb() {
	return useContext(DbContext);
}

export function DbProvider({ children }) {
	const { currentUser } = useAuth();

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [card, setCard] = useState([]);

	const uid = currentUser?.uid;

	useEffect(() => {
		const unsubscribe = database
			.where("userID", "==", uid)
			.onSnapshot((snapshot) => {
				const data = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setCard(data);
			});
		return () => unsubscribe;
	}, [uid, card]);

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
			setError(err.message);
		}
	}

	function getAllPublicCards() {
		database.get().then((snapshot) => {
			snapshot.docs.forEach((doc) => console.log(...doc.data()));
		});
	}
	async function updateCard(card) {
		try {
			setLoading(true);
			await database.docs(card.id).update({
				title: card.title,
				date: card.date,
			});
			setLoading(false);
		} catch (err) {
			console.error(err);
			setError(err.message);
		}
	}
	async function deleteCard(id) {
		try {
			setLoading(true);
			await database.doc(id).delete();
			setLoading(false);
		} catch (err) {
			console.error(err);
			setError(err.message);
		}
	}

	const value = {
		uid,
		card,
		error,
		loading,
		updateCard,
		deleteCard,
		addCard,
		getAllPublicCards,
	};

	return <DbContext.Provider value={value}>{children}</DbContext.Provider>;
}
