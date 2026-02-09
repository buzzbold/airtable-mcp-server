import { z } from 'zod';
/**
 * Enhanced error handling for Airtable API with troubleshooting guidance
 */
const AirtableApiErrorSchema = z.object({
    error: z.object({
        type: z.string(),
        message: z.string(),
    }),
});
/**
 * Analyzes Airtable API errors and provides troubleshooting guidance
 */
export function enhanceAirtableError(error, responseText, apiKey) {
    // Try to parse the response as an Airtable API error
    let airtableError = null;
    try {
        const parsed = JSON.parse(responseText);
        airtableError = AirtableApiErrorSchema.parse(parsed);
    }
    catch {
        // Not a valid JSON response, continue with original error
    }
    const errorType = airtableError?.error?.type;
    if (errorType === 'AUTHENTICATION_REQUIRED') {
        const warnings = [
            ...getApiKeyWarnings(apiKey),
            'Verify that the token hasn\'t expired or been revoked. You can view and create Personal Access Tokens at https://airtable.com/create/tokens.',
        ];
        error.message += `Suggestions: ${warnings.join(' ')}`;
    }
    if (errorType === 'INVALID_PERMISSIONS_OR_MODEL_NOT_FOUND') {
        const warnings = [
            ...getApiKeyWarnings(apiKey),
            'Check that you have given the token the `schema.bases:read` scope at https://airtable.com/create/tokens.',
            'If you\'re trying to access a specific base, ensure your token has permission to access that particular base.',
        ];
        error.message += `. Suggestions: ${warnings.join(' ')}`;
    }
}
/**
 * Validates token format and provides guidance
 */
function getApiKeyWarnings(apiKey) {
    const warnings = [];
    const dotsCount = apiKey.split('.').length - 1;
    if (dotsCount === 0) {
        warnings.push(`Expected one dot (.) in the token, but found ${dotsCount}. Make sure you've copied the entire Personal Access Token, not just the token ID.`);
    }
    if (dotsCount > 1) {
        warnings.push(`Expected one dot (.) in the token, but found ${dotsCount}. Make sure you've copied the token correctly.`);
    }
    // Check length (typical PAT is around 82 characters)
    if (apiKey.length < 70) {
        warnings.push(`Token seems too short (${apiKey.length} characters). Personal Access Tokens are typically around 82 characters long. Make sure you've copied the token correctly.`);
    }
    else if (apiKey.length > 100) {
        warnings.push(`Token seems too long (${apiKey.length} characters). Personal Access Tokens are typically around 82 characters long. Make sure you've copied the token correctly.`);
    }
    // Check if it looks like an old-style API key (starts with 'key')
    if (apiKey.startsWith('key')) {
        warnings.push('This appears to be a deprecated API key. Please create a Personal Access Token at https://airtable.com/create/tokens instead.');
    }
    return warnings;
}
