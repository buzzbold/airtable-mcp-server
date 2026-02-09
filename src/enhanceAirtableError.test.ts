import {describe, test, expect} from 'vitest';
import {enhanceAirtableError} from './enhanceAirtableError.js';

describe('enhanceAirtableError', () => {
	describe('AUTHENTICATION_REQUIRED error type', () => {
		test('enhances error message with authentication suggestions', () => {
			const error = new Error('Original error message');
			const responseText = JSON.stringify({
				error: {
					type: 'AUTHENTICATION_REQUIRED',
					message: 'Authentication required',
				},
			});
			const apiKey = 'pat1.abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz123456';

			enhanceAirtableError(error, responseText, apiKey);

			expect(error.message).toContain('Original error message');
			expect(error.message).toContain('Suggestions:');
			expect(error.message).toContain('Verify that the token hasn\'t expired or been revoked');
			expect(error.message).toContain('https://airtable.com/create/tokens');
		});

		test('includes token warnings for malformed tokens', () => {
			const error = new Error('Auth error');
			const responseText = JSON.stringify({
				error: {
					type: 'AUTHENTICATION_REQUIRED',
					message: 'Authentication required',
				},
			});
			const apiKey = 'short-key';

			enhanceAirtableError(error, responseText, apiKey);

			expect(error.message).toContain('Token seems too short');
			expect(error.message).toContain('Expected one dot (.) in the token, but found 0');
		});
	});

	describe('INVALID_PERMISSIONS_OR_MODEL_NOT_FOUND error type', () => {
		test('enhances error message with permissions suggestions', () => {
			const error = new Error('Permission denied');
			const responseText = JSON.stringify({
				error: {
					type: 'INVALID_PERMISSIONS_OR_MODEL_NOT_FOUND',
					message: 'Invalid permissions or model not found',
				},
			});
			const apiKey = 'pat1.abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz123456';

			enhanceAirtableError(error, responseText, apiKey);

			expect(error.message).toContain('Permission denied');
			expect(error.message).toContain('schema.bases:read');
			expect(error.message).toContain('ensure your token has permission to access that particular base');
		});

		test('includes token warnings for invalid tokens', () => {
			const error = new Error('Permission error');
			const responseText = JSON.stringify({
				error: {
					type: 'INVALID_PERMISSIONS_OR_MODEL_NOT_FOUND',
					message: 'Invalid permissions',
				},
			});
			const apiKey = 'pat1.too.many.dots.in.key';

			enhanceAirtableError(error, responseText, apiKey);

			expect(error.message).toContain('Expected one dot (.) in the token, but found 5');
		});
	});

	describe('unknown error types', () => {
		test('does not modify error message for unknown error types', () => {
			const originalMessage = 'Some other error';
			const error = new Error(originalMessage);
			const responseText = JSON.stringify({
				error: {
					type: 'SOME_OTHER_ERROR',
					message: 'Some other error occurred',
				},
			});
			const apiKey = 'pat1.validkey1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijk';

			enhanceAirtableError(error, responseText, apiKey);

			expect(error.message).toBe(originalMessage);
		});

		test('does not modify error message when error type is missing', () => {
			const originalMessage = 'Error without type';
			const error = new Error(originalMessage);
			const responseText = JSON.stringify({
				error: {
					message: 'Error without type field',
				},
			});
			const apiKey = 'pat1.validkey1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijk';

			enhanceAirtableError(error, responseText, apiKey);

			expect(error.message).toBe(originalMessage);
		});
	});

	describe('invalid JSON response handling', () => {
		test('does not modify error message for invalid JSON', () => {
			const originalMessage = 'Network error';
			const error = new Error(originalMessage);
			const responseText = 'This is not valid JSON';
			const apiKey = 'pat1.validkey1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijk';

			enhanceAirtableError(error, responseText, apiKey);

			expect(error.message).toBe(originalMessage);
		});

		test('does not modify error message for empty response', () => {
			const originalMessage = 'Empty response error';
			const error = new Error(originalMessage);
			const responseText = '';
			const apiKey = 'pat1.validkey1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijk';

			enhanceAirtableError(error, responseText, apiKey);

			expect(error.message).toBe(originalMessage);
		});
	});

	describe('API key validation', () => {
		describe('dot count validation', () => {
			test('warns when API key has no dots', () => {
				const error = new Error('Auth error');
				const responseText = JSON.stringify({
					error: {
						type: 'AUTHENTICATION_REQUIRED',
						message: 'Authentication required',
					},
				});
				const apiKey = 'nodotsinkey';

				enhanceAirtableError(error, responseText, apiKey);
				expect(error.message).toContain('Expected one dot (.) in the token, but found 0');
				expect(error.message).toContain('Make sure you\'ve copied the entire Personal Access Token');
				expect(error.message).toContain('Token seems too short');
			});

			test('warns when API key has multiple dots', () => {
				const error = new Error('Auth error');
				const responseText = JSON.stringify({
					error: {
						type: 'AUTHENTICATION_REQUIRED',
						message: 'Authentication required',
					},
				});
				const apiKey = 'pat1.part1.part2.part3';

				enhanceAirtableError(error, responseText, apiKey);

				expect(error.message).toContain('Expected one dot (.) in the token, but found 3');
				expect(error.message).toContain('Make sure you\'ve copied the token correctly');
			});

			test('does not warn for API key with exactly one dot', () => {
				const error = new Error('Auth error');
				const responseText = JSON.stringify({
					error: {
						type: 'AUTHENTICATION_REQUIRED',
						message: 'Authentication required',
					},
				});
				const apiKey = `pat1.${'a'.repeat(77)}`; // Total 82 characters, exactly 1 dot

				enhanceAirtableError(error, responseText, apiKey);
				expect(error.message).not.toContain('Expected one dot');
			});
		});

		describe('length validation', () => {
			test('warns when API key is too short', () => {
				const error = new Error('Auth error');
				const responseText = JSON.stringify({
					error: {
						type: 'AUTHENTICATION_REQUIRED',
						message: 'Authentication required',
					},
				});
				const apiKey = 'pat1.short';

				enhanceAirtableError(error, responseText, apiKey);

				expect(error.message).toContain('Token seems too short (10 characters)');
				expect(error.message).toContain('Personal Access Tokens are typically around 82 characters long');
			});

			test('warns when API key is too long', () => {
				const error = new Error('Auth error');
				const responseText = JSON.stringify({
					error: {
						type: 'AUTHENTICATION_REQUIRED',
						message: 'Authentication required',
					},
				});
				const apiKey = `pat1.${'a'.repeat(150)}`;

				enhanceAirtableError(error, responseText, apiKey);

				expect(error.message).toContain('Token seems too long (155 characters)');
				expect(error.message).toContain('Personal Access Tokens are typically around 82 characters long');
			});

			test('does not warn for API key with appropriate length', () => {
				const error = new Error('Auth error');
				const responseText = JSON.stringify({
					error: {
						type: 'AUTHENTICATION_REQUIRED',
						message: 'Authentication required',
					},
				});
				const apiKey = `pat1.${'a'.repeat(77)}`; // Total 82 characters

				enhanceAirtableError(error, responseText, apiKey);

				expect(error.message).not.toContain('Token seems too short');
				expect(error.message).not.toContain('Token seems too long');
			});
		});

		describe('multiple validation issues', () => {
			test('includes all applicable warnings', () => {
				const error = new Error('Auth error');
				const responseText = JSON.stringify({
					error: {
						type: 'AUTHENTICATION_REQUIRED',
						message: 'Authentication required',
					},
				});
				const apiKey = 'keyABC'; // Old-style, too short, no dots

				enhanceAirtableError(error, responseText, apiKey);

				expect(error.message).toContain('deprecated API key');
				expect(error.message).toContain('Token seems too short');
				expect(error.message).toContain('Expected one dot (.) in the token, but found 0');
			});
		});
	});

	describe('edge cases', () => {
		test('handles null error object gracefully', () => {
			const error = new Error('Original error');
			const responseText = JSON.stringify({
				error: null,
			});
			const apiKey = 'pat1.validkey1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijk';

			enhanceAirtableError(error, responseText, apiKey);

			expect(error.message).toBe('Original error');
		});

		test('handles missing error.type gracefully', () => {
			const error = new Error('Original error');
			const responseText = JSON.stringify({
				error: {
					message: 'Error without type',
				},
			});
			const apiKey = 'pat1.validkey1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijk';

			enhanceAirtableError(error, responseText, apiKey);

			expect(error.message).toBe('Original error');
		});

		test('handles missing error.message gracefully', () => {
			const error = new Error('Original error');
			const responseText = JSON.stringify({
				error: {
					type: 'AUTHENTICATION_REQUIRED',
				},
			});
			const apiKey = 'pat1.validkey1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijk';

			enhanceAirtableError(error, responseText, apiKey);

			// Since the Zod schema requires both type and message, missing message will cause
			// schema validation to fail, so the error won't be enhanced
			expect(error.message).toBe('Original error');
		});

		test('handles empty API key', () => {
			const error = new Error('Auth error');
			const responseText = JSON.stringify({
				error: {
					type: 'AUTHENTICATION_REQUIRED',
					message: 'Authentication required',
				},
			});
			const apiKey = '';

			enhanceAirtableError(error, responseText, apiKey);

			expect(error.message).toContain('Expected one dot (.) in the token, but found 0');
			expect(error.message).toContain('Token seems too short (0 characters)');
		});
	});
});
