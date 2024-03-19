"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const webauthn_server_1 = require("webauthn-server");
// ... Your User interface
function generateWebAuthnRegistrationOptions(user) {
    return __awaiter(this, void 0, void 0, function* () {
        // ... (Your logic remains mostly the same)
        const options = yield (0, webauthn_server_1.generateRegistrationOptions)({
            rpName: 'Your Website Name',
            rpID: 'your-website-domain.com',
            userID: user.id,
            userName: user.username,
            // ... other WebAuthn options as needed
        });
        // ... (Store challenge if relevant)
        return options;
    });
}
function verifyWebAuthnRegistration(user, response) {
    return __awaiter(this, void 0, void 0, function* () {
        // ... (Your logic remains mostly the same)
        const expectedChallenge = ; // ... Retrieve stored challenge
        const verificationResult = yield (0, webauthn_server_1.verifyRegistrationResponse)({
            credential: response,
            expectedChallenge,
            expectedOrigin: 'https://your-website-domain.com', // Adjust accordingly
            // ... other options
        });
        // ... (Handle success/failure as before)
    });
}
// ... Similar for generateWebAuthnAssertionOptions, verifyWebAuthnAssertion
