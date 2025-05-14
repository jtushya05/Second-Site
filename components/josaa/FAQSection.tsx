import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const FAQItem: React.FC<{
  faq: FAQ;
  isOpen: boolean;
  toggleOpen: () => void;
}> = ({ faq, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <span className="text-lg font-medium text-[#212070]">{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[#212070]" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#212070]" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[1000px] pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-gray-600 whitespace-pre-line">
          {faq.answer.split('•').map((item, index) => 
            index === 0 ? item : (
              <div key={index} className="flex space-x-2 ml-4">
                <span>•</span>
                <span>{item}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question: "When does the JoSAA counselling process begin?",
      answer: "JoSAA counselling typically begins in June after the JEE Advanced results are announced. The exact dates vary each year and are announced on the official JoSAA website."
    },
    {
      question: "How many rounds of counselling are there in JoSAA?",
      answer: "JoSAA counselling usually consists of 6-7 rounds. The number of rounds may vary slightly from year to year based on seat availability and other factors."
    },
    {
      question: "What documents are required for JoSAA counselling?",
      answer: "The following documents are required for JoSAA counselling:\n\nExam Documents:\n• JEE Main Admit Card and Rank Card\n• JEE Advanced Admit Card (if qualified)\n\nAcademic Documents:\n• Class 10 Marksheet and Certificate\n• Class 12 Marksheet and Certificate\n\nOther Requirements:\n• Recent passport-sized photographs\n• Valid government ID proof\n• Category/PwD certificates (if applicable)"
    },
    {
      question: "Can I change my choices after locking them?",
      answer: "No, once you have locked your choices, you cannot modify them. This is why it's crucial to carefully consider and arrange your preferences before locking them."
    },
    {
      question: "What happens if I don't accept the allocated seat?",
      answer: "If you don't accept the allocated seat by reporting to the assigned institute within the specified timeframe, your seat will be cancelled and allocated to another candidate in the subsequent round of counselling."
    },
    {
      question: "How does the choice filling strategy impact my seat allocation?",
      answer: "Your choice filling strategy is crucial as seats are allocated based on your rank and the order of preferences you submit. A well-thought-out strategy increases your chances of getting a better college or branch as per your preferences."
    },
    {
      question: "What are the benefits of professional JoSAA counselling?",
      answer: "Professional JoSAA counselling offers several key advantages:\n\nStrategic Benefits:\n• Expert guidance on choice filling strategy\n• Analysis of previous year cutoffs\n• Real-time support during counselling rounds\n\nInformation Access:\n• Detailed college and branch insights\n• Career prospects for different programs\n• Campus life and placement statistics\n\nPersonalized Support:\n• Rank-based college suggestions\n• Branch recommendations aligned with interests\n• 24/7 support during critical decision periods"
    },
    {
      question: "Is it possible to upgrade my seat in later rounds if I've already accepted a seat?",
      answer: "Yes, if you've accepted a seat and completed the necessary reporting process, you can still be considered for upgrades in subsequent rounds based on your preferences and the availability of seats."
    },
    {
      question: "What is the CSAB Special Round, and who is eligible to participate?",
      answer: "The CSAB Special Round is an additional counselling process conducted by the Central Seat Allocation Board after JoSAA counselling completion. It allocates vacant seats in:\n\n• National Institutes of Technology (NITs)\n• Indian Institutes of Information Technology (IIITs)\n• Government Funded Technical Institutes (GFTIs)\n\nEligible candidates include:\n\n• Those with a valid JEE Main rank who didn't participate in JoSAA counselling\n• Those who participated in JoSAA but weren't allotted any seat\n• Those who were allotted a JoSAA seat and opted for CSAB Special Round during reporting"
    },
    {
      question: "Is it necessary to register separately for the CSAB Special Round if I have already registered with JoSAA?",
      answer: "Yes, separate registration is required for the CSAB Special Round. Even if you have registered with JoSAA, you must complete a fresh online registration on the CSAB portal to participate in the Special Round. Failure to do so will result in ineligibility for seat allocation in the Special Round."
    },
    {
      question: "What documents are required for registration in the CSAB Special Round?",
      answer: "Candidates must upload scanned copies of the following documents during registration:\n\nBasic Documents:\n• Class 10 certificate\n• Class 12 marksheet\n• Valid ID proof\n\nCategory-specific Documents (if applicable):\n• Category certificate (General-EWS/OBC-NCL/SC/ST)\n• PwD certificate\n• NRI candidates: Passport scan\n• OCI/PIO candidates: OCI/PIO card\n\nOther Requirements:\n• Bank account details for refund (account number, IFSC code, bank name)"
    },
    {
      question: "What is the process for seat allotment in the CSAB Special Round?",
      answer: "The CSAB Special Round follows a structured process:\n\n1. Registration:\n• Register online on CSAB portal\n• Pay counselling enrolment fee\n\n2. Choice Filling:\n• Fill preferred institutes and courses\n• Carefully arrange preferences\n\n3. Seat Allotment:\n• Based on choices and merit rank\n• Results announced on portal\n\n4. Seat Acceptance:\n• Choose from options: Freeze, Slide, or Float\n• Pay seat acceptance fee\n\n5. Final Reporting:\n• Visit allotted institute\n• Complete document verification\n• Pay institute fees"
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212070] mb-4">JoSAA & CSAB Counselling FAQs</h2>
          <p className="text-gray-600">
            Find answers to common questions about the JoSAA and CSAB counselling processes, important dates, document requirements, and our expert guidance services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-sm p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            Don't see your question here? Contact our team for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="tel:+919894018848" 
              className="flex items-center text-[#212070] font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 98940 18848
            </a>
            <a 
              href="mailto:info@englisharenaglobal.com" 
              className="flex items-center text-[#212070] font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@englisharenaglobal.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;