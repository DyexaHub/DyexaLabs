import { motion } from "motion/react";

const Terms = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-white min-h-screen"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Terms of Service</h1>
        <p className="text-xl text-slate-500 mb-12">Last updated: December 07, 2025</p>
        
        <div className="prose prose-lg prose-slate max-w-none">
          <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the https://dyexalabs.app website (the "Service") operated by DyexaLabs Inc. ("us", "we", or "our").</p>
          
          <h3>1. Acceptance of Terms</h3>
          <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

          <h3>2. Professional Services</h3>
          <p>DyexaLabs provides IT consulting, software development, and related technology services. Specific deliverables, timelines, and costs are defined in separate Statements of Work (SOW) or Master Services Agreements (MSA) signed by both parties. In the event of a conflict between these Terms and a signed SOW/MSA, the signed agreement shall prevail.</p>

          <h3>3. Intellectual Property</h3>
          <p>Unless otherwise stated in a separate agreement:</p>
          <ul>
            <li><strong>Pre-existing IP:</strong> We retain all rights to our pre-existing code, libraries, tools, and methodologies used to deliver services.</li>
            <li><strong>Deliverables:</strong> Upon full payment, the client is granted a perpetual, non-exclusive, royalty-free license to use the custom deliverables for their business purposes.</li>
            <li><strong>Open Source:</strong> We may incorporate open-source software into deliverables, which will be subject to their respective licenses.</li>
          </ul>

          <h3>4. Confidentiality</h3>
          <p>We acknowledge that in the course of providing services, we may have access to your confidential information. We agree to hold such information in strict confidence and not to disclose it to any third parties without your prior written consent, except as required by law.</p>

          <h3>5. Limitation of Liability</h3>
          <p>In no event shall Dyexa, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service.</p>

          <h3>6. Termination</h3>
          <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>

          <h3>7. Governing Law</h3>
          <p>These Terms shall be governed and construed in accordance with the laws of Delaware, United States, without regard to its conflict of law provisions.</p>

          <h3>8. Changes</h3>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

          <h3>9. Contact Us</h3>
          <p>If you have any questions about these Terms, please contact us at legal@dyexa.com.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Terms;
