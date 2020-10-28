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
	useEffect(() => {
		const unsubscribe = collectionRef.onSnapshot((snapshot) =>
			setData(snapshot.docs)
		);
		return () => unsubscribe();
	}, [collectionRef]);

	return { db: db.current, collectionRef, collectionData: data };
};

export default useFirestore;
