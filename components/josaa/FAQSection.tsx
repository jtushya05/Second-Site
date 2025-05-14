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
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{faq.answer}</p>
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
      answer: "Required documents include JEE Main and Advanced admit cards, rank cards, Class 10 and 12 marksheets and certificates, category certificates (if applicable), PwD certificate (if applicable), passport-sized photographs, and a valid ID proof."
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
      answer: "Professional counselling provides expert insights on choice filling strategy, information about colleges and branches, career prospects, and personalized guidance based on your rank and preferences, helping you make informed decisions."
    },
    {
      question: "Is it possible to upgrade my seat in later rounds if I've already accepted a seat?",
      answer: "Yes, if you've accepted a seat and completed the necessary reporting process, you can still be considered for upgrades in subsequent rounds based on your preferences and the availability of seats."
    },
    {
      question: "What is the CSAB Special Round, and who is eligible to participate?",
      answer: "The CSAB Special Round is an additional counselling process conducted by the Central Seat Allocation Board to allocate vacant seats in National Institutes of Technology (NITs), Indian Institutes of Information Technology (IIITs), and Government Funded Technical Institutes (GFTIs) after the completion of JoSAA counselling. Candidates who are eligible to participate include: those who did not participate in JoSAA counselling but have a valid JEE Main rank, those who participated in JoSAA counselling but were not allotted a seat, and those who were allotted a seat in JoSAA and opted to participate in the CSAB Special Round during reporting to the allotted institute."
    },
    {
      question: "Is it necessary to register separately for the CSAB Special Round if I have already registered with JoSAA?",
      answer: "Yes, separate registration is required for the CSAB Special Round. Even if you have registered with JoSAA, you must complete a fresh online registration on the CSAB portal to participate in the Special Round. Failure to do so will result in ineligibility for seat allocation in the Special Round."
    },
    {
      question: "What documents are required for registration in the CSAB Special Round?",
      answer: "Candidates must upload scanned copies of the following documents during the CSAB Special Round registration: Class 10 certificate, Class 12 marksheet, Category certificate (if applicable) for General-EWS, OBC-NCL, SC, or ST candidates, PwD certificate (if applicable), NRI candidates need to upload a scanned image of their passport, OCI/PIO candidates need to upload the OCI/PIO card, and Bank account details (account number, IFSC code, bank name) for refund purposes."
    },
    {
      question: "What is the process for seat allotment in the CSAB Special Round?",
      answer: "The seat allotment process in the CSAB Special Round involves the following steps: Registration - candidates must register online on the CSAB portal and pay the counselling enrolment fee; Choice Filling - after registration, candidates can fill in their preferred choices of institutes and courses; Seat Allotment - based on the filled choices and merit, seats are allotted to candidates; Acceptance - candidates must accept the allotted seat by choosing one of the following options: Freeze, Slide, or Float; Reporting - candidates must report to the allotted institute for document verification and fee payment."
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