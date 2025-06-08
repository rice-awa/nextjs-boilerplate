import Link from 'next/link';
import { FaRocket, FaLightbulb, FaUserFriends, FaHeart } from 'react-icons/fa';

export default function WelcomePage() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-16">
        <div className="relative">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <h1 className="relative text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            欢迎来到我的空间
          </h1>
        </div>
        <p className="max-w-2xl text-xl text-blue-100 mb-10">
          一个简洁、优雅的欢迎页面，专为现代网络体验设计
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="#" className="btn btn-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all">
            开始探索
          </Link>
          <Link href="#" className="btn btn-lg bg-blue-800 hover:bg-blue-700 transition-colors">
            了解更多
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-50">网站特色</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<FaRocket className="text-blue-400" />}
            title="极速体验"
            description="基于Next.js的优化性能，提供闪电般的加载速度"
          />
          <FeatureCard 
            icon={<FaLightbulb className="text-yellow-400" />}
            title="现代设计"
            description="简洁优雅的界面，专注于用户体验"
          />
          <FeatureCard 
            icon={<FaUserFriends className="text-green-400" />}
            title="响应式布局"
            description="完美适配所有设备尺寸，从手机到桌面"
          />
          <FeatureCard 
            icon={<FaHeart className="text-pink-400" />}
            title="易于定制"
            description="模块化组件设计，轻松扩展功能"
          />
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-2xl italic text-blue-100 mb-6">
            "简洁是复杂的最终形式。这个网站体现了这一理念，将现代技术与优雅设计完美结合。"
          </div>
          <div className="text-blue-200">- 网站设计师</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="bg-gradient-to-r from-blue-800 to-purple-900 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">准备好开始了吗？</h2>
          <p className="max-w-2xl mx-auto text-blue-100 mb-8">
            加入我们，体验这个简洁而强大的网站模板，为您的项目提供一个完美的起点。
          </p>
          <Link href="#" className="btn btn-lg bg-white text-blue-900 hover:bg-blue-100 font-bold">
            立即开始
          </Link>
        </div>
      </section>
    </div>
  );
}

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-blue-800/70 transition-all duration-300 hover:-translate-y-2">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-blue-50">{title}</h3>
    <p className="text-blue-200">{description}</p>
  </div>
);
