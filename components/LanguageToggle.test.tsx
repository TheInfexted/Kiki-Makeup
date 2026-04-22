import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { I18nProvider } from '@/lib/i18n';
import { LanguageToggle } from './LanguageToggle';

describe('LanguageToggle', () => {
  beforeEach(() => window.localStorage.clear());

  it('shows EN label when current language is zh', () => {
    render(
      <I18nProvider>
        <LanguageToggle />
      </I18nProvider>
    );
    expect(screen.getByRole('button', { name: /切换语言/i })).toHaveTextContent('EN');
  });

  it('switches language when clicked', async () => {
    const user = userEvent.setup();
    render(
      <I18nProvider>
        <LanguageToggle />
      </I18nProvider>
    );
    const button = screen.getByRole('button');
    await user.click(button);
    expect(button).toHaveTextContent('中文');
  });
});
