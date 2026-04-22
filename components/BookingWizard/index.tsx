'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from '@/lib/i18n';
import { useBooking } from '@/lib/booking';
import { services, ui } from '@/lib/content';
import { StepService } from './StepService';
import { StepDate } from './StepDate';
import { StepLocation, type LocationChoice } from './StepLocation';
import { StepContact } from './StepContact';
import { buildWhatsAppUrl } from './buildWhatsAppUrl';
import { isValidMyPhone, normaliseMyPhone } from './validatePhone';

const TOTAL_STEPS = 4;

export function BookingWizard() {
  const { t, lang } = useTranslation();
  const { wizardRef, consumePendingService } = useBooking();

  const [step, setStep] = useState(1);
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [dateIso, setDateIso] = useState('');
  const [dateError, setDateError] = useState<string | undefined>();
  const [locationChoice, setLocationChoice] = useState<LocationChoice>('studio');
  const [area, setArea] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState<string | undefined>();
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState<string | undefined>();
  const [submitted, setSubmitted] = useState<string | null>(null);

  useEffect(() => {
    const pending = consumePendingService();
    if (pending) {
      setServiceId(pending);
      setStep(2);
    }
  }, [consumePendingService]);

  const minDate = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().slice(0, 10);
  })();

  const validateAndAdvance = () => {
    if (step === 1) {
      if (!serviceId) return;
      setStep(2);
      return;
    }
    if (step === 2) {
      if (!dateIso || dateIso < minDate) {
        setDateError(t(ui.booking.step2.error));
        return;
      }
      setDateError(undefined);
      setStep(3);
      return;
    }
    if (step === 3) {
      setStep(4);
      return;
    }
    if (step === 4) {
      let ok = true;
      if (!name.trim()) {
        setNameError(t(ui.booking.step4.nameError));
        ok = false;
      } else {
        setNameError(undefined);
      }
      if (!isValidMyPhone(phone)) {
        setPhoneError(t(ui.booking.step4.phoneError));
        ok = false;
      } else {
        setPhoneError(undefined);
      }
      if (!ok) return;
      submit();
    }
  };

  const submit = () => {
    const svc = services.find((s) => s.id === serviceId);
    if (!svc) return;
    const serviceLabel = `${t(svc.name)} (RM${svc.price.toLocaleString()})`;
    const location =
      locationChoice === 'studio'
        ? t(ui.booking.step3.studio)
        : `${t(ui.booking.step3.onsite)}${area ? ` · ${area}` : ''}`;
    const url = buildWhatsAppUrl(
      {
        serviceLabel,
        dateIso,
        location,
        name: name.trim(),
        phone: normaliseMyPhone(phone)
      },
      { lang }
    );
    setSubmitted(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const progressLabel = t(ui.booking.progress)
    .replace('{current}', String(step))
    .replace('{total}', String(TOTAL_STEPS));

  return (
    <section id="booking" ref={wizardRef} className="bg-cream py-16 px-6">
      <div className="max-w-content mx-auto">
        <p className="eyebrow mb-3">{t(ui.booking.eyebrow)}</p>
        <h2 className="headline text-4xl md:text-5xl mb-10">{t(ui.booking.title)}</h2>

        <div className="bg-surface border border-tan/50 p-6 md:p-8">
          <div className="flex gap-1 mb-3">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 ${i + 1 <= step ? 'bg-espresso' : 'bg-tan/50'}`}
              />
            ))}
          </div>
          <p className="eyebrow mb-6 text-caramel">{progressLabel}</p>

          {submitted ? (
            <div>
              <p className="font-sans text-base text-espresso mb-3">{t(ui.booking.redirecting)}</p>
              <a href={submitted} target="_blank" rel="noopener noreferrer" className="link-underline text-caramel">
                {t(ui.booking.manualLink)}
              </a>
            </div>
          ) : (
            <>
              {step === 1 && <StepService value={serviceId} onChange={setServiceId} />}
              {step === 2 && <StepDate value={dateIso} onChange={setDateIso} error={dateError} />}
              {step === 3 && (
                <StepLocation
                  choice={locationChoice}
                  area={area}
                  onChoiceChange={setLocationChoice}
                  onAreaChange={setArea}
                />
              )}
              {step === 4 && (
                <StepContact
                  name={name}
                  phone={phone}
                  nameError={nameError}
                  phoneError={phoneError}
                  onNameChange={setName}
                  onPhoneChange={setPhone}
                />
              )}

              <div className="flex gap-3 mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="font-sans text-sm uppercase tracking-wider px-4 py-3 border border-espresso text-espresso flex-1"
                  >
                    {t(ui.booking.back)}
                  </button>
                )}
                <button
                  type="button"
                  onClick={validateAndAdvance}
                  className="btn-primary flex-[2]"
                >
                  {step < TOTAL_STEPS ? t(ui.booking.next) : t(ui.booking.submit)}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
