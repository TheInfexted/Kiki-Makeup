import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { I18nProvider, useTranslation } from './i18n';

function Probe() {
  const { lang, setLang, t } = useTranslation();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="hello">{t({ zh: '你好', en: 'Hello' })}</span>
      <button onClick={() => setLang('en')}>to-en</button>
      <button onClick={() => setLang('zh')}>to-zh</button>
    </div>
  );
}

describe('I18nProvider / useTranslation', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('defaults to zh when no saved preference', () => {
    render(
      <I18nProvider>
        <Probe />
      </I18nProvider>
    );
    expect(screen.getByTestId('lang').textContent).toBe('zh');
    expect(screen.getByTestId('hello').textContent).toBe('你好');
  });

  it('switches language and renders English content', async () => {
    const user = userEvent.setup();
    render(
      <I18nProvider>
        <Probe />
      </I18nProvider>
    );
    await user.click(screen.getByText('to-en'));
    expect(screen.getByTestId('lang').textContent).toBe('en');
    expect(screen.getByTestId('hello').textContent).toBe('Hello');
  });

  it('persists language to localStorage under key kiki-lang', async () => {
    const user = userEvent.setup();
    render(
      <I18nProvider>
        <Probe />
      </I18nProvider>
    );
    await user.click(screen.getByText('to-en'));
    expect(window.localStorage.getItem('kiki-lang')).toBe('en');
  });

  it('restores saved language on mount', () => {
    window.localStorage.setItem('kiki-lang', 'en');
    render(
      <I18nProvider>
        <Probe />
      </I18nProvider>
    );
    expect(screen.getByTestId('lang').textContent).toBe('en');
  });
});
