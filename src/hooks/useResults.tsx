import {useEffect, useState} from "react";
import yelp from "../api/yelp";

export default ({term}: {term: string}) => {
    const [result, setResult] = useState<any>([])
    const [errorMessage, setErrorMessage] = useState<string>('');

    const searchApi = async ({ searchTerm }: { searchTerm: string }) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'san jose'
                }
            });
            setResult(response.data.businesses);
        }
        catch (err) {
            setErrorMessage('Something went wrong');
        }
    }

    //useEffect(() => {
      //searchApi({ searchTerm: 'pasta' });
    //}, []);

    return [searchApi, result, errorMessage];
}