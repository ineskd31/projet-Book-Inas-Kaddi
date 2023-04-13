import { createSlice } from "@reduxjs/toolkit"

export const likeSlice = createSlice({
    name: 'favoris',
    initialState: {
        fav: [],
    },
    reducers: {
        ajouterFavori(state, action) {
            // state.fav.push(action.payload)
            const dansFavoris = state.fav.some(article => article.id === action.payload.id);
            if (dansFavoris) {
                return state; // Si l'article est déjà dans les favoris, ne rien faire
            } else {
                return {
                    ...state,
                    fav: [...state.fav, action.payload]
                }
            }
        },
        supprimerFavori(state, action) {
            const idArticle = action.payload.id;
            const nouveauxFavoris = state.fav.filter(article => article.id !== idArticle);
            return {
                ...state,
                fav: nouveauxFavoris
            }
        },
    },
})

export const { ajouterFavori, supprimerFavori } = likeSlice.actions
export default likeSlice.reducer