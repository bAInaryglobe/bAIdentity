import {
    generateRegistrationOptions,
    verifyRegistrationResponse,
    generateAssertionOptions,
    verifyAssertionResponse
} from 'webauthn-server';

// ... Your User interface

async function generateWebAuthnRegistrationOptions(user: User): Promise<WebAuthnOptions> {
    // ... (Your logic remains mostly the same)

    const options = await generateRegistrationOptions({
        rpName: 'Your Website Name',
        rpID: 'your-website-domain.com',
        userID: user.id,
        userName: user.username,
        // ... other WebAuthn options as needed
    });

    // ... (Store challenge if relevant)

    return options;
}

async function verifyWebAuthnRegistration(user: User, response: WebAuthnResponse): Promise<User> {
    // ... (Your logic remains mostly the same)

    const expectedChallenge = // ... Retrieve stored challenge
    const verificationResult = await verifyRegistrationResponse({
        credential: response,
        expectedChallenge,
        expectedOrigin: 'https://your-website-domain.com', // Adjust accordingly
        // ... other options
    });

    // ... (Handle success/failure as before)
}

// ... Similar for generateWebAuthnAssertionOptions, verifyWebAuthnAssertion
