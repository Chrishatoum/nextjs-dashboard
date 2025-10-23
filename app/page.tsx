import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className={`${lusitana.className} text-5xl md:text-6xl font-bold mb-4`}>
            Jenny Gemayel Hatoum
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Lecturer | Business Intelligence Expert | Digital Strategy Consultant
          </p>
          <div className="flex flex-wrap gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>jgemayel@ogero.gov.lb</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Beit Mery, Lebanon</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>961 3 269639 | 961 1 566501</span>
            </div>
            <a
              href="https://linkedin.com/in/jenny-gemayel-22b0302"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-8 bg-blue-50 border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white text-blue-800 font-medium shadow-sm">
              🗣️ Arabic
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white text-blue-800 font-medium shadow-sm">
              🗣️ French
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white text-blue-800 font-medium shadow-sm">
              🗣️ English
            </span>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${lusitana.className} text-3xl md:text-4xl font-bold text-gray-800 mb-6`}>
            Professional Summary
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Seasoned professional with three decades of experience across telecoms, executive management,
            and higher education. Currently a university Lecturer specializing in Data Management and Digital Strategy.
            Expert in Business Intelligence, delivering actionable insights. Demonstrated strategic impact by leading
            consulting teams at the TRA focused on market and tariffs, and by crafting the "Liban Telecom" Business Plan.
            Skilled in marketing, global product development, and complex problem-solving. Proficient in French, Arabic, and English.
          </p>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${lusitana.className} text-3xl md:text-4xl font-bold text-gray-800 mb-10`}>
            Work Experience
          </h2>

          <div className="space-y-12">
            {/* Position 1 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Lecturer</h3>
                  <p className="text-lg text-blue-600 font-medium">University Saint Joseph</p>
                </div>
                <span className="text-gray-600 font-medium mt-2 md:mt-0">2017 - Present</span>
              </div>
              <p className="text-gray-700 mb-3">Beirut, Lebanon</p>
              <p className="text-gray-700 mb-4">Designed and delivered courses for Master's degree programs focused on:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Data Management & Analytics</li>
                <li>Digital Economy for Business</li>
                <li>Digital & Mobile Strategy</li>
                <li>Management</li>
              </ul>
            </div>

            {/* Position 2 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Audit & Statistics Manager</h3>
                  <p className="text-lg text-blue-600 font-medium">OGERO</p>
                </div>
                <span className="text-gray-600 font-medium mt-2 md:mt-0">2017 - Present</span>
              </div>
              <p className="text-gray-700 mb-4">Beirut, Lebanon</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Responsible for handling Business Intelligence tasks</li>
                <li>Conducted audits and analyzed data from various sources, delivering actionable insights to aid general management in making informed business decisions and driving revenue growth</li>
                <li>Ensure that the organization complies with all applicable regulations</li>
              </ul>
            </div>

            {/* Position 3 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Marketing Manager</h3>
                  <p className="text-lg text-blue-600 font-medium">OGERO</p>
                </div>
                <span className="text-gray-600 font-medium mt-2 md:mt-0">2002 - 2017</span>
              </div>
              <p className="text-gray-700 mb-4">Beirut, Lebanon</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Consultancy for the Ministry of Telecoms' General Management</li>
                <li>Project Management for multiple telecom products and solutions, successfully delivered within established timelines and budgets</li>
                <li>Responsible for the advertising, statistics & launch of new services with Budgeting and Forecasting</li>
                <li>Effectively communicated project progress and key milestones to senior management and stakeholders</li>
                <li>Developed "Liban Telecom" Business Plan with the transition phases for the Ministry of Telecoms and Ogero</li>
                <li>Led and supervised the operations of the 'Eurostrategy' consulting team within the Telecommunication Regulatory Authority (TRA), with a primary focus on the Market/Tariffs Domain</li>
                <li>Played a pivotal role in driving regulatory excellence by overseeing critical activities related to market analysis, tariff policies, and industry benchmarking</li>
              </ul>
            </div>

            {/* Position 4 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">New Services Manager</h3>
                  <p className="text-lg text-blue-600 font-medium">OGERO</p>
                </div>
                <span className="text-gray-600 font-medium mt-2 md:mt-0">1998 - 2002</span>
              </div>
              <p className="text-gray-700 mb-4">Beirut, Lebanon</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Assumed responsibility for overseeing Marketing activities at Ogero, replacing consultants from Cable & Wireless</li>
              </ul>
            </div>

            {/* Position 5 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Global Product Manager</h3>
                  <p className="text-lg text-blue-600 font-medium">BT Europe (British Telecom)</p>
                </div>
                <span className="text-gray-600 font-medium mt-2 md:mt-0">1995 - 1998</span>
              </div>
              <p className="text-gray-700 mb-4">Paris-La Défense, France</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Launched new Network Services globally within BT</li>
                <li>Participated in the Service Definition and deployment of new products or services such as Satellite Services, Business TV, Gateways, Routers, across Europe</li>
              </ul>
            </div>

            {/* Position 6 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Data Telecommunication Consultant</h3>
                  <p className="text-lg text-blue-600 font-medium">BT Europe (British Telecom)</p>
                </div>
                <span className="text-gray-600 font-medium mt-2 md:mt-0">1993 - 1995</span>
              </div>
              <p className="text-gray-700 mb-4">Paris-La Défense, France</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Handled client installation and interconnectivity with BT premises</li>
                <li>Validated customer platforms and applications</li>
              </ul>
            </div>

            {/* Position 7 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Trial Manager</h3>
                  <p className="text-lg text-blue-600 font-medium">BT Europe (British Telecom)</p>
                </div>
                <span className="text-gray-600 font-medium mt-2 md:mt-0">1992 - 1993</span>
              </div>
              <p className="text-gray-700 mb-4">Paris-La Défense, France</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Conducted Technical validation of services on Concert Frame Relay</li>
                <li>Deployed Concert Frame Relay products in Europe, based on StrataCom and Cisco</li>
                <li>Evaluated customer bids and provided technical guidelines</li>
              </ul>
            </div>

            {/* Position 8 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">System Engineer</h3>
                  <p className="text-lg text-blue-600 font-medium">BT Europe (British Telecom)</p>
                </div>
                <span className="text-gray-600 font-medium mt-2 md:mt-0">1990 - 1992</span>
              </div>
              <p className="text-gray-700 mb-4">Paris-La Défense, France</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Provided Second level support for the Concert Packet Services portfolio</li>
                <li>Provided Second level technical support for BT' email application</li>
              </ul>
            </div>

            {/* Position 9 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Network Engineer for Réseau Cartes Bancaires</h3>
                  <p className="text-lg text-blue-600 font-medium">SILICOM</p>
                </div>
                <span className="text-gray-600 font-medium mt-2 md:mt-0">1989 - 1990</span>
              </div>
              <p className="text-gray-700 mb-4">Paris-La Défense, France</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Developed a simulator for the Réseau Cartes Bancaires</li>
                <li>Managed and developed of the interface between ISO layers</li>
              </ul>
            </div>

            {/* Position 10 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Development Engineer for Satelcom</h3>
                  <p className="text-lg text-blue-600 font-medium">SILICOM</p>
                </div>
                <span className="text-gray-600 font-medium mt-2 md:mt-0">1988 - 1989</span>
              </div>
              <p className="text-gray-700 mb-4">Paris-La Défense, France</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Developed TGX25, emulation software, in C language</li>
                <li>Developed an emulation software for Australian PTT in Sydney</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${lusitana.className} text-3xl md:text-4xl font-bold text-gray-800 mb-10`}>
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-600">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800">Executive Doctorate Business Administration</h3>
                <p className="text-blue-600 font-medium mt-2">University Saint Joseph / Paris Dauphine</p>
                <p className="text-gray-600 mt-1">France | 2018</p>
              </div>
              <p className="text-gray-700 italic">
                Dissertation Topic: "Equilibrate the Value between OTT Players & Telcos"
              </p>
            </div>

            {/* Education 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-600">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800">Master of Business Administration International Paris</h3>
                <p className="text-blue-600 font-medium mt-2">University Saint Joseph / Paris Dauphine / Sorbonne</p>
                <p className="text-gray-600 mt-1">France | 2009</p>
              </div>
            </div>

            {/* Education 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-600">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800">Master's Degree in Mathematics Engineering</h3>
                <p className="text-blue-600 font-medium mt-2">University Franche-Comté</p>
                <p className="text-gray-600 mt-1">France | 1987</p>
              </div>
            </div>

            {/* Education 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-600">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800">Master's Degree in Computer Science</h3>
                <p className="text-blue-600 font-medium mt-2">University Franche-Comté</p>
                <p className="text-gray-600 mt-1">France | 1987</p>
              </div>
            </div>
          </div>

          {/* Certificate */}
          <div className="mt-8">
            <h3 className={`${lusitana.className} text-2xl font-bold text-gray-800 mb-6`}>
              Certificate
            </h3>
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-600">
              <h4 className="text-lg font-bold text-gray-800">Digital Marketing for Professional Course</h4>
              <p className="text-green-600 font-medium mt-2">WSI | 2016</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${lusitana.className} text-3xl md:text-4xl font-bold text-gray-800 mb-10`}>
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                  BS
                </div>
                <h3 className="text-lg font-bold text-gray-800">Business Strategy</h3>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                  AS
                </div>
                <h3 className="text-lg font-bold text-gray-800">Analytical Skills</h3>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                  DM
                </div>
                <h3 className="text-lg font-bold text-gray-800">Digital Marketing</h3>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                  PM
                </div>
                <h3 className="text-lg font-bold text-gray-800">Project Management</h3>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                  CT
                </div>
                <h3 className="text-lg font-bold text-gray-800">Collaboration & Teamwork</h3>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                  WC
                </div>
                <h3 className="text-lg font-bold text-gray-800">Written & Oral Communication</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg mb-2">Jenny Gemayel Hatoum</p>
          <p className="text-blue-200">
            Expert in Business Intelligence | Digital Strategy | Telecommunications
          </p>
          <p className="text-blue-200 mt-4 text-sm">
            © 2025 All rights reserved
          </p>
        </div>
      </footer>
    </main>
  );
}
