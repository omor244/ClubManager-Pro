import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "How do I create a new club on ClubSphere?",
        answer: "To create a club, navigate to your Dashboard and click on the 'Create Club' button. You will need to provide a name, description, and category. Once submitted, our admins will review and approve it within 24 hours."
    },
    {
        question: "Is there a limit to how many clubs I can join?",
        answer: "No, you can join as many communities as you like! We encourage students to explore different interests, from technology and arts to sports and business."
    },
    {
        question: "Can I host paid events through the platform?",
        answer: "Yes, ClubSphere supports both free and paid events. For paid events, you can set a ticket price and manage registrations directly from your manager dashboard."
    },
    {
        question: "How can I contact a club administrator?",
        answer: "Every club's 'Details Page' has a contact button that allows you to send a message directly to the club leaders or view their social media links."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 px-4 ">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary  mb-4">
                        Common <span className="text-primary">Questions</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Everything you need to know about joining and managing clubs on ClubSphere.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4 ">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 dark:border-primary rounded-2xl bg-white dark:bg-gray-900 overflow-hidden transition-all duration-300 shadow-sm"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                    {faq.question}
                                </span>
                                <span className="ml-4 flex-shrink-0 text-primary">
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;