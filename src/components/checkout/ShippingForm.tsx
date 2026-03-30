import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  address1: z.string().min(5, 'Street address is required'),
  address2: z.string().optional(),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/, 'Valid ZIP code required'),
  country: z.string().min(2, 'Country is required'),
});

export type ShippingData = z.infer<typeof schema>;

interface ShippingFormProps {
  defaultValues?: Partial<ShippingData>;
  onSubmit: (data: ShippingData) => void;
}

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA',
  'KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
  'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT',
  'VA','WA','WV','WI','WY','DC',
];

export function ShippingForm({ defaultValues, onSubmit }: ShippingFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingData>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues || { country: 'US' },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <h2 className="font-serif text-xl text-stone-900 mb-6">Shipping Information</h2>

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="First Name"
          error={errors.firstName?.message}
          {...register('firstName')}
        />
        <Input
          label="Last Name"
          error={errors.lastName?.message}
          {...register('lastName')}
        />
      </div>

      <Input
        label="Email Address"
        type="email"
        error={errors.email?.message}
        {...register('email')}
      />

      <Input
        label="Phone (optional)"
        type="tel"
        {...register('phone')}
      />

      <Input
        label="Street Address"
        error={errors.address1?.message}
        placeholder="123 Main St"
        {...register('address1')}
      />

      <Input
        label="Apartment, suite, etc. (optional)"
        {...register('address2')}
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="City"
          error={errors.city?.message}
          {...register('city')}
        />
        <Select
          label="State"
          error={errors.state?.message}
          options={[{ value: '', label: 'Select state' }, ...US_STATES.map((s) => ({ value: s, label: s }))]}
          {...register('state')}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="ZIP Code"
          error={errors.zip?.message}
          placeholder="28801"
          {...register('zip')}
        />
        <Select
          label="Country"
          error={errors.country?.message}
          options={[{ value: 'US', label: 'United States' }]}
          {...register('country')}
        />
      </div>

      <button
        type="submit"
        className="w-full mt-2 py-3.5 bg-amber-700 text-stone-50 text-sm font-medium tracking-wide hover:bg-amber-800 transition-colors"
      >
        Continue to Payment
      </button>
    </form>
  );
}
