import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black mt-auto">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Arkulus Inc
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              651 North Broad Street
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Middletown, DE 19709
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              United States
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#197090] dark:hover:text-[#197090] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#197090] dark:hover:text-[#197090] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:clive@arkulus.net"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#197090] dark:hover:text-[#197090] transition-colors"
                >
                  clive@arkulus.net
                </a>
              </li>
              <li>
                <a
                  href="tel:+18163965263"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#197090] dark:hover:text-[#197090] transition-colors"
                >
                  (816) 396-5263
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            © {currentYear} Arkulus Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
