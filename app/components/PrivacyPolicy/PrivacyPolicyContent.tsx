import React from 'react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-3">
    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{title}</h2>
    <div className="prose prose-gray max-w-none text-sm sm:text-base">
      {children}
    </div>
  </section>
);

const PrivacyPolicyContent = () => {
  const updatedOn = 'October 30, 2025';

  return (
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-600">Last updated {updatedOn}</p>
      </header>

      <div className="space-y-10">
        <Section title="Who we are">
          <p>
            Arkulus Inc ("Arkulus", "we", "us", or "our") provides this Privacy Policy to
            explain how we collect, use, disclose, and protect personal information when you use our
            website and services (collectively, the "Services").
          </p>
        </Section>

        <Section title="Information we collect">
          <ul>
            <li>
              Information you provide: account details, contact information, messages, and any
              content you submit.
            </li>
            <li>
              Automatic data: device and browser information, IP address, general location, usage
              and diagnostic data, cookies and similar technologies.
            </li>
            <li>
              Third-party data (only with your consent or as permitted by law): limited identifiers
              from sign-in providers necessary to authenticate you.
            </li>
          </ul>
        </Section>

        <Section title="How we use information">
          <ul>
            <li>Provide, operate, and improve the Services.</li>
            <li>Secure the Services, prevent fraud and abuse, and enforce policies.</li>
            <li>Communicate with you about updates, security notices, and support.</li>
            <li>Comply with legal obligations and resolve disputes.</li>
            <li>
              With your consent, send marketing communications you can opt out of at any time.
            </li>
          </ul>
        </Section>

        <Section title="When we share information">
          <p>
            We do not sell personal information. We share information only:
          </p>
          <ul>
            <li>With service providers under contracts that protect your data.</li>
            <li>For legal reasons (e.g., lawful requests, to protect rights and safety).</li>
            <li>During a business transfer (e.g., merger or acquisition) with notice where required.</li>
          </ul>
        </Section>

        <Section title="Retention">
          <p>
            We keep personal information only as long as necessary for the purposes described above
            or as required by law. When no longer needed, we delete or irreversibly anonymize it.
          </p>
        </Section>

        <Section title="Security">
          <p>
            We implement administrative, technical, and physical safeguards appropriate to the risk.
            No method of transmission or storage is 100% secure; you use the Services at your own
            risk.
          </p>
        </Section>

        <Section title="Your choices and rights">
          <ul>
            <li>Access, correct, or delete your information, subject to legal exceptions.</li>
            <li>Opt out of marketing emails via the unsubscribe link in any email.</li>
            <li>
              If you are in the EEA, UK, or other regions with similar laws, you may have
              additional rights and can contact your local authority. We will honor applicable
              requests under those laws.
            </li>
          </ul>
        </Section>

        <Section title="Cookies and tracking">
          <p>
            We use cookies and similar technologies to operate the site and understand usage. You
            can control cookies through your browser settings. We currently do not respond to
            Do-Not-Track signals.
          </p>
        </Section>

        <Section title="International data transfers">
          <p>
            Your information may be processed outside your country. When we transfer personal data,
            we use recognized safeguards where required by law.
          </p>
        </Section>

        <Section title="Third-party sign-in and platform data">
          <p>
            If you choose to sign in through a third party (e.g., Google or Facebook), we receive
            only the minimum information necessary to authenticate you and operate the Services. We
            do not use such data to develop, improve, or train generalized AI/ML models without your
            consent, and we do not sell this data.
          </p>
        </Section>

        <Section title="Children">
          <p>
            The Services are not directed to children under 13 (or under 16 where applicable). We do
            not knowingly collect personal information from children. If you believe a child has
            provided us personal information, contact us to delete it.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            We may update this Privacy Policy from time to time. The updated version will be
            effective when posted, as indicated by the "Last updated" date above.
          </p>
        </Section>

        <Section title="Contact us">
          <p>
            If you have questions or requests, contact our Data Protection Officer at:
          </p>
          <address className="not-italic">
            Arkulus Inc
            <br />
            651 North Broad Street, Middletown, DE 19709, United States
            <br />
            Email: <a className="text-blue-600" href="mailto:privacy@arkulus.net">privacy@arkulus.net</a>
          </address>
        </Section>
      </div>
    </div>
  );
};

export default PrivacyPolicyContent;


