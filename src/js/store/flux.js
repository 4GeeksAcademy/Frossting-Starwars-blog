const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterList: [],
			planetList: [],
			favorites: ["C-3PO", "R2-D2"],
			urlBase: "https://www.swapi.tech/api",
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacters: async () => {
				try {
					const bringCharacter = await fetch(getStore().urlBase + "/people/")
					const characterJSON = await bringCharacter.json()

					for (const item of characterJSON.results) {

						fetch(item.url)
							.then((response) => response.json())
							.then((data) => {
								setStore({
									characterList: [...getStore().characterList, data.result]
								})
							}).catch((error) => {
								console.log(error)
							})
					}
				}
				catch (error) {
					console.log(error)
				}
			},
			getPlanets: async () => {
				try {
					const bringPlanet = await fetch(getStore().urlBase + "/planets/")
					const planetJSON = await bringPlanet.json()

					for (const item of planetJSON.results) {

						fetch(item.url)
							.then((response) => response.json())
							.then((data) => {
								setStore({
									planetList: [...getStore().planetList, data.result]
								})
							}).catch((error) => {
								console.log(error)
							})
					}
				}
				catch (error) {
					console.log(error)
				}
			},
			addFavorite: (characterList) => {
				const store = getStore()
				setStore({ favorites : [characterList.uid, ...store.favorites ] })
			}
		}
	};
};

export default getState;
