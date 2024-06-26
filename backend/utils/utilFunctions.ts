import { randomBytes } from 'crypto';

/**
 * Generates a secure temporary password.
 * @param length The desired length of the password.
 * @returns A temporary password as a string.
 */

export function createTempPassword(length: number = 12): string {
  // Ensure the length is at least 12 characters for security
  const finalLength = Math.max(length, 12);

  // Generate a random byte buffer
  const buffer = randomBytes(finalLength);

  // Convert the buffer to a hexadecimal string
  // Then slice it to ensure the password has the desired length
  const password = buffer.toString('base64').slice(0, finalLength);
  return password;
}

export function extractUsername(email: string): string {
  return email.split('@')[0];
}
