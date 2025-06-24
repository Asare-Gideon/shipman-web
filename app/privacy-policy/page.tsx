import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Shield,
  Eye,
  Lock,
  Users,
  FileText,
  Globe,
  CheckCircle,
} from "lucide-react";

const page = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Legal Documentation
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Privacy Policy
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your privacy matters to us. Learn how we protect and handle your
              personal information with transparency and care.
            </p>

            {/* Meta Information */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">
                  Last updated: September 02, 2024
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">
                  Effective immediately
                </span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Secure</h3>
                <p className="text-sm text-gray-600">SSL encrypted data</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Transparent
                </h3>
                <p className="text-sm text-gray-600">Clear data usage</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Protected</h3>
                <p className="text-sm text-gray-600">Your rights respected</p>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="pb-12">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 sm:p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-blue-600" />
                Table of Contents
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  {
                    id: "information-collection",
                    title: "Information We Collect",
                  },
                  {
                    id: "information-usage",
                    title: "How We Use Your Information",
                  },
                  { id: "data-sharing", title: "Data Sharing and Disclosure" },
                  { id: "data-retention", title: "Data Retention" },
                  { id: "your-rights", title: "Your Rights" },
                  { id: "security", title: "Security Measures" },
                  { id: "children-privacy", title: "Children's Privacy" },
                  { id: "international-users", title: "International Users" },
                  { id: "policy-changes", title: "Changes to This Policy" },
                  { id: "contact-us", title: "Contact Information" },
                ].map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center p-4 rounded-lg hover:bg-blue-50 transition-colors group border border-gray-100 hover:border-blue-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-3 text-blue-600 group-hover:text-blue-700" />
                    <span className="text-gray-700 group-hover:text-blue-700 font-medium">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 sm:p-8 lg:p-12">
                {/* Header */}
                <div className="mb-12 text-center border-b border-gray-200 pb-8">
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Privacy Policy
                  </h1>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Effective Date:</span>
                      <span>September 02, 2024</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Company:</span>
                      <span>Shipman Global</span>
                    </div>
                  </div>
                </div>

                <section id="information-collection" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Eye className="w-6 h-6 mr-3 text-blue-600" />
                    1. Information We Collect
                  </h2>
                  <p className="text-gray-700 mb-6 text-lg">
                    We collect the following types of information to provide our
                    services:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Personal Information
                      </h4>
                      <p className="text-gray-700">
                        Name, Business Name (optional), Email, Phone Number,
                        Location, Shipping Marks
                      </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Account Credentials
                      </h4>
                      <p className="text-gray-700">
                        Hashed Password, Authentication Tokens (JWT)
                      </p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Usage Data
                      </h4>
                      <p className="text-gray-700">
                        App logs, Device info, IP Address, Transactions
                      </p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Wallet and Payment Data
                      </h4>
                      <p className="text-gray-700">
                        Balance display, Transactions, Supplier payments (RMB)
                      </p>
                    </div>
                    <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Agent/Client Interactions
                      </h4>
                      <p className="text-gray-700">
                        Limited info shared for logistics services
                      </p>
                    </div>
                  </div>
                </section>

                <section id="information-usage" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Users className="w-6 h-6 mr-3 text-blue-600" />
                    2. How We Use Your Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Create and manage accounts",
                      "Authenticate logins and secure sessions",
                      "Provide shipment tracking and logistics",
                      "Display wallet and transaction history",
                      "Enable supplier payments",
                      "Provide support and respond to inquiries",
                      "Send optional notifications",
                      "Comply with legal requirements",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="data-sharing" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-blue-600" />
                    3. Data Sharing and Disclosure
                  </h2>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
                    <p className="text-gray-800 font-medium mb-4">
                      <strong>Important:</strong> We do not sell or share your
                      personal data except in the following limited
                      circumstances:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          With Payment Service Providers (PSPs) for payment
                          functionality
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          With registered shipping agents (limited data only)
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          With legal authorities when required by law
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="data-retention" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <FileText className="w-6 h-6 mr-3 text-blue-600" />
                    4. Data Retention
                  </h2>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <p className="text-gray-800">
                      We retain your data only as long as needed for providing
                      our services or meeting legal compliance requirements.
                      When you delete your account, we remove your personal data
                      unless we are legally required to retain certain
                      information.
                    </p>
                  </div>
                </section>

                <section id="your-rights" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Lock className="w-6 h-6 mr-3 text-blue-600" />
                    5. Your Rights
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      "Access, update, or correct your data",
                      "Delete your account and associated data",
                      "Request a copy of your personal data",
                      "Manage notification preferences",
                    ].map((right, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-200"
                      >
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">
                          {right}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <p className="text-gray-800">
                      <strong>Need help with your rights?</strong> Contact us
                      at:{" "}
                      <Link
                        href="mailto:support@shipmanglobal.com"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        support@shipmanglobal.com
                      </Link>
                    </p>
                  </div>
                </section>

                <section id="security" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-blue-600" />
                    6. Security Measures
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      {
                        title: "SSL Encryption",
                        desc: "All data transmission is encrypted",
                      },
                      {
                        title: "Password Hashing",
                        desc: "Passwords are securely hashed and stored",
                      },
                      {
                        title: "JWT Authentication",
                        desc: "Secure token-based authentication",
                      },
                      {
                        title: "Transaction Monitoring",
                        desc: "Real-time monitoring for suspicious activity",
                      },
                    ].map((security, index) => (
                      <div
                        key={index}
                        className="p-4 bg-red-50 rounded-lg border border-red-200"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {security.title}
                        </h4>
                        <p className="text-gray-700 text-sm">{security.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-700">
                    Our Payment Service Providers (PSPs) maintain full
                    regulatory compliance with industry standards.
                  </p>
                </section>

                <section id="children-privacy" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Users className="w-6 h-6 mr-3 text-blue-600" />
                    7. Children's Privacy
                  </h2>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <p className="text-gray-800">
                      <strong>Age Restriction:</strong> Shipman Global is not
                      intended for users under 18 years of age. We do not
                      knowingly collect personal information from minors.
                    </p>
                  </div>
                </section>

                <section id="international-users" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Globe className="w-6 h-6 mr-3 text-blue-600" />
                    8. International Users
                  </h2>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <p className="text-gray-800">
                      By using Shipman Global from outside our primary region,
                      you consent to the processing of your data in accordance
                      with this privacy policy and applicable international
                      laws.
                    </p>
                  </div>
                </section>

                <section id="policy-changes" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <FileText className="w-6 h-6 mr-3 text-blue-600" />
                    9. Changes to This Policy
                  </h2>
                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                    <p className="text-gray-800">
                      We may update this privacy policy from time to time and
                      will notify you through the app. Your continued use of our
                      services after any updates means you accept the changes.
                    </p>
                  </div>
                </section>

                <section id="contact-us" className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Mail className="w-6 h-6 mr-3 text-blue-600" />
                    10. Contact Information
                  </h2>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Shipman Global
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">
                              Email Support
                            </p>
                            <Link
                              href="mailto:support@shipmanglobal.com"
                              className="text-blue-600 hover:text-blue-700 transition-colors"
                            >
                              support@shipmanglobal.com
                            </Link>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">
                              Phone Support
                            </p>
                            <Link
                              href="tel:+233552342124"
                              className="text-blue-600 hover:text-blue-700 transition-colors"
                            >
                              (+233) 55 234 2124
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">
                              Office Address
                            </p>
                            <p className="text-gray-700">Accra, Ghana</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-blue-200">
                      <p className="text-sm text-gray-600">
                        For urgent privacy concerns or data protection
                        inquiries, please contact us directly via email and we
                        will respond within 48 hours.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
