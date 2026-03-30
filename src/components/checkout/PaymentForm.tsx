import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CreditCard, Lock } from 'lucide-react';
import { Input } from '../ui/Input';

const schema = z.object({
  cardName: z.string().min(1, 'Cardholder name is required'),
  cardNumber: z
    .string()
    .regex(/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/, 'Enter a valid 16-digit card number'),
  expiry: z.string().regex(/^\d{2}\/\d{2}$/, 'Enter expiry as MM/YY'),
  cvv: z.string().regex(/^\d{3,4}$/, 'Enter a valid CVV'),
});

export type PaymentData = z.infer<typeof schema>;

interface PaymentFormProps {
  onSubmit: (data: PaymentData) => void;
  onBack: () => void;
}

export function PaymentForm({ onSubmit, onBack }: PaymentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<PaymentData>({
    resolver: zodResolver(schema),
  });

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 16);
    return digits.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 4);
    if (digits.length >= 3) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    return digits;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-xl text-stone-900">Payment Information</h2>
        <div className="flex items-center gap-1.5 text-xs text-stone-500">
          <Lock size={12} />
          <span>Secure checkout</span>
        </div>
      </div>

      <div className="p-4 bg-amber-50 border border-amber-200 text-sm text-amber-800 flex items-center gap-2">
        <CreditCard size={16} />
        <span>This is a demo checkout. No real payment will be processed.</span>
      </div>

      <Input
        label="Cardholder Name"
        placeholder="Jane Smith"
        error={errors.cardName?.message}
        {...register('cardName')}
      />

      <Input
        label="Card Number"
        placeholder="1234 5678 9012 3456"
        maxLength={19}
        error={errors.cardNumber?.message}
        {...register('cardNumber', {
          onChange: (e) => {
            const formatted = formatCardNumber(e.target.value);
            setValue('cardNumber', formatted);
          },
        })}
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Expiry Date"
          placeholder="MM/YY"
          maxLength={5}
          error={errors.expiry?.message}
          {...register('expiry', {
            onChange: (e) => {
              const formatted = formatExpiry(e.target.value);
              setValue('expiry', formatted);
            },
          })}
        />
        <Input
          label="CVV"
          placeholder="123"
          maxLength={4}
          error={errors.cvv?.message}
          type="password"
          {...register('cvv')}
        />
      </div>

      <div className="flex gap-3 mt-2">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 py-3.5 border border-stone-300 text-stone-700 text-sm font-medium hover:bg-stone-100 transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          className="flex-1 py-3.5 bg-amber-700 text-stone-50 text-sm font-medium tracking-wide hover:bg-amber-800 transition-colors"
        >
          Review Order
        </button>
      </div>
    </form>
  );
}
