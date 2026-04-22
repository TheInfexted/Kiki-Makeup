import { describe, it, expect } from 'vitest';
import { isValidMyPhone, normaliseMyPhone } from './validatePhone';

describe('isValidMyPhone', () => {
  it('accepts +60 with dashes and spaces', () => {
    expect(isValidMyPhone('+60 17-920 2880')).toBe(true);
  });
  it('accepts 60 prefix without +', () => {
    expect(isValidMyPhone('60179202880')).toBe(true);
  });
  it('accepts local 0-prefixed form', () => {
    expect(isValidMyPhone('0179202880')).toBe(true);
  });
  it('rejects too-short numbers', () => {
    expect(isValidMyPhone('123')).toBe(false);
  });
  it('rejects non-Malaysian country code', () => {
    expect(isValidMyPhone('+1 555 123 4567')).toBe(false);
  });
  it('rejects empty string', () => {
    expect(isValidMyPhone('')).toBe(false);
  });
});

describe('normaliseMyPhone', () => {
  it('converts local 0-prefix to +60', () => {
    expect(normaliseMyPhone('0179202880')).toBe('+60179202880');
  });
  it('keeps +60 unchanged (digits only)', () => {
    expect(normaliseMyPhone('+60 17-920 2880')).toBe('+60179202880');
  });
});
