import { Shield, Lock, Wifi, Mail, UserX, Eye, AlertTriangle, CheckCircle2 } from 'lucide-react';
import ReviewSection from './ReviewSection';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Shield className="w-10 h-10 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Cybersecurity for Normal People</h1>
              <p className="text-slate-600 mt-1">Understanding online security without the jargon</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Welcome</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            This website exists to help you understand how digital threats actually work, what is real risk versus myth,
            and how to stay safe online using simple, practical knowledge. No technical jargon. No fear-mongering.
            Just clear explanations that anyone can understand.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <article className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Viruses & Malware</h3>
                <p className="text-slate-700 mb-4">
                  <strong>What it is:</strong> Malicious software that can harm your computer, steal information, or take control of your device.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong>How it works:</strong> Usually installed when you download something suspicious, click a bad link, or visit a compromised website.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong>What you should know:</strong> Modern operating systems and browsers have built-in protection.
                  The biggest risk is when you ignore warnings and intentionally install something questionable.
                </p>
                <p className="text-slate-700">
                  <strong>Real advice:</strong> Don't download software from sketchy websites. Keep your system updated.
                  Use common sense—if something seems too good to be true, it probably is.
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Phishing Scams</h3>
                <p className="text-slate-700 mb-4">
                  <strong>What it is:</strong> Fake emails, texts, or websites pretending to be from legitimate companies
                  to trick you into giving away passwords or personal information.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong>How it works:</strong> Scammers send messages that look real, creating urgency
                  ("Your account will be closed!") to make you act without thinking.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong>What you should know:</strong> Real companies won't ask for your password via email.
                  Hover over links before clicking to see where they actually go.
                </p>
                <p className="text-slate-700">
                  <strong>Real advice:</strong> If an email creates panic, slow down. Go directly to the website
                  (don't click the link) and check your account there instead.
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Lock className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Passwords</h3>
                <p className="text-slate-700 mb-4">
                  <strong>What matters:</strong> Long passwords are better than complex ones.
                  "my dog loves the beach in summer" is stronger than "P@ssw0rd!".
                </p>
                <p className="text-slate-700 mb-4">
                  <strong>The real problem:</strong> Using the same password everywhere. When one site gets hacked,
                  attackers try that password on every other site.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong>What you should know:</strong> Password managers are safe and make life easier.
                  They generate unique passwords for every site and remember them for you.
                </p>
                <p className="text-slate-700">
                  <strong>Real advice:</strong> Use a password manager. Enable two-factor authentication
                  on important accounts (email, banking, social media).
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Wifi className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Wi-Fi Security</h3>
                <p className="text-slate-700 mb-4">
                  <strong>What it is:</strong> Public Wi-Fi networks can potentially allow others to see your internet activity.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong>The reality:</strong> Most websites now use HTTPS (the padlock icon), which encrypts your data.
                  This means even on public Wi-Fi, your passwords and credit card info are protected.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong>What you should know:</strong> The bigger risk is fake Wi-Fi networks that impersonate real ones
                  (like "Starbucks_Free" instead of the real Starbucks Wi-Fi).
                </p>
                <p className="text-slate-700">
                  <strong>Real advice:</strong> Only enter sensitive info on sites with HTTPS.
                  Verify the Wi-Fi network name with staff. Consider using your phone's hotspot for important tasks.
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <UserX className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Social Engineering</h3>
                <p className="text-slate-700 mb-4">
                  <strong>What it is:</strong> Manipulating people into breaking security procedures or revealing confidential information.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong>How it works:</strong> Someone pretends to be tech support, your boss, or a trusted service
                  to trick you into doing something you shouldn't.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong>What you should know:</strong> This is often more effective than hacking.
                  It's easier to trick someone than to break through security systems.
                </p>
                <p className="text-slate-700">
                  <strong>Real advice:</strong> Be skeptical of unexpected calls or messages asking for information.
                  Verify identity through a different channel before acting on requests.
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Eye className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Data Privacy</h3>
                <p className="text-slate-700 mb-4">
                  <strong>What it is:</strong> Understanding what companies know about you and how they use that information.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong>The reality:</strong> Apps and websites collect data to improve services, show ads,
                  and sometimes sell to other companies. Most of this is disclosed in privacy policies nobody reads.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong>What you should know:</strong> You can control more than you think.
                  Check privacy settings on social media, use private browsing when needed, and review app permissions.
                </p>
                <p className="text-slate-700">
                  <strong>Real advice:</strong> Think before posting personal information publicly.
                  Review what permissions apps have on your phone. Use privacy-focused alternatives when it matters to you.
                </p>
              </div>
            </div>
          </article>
        </div>

        <section className="mb-16 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8" />
            Common Misconceptions About Hacking
          </h2>
          <div className="space-y-4">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-semibold mb-2">Myth: Hackers can access your computer instantly through Wi-Fi</p>
              <p className="text-slate-200">Reality: It's much harder than movies make it seem. Modern security makes this extremely difficult without you doing something to let them in.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-semibold mb-2">Myth: Incognito mode makes you anonymous</p>
              <p className="text-slate-200">Reality: It only prevents your browser from saving history locally. Your internet provider, websites, and employer can still see what you're doing.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-semibold mb-2">Myth: Macs and phones don't get viruses</p>
              <p className="text-slate-200">Reality: They're less targeted, but not immune. The main protection is that app stores review software before allowing downloads.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-semibold mb-2">Myth: Strong security is complicated and inconvenient</p>
              <p className="text-slate-200">Reality: Basic security (updates, password managers, two-factor auth) is simple and actually makes life easier in the long run.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Bottom Line</h2>
          <div className="prose prose-lg text-slate-700 max-w-none">
            <p className="mb-4">
              Most people won't be individually targeted by sophisticated hackers. The real threats are opportunistic:
              automated attacks looking for easy targets, mass phishing campaigns, and people trying common passwords.
            </p>
            <p className="mb-4">
              Good security isn't about paranoia or perfection. It's about making yourself a harder target than the next person.
              Think of it like locking your car—you're not trying to stop a determined professional car thief,
              you're just making sure someone doesn't walk by and open your door.
            </p>
            <p>
              Stay updated, use strong unique passwords, think before you click, and don't panic.
              You're probably doing better than you think.
            </p>
          </div>
        </section>

        <ReviewSection />
      </main>

      <footer className="bg-slate-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">Cybersecurity for Normal People</span>
          </div>
          <p className="text-slate-400 text-sm">Understanding online security without the technical jargon</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
