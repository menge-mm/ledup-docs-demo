import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';
const faqs = [
  {
    id: 1,
    q: 'What is Web3?',
    a: 'Web3 refers to the next generation of the internet, built on decentralized blockchain technology, enabling user ownership and control of data and digital assets.',
  },
  {
    id: 2,
    q: 'How do I start developing for Web3?',
    a: 'Begin by learning blockchain basics, then choose a platform (like Ethereum) and start with simple smart contracts using languages like Solidity.',
  },
  {
    id: 3,
    q: 'What are smart contracts?',
    a: 'Smart contracts are self-executing contracts with the terms directly written into code, automatically enforcing agreements without intermediaries.',
  },
  {
    id: 4,
    q: 'How does blockchain differ from traditional databases?',
    a: 'Blockchain is decentralized, immutable, and transparent, while traditional databases are typically centralized and controlled by a single entity.',
  },
];

const FAQs = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section className="mt-16 animate-fade-in">
      <h2 className="text-3xl font-bold mb-8">Quick FAQs</h2>
      <div className="grid grid-cols-1 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 shadow"
          >
            <h3 className="text-xl font-semibold mb-2 flex justify-between items-center">
              {faq.q}
              <button onClick={() => handleExpand(faq.id)} aria-label="Toggle FAQ">
                {expanded === faq.id ? (
                  <ChevronUp size={20} className="text-teal-400" />
                ) : (
                  <ChevronDown size={20} className="text-teal-400" />
                )}
              </button>
            </h3>
            {expanded === faq.id && <p className="text-gray-500 transition-all duration-300 ">{faq.a}</p>}
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="#"
          className="text-blue-950 hover:text-blue-800 transition-colors duration-300 flex items-center justify-center"
        >
          View all FAQs
          <ChevronDown size={20} className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default FAQs;
