import { Shield, Lock, Wifi, Mail, UserX, Eye, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import ReviewSection from './ReviewSection';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-3 rounded-2xl">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-black text-white leading-tight">
                Cybersecurity<br />for Normal People
              </h1>
            </div>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl">Understanding online security without the jargon, fear-mongering, or overwhelming technical details</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <section className="mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-2xl"></div>
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-12 border border-slate-700">
            <div className="flex items-start gap-4 mb-6">
              <CheckCircle2 className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Welcome to Clear Security</h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  This website helps you understand how digital threats actually work, what is real risk versus myth,
                  and how to stay safe online using simple, practical knowledge.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <article className="group relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 hover:border-red-400/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:to-red-500/10 transition-all duration-300"></div>
            <div className="relative flex items-start gap-4">
              <div className="bg-gradient-to-br from-red-500 to-orange-600 p-3 rounded-xl">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">Viruses & Malware</h3>
                <p className="text-slate-300 mb-4">
                  <span className="text-cyan-400 font-semibold">What it is:</span> Malicious software that can harm your computer, steal information, or take control of your device.
                </p>
                <p className="text-slate-300 mb-4">
                  <span className="text-cyan-400 font-semibold">How it works:</span> Usually installed when you download something suspicious, click a bad link, or visit a compromised website.
                </p>
                <p className="text-slate-300 mb-4">
                  <span className="text-cyan-400 font-semibold">What you should know:</span> Modern operating systems and browsers have built-in protection. The biggest risk is when you ignore warnings.
                </p>
                <p className="text-slate-300 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  <span><span className="text-cyan-400 font-semibold">Real advice:</span> Don't download from sketchy websites. Keep your system updated.</span>
                </p>
              </div>
            </div>
          </article>

          <article className="group relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 hover:border-orange-400/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all duration-300"></div>
            <div className="relative flex items-start gap-4">
              <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-3 rounded-xl">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">Phishing Scams</h3>
                <p className="text-slate-300 mb-4">
                  <span className="text-cyan-400 font-semibold">What it is:</span> Fake emails and websites pretending to be legitimate to trick you into giving away passwords.
                </p>
                <p className="text-slate-300 mb-4">
                  <span className="text-cyan-400 font-semibold">How it works:</span> Scammers create urgency ("Your account will be closed!") to make you act without thinking.
                </p>
                <p className="text-slate-300 mb-4">
                  <span className="text-cyan-400 font-semibold">What you should know:</span> Real companies won't ask for your password via email. Check where links actually go before clicking.
                </p>
                <p className="text-slate-300 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  <span><span className="text-cyan-400 font-semibold">Real advice:</span> If an email creates panic, slow down and verify directly.</span>
                </p>
              </div>
            </div>
          </article>

          <article className="group relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 hover:border-green-400/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-green-500/10 transition-all duration-300"></div>
            <div className="relative flex items-start gap-4">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">Passwords</h3>
                <p className="text-slate-300 mb-4">
                  <span className="text-cyan-400 font-semibold">What matters:</span> Long passwords are better than complex ones. Phrases are stronger than special characters.
                </p>
                <p className="text-slate-300 mb-4">
                  <span className="text-cyan-400 font-semibold">The real problem:</span> Using the same password everywhere. When one site gets hacked, attackers try that password on every other site.
                </p>
                <p className="text-slate-300 mb-4">
                  <span className="text-cyan-400 font-semibold">What you should know:</span> Password managers are safe and make life easier.
                </p>
                <p className="text-slate-300 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  <span><span className="text-cyan-400 font-semibold">Real advice:</span> Use a password manager and enable two-factor authentication.</span>
                </p>
              </div>
            </div>
          </article>

          <article className="group relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-cyan-500/10 transition-all duration-300"></div>
            <div className="relative flex items-start gap-4">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-3 rounded-xl">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">Wi-Fi Security</h3>
                <p className="text-slate-300 mb-4">
                  <span className="text-cyan-400 font-semibold">What it is:</span> Public Wi-Fi networks can potentially allow others to see your internet activity.
                </p>
                <p className="text-slate-300 mb-4">
                  <span className="text-cyan-400 font-semibold">The reality:</span> Most websites use HTTPS (the padlock icon), which encrypts your data even on public Wi-Fi.
                </p>
                <p className="text-slate-300 mb-4">
                  <span className="text-cyan-400 font-semibold">What you should know:</span> The bigger risk is fake networks impersonating real ones.
                </p>
                <p className="text-slate-300 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  <span><span className="text-cyan-400 font-semibold">Real advice:</span> Verify network names with staff. Use HTTPS sites for sensitive info.</span>
                </p>
              </div>
            </div>
          </article>

          <article className="group relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 hover:border-blue-400/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-blue-500/10 transition-all duration-300"></div>
            <div className="relative flex items-start gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl">
                <UserX className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">Social Engineering</h3>
                <p className="text-slate-300 mb-4">
                  <span className="text-cyan-400 font-semibold">What it is:</span> Manipulating people into breaking security procedures or revealing confidential information.
                </p>
                <p className="text-slate-300 mb-4">
                  <span className="text-cyan-400 font-semibold">How it works:</span> Someone pretends to be tech support, your boss, or a trusted service to trick you.
                </p>
                <p className="text-slate-300 mb-4">
                  <span className="text-cyan-400 font-semibold">What you should know:</span> This is often more effective than hacking itself. It's easier to trick someone than break security.
                </p>
                <p className="text-slate-300 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  <span><span className="text-cyan-400 font-semibold">Real advice:</span> Verify identity through different channels before acting.</span>
                </p>
              </div>
            </div>
          </article>

          <article className="group relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 hover:border-teal-400/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-teal-500/0 group-hover:from-teal-500/5 group-hover:to-teal-500/10 transition-all duration-300"></div>
            <div className="relative flex items-start gap-4">
              <div className="bg-gradient-to-br from-teal-400 to-cyan-600 p-3 rounded-xl">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">Data Privacy</h3>
                <p className="text-slate-300 mb-4">
                  <span className="text-cyan-400 font-semibold">What it is:</span> Understanding what companies know about you and how they use that information.
                </p>
                <p className="text-slate-300 mb-4">
                  <span className="text-cyan-400 font-semibold">The reality:</span> Apps and websites collect data for services, ads, and sometimes sell to other companies.
                </p>
                <p className="text-slate-300 mb-4">
                  <span className="text-cyan-400 font-semibold">What you should know:</span> You can control more than you think through privacy settings.
                </p>
                <p className="text-slate-300 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  <span><span className="text-cyan-400 font-semibold">Real advice:</span> Review app permissions and privacy settings regularly.</span>
                </p>
              </div>
            </div>
          </article>
        </div>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-cyan-400" />
            Common Misconceptions About Hacking
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 hover:border-red-400/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:to-red-500/10 transition-all duration-300"></div>
              <div className="relative">
                <p className="font-bold text-red-400 mb-2 text-lg">Myth</p>
                <p className="font-semibold text-white mb-3">Hackers can access your computer instantly through Wi-Fi</p>
                <p className="text-slate-300"><span className="text-cyan-400 font-semibold">Reality:</span> It's much harder than movies show. Modern security makes this extremely difficult without you doing something to let them in.</p>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 hover:border-orange-400/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all duration-300"></div>
              <div className="relative">
                <p className="font-bold text-orange-400 mb-2 text-lg">Myth</p>
                <p className="font-semibold text-white mb-3">Incognito mode makes you anonymous</p>
                <p className="text-slate-300"><span className="text-cyan-400 font-semibold">Reality:</span> It only prevents your browser from saving history locally. Your ISP, websites, and employer can still see what you're doing.</p>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 hover:border-green-400/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-green-500/10 transition-all duration-300"></div>
              <div className="relative">
                <p className="font-bold text-green-400 mb-2 text-lg">Myth</p>
                <p className="font-semibold text-white mb-3">Macs and phones don't get viruses</p>
                <p className="text-slate-300"><span className="text-cyan-400 font-semibold">Reality:</span> They're less targeted, but not immune. App stores provide protection by reviewing software before distribution.</p>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-cyan-500/10 transition-all duration-300"></div>
              <div className="relative">
                <p className="font-bold text-cyan-400 mb-2 text-lg">Myth</p>
                <p className="font-semibold text-white mb-3">Strong security is complicated and inconvenient</p>
                <p className="text-slate-300"><span className="text-cyan-400 font-semibold">Reality:</span> Basic security (updates, password managers, two-factor auth) is simple and actually makes life easier in the long run.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-2xl"></div>
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-12 border border-slate-600">
            <h2 className="text-3xl font-bold text-white mb-6">The Bottom Line</h2>
            <div className="space-y-4">
              <p className="text-lg text-slate-300 leading-relaxed">
                Most people won't be individually targeted by sophisticated hackers. The real threats are opportunistic:
                automated attacks looking for easy targets, mass phishing campaigns, and people trying common passwords.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Good security isn't about paranoia or perfection. It's about making yourself a harder target than the next person.
                Think of it like locking your car—you're not trying to stop a determined professional car thief,
                you're just making sure someone doesn't walk by and open your door.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Stay updated, use strong unique passwords, think before you click, and don't panic.
                You're probably doing better than you think.
              </p>
            </div>
          </div>
        </section>

        <ReviewSection />
      </main>

      <footer className="bg-gradient-to-t from-slate-900 to-slate-800 border-t border-slate-700 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">Cybersecurity for Normal People</span>
              </div>
              <p className="text-slate-400 text-sm">Understanding online security without the technical jargon</p>
            </div>
            <div className="text-slate-400 text-sm text-center md:text-right">
              <p>Built with clarity and practical advice</p>
              <p>Stay safe online</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700">
            <p className="text-slate-500 text-xs text-center">
              This site focuses on real security threats and practical advice, not fear. Everyone deserves to understand their digital safety.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
