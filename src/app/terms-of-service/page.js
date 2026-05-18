import { LegalLayout } from "@/sections/pages/LegalLayout";

export const metadata = {
  title: "Terms of Service — FreedomPulse",
  description: "The terms governing your use of the FreedomPulse website and campaign services.",
};

const SECTIONS = [
  {
    id: "services",
    heading: "Services and communications",
    body: [
      "These terms govern your use of the FreedomPulse for Congress website and any related campaign services — newsletters, text messages, event RSVPs, volunteer coordination, and donation processing.",
      "By using the site you agree to these terms. If you do not agree, please do not use the site.",
    ],
  },
  {
    id: "participation",
    heading: "Participation and contributions",
    body: [
      "Campaign donations are processed by a third-party payment provider in accordance with federal and Oregon election law. By contributing, you certify that:",
      {
        type: "ul",
        items: [
          "You are a U.S. citizen or lawfully admitted permanent resident.",
          "The contribution is made from your own funds, not those of another person.",
          "You are not a federal contractor.",
          "You are at least 18 years old.",
        ],
      },
      "Contributions are not tax-deductible.",
    ],
  },
  {
    id: "no-guarantee",
    heading: "No guarantee of outcomes",
    body: [
      "Campaigning is hard work, and outcomes depend on many factors outside the campaign's control. We will not promise specific legislative results, election outcomes, or personal benefits in exchange for your participation.",
    ],
  },
  {
    id: "ip",
    heading: "Intellectual property",
    body: [
      "The FreedomPulse name, logo, copy, design, and creative assets on this site are owned by the campaign. You may not reproduce or redistribute them without written permission, except where applicable law permits — for example, fair-use commentary, criticism, or journalism.",
      "Third-party trademarks belong to their respective owners.",
    ],
  },
  {
    id: "media-release",
    heading: "Media and testimonial release",
    body: [
      "By attending a campaign event, you grant the campaign permission to photograph or record your participation and use those materials in campaign communications. If you would prefer not to appear in materials, let an organizer know at the event.",
    ],
  },
  {
    id: "sms",
    heading: "SMS messaging",
    body: [
      "Text messaging is opt-in and you can opt out at any time.",
      { type: "h3", text: "Opt-in process" },
      "You opt in by checking the SMS box on a sign-up form and providing your mobile number, or by texting an opt-in keyword to our number.",
      { type: "h3", text: "Message types" },
      "Shift confirmations, event RSVPs, last-minute logistics, and occasional campaign updates.",
      { type: "h3", text: "Frequency" },
      "Approximately four messages per month, plus event-specific messages when relevant.",
      { type: "h3", text: "Fees" },
      "Message and data rates may apply. Carrier may charge for messages sent or received.",
      { type: "h3", text: "Opt out" },
      "Reply STOP at any time to stop receiving messages. Reply HELP for assistance.",
      { type: "h3", text: "Consent" },
      "Consent to receive text messages is not a condition of donating, volunteering, or any other action.",
      { type: "h3", text: "Age requirement" },
      "Subscribers must be at least 13 years old. Subscribers under 18 should have a parent or guardian's permission.",
    ],
  },
  {
    id: "privacy",
    heading: "Privacy",
    body: [
      "Your use of the site is also governed by our privacy policy, which describes how we collect, use, and protect your information. Read it at /privacy-policy.",
    ],
  },
  {
    id: "relationship",
    heading: "Relationship of parties",
    body: [
      "Nothing in these terms creates an employment, agency, or partnership relationship between you and the campaign. Volunteers are not employees.",
    ],
  },
  {
    id: "modification",
    heading: "Modification of terms",
    body: [
      "We may update these terms from time to time. The 'last updated' date at the top reflects the most recent revision. Your continued use of the site after a change constitutes acceptance of the revised terms.",
    ],
  },
  {
    id: "governing-law",
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of the State of Oregon, without regard to its conflict-of-laws principles. Any dispute will be resolved in the state or federal courts located in Multnomah County, Oregon.",
    ],
  },
  {
    id: "liability",
    heading: "Limitation of liability",
    body: [
      "To the fullest extent permitted by law, the campaign is not liable for indirect, incidental, special, consequential, or punitive damages arising out of your use of the site or any related services.",
    ],
  },
  {
    id: "indemnification",
    heading: "Indemnification",
    body: [
      "You agree to indemnify the campaign and its volunteers from claims arising out of your misuse of the site or violation of these terms.",
    ],
  },
  {
    id: "severability",
    heading: "Severability",
    body: [
      "If any portion of these terms is found unenforceable, the remaining portions remain in full force.",
    ],
  },
  {
    id: "entire-agreement",
    heading: "Entire agreement",
    body: [
      "These terms, together with the privacy policy, constitute the entire agreement between you and the campaign regarding your use of the site.",
    ],
  },
  {
    id: "contact",
    heading: "Contact",
    body: [
      "Questions about these terms? Email legal@freedompulse.org or write to FreedomPulse for Congress, 2026 NE Alberta St, Suite 4, Portland, OR 97211.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title={"Terms of Service"}
      eyebrow="Terms"
      kicker="The straightforward terms governing your use of the FreedomPulse website, newsletter, and campaign services."
      lastUpdated="May 16, 2026"
      sections={SECTIONS}
    />
  );
}
