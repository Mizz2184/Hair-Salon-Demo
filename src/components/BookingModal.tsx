import React, { useState } from 'react';
import { SERVICES, STYLISTS } from '../data/salonData';
import { X, Calendar, Clock, User, CheckCircle2, Sparkles, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialDate?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialDate,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId || 'layers');
  const [selectedStylistId, setSelectedStylistId] = useState<string>('stylist-1');
  const [bookingDate, setBookingDate] = useState<string>(initialDate || '2023-11-03');
  const [selectedTime, setSelectedTime] = useState<string>('11:30 AM');
  
  // Client details
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');

  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const selectedService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];
  const selectedStylist = STYLISTS.find(st => st.id === selectedStylistId) || STYLISTS[0];

  const timeSlots = [
    '10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM'
  ];

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative text-zinc-900 dark:text-white my-8">
        
        {/* Header Bar */}
        <div className="bg-zinc-900 text-white p-6 sm:p-8 flex items-center justify-between relative">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">ONLINE RESERVATION</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase mt-1">RESERVE AT STRAND HAVEN</h2>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          
          {!confirmed ? (
            <div>
              {/* Progress Stepper Bar */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800 text-xs font-bold uppercase tracking-wider">
                <span className={step >= 1 ? 'text-amber-600 dark:text-amber-400' : 'text-zinc-400'}>1. Service</span>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <span className={step >= 2 ? 'text-amber-600 dark:text-amber-400' : 'text-zinc-400'}>2. Stylist</span>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <span className={step >= 3 ? 'text-amber-600 dark:text-amber-400' : 'text-zinc-400'}>3. Date & Time</span>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <span className={step >= 4 ? 'text-amber-600 dark:text-amber-400' : 'text-zinc-400'}>4. Details</span>
              </div>

              {/* Step 1: Select Service */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-bold uppercase">SELECT TREATMENT</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SERVICES.map((serv) => (
                      <div
                        key={serv.id}
                        onClick={() => setSelectedServiceId(serv.id)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                          selectedServiceId === serv.id
                            ? 'border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-zinc-950 font-bold shadow-md'
                            : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600'
                        }`}
                      >
                        <div>
                          <p className="font-display text-lg uppercase font-bold">{serv.name}</p>
                          <p className="text-xs opacity-75">{serv.durationMinutes} Mins</p>
                        </div>
                        <span className="font-mono text-sm font-bold">£{serv.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 flex justify-end">
                    <button
                      onClick={() => setStep(2)}
                      className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold uppercase text-xs tracking-wider px-8 py-3.5 rounded-full hover:opacity-90 flex items-center gap-2 cursor-pointer"
                    >
                      <span>CONTINUE TO STYLIST</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Select Stylist */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-bold uppercase">SELECT YOUR ARTIST</h3>
                  <div className="space-y-3">
                    {STYLISTS.map((st) => (
                      <div
                        key={st.id}
                        onClick={() => setSelectedStylistId(st.id)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center gap-4 ${
                          selectedStylistId === st.id
                            ? 'border-amber-500 bg-amber-500/10 dark:bg-amber-500/10 shadow-md ring-2 ring-amber-500'
                            : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-400'
                        }`}
                      >
                        <img src={st.avatar} alt={st.name} className="w-12 h-12 rounded-full object-cover shrink-0" />
                        <div className="flex-1">
                          <h4 className="font-bold text-sm uppercase">{st.name}</h4>
                          <p className="text-xs text-zinc-500">{st.role}</p>
                          <div className="flex gap-1 mt-1 text-[10px] text-amber-500 font-bold">
                            {st.specialties.slice(0, 2).map((sp, idx) => (
                              <span key={idx} className="bg-amber-100 dark:bg-amber-900/40 px-2 py-0.5 rounded">#{sp}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 flex justify-between">
                    <button
                      onClick={() => setStep(1)}
                      className="border border-zinc-300 dark:border-zinc-700 font-bold text-xs uppercase px-6 py-3.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
                    >
                      BACK
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold uppercase text-xs tracking-wider px-8 py-3.5 rounded-full hover:opacity-90 flex items-center gap-2 cursor-pointer"
                    >
                      <span>SELECT DATE & TIME</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Date & Time */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-bold uppercase">DATE & SLOT</h3>
                  
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2">Select Date</label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={e => setBookingDate(e.target.value)}
                      className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl p-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2">Available Time Slots</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                            selectedTime === time
                              ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-md'
                              : 'bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 flex justify-between">
                    <button
                      onClick={() => setStep(2)}
                      className="border border-zinc-300 dark:border-zinc-700 font-bold text-xs uppercase px-6 py-3.5 rounded-full cursor-pointer"
                    >
                      BACK
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold uppercase text-xs tracking-wider px-8 py-3.5 rounded-full hover:opacity-90 flex items-center gap-2 cursor-pointer"
                    >
                      <span>GUEST DETAILS</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Information */}
              {step === 4 && (
                <form onSubmit={handleCompleteBooking} className="space-y-4">
                  <h3 className="font-display text-2xl font-bold uppercase">YOUR DETAILS</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alexandra Smith"
                        value={clientName}
                        onChange={e => setClientName(e.target.value)}
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl p-3 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="alexandra@example.com"
                        value={clientEmail}
                        onChange={e => setClientEmail(e.target.value)}
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl p-3 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+44 7700 900077"
                      value={clientPhone}
                      onChange={e => setClientPhone(e.target.value)}
                      className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl p-3 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Special Notes / Hair Requirements</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Looking for subtle face-framing layers, long history of balayage..."
                      value={specialNotes}
                      onChange={e => setSpecialNotes(e.target.value)}
                      className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl p-3 text-sm"
                    ></textarea>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-2xl space-y-2 border border-zinc-200 dark:border-zinc-800 text-xs">
                    <div className="flex justify-between font-bold">
                      <span>{selectedService.name} with {selectedStylist.name}</span>
                      <span>£{selectedService.price}</span>
                    </div>
                    <div className="text-zinc-500 flex justify-between">
                      <span>Date & Time</span>
                      <span>{bookingDate} @ {selectedTime}</span>
                    </div>
                    <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 text-[11px] text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Deposit requirement waived for online preview reservation</span>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="border border-zinc-300 dark:border-zinc-700 font-bold text-xs uppercase px-6 py-3.5 rounded-full cursor-pointer"
                    >
                      BACK
                    </button>
                    <button
                      type="submit"
                      className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold uppercase text-xs tracking-wider px-8 py-3.5 rounded-full hover:opacity-90 flex items-center gap-2 cursor-pointer shadow-lg"
                    >
                      <span>CONFIRM APPOINTMENT</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          ) : (
            /* Confirmation Screen */
            <div className="text-center py-8 space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">APPOINTMENT CONFIRMED</span>
                <h3 className="font-display text-4xl font-bold uppercase">WE LOOK FORWARD TO STYLING YOU</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-md mx-auto">
                  A confirmation email has been dispatched to <strong className="text-zinc-900 dark:text-white">{clientEmail}</strong>.
                </p>
              </div>

              <div className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-2xl max-w-md mx-auto text-left space-y-3 text-xs border border-zinc-200 dark:border-zinc-800">
                <div className="flex justify-between py-1 border-b border-zinc-200 dark:border-zinc-800">
                  <span className="text-zinc-500">Service:</span>
                  <span className="font-bold uppercase">{selectedService.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-200 dark:border-zinc-800">
                  <span className="text-zinc-500">Stylist:</span>
                  <span className="font-bold">{selectedStylist.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-200 dark:border-zinc-800">
                  <span className="text-zinc-500">Date & Time:</span>
                  <span className="font-bold">{bookingDate} at {selectedTime}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-zinc-500">Location:</span>
                  <span className="font-bold">Marylebone Flagship, London</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold uppercase text-xs tracking-widest px-10 py-4 rounded-full hover:opacity-90 cursor-pointer"
              >
                RETURN TO WEBSITE
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
