export default function UninstallGuide() {
    return (
      <div className="bg-[#0a0a0a] text-zinc-300 min-h-screen font-sans">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-white">软件卸载指南 (Uninstall Guide)</h1>
          <div className="space-y-8 text-lg leading-relaxed">
            <p>我们致力于提供简单、透明的用户体验，包括软件的卸载过程。您可以随时通过操作系统提供的标准方式轻松卸载我们的软件。</p>

            <div>
                <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-emerald-500 pl-3">卸载 for Windows 10 / 11</h2>
                <ol className="list-decimal list-inside pl-4 space-y-3">
                    <li>
                        <strong className="text-white">打开“设置”</strong>: 点击您的“开始”菜单，然后选择齿轮状的“设置”图标。
                    </li>
                    <li>
                        <strong className="text-white">进入“应用”</strong>: 在设置窗口中，点击“应用”或“应用和功能”。
                    </li>
                    <li>
                        <strong className="text-white">查找软件</strong>: 在应用列表中，滚动查找或使用搜索框输入我们的软件名称进行查找。
                    </li>
                     <li>
                        <strong className="text-white">点击卸载</strong>: 找到软件后，点击它，然后选择“卸载”按钮。根据系统提示再次确认即可。
                    </li>
                </ol>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-emerald-500 pl-3">卸载 for macOS (即将支持)</h2>
                 <ol className="list-decimal list-inside pl-4 space-y-3">
                    <li>
                        <strong className="text-white">打开“访达(Finder)”</strong>: 点击 Dock 上的 Finder 图标。
                    </li>
                     <li>
                        <strong className="text-white">进入“应用程序”目录</strong>: 在 Finder 的侧边栏中，选择“应用程序”。
                    </li>
                    <li>
                        <strong className="text-white">拖到废纸篓</strong>: 找到我们的软件图标，将其直接拖动到废纸篓。或者，右键点击图标并选择“移到废纸篓”。
                    </li>
                     <li>
                        <strong className="text-white">清空废纸篓</strong>: 右键点击废纸篓图标，选择“清空废纸篓”以完成卸载。
                    </li>
                </ol>
            </div>

            <p className="pt-6">卸载过程不会在您的电脑上留下任何残留的配置文件或文件夹。如果您在卸载过程中遇到任何问题，请随时通过我们的支持邮箱与我们联系。</p>

          </div>
        </div>
      </div>
    );
  }
