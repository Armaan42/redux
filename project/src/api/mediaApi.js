import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY

export function fetchPhotos(query) {
    const res = axios.get('https://api.unsplash.com/search/photos', {
        params:{
    
        },
        headers:{

        }
    })
    console.log(res);
}