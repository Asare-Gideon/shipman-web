import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Shield,
  Users,
  FileText,
  Globe,
  CheckCircle,
  Scale,
  CreditCard,
  AlertTriangle,
  Gavel,
  Lock,
} from "lucide-react";

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Scale className="w-4 h-4" />
              Legal Documentation
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Terms & Conditions
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Understanding your rights and responsibilities when using our
              platform and services with complete transparency.
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
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Scale className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Fair</h3>
                <p className="text-sm text-gray-600">Balanced terms</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Protected</h3>
                <p className="text-sm text-gray-600">Your rights secured</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Clear</h3>
                <p className="text-sm text-gray-600">Easy to understand</p>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="pb-12">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 sm:p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-purple-600" />
                Table of Contents
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  {
                    id: "acceptance-terms",
                    title: "Acceptance of Terms",
                  },
                  {
                    id: "eligibility",
                    title: "Eligibility Requirements",
                  },
                  {
                    id: "account-responsibilities",
                    title: "Account Responsibilities",
                  },
                  { id: "use-services", title: "Use of Services" },
                  { id: "wallet-payments", title: "Wallet and Payments" },
                  { id: "supplier-payments", title: "Supplier Payments" },
                  {
                    id: "intellectual-property",
                    title: "Intellectual Property",
                  },
                  { id: "termination", title: "Account Termination" },
                  { id: "disclaimers", title: "Service Disclaimers" },
                  {
                    id: "limitation-liability",
                    title: "Limitation of Liability",
                  },
                  { id: "changes-terms", title: "Changes to Terms" },
                  { id: "governing-law", title: "Governing Law" },
                  { id: "contact-us", title: "Contact Information" },
                ].map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center p-4 rounded-lg hover:bg-purple-50 transition-colors group border border-gray-100 hover:border-purple-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-3 text-purple-600 group-hover:text-purple-700" />
                    <span className="text-gray-700 group-hover:text-purple-700 font-medium">
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
                    Terms and Conditions
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

                {/* Introduction */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-12">
                  <p className="text-gray-800 text-lg">
                    Welcome to Shipman Global. By accessing or using our
                    application ("App"), you agree to comply with and be bound
                    by the following Terms and Conditions. Please read these
                    terms carefully before using our services.
                  </p>
                </div>

                <section id="acceptance-terms" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-purple-600" />
                    1. Acceptance of Terms
                  </h2>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <p className="text-gray-800 mb-4">
                      By registering or using the Shipman platform, you
                      acknowledge that you have read, understood, and agree to
                      be bound by these Terms and our{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-purple-600 hover:text-purple-700 font-medium underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                    <p className="text-gray-800">
                      If you do not agree with any part of these terms, you must
                      not use our services.
                    </p>
                  </div>
                </section>

                <section id="eligibility" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Users className="w-6 h-6 mr-3 text-purple-600" />
                    2. Eligibility Requirements
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Age Requirement
                      </h4>
                      <p className="text-gray-700">
                        You must be at least 18 years old to use our services.
                      </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Legal Capacity
                      </h4>
                      <p className="text-gray-700">
                        You must have the legal capacity to enter into binding
                        agreements.
                      </p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Business Use
                      </h4>
                      <p className="text-gray-700">
                        If using on behalf of a business, you must have
                        authority to bind that entity.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="account-responsibilities" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Lock className="w-6 h-6 mr-3 text-purple-600" />
                    3. Account Responsibilities
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Provide accurate and complete information",
                      "Keep your login credentials secure",
                      "Notify us immediately of unauthorized access",
                      "Update your information when it changes",
                      "Use strong passwords and enable security features",
                      "Do not share your account with others",
                      "Report suspicious activities promptly",
                      "Comply with all applicable laws and regulations",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="use-services" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Globe className="w-6 h-6 mr-3 text-purple-600" />
                    4. Use of Services
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Permitted Uses
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Legitimate shipping and logistics services
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Business-related transactions and communications
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Accessing support and customer service
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Prohibited Activities
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Illegal or fraudulent activities
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Attempting to hack or compromise our systems
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Violating intellectual property rights
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            Harassing other users or our staff
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="wallet-payments" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <CreditCard className="w-6 h-6 mr-3 text-purple-600" />
                    5. Wallet and Payments
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Wallet Functionality
                      </h4>
                      <p className="text-gray-700">
                        Your wallet displays your current balance and
                        transaction history. All transactions are processed
                        through secure payment service providers.
                      </p>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Payment Processing
                      </h4>
                      <p className="text-gray-700">
                        We use third-party payment processors. You agree to
                        their terms and understand that payment processing fees
                        may apply.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Transaction Disputes
                      </h4>
                      <p className="text-gray-700">
                        Report any unauthorized transactions immediately. We
                        will investigate and resolve disputes according to our
                        dispute resolution process.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="supplier-payments" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Users className="w-6 h-6 mr-3 text-purple-600" />
                    6. Supplier Payments
                  </h2>
                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                    <p className="text-gray-800 mb-4">
                      <strong>RMB Payments:</strong> We facilitate payments to
                      suppliers in Chinese Yuan (RMB) through authorized payment
                      channels.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          All supplier payments are subject to verification
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Exchange rates are determined by our payment
                          processors
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Processing times may vary based on banking regulations
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="intellectual-property" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-purple-600" />
                    7. Intellectual Property
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Our Rights
                      </h4>
                      <p className="text-gray-700">
                        All content, trademarks, and intellectual property on
                        our platform belong to Shipman Global and are protected
                        by applicable laws.
                      </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Your Rights
                      </h4>
                      <p className="text-gray-700">
                        You retain ownership of any content you upload, but
                        grant us necessary licenses to provide our services.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="termination" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-3 text-purple-600" />
                    8. Account Termination
                  </h2>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <p className="text-gray-800 mb-4">
                      <strong>Termination Rights:</strong> Either party may
                      terminate this agreement:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          You may delete your account at any time
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          We may suspend or terminate accounts for violations
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Outstanding balances must be settled before
                          termination
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="disclaimers" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-3 text-purple-600" />
                    9. Service Disclaimers
                  </h2>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <p className="text-gray-800 font-medium mb-4">
                      <strong>Important:</strong> Our services are provided "as
                      is" without warranties:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          We do not guarantee uninterrupted service availability
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Third-party services may have their own limitations
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Market conditions may affect shipping and payment
                          services
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="limitation-liability" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Gavel className="w-6 h-6 mr-3 text-purple-600" />
                    10. Limitation of Liability
                  </h2>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <p className="text-gray-800 mb-4">
                      <strong>Liability Limits:</strong> To the maximum extent
                      permitted by law:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Our liability is limited to the amount you paid for
                          services
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          We are not liable for indirect or consequential
                          damages
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Some jurisdictions may not allow these limitations
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="changes-terms" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <FileText className="w-6 h-6 mr-3 text-purple-600" />
                    11. Changes to Terms
                  </h2>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <p className="text-gray-800">
                      We may update these terms from time to time and will
                      notify you through the app or via email. Your continued
                      use of our services after any updates means you accept the
                      changes. Material changes will be communicated with at
                      least 30 days notice.
                    </p>
                  </div>
                </section>

                <section id="governing-law" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Scale className="w-6 h-6 mr-3 text-purple-600" />
                    12. Governing Law
                  </h2>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-800">
                      These terms are governed by the laws of Ghana. Any
                      disputes will be resolved through binding arbitration or
                      in the courts of Ghana, depending on the nature and value
                      of the dispute.
                    </p>
                  </div>
                </section>

                <section id="contact-us" className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Mail className="w-6 h-6 mr-3 text-purple-600" />
                    13. Contact Information
                  </h2>
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Shipman Global
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Mail className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">
                              Email Support
                            </p>
                            <Link
                              href="mailto:support@shipmanglobal.com"
                              className="text-purple-600 hover:text-purple-700 transition-colors"
                            >
                              support@shipmanglobal.com
                            </Link>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Phone className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">
                              Phone Support
                            </p>
                            <Link
                              href="tel:+233552342124"
                              className="text-purple-600 hover:text-purple-700 transition-colors"
                            >
                              (+233) 55 234 2124
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">
                              Office Address
                            </p>
                            <p className="text-gray-700">Accra, Ghana</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-purple-200">
                      <p className="text-sm text-gray-600">
                        For urgent legal concerns or questions about these
                        terms, please contact us directly via email and we will
                        respond within 48 hours.
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

export default TermsAndConditionsPage;
