//unsplash API com request pelo axios
import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID EUJ-oiSctBV0yXNQx4x1uFw0OEzemq6P6Pu_61Jvlrg',
        },
        params: {
            query: term,
        }
    });
    return response.data.results;
};

export default searchImages;