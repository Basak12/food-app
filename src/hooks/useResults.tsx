import {useEffect, useState} from "react";
import yelp from "../api/yelp";

export default () => {
    const [result, setResult] = useState<any>([])
    const [errorMessage, setErrorMessage] = useState<string>('');

    const searchApi = async ({ term }: { term: string }) => {
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
    useEffect(() => {
      searchApi({ term: 'pizza' });
    }, []);

    return [searchApi, result, errorMessage];
}