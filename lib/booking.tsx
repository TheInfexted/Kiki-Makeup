'use client';

import { createContext, useCallback, useContext, useRef, useState, type ReactNode, type RefObject } from 'react';

type BookingContextValue = {
  pendingServiceId: string | null;
  setPendingService: (id: string) => void;
  consumePendingService: () => string | null;
  wizardRef: RefObject<HTMLDivElement>;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [pendingServiceId, setPendingServiceId] = useState<string | null>(null);
  const wizardRef = useRef<HTMLDivElement>(null);

  const setPendingService = useCallback((id: string) => {
    setPendingServiceId(id);
    wizardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const consumePendingService = useCallback(() => {
    const id = pendingServiceId;
    setPendingServiceId(null);
    return id;
  }, [pendingServiceId]);

  return (
    <BookingContext.Provider value={{ pendingServiceId, setPendingService, consumePendingService, wizardRef }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within BookingProvider');
  return ctx;
}
