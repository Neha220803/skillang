import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "../../../index.css";

const PrivacyPolicyPage = () => {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    collection: false,
    purpose: false,
    sharing: false,
    security: false,
    cookies: false,
    rights: false,
    children: false,
    updates: false,
    contact: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="w-full bg-secondary min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-8 bg-white">
        <h1 className="heading-big-medium text-center mb-8 text-content-primary">Privacy Policy</h1>
        <p className="text-right text-content-tertiary mb-8">Updated: March 13, 2025</p>

        <div className="mb-8">
          <p className="paragraph-big-regular text-content-secondary mb-6">
            At Skillang ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website
            <a href="https://skillang.com" className="text-primary-color hover:text-primary-variant"> skillang.com</a> or use our services.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="border-b border-gray-200">
          <div
            className="py-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("introduction")}
          >
            <h2 className="subheading-small-medium text-primary-color">1. Information Collection</h2>
            {expandedSections.introduction ?
              <ChevronUp className="text-primary-color" size={24} /> :
              <ChevronDown className="text-primary-color" size={24} />
            }
          </div>

          {expandedSections.introduction && (
            <div className="pb-6">
              <div className="mb-4">
                <h3 className="paragraph-big-medium text-content-primary mb-2">Personal Information</h3>
                <p className="paragraph-small-regular text-content-secondary mb-4">
                  We collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 mb-4 paragraph-small-regular text-content-secondary">
                  <li>Register for an account</li>
                  <li>Fill out contact forms</li>
                  <li>Sign up for newsletters</li>
                  <li>Book consultations</li>
                  <li>Apply for programs</li>
                </ul>
                <p className="paragraph-small-regular text-content-secondary mb-4">
                  This information may include your name, email address, phone number, location, education history,
                  professional experience, and other details relevant to your inquiries about work abroad, study abroad,
                  nursing programs, or language test preparation.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="paragraph-big-medium text-content-primary mb-2">Assessment Data</h3>
                <p className="paragraph-small-regular text-content-secondary mb-4">
                  When you use our skill assessment tools or language tests, we collect your responses,
                  results, and progression data to provide personalized guidance and recommendations.
                </p>
              </div>

              <div>
                <h3 className="paragraph-big-medium text-content-primary mb-2">Automatically Collected Information</h3>
                <p className="paragraph-small-regular text-content-secondary mb-4">
                  When you access our website, we may automatically collect certain information about your device,
                  including your IP address, browser type, operating system, referring URLs, device information,
                  location information, and site usage data. We collect this information using cookies and similar tracking technologies.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Purpose Section */}
        <div className="border-b border-gray-200">
          <div
            className="py-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("purpose")}
          >
            <h2 className="subheading-small-medium text-primary-color">2. Purpose of Data Collection</h2>
            {expandedSections.purpose ?
              <ChevronUp className="text-primary-color" size={24} /> :
              <ChevronDown className="text-primary-color" size={24} />
            }
          </div>

          {expandedSections.purpose && (
            <div className="pb-6">
              <div className="mb-4">
                <h3 className="paragraph-big-medium text-content-primary mb-2">Service Delivery</h3>
                <p className="paragraph-small-regular text-content-secondary mb-4">
                  We use your personal and assessment data to provide and improve our services, including:
                </p>
                <ul className="list-disc pl-6 mb-4 paragraph-small-regular text-content-secondary">
                  <li>Personalized career guidance and recommendations</li>
                  <li>Customized study abroad or work abroad program suggestions</li>
                  <li>Tailored language test preparation</li>
                  <li>Nursing program application support</li>
                  <li>Improving and customizing user experience</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="paragraph-big-medium text-content-primary mb-2">Communication</h3>
                <p className="paragraph-small-regular text-content-secondary mb-4">
                  We use your contact information to:
                </p>
                <ul className="list-disc pl-6 mb-4 paragraph-small-regular text-content-secondary">
                  <li>Respond to your inquiries and support requests</li>
                  <li>Send consultation confirmations and follow-ups</li>
                  <li>Provide program updates and important notices</li>
                  <li>Share newsletters, promotional content, and educational resources (with your consent)</li>
                </ul>
              </div>

              <div>
                <h3 className="paragraph-big-medium text-content-primary mb-2">Analytics</h3>
                <p className="paragraph-small-regular text-content-secondary mb-4">
                  We analyze usage data to understand how users interact with our platform, identify areas for improvement,
                  and optimize our services and content.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Data Sharing Section */}
        <div className="border-b border-gray-200">
          <div
            className="py-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("sharing")}
          >
            <h2 className="subheading-small-medium text-primary-color">3. Data Sharing</h2>
            {expandedSections.sharing ?
              <ChevronUp className="text-primary-color" size={24} /> :
              <ChevronDown className="text-primary-color" size={24} />
            }
          </div>

          {expandedSections.sharing && (
            <div className="pb-6">
              <div className="mb-4">
                <h3 className="paragraph-big-medium text-content-primary mb-2">Third-Party Service Providers</h3>
                <p className="paragraph-small-regular text-content-secondary mb-4">
                  We may share your information with trusted third-party service providers who assist us in operating our website,
                  conducting our business, or providing services to you. These providers have access to your personal information
                  only to perform specific tasks on our behalf and are obligated to maintain its confidentiality.
                </p>
                <p className="paragraph-small-regular text-content-secondary mb-4">
                  Our third-party service providers may include:
                </p>
                <ul className="list-disc pl-6 mb-4 paragraph-small-regular text-content-secondary">
                  <li>Payment processors</li>
                  <li>Email marketing platforms</li>
                  <li>Customer relationship management systems</li>
                  <li>Analytics services</li>
                  <li>Educational institutions and partners (with your consent)</li>
                </ul>
              </div>

              <div>
                <h3 className="paragraph-big-medium text-content-primary mb-2">Legal Requirements</h3>
                <p className="paragraph-small-regular text-content-secondary mb-4">
                  We may disclose your information if required to do so by law or in response to valid requests by public authorities
                  (e.g., a court or government agency). We may also disclose your information to protect our rights, privacy, safety,
                  or property, and that of our users or others.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Data Security Section */}
        <div className="border-b border-gray-200">
          <div
            className="py-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("security")}
          >
            <h2 className="subheading-small-medium text-primary-color">4. Data Security</h2>
            {expandedSections.security ?
              <ChevronUp className="text-primary-color" size={24} /> :
              <ChevronDown className="text-primary-color" size={24} />
            }
          </div>

          {expandedSections.security && (
            <div className="pb-6">
              <div className="mb-4">
                <h3 className="paragraph-big-medium text-content-primary mb-2">Security Measures</h3>
                <p className="paragraph-small-regular text-content-secondary mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 mb-4 paragraph-small-regular text-content-secondary">
                  <li>Encryption of sensitive data</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Secure data storage practices</li>
                </ul>
              </div>

              <div>
                <h3 className="paragraph-big-medium text-content-primary mb-2">Data Storage</h3>
                <p className="paragraph-small-regular text-content-secondary mb-4">
                  We store your data on secure servers protected by firewalls and other security technologies.
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined
                  in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Cookies Section */}
        <div className="border-b border-gray-200">
          <div
            className="py-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("cookies")}
          >
            <h2 className="subheading-small-medium text-primary-color">5. Cookies and Tracking Technologies</h2>
            {expandedSections.cookies ?
              <ChevronUp className="text-primary-color" size={24} /> :
              <ChevronDown className="text-primary-color" size={24} />
            }
          </div>

          {expandedSections.cookies && (
            <div className="pb-6">
              <div className="mb-4">
                <h3 className="paragraph-big-medium text-content-primary mb-2">Usage of Cookies</h3>
                <p className="paragraph-small-regular text-content-secondary mb-4">
                  We use cookies and similar tracking technologies to collect and track information about your browsing activities
                  on our website. Cookies help us to:
                </p>
                <ul className="list-disc pl-6 mb-4 paragraph-small-regular text-content-secondary">
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you use our website</li>
                  <li>Improve your user experience</li>
                  <li>Personalize content and recommendations</li>
                  <li>Analyze the performance of our website</li>
                </ul>
              </div>

              <div>
                <h3 className="paragraph-big-medium text-content-primary mb-2">User Control</h3>
                <p className="paragraph-small-regular text-content-secondary mb-4">
                  Most web browsers are set to accept cookies by default. However, you can choose to set your browser to remove
                  or reject cookies. Please note that certain features of our website may not function properly without cookies.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* User Rights Section */}
        <div className="border-b border-gray-200">
          <div
            className="py-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("rights")}
          >
            <h2 className="subheading-small-medium text-primary-color">6. Your Rights and Choices</h2>
            {expandedSections.rights ?
              <ChevronUp className="text-primary-color" size={24} /> :
              <ChevronDown className="text-primary-color" size={24} />
            }
          </div>

          {expandedSections.rights && (
            <div className="pb-6">
              <p className="paragraph-small-regular text-content-secondary mb-4">
                You have certain rights regarding your personal data, including:
              </p>
              <ul className="list-disc pl-6 mb-4 paragraph-small-regular text-content-secondary">
                <li>The right to access, correct, or delete your personal data</li>
                <li>The right to withdraw consent for data processing</li>
                <li>The right to object to certain types of processing</li>
                <li>The right to data portability</li>
              </ul>
              <p className="paragraph-small-regular text-content-secondary mb-4">
                To exercise these rights, please contact us at <a href="mailto:support@skillang.com" className="text-primary-color hover:text-primary-variant">support@skillang.com</a>.
              </p>
            </div>
          )}
        </div>



        {/* Children's Privacy Section */}
        <div className="border-b border-gray-200">
          <div
            className="py-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("rights")}
          >
            <h2 className="subheading-small-medium text-primary-color">7. Children's Privacy</h2>
            {expandedSections.rights ?
              <ChevronUp className="text-primary-color" size={24} /> :
              <ChevronDown className="text-primary-color" size={24} />
            }
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.children ? "max-h-[1000px] pb-6" : "max-h-0"
              }`}
          >
            <p className="paragraph-small-regular text-content-secondary mb-4">
              Our services are not intended for children under the age of 16. We do not knowingly collect personal data from children.
              If we discover that a child has provided us with personal information, we will take steps to delete such data.
            </p>
          </div>
        </div>

        {/* Updates to Privacy Policy Section */}
        <div className="border-b border-gray-200">
          <div
            className="py-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("rights")}
          >
            <h2 className="subheading-small-medium text-primary-color">8. Updates to This Policy</h2>
            {expandedSections.updates ?
              <ChevronUp className="text-primary-color" size={24} /> :
              <ChevronDown className="text-primary-color" size={24} />
            }
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.updates ? "max-h-[1000px] pb-6" : "max-h-0"
              }`}
          >
            <p className="paragraph-small-regular text-content-secondary mb-4">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.
            </p>
          </div>
        </div>

        {/* Contact Information Section
        <div>
          <div
            className="py-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("contact")}
          >
            <h2 className="subheading-small-medium text-primary-color">9. Contact Us</h2>
            {expandedSections.contact ?
              <ChevronUp className="text-primary-color" size={24} /> :
              <ChevronDown className="text-primary-color" size={24} />
            }
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.contact ? "max-h-[1000px] pb-6" : "max-h-0"
              }`}
          >
            <p className="paragraph-small-regular text-content-secondary mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="paragraph-small-regular text-content-secondary mb-4">
              Email: <a href="mailto:support@skillang.com" className="text-primary-color hover:text-primary-variant">support@skillang.com</a>
            </p>
            <p className="paragraph-small-regular text-content-secondary mb-4">
              Address: 123 Skillang Street, City, Country
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
