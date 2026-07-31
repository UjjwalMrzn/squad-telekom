import { VoiceOTPHero } from './sections/VoiceOTPHero';
import { VoiceOTPFeatures } from './sections/VoiceOTPFeatures';
import { VoiceOTPBenefits } from './sections/VoiceOTPBenefits';
import { VoiceOTPFaq } from './sections/VoiceOTPFaq';

export const VoiceOTP = () => {
  return (
    <main className="w-full bg-white dark:bg-slate-900 flex flex-col overflow-hidden">
      <VoiceOTPHero />
      <VoiceOTPFeatures />
      <VoiceOTPBenefits />
      <VoiceOTPFaq />
    </main>
  );
};