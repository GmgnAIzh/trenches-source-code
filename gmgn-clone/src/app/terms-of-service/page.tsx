export default function TermsOfService() {
    return (
      <div className="bg-[#0a0a0a] text-zinc-300 min-h-screen font-sans">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-white">服务条款 (Terms of Service)</h1>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>更新日期：2025年07月19日</p>
            <p>在使用我们的软件（以下简称“本软件”）前，请您务必仔细阅读并理解本服务条款。您下载、安装或使用本软件的行为，即表示您已阅读、理解并同意接受本条款的全部内容。</p>

            <h2 className="text-2xl font-bold text-white pt-4">1. 服务内容</h2>
            <p>本软件提供加密货币市场的信号追踪、数据分析及自动化交易辅助功能。所有功能仅作为工具，旨在为您的交易决策提供参考，不构成任何投资建议。</p>

            <h2 className="text-2xl font-bold text-white pt-4">2. 用户责任</h2>
            <p>您理解并同意，加密货币市场存在极高风险。您将对自己的所有交易决策和行为负全部责任。我们不对因使用本软件而导致的任何盈利或亏损承担任何责任。</p>
            <p>您有责任妥善保管您的交易所API密钥，并遵循我们的安全建议，仅授予必要的权限。</p>

            <h2 className="text-2xl font-bold text-white pt-4">3. 风险提示</h2>
            <p className="border-l-4 border-red-500 pl-4 bg-red-900/20 py-2">
              <strong className="text-white">重要：</strong>加密货币交易涉及重大风险，可能导致您的投资部分或全部损失。本软件提供的数据和信号不应被视为投资建议。在做出任何投资决策之前，请务必进行自己的研究（DYOR）并咨询独立的财务顾问。
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">4. 知识产权</h2>
            <p>本软件的所有权和知识产权（包括但不限于商标、代码、界面设计）归我们所有。未经我们书面许可，您不得复制、修改、反向工程或分发本软件。</p>

            <h2 className="text-2xl font-bold text-white pt-4">5. 服务的中断与终止</h2>
            <p>我们保留在任何时候自行决定修改、暂停或终止本软件服务的权利，恕不另行通知。对于因服务中断或终止而可能给您造成的任何损失，我们不承担任何责任。</p>

            <h2 className="text-2xl font-bold text-white pt-4">6. 条款的修订</h2>
            <p>我们有权随时修订本条款。修订后的条款将在本页面公布，并于公布之日起生效。您继续使用本软件将被视为接受修订后的条款。</p>
          </div>
        </div>
      </div>
    );
  }
