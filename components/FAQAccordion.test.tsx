import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { I18nProvider } from '@/lib/i18n';
import { FAQAccordion } from './FAQAccordion';

function renderFAQ() {
  return render(
    <I18nProvider>
      <FAQAccordion />
    </I18nProvider>
  );
}

describe('FAQAccordion', () => {
  beforeEach(() => window.localStorage.clear());

  it('collapses all answers by default', () => {
    renderFAQ();
    expect(screen.queryByText(/订金不退/)).not.toBeVisible();
  });

  it('expands an item when its question is clicked', async () => {
    const user = userEvent.setup();
    renderFAQ();
    await user.click(screen.getByRole('button', { name: /要怎么预约/ }));
    expect(screen.getByText(/我会通过 WhatsApp 确认/)).toBeVisible();
  });

  it('collapses a previously-expanded item when clicked again', async () => {
    const user = userEvent.setup();
    renderFAQ();
    const q = screen.getByRole('button', { name: /要怎么预约/ });
    await user.click(q);
    await user.click(q);
    expect(screen.queryByText(/我会通过 WhatsApp 确认/)).not.toBeVisible();
  });
});
