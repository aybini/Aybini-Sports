'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does AYBINI ensure the authenticity and uniqueness of athlete Virtual Stakes?",
    answer: "AYBINI partners directly with athletes, teams, and sports organizations to create officially licensed Virtual Stakes. Each NFT is minted on a secure blockchain with a unique identifier, ensuring its authenticity and scarcity. We also implement rigorous verification processes to prevent fraud and maintain the integrity of our marketplace."
  },
  {
    question: "What measures are in place to protect investors from market manipulation?",
    answer: "We employ advanced AI algorithms to monitor trading patterns and detect potential market manipulation. Our platform also implements circuit breakers to prevent extreme price volatility. Additionally, we maintain strict KYC (Know Your Customer) and AML (Anti-Money Laundering) policies to ensure a fair and transparent marketplace."
  },
  {
    question: "How does AYBINI generate revenue, and what's the potential for investor returns?",
    answer: "AYBINI generates revenue through transaction fees, premium features, and partnerships with sports organizations. As the platform grows, we anticipate increased trading volume and user adoption, potentially leading to higher returns for early investors. We also explore new revenue streams such as exclusive content and virtual experiences tied to NFT ownership."
  },
  {
    question: "What sets AYBINI apart from other sports investment or NFT platforms?",
    answer: "AYBINI uniquely combines sports fandom with financial investment, offering a more engaging and potentially lucrative experience. Our AI-powered insights, real-time performance tracking, and augmented reality features provide unparalleled depth to the investment process. Furthermore, our direct partnerships with athletes and teams ensure a steady stream of high-quality, exclusive Virtual Stakes."
  },
  {
    question: "How does AYBINI plan to scale and maintain its technological edge?",
    answer: "We have a robust development roadmap that includes expanding our AI capabilities, enhancing our blockchain infrastructure or payment options for faster transactions, and introducing new features like virtual reality experiences. We're also actively exploring partnerships with major tech companies to leverage cutting-edge technologies and ensure AYBINI remains at the forefront of the sports investment industry."
  },
  {
    question: "Can you explain the new features like Sponsorship Pools and Fantasy Investment Leagues?",
    answer: "Sponsorship Pools allow fans to collectively fund athletes or teams in exchange for exclusive benefits, creating a deeper connection between fans and their favorite sports figures. Fantasy Investment Leagues gamify the investment experience, allowing users to compete based on their portfolio performance. These features, along with Milestone-Based Bonuses, add layers of engagement and potential rewards, making AYBINI a more immersive and exciting platform for sports fans and investors alike."
  },
  {
    question: "How do these new features benefit investors and the platform's growth?",
    answer: "These features significantly enhance user engagement and retention. Sponsorship Pools create new revenue streams and strengthen athlete-fan relationships. Fantasy Investment Leagues increase platform activity and encourage users to diversify their portfolios. Milestone-Based Bonuses incentivize long-term investment and active participation. Together, these features create a more vibrant ecosystem, potentially leading to increased platform value and investor returns."
  }
]

export function InvestorFAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

