import DealerFeature from '@/components/betro/dealerFeature';
import GetStarted from '@/components/betro/getStarted';
import WhyChooseUs from '@/components/betro/whyChooseUs';
import PageHeader from '@/components/PageHeader';

export default function DealerPage() {
  return (
    <main>
      <PageHeader title="Betpro Dealer" currentPage="Betpro Dealer" />
   
   {/* Section 2: Trusted Dealer Info (From Image 2) */}
      <DealerFeature />
      <WhyChooseUs/>
      <GetStarted/>

   
    </main>
  );
}