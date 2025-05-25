import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@/components/ui/use-toast';
import { partnerFormSchema, type PartnerFormValues } from '../schemas/partnerFormSchema';

export const usePartnerForm = () => {
  const form = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      company: '',
      activity: '',
      email: '',
      phone: '',
      message: '',
      acceptTerms: false
    }
  });

  const onSubmit = async (data: PartnerFormValues) => {
    console.log(data);
    // Ici vous enverriez normalement les données à votre backend

    toast({
      title: "Demande envoyée",
      description: "Votre demande de partenariat a bien été envoyée. Nous vous contacterons rapidement."
    });
    form.reset();
  };

  return {
    form,
    onSubmit
  };
};
