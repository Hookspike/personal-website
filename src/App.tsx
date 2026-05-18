import { motion } from 'framer-motion'
import { Droplets, Package, Award, Sparkles, ChevronRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Droplets className="w-8 h-8 text-water-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-water-600 to-water-400 bg-clip-text text-transparent">
                PureWater
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-600 hover:text-water-600 transition-colors">首页</a>
              <a href="#products" className="text-slate-600 hover:text-water-600 transition-colors">产品系列</a>
              <a href="#customize" className="text-slate-600 hover:text-water-600 transition-colors">定制服务</a>
              <a href="#about" className="text-slate-600 hover:text-water-600 transition-colors">关于我们</a>
              <button className="bg-gradient-to-r from-water-600 to-water-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">
                立即定制
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a href="#home" className="block text-slate-600 hover:text-water-600">首页</a>
              <a href="#products" className="block text-slate-600 hover:text-water-600">产品系列</a>
              <a href="#customize" className="block text-slate-600 hover:text-water-600">定制服务</a>
              <a href="#about" className="block text-slate-600 hover:text-water-600">关于我们</a>
              <button className="w-full bg-gradient-to-r from-water-600 to-water-500 text-white px-6 py-2 rounded-full">
                立即定制
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-48 h-48 mx-auto mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-water-400 to-water-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-water-100 to-water-200 rounded-full w-full h-full flex items-center justify-center shadow-2xl">
                <Droplets className="w-24 h-24 text-water-600" />
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-water-600 via-water-500 to-water-400 bg-clip-text text-transparent">
                纯净之源
              </span>
              <br />
              <span className="text-slate-800">定制您的专属矿泉水</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
              源自深层地下天然矿泉，为您打造独一无二的定制水品牌。
              从瓶身设计到水质定制，满足您的个性化需求。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-water-600 to-water-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2">
                开始定制
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-water-600 text-water-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-water-50 transition-all">
                了解更多
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplets className="w-12 h-12" />,
                title: "天然纯净",
                description: "源自深层地下天然矿泉，经过多层天然过滤，水质纯净甘甜"
              },
              {
                icon: <Package className="w-12 h-12" />,
                title: "专属定制",
                description: "从瓶身设计到标签定制，为您打造独一无二的品牌形象"
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "品质保证",
                description: "严格的质量控制体系，确保每一瓶都达到最高标准"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
              >
                <div className="text-water-600 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">产品系列</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              多种规格与款式，满足不同场景需求
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "经典系列",
                size: "500ml",
                price: "¥12",
                features: ["标准瓶型", "基础定制", "批量优惠"],
                gradient: "from-water-400 to-water-600"
              },
              {
                name: "尊享系列",
                size: "750ml",
                price: "¥18",
                features: ["高端瓶型", "全定制设计", "专属包装"],
                gradient: "from-water-500 to-water-700"
              },
              {
                name: "限量系列",
                size: "1000ml",
                price: "¥28",
                features: ["独特设计", "限量生产", "收藏价值"],
                gradient: "from-water-600 to-water-800"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className={`h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                  <Droplets className="w-20 h-20 text-white/90" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{product.name}</h3>
                      <p className="text-slate-500">{product.size}</p>
                    </div>
                    <span className="text-3xl font-bold text-water-600">{product.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-slate-600">
                        <Sparkles className="w-4 h-4 text-water-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-water-600 to-water-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                    选择此系列
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section id="customize" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">定制服务</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              专业的定制团队，为您打造专属品牌
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { step: "01", title: "需求沟通", desc: "了解您的品牌定位和定制需求" },
                { step: "02", title: "方案设计", desc: "专业设计师为您打造专属方案" },
                { step: "03", title: "样品确认", desc: "制作样品供您确认效果" },
                { step: "04", title: "批量生产", desc: "严格品控，按时交付" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-water-500 to-water-600 rounded-full flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-water-50 to-water-100 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">立即咨询</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="您的姓名"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-water-500 focus:ring-2 focus:ring-water-200 outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="电子邮箱"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-water-500 focus:ring-2 focus:ring-water-200 outline-none transition-all"
                />
                <input
                  type="tel"
                  placeholder="联系电话"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-water-500 focus:ring-2 focus:ring-water-200 outline-none transition-all"
                />
                <textarea
                  placeholder="请描述您的定制需求"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-water-500 focus:ring-2 focus:ring-water-200 outline-none transition-all resize-none"
                />
                <button className="w-full bg-gradient-to-r from-water-600 to-water-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all">
                  提交咨询
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">关于我们</h2>
              <p className="text-lg text-slate-600 mb-6">
                PureWater 致力于为客户提供高品质的定制矿泉水服务。我们拥有先进的生产设备和专业的研发团队，从水源采集到成品包装，每一个环节都严格把控。
              </p>
              <p className="text-lg text-slate-600 mb-8">
                我们相信，每一滴水都承载着品牌的理念。通过定制服务，我们帮助企业打造独特的品牌形象，让客户在品尝纯净水质的同时，感受到品牌的价值。
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { num: "10+", label: "年经验" },
                  { num: "500+", label: "合作品牌" },
                  { num: "1M+", label: "满意客户" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-water-600 mb-1">{stat.num}</div>
                    <div className="text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-water-400 to-water-600 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-water-100 to-water-200 rounded-3xl p-12 flex items-center justify-center">
                <Droplets className="w-32 h-32 text-water-600" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Droplets className="w-8 h-8 text-water-400" />
                <span className="text-2xl font-bold">PureWater</span>
              </div>
              <p className="text-slate-400">
                专注定制矿泉水服务，为您打造专属品牌
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">产品</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">经典系列</a></li>
                <li><a href="#" className="hover:text-white transition-colors">尊享系列</a></li>
                <li><a href="#" className="hover:text-white transition-colors">限量系列</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">服务</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">定制服务</a></li>
                <li><a href="#" className="hover:text-white transition-colors">批量订购</a></li>
                <li><a href="#" className="hover:text-white transition-colors">售后服务</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">联系我们</h4>
              <ul className="space-y-2 text-slate-400">
                <li>电话: 400-888-8888</li>
                <li>邮箱: info@purewater.com</li>
                <li>地址: 北京市朝阳区</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>© 2024 PureWater. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
