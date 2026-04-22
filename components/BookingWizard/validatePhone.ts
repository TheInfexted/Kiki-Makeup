function digitsOnly(raw: string): string {
  return raw.replace(/[^\d]/g, '');
}

export function isValidMyPhone(raw: string): boolean {
  if (!raw) return false;
  const trimmed = raw.trim();
  if (/^\+?[2-9]/.test(trimmed) && !trimmed.replace(/^\+/, '').startsWith('60')) {
    return false;
  }
  const digits = digitsOnly(trimmed);
  if (digits.startsWith('60')) {
    return digits.length >= 11 && digits.length <= 12;
  }
  if (digits.startsWith('0')) {
    return digits.length >= 10 && digits.length <= 11;
  }
  return false;
}

export function normaliseMyPhone(raw: string): string {
  const digits = digitsOnly(raw);
  if (digits.startsWith('60')) return `+${digits}`;
  if (digits.startsWith('0')) return `+60${digits.slice(1)}`;
  return `+${digits}`;
}
