import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "config/firebase.json";
import { useEffect, useRef } from "react";
import { useState } from "react";

firebase.initializeApp(firebaseConfig);

const useFirestore = (collectionURI) => {
	const db = useRef(firebase.firestore());

	const [collectionRef] = useState(db.current.collection(collectionURI));
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		console.log("sub");
		const unsubscribe = collectionRef.onSnapshot((snapshot) => {
			setIsLoading(true);
			setData(snapshot.docs);
		});
		return () => {
			console.log("unsub");
			unsubscribe();
		};
	}, [collectionRef]);
	useEffect(() => {
		if (data) setIsLoading(false);
	}, [data]);
	return { db: db.current, collectionRef, collectionData: data, isLoading };
};

export default useFirestore;
