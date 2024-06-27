import { Auth } from '@aws-amplify/auth';

export function SignIn(username: string, password: string) {
    return Auth.signIn(username, password);
}

export function SignUp(
    username: string,
    password: string,
    isEmailSignUp: boolean,
) {
    return new Promise((resolve, reject) => {
        console.log(username);
        let attributes;
        if (isEmailSignUp) {
            attributes = {
                email: username,
            };
        } else {
            attributes = { phone_number: username };
        }
        Auth.signUp({
            username,
            password,
            attributes,
        })
            .then((e) => {
                resolve(e);
            })
            .catch((e) => {
                reject(e);
            });
    });
}

export function SignOut() {
    return Auth.signOut();
}
