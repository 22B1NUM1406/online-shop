import React, { useState } from 'react';
import { ShoppingCart, Phone, Search, Menu, X, Facebook, Mail, MapPin } from 'lucide-react';

export default function TsaasWebsite() {
  const [cart, setCart] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('featured');

  const featuredProducts = [
    { id: 1, name: 'SPRT Посын принтер 80мм', price: '265,000₮', image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=300&h=300&fit=crop' },
    { id: 2, name: 'зөөврийн принтер A4', price: '299,000₮', image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=300&h=300&fit=crop' },
    { id: 3, name: '60*40мм шошгоны стикер', price: '5,500₮', oldPrice: '6,600₮', discount: '16.7%', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=300&h=300&fit=crop' },
    { id: 4, name: 'A4 Бичгийн цаас Double A', price: '87,500₮', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=300&h=300&fit=crop' },
  ];

  const discountProducts = [
    { id: 5, name: '57*50 мм посын цаас (100ш)', price: '132,000₮', oldPrice: '155,760₮', discount: '15.3%', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=300&h=300&fit=crop' },
    { id: 6, name: '80*60мм посын цаас (100ш)', price: '165,000₮', oldPrice: '198,000₮', discount: '16.7%', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=300&h=300&fit=crop' },
    { id: 7, name: '80*80мм посын цаас (50ш)', price: '175,000₮', oldPrice: '213,500₮', discount: '18.0%', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=300&h=300&fit=crop' },
    { id: 8, name: '57*37мм посын цаас (160ш)', price: '140,800₮', oldPrice: '160,000₮', discount: '12.0%', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=300&h=300&fit=crop' },
  ];

  const newProducts = [
    { id: 9, name: 'Deli цаасны хутганы хутга', price: '7,200₮', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=300&h=300&fit=crop' },
    { id: 10, name: '57*30мм шошгоны стикер', price: '4,000₮', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=300&h=300&fit=crop' },
    { id: 11, name: 'Maxwell House (Rich blend)', price: '17,050₮', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop' },
    { id: 12, name: 'Jacobs (Monarch)', price: '12,000₮', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop' },
  ];

  const addToCart = () => {
    setCart(cart + 1);
  };

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
            {product.discount} Off
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-800 mb-2 h-12 line-clamp-2">{product.name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-blue-600">{product.price}</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
          )}
        </div>
        <button 
          onClick={addToCart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <ShoppingCart size={18} />
          Сагслах
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-8">
              <div className="text-2xl font-bold text-blue-600">
                ONLINE SHOP
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Эхлэл</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Бүтээгдэхүүн</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Үнийн санал</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Холбоо барих</a>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="hidden md:flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <Search size={20} />
              </button>
              <button className="relative">
                <ShoppingCart className="text-gray-700 hover:text-blue-600" size={24} />
                {cart > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cart}
                  </span>
                )}
              </button>
              <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col p-4 gap-3">
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2">Эхлэл</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2">Бүтээгдэхүүн</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2">Үнийн санал</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2">Холбоо барих</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Бүх төрлийн цаас, оффис хангамж
              </h1>
              <p className="text-xl mb-6 text-blue-100">
                Онлайн захиалга - Хурдан хялбар найдвартай
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Бүтээгдэхүүн үзэх
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Холбоо барих
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop" 
                alt="Office Supplies"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TBARIMT.COM Banner */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">TBARIMT.COM</h2>
          <p className="text-lg mb-4">Онлайн баримт авах систем - Хурдан, Хялбар, Найдвартай</p>
          <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Дэлгэрэнгүй
          </button>
        </div>
      </section>

      {/* Discount Products */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Хямдралтай бүтээгдэхүүнүүд</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {discountProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Product Tabs */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Бүтээгдэхүүн</h2>
        
        <div className="flex gap-4 mb-8 border-b">
          <button 
            onClick={() => setActiveTab('featured')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'featured' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Онцлох
          </button>
          <button 
            onClick={() => setActiveTab('new')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'new' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Шинээр нэмэгдсэн
          </button>
          <button 
            onClick={() => setActiveTab('popular')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'popular' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Эрэлттэй
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeTab === 'featured' && featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          {activeTab === 'new' && newProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          {activeTab === 'popular' && featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Banner before Footer */}
      <section className="relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1920&h=400&fit=crop" 
          alt="Office Workspace"
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
               
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">ONLINE SHOP</h3>
              <p className="text-gray-400 mb-4">
                Бүх төрлийн цаас, оффис хангамж онлайн худалдаа
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Шууд холбогдох утас</h4>
              <div className="flex items-center gap-2 mb-2">
                <Phone size={18} />
                <a href="tel:70005060" className="hover:text-blue-400">+976 70005060</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:93000022" className="hover:text-blue-400">+976 93000022</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">ТУСЛАХ ЦЭС</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Түгээмэл асуултууд</a></li>
                <li><a href="#" className="hover:text-blue-400">Хамтран ажиллах</a></li>
                <li><a href="#" className="hover:text-blue-400">Худалдааны нөхцөл</a></li>
                <li><a href="#" className="hover:text-blue-400">Холбоо барих</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Төв салбар</h4>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <p>
                  Улаанбаатар хот, Хан-Уул дүүрэг 2-р хороо 19
                  Үйлчилгээний төвөөс баруун тийш 15-р сургуулийн дэргэд
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:text-blue-400"><Facebook size={24} /></a>
                <a href="#" className="hover:text-blue-400"><Mail size={24} /></a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
            <p>ONLINE SHOP Copyright © 2015-2026 All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}