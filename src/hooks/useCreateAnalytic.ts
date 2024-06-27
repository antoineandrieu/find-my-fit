import { Auth } from '@aws-amplify/auth';
import { useContext, useEffect, useState } from 'react';

import { UserContext } from '../context/UserContext';
import { CreateAnalytic } from '../lib/requests';
import { Analytic, CreateAnalyticResponse } from '../Models';

const useCreateAnalytic = (
    productId: string,
    measurementId: number,
): Analytic => {
    const [
        recommendedSize,
        setRecommendedSize,
    ] = useState<CreateAnalyticResponse>();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const userContext = useContext(UserContext);

    useEffect(() => {
        const fetchData = async () => {
            // TODO: Remove this dirty hack done because sometimes when we open
            // the app directly in this screen the user is not setup yet
            try {
                await Auth.currentSession();
            } catch (error) {
                try {
                    await Auth.signIn(
                        process.env.REACT_APP_ANON_USERNAME || '',
                        process.env.REACT_APP_ANON_PASSWORD || '',
                    );
                } catch (error) {
                    console.log(error);
                }
            }
            try {
                const currentUserInfo = await Auth.currentUserInfo();
                if (currentUserInfo) {
                    const attrs = currentUserInfo.attributes;
                    if (
                        attrs.email &&
                        attrs.email !== process.env.REACT_APP_ANON_USERNAME
                    ) {
                        userContext.setCurrentUser({ username: attrs.email });
                    } else if (attrs.phone_number) {
                        userContext.setCurrentUser({
                            username: attrs.phone_number,
                        });
                    }
                }
            } catch (error) {
                console.log(error);
            }
            try {
                const analytic = await CreateAnalytic(productId, measurementId);

                if (analytic) {
                    setRecommendedSize(analytic);
                }
            } catch (error) {
                setError(error);
                console.error(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [measurementId, productId, userContext]);

    return { recommendedSize, loading, error };
};

export default useCreateAnalytic;
