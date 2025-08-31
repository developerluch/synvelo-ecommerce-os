import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to set up Synvelo?",
      answer: "Most users are up and running within 15 minutes. Our onboarding wizard guides you through connecting your Amazon Seller Central account and configuring your first automations. No technical skills required."
    },
    {
      question: "Is my Amazon account data secure?",
      answer: "Absolutely. We use bank-level encryption, are SOC 2 compliant, and only access data through official Amazon APIs. Your credentials are never stored - we use secure OAuth tokens that can be revoked anytime."
    },
    {
      question: "What's included in the 14-day free trial?",
      answer: "Full access to all features including 8 AI agents, real-time dashboard, automation bots, and all integrations. No credit card required. You can cancel anytime with no obligations."
    },
    {
      question: "How much can I realistically save?",
      answer: "Our customers typically save 10-15 hours per week and $250+ monthly by replacing multiple expensive tools. The average ROI is 400% within the first 3 months of using Synvelo."
    },
    {
      question: "Do you integrate with other tools I'm already using?",
      answer: "Yes! We integrate with 15+ popular tools including Keepa, Jungle Scout, Helium 10, QuickBooks, Google Sheets, and more. Most integrations take just a few clicks to set up."
    },
    {
      question: "What happens if Amazon changes their policies?",
      answer: "We monitor Amazon's terms of service 24/7 and automatically update our automations to stay compliant. Our compliance agent alerts you to any policy changes that might affect your business."
    },
    {
      question: "Can I use this for multiple Amazon accounts?",
      answer: "Yes! Our Pro and Enterprise plans support multiple seller accounts. You can manage all your accounts from a single dashboard with account-specific automations."
    },
    {
      question: "What if I need help or have questions?",
      answer: "We offer 24/7 live chat support, comprehensive documentation, video tutorials, and weekly Q&A sessions. Our average response time is under 2 minutes during business hours."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/10 text-navy text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Got Questions? We've Got{" "}
            <span className="text-gradient-navy bg-clip-text text-transparent">Answers</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Everything you need to know about Synvelo and how it can transform your Amazon business
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-glass backdrop-blur-lg border-glass-border rounded-lg px-6 hover:border-glass-border-hover transition-all duration-300"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline group">
                  <span className="text-lg font-semibold group-hover:text-navy transition-colors">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-foreground-secondary leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12 p-8 bg-glass backdrop-blur-lg rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-foreground-secondary mb-6">
              Our team is here to help you succeed. Get answers in under 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-navy hover:bg-navy/90 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Start Live Chat
              </button>
              <button className="px-6 py-3 border border-glass-border hover:border-glass-border-hover bg-glass-hover rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Schedule Demo Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;