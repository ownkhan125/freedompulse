import { LegalLayout } from "@/sections/pages/LegalLayout";

export const metadata = {
  title: "Privacy Policy — FreedomPulse",
  description: "How the FreedomPulse campaign collects, uses, and protects your information.",
};

const SECTIONS = [
  {
    id: "info-we-collect",
    heading: "Information we collect",
    body: [
      "When you interact with the FreedomPulse campaign — by signing up to volunteer, donating, attending an event, sending a message, or subscribing to updates — we collect the information you give us directly.",
      { type: "h3", text: "Information you provide" },
      {
        type: "ul",
        items: [
          "Name, email address, and phone number when you complete a form.",
          "Postal address and ZIP code for shift assignment and compliance reporting.",
          "Donation information processed by our third-party payment provider.",
          "Notes you share in volunteer or contact forms — for example, languages spoken or accessibility needs.",
        ],
      },
      { type: "h3", text: "Information collected automatically" },
      {
        type: "ul",
        items: [
          "Basic device and browser information when you visit the site.",
          "Aggregate, anonymized analytics about which pages perform best.",
          "Cookies strictly necessary to keep the site running, plus optional analytics cookies you can decline.",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    heading: "How we use your information",
    body: [
      "We use your information to run the campaign and to keep you informed if you ask us to. Specifically:",
      {
        type: "ul",
        items: [
          "Coordinating volunteer shifts, training, and event RSVPs.",
          "Processing donations and meeting our legal reporting obligations.",
          "Responding to messages you send us.",
          "Sending campaign updates if you have opted in.",
          "Improving the site, the field operation, and the candidate's understanding of district concerns.",
        ],
      },
    ],
  },
  {
    id: "how-we-share",
    heading: "How we share your information",
    body: [
      "We do not sell your information. We share it only when necessary to run the campaign or comply with the law.",
      {
        type: "ul",
        items: [
          "Service providers we contract — payment processing, email delivery, hosting — that have agreed to protect your data.",
          "Government reporting required under federal and Oregon election law (typically donor name, address, employer, and occupation for contributions above the disclosure threshold).",
          "When required by valid legal process, or to protect rights, safety, or property.",
        ],
      },
    ],
  },
  {
    id: "sms",
    heading: "SMS and text messaging",
    body: [
      "Mobile communications are opt-in.",
      { type: "h3", text: "What we collect" },
      "If you opt in to text messages, we collect your mobile number and the timestamp of your consent.",
      { type: "h3", text: "How your number is used" },
      "We send shift confirmations, last-minute event updates, and occasional campaign messages. We never share your number with third parties for marketing.",
      { type: "h3", text: "Frequency" },
      "Roughly four messages per month for campaign updates, plus event-specific messages if you RSVP.",
      { type: "h3", text: "Opt out" },
      "Reply STOP at any time to opt out. Reply HELP for assistance. Message and data rates may apply.",
    ],
  },
  {
    id: "rights",
    heading: "Your rights",
    body: [
      "Depending on where you live, you may have the right to access, correct, or delete the personal information we hold about you. Oregon residents have additional rights under the Oregon Consumer Privacy Act.",
      "To exercise these rights, email privacy@freedompulse.org. We will respond within 45 days.",
    ],
  },
  {
    id: "security",
    heading: "Data security",
    body: [
      "We use industry-standard administrative, technical, and physical safeguards to protect your information. No system is perfect — if we ever detect a breach affecting your data, we will notify you in accordance with applicable law.",
    ],
  },
  {
    id: "retention",
    heading: "Data retention",
    body: [
      "We keep your information only as long as needed to run the campaign and meet our legal obligations. After the campaign cycle ends, we either delete personal information or retain a limited record where required by election law.",
    ],
  },
  {
    id: "third-party",
    heading: "Third-party links",
    body: [
      "The site may link to external resources — news articles, partner organizations, government pages. We are not responsible for the privacy practices of those sites. Review their policies separately.",
    ],
  },
  {
    id: "childrens",
    heading: "Children's privacy",
    body: [
      "The site is not directed to children under 13, and we do not knowingly collect information from them. If you believe a child has provided us information, please contact privacy@freedompulse.org so we can delete it.",
    ],
  },
  {
    id: "international",
    heading: "International users",
    body: [
      "The campaign is based in Oregon, United States. If you are accessing the site from outside the US, please be aware that your information will be processed in the US, where data-protection law may differ from your home country's.",
    ],
  },
  {
    id: "accessibility",
    heading: "Accessibility",
    body: [
      "We design for accessibility — keyboard navigation, sufficient contrast, descriptive labels. If you encounter a barrier, email accessibility@freedompulse.org and we will work with you on an accommodation.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    body: [
      "We may update this policy from time to time. The 'last updated' date at the top reflects the most recent revision. Material changes will be highlighted on the site.",
    ],
  },
  {
    id: "contact",
    heading: "Contact",
    body: [
      "Questions about this policy? Email privacy@freedompulse.org or write to FreedomPulse for Congress, 2026 NE Alberta St, Suite 4, Portland, OR 97211.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title={"Privacy Policy"}
      eyebrow="Privacy"
      kicker="Plain language, no fine print. How we collect, use, and protect the information you share with the FreedomPulse campaign."
      lastUpdated="May 16, 2026"
      sections={SECTIONS}
    />
  );
}
