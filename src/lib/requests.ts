import { Auth } from '@aws-amplify/auth';
import store from 'store';

import { CreateAnalyticResponse, Measurements } from '../Models';

const apiUrl = process.env.REACT_APP_API_URL;

const getHeaders = () => {
    let token;
    try {
        const user = store.get(
            `CognitoIdentityServiceProvider.${process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID}.LastAuthUser`,
        );
        token = store.get(
            `CognitoIdentityServiceProvider.${process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID}.${user}.idToken`,
        );
        const vendor = store.get('vendor');
        return {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Vendor: vendor,
        };
    } catch (error) {
        console.log('error getting user token', error);
    }
};

export function CreateAnalytic(
    productId: string,
    measurementId: number,
): Promise<CreateAnalyticResponse> {
    return new Promise(async (resolve, reject) => {
        fetch(apiUrl + '/customers/analytics/', {
            body: JSON.stringify({
                product: productId,
                measurement: measurementId,
            }),
            headers: getHeaders(),
            method: 'POST',
        })
            .then((response) => response.json())
            .then((body) => {
                resolve(body);
            })
            .catch((error) => {
                console.log('error creating a measurements', error);
                reject(error);
            });
    });
}

export async function CreateMeasurements(
    measurements: Measurements,
): Promise<Measurements> {
    return new Promise(async (resolve, reject) => {
        fetch(apiUrl + '/customers/measurements/', {
            body: JSON.stringify(measurements),
            headers: getHeaders(),
            method: 'POST',
        })
            .then((response) => response.json())
            .then((body) => {
                resolve(body);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export async function SignUp(
    username: string,
    password: string,
    isEmailSignUp: boolean,
): Promise<void> {
    try {
        let attributes;
        if (isEmailSignUp) {
            attributes = {
                email: username,
            };
        } else {
            attributes = { phone_number: username };
        }
        const user = await Auth.signUp({
            username,
            password,
            attributes,
        });
        console.log({ user });
    } catch (error) {
        console.log('error signing up:', error);
    }
}
