export default function PrivacyPolicy() {
    return (
      <div className="bg-[#0a0a0a] text-zinc-300 min-h-screen font-sans">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-white">隐私政策 (Privacy Policy)</h1>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>更新日期：2025年07月19日</p>
            <p>欢迎使用我们的软件！我们深知隐私对您的重要性，并会尽全力保护您的个人信息安全。本隐私政策旨在说明我们如何收集、使用、存储和保护您的信息。</p>

            <h2 className="text-2xl font-bold text-white pt-4">1. 信息的收集</h2>
            <p>当您使用我们的软件时，我们仅收集实现产品功能所必需的、最基本的信息。这包括：</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>您主动提供的交易所API密钥，用于连接交易功能。</li>
              <li>软件的运行日志和错误报告，用于改进我们的产品和服务，这些信息是匿名的，不包含您的个人身份信息。</li>
            </ul>
            <p>我们承诺，绝不会收集您的姓名、联系方式、密码或任何与交易无关的个人身份信息。</p>

            <h2 className="text-2xl font-bold text-white pt-4">2. API密钥的使用与存储</h2>
            <p>您的交易所API密钥是您的核心资产，我们对此采取最高级别的安全措施：</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
                <li><strong className="text-white">本地存储：</strong>您的API密钥经过多重加密后，仅存储在您自己的电脑本地。我们绝不会将您的密钥上传或存储在云端服务器。</li>
                <li><strong className="text-white">权限分离：</strong>我们强烈建议您在创建API密钥时，仅授予“读取”和“交易”权限，切勿授予“提现”权限。我们的软件也绝不会请求提现权限。</li>
            </ul>

            <h2 className="text-2xl font-bold text-white pt-4">3. 信息的使用</h2>
            <p>我们使用收集的信息来：</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>提供软件的核心功能，例如执行交易策略。</li>
              <li>分析软件性能，修复潜在的错误和崩溃。</li>
              <li>优化用户体验。</li>
            </ul>

            <h2 className="text-2xl font-bold text-white pt-4">4. 信息的保护</h2>
            <p>我们采用行业标准的安全技术和程序，来保护您的信息不被未经授权的访问、使用或泄露。</p>

            <h2 className="text-2xl font-bold text-white pt-4">5. 政策的更新</h2>
            <p>我们可能会不时更新本隐私政策。任何变更，我们都会在本页面上发布更新版本。我们建议您定期查看本页面以了解最新的隐私政策。</p>

            <h2 className="text-2xl font-bold text-white pt-4">6. 联系我们</h2>
            <p>如果您对本隐私政策有任何疑问，请通过以下方式与我们联系：</p>
            <p>电子邮件: support@example.com (请替换为您的真实邮箱)</p>
          </div>
        </div>
      </div>
    );
  }
