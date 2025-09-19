import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminLogin from './AdminLogin'
import './FeaturedKits.css'

function FeaturedKits() {
  const navigate = useNavigate()

  const [tapCount, setTapCount] = useState(0)
  const [showAdminLogin, setShowAdminLogin] = useState(false)
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false)
  const [newKit, setNewKit] = useState({ name: '', image: '', description: '' })

  const handleTap = () => {
    setTapCount(prev => prev + 1)
    if (tapCount + 1 === 6) {
      setTapCount(0)
      setShowAdminLogin(true)
    }
  }

  const handleAdminLogin = (username, password) => {
    if (username === 'karun8619' && password === 'Karun@8619') {
      setIsAdminAuthenticated(true)
      setShowAdminLogin(false)
    } else {
      alert('Invalid admin credentials')
    }
  }

  const handleAddKit = () => {
    // Add new kit to kits array (in a real app, this would be saved to backend)
    alert('New kit added!')
    setNewKit({ name: '', image: '', description: '' })
    setIsAdminAuthenticated(false)
  }

  const kits = [
    {
      name: 'Griha Pravesh Kit',
      image: 'https://thumbs.dreamstime.com/b/beautiful-hindi-typography-griha-pravesh-sasneh-nimantran-means-warm-invitation-house-warming-ceremony-hindi-typography-griha-228664489.jpg',
      description: 'Complete set for housewarming ceremonies with traditional items.',
      customizable: true,
      relatedProducts: [
        { name: 'Copper Kalash', price: 629, originalPrice: 699, category: 'Pooja Vessel', image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/WH/NR/KW/134871380/img-7361-1000x1000.jpg' },
        { name: 'Sacred Thread', price: 53, originalPrice: 59, category: 'Thread', image: 'https://tse1.explicit.bing.net/th/id/OIP.lq5X4vgyDyKPQZl_DcKIjwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
        { name: 'Incense Sticks', price: 89, originalPrice: 99, image: 'https://www.agarbattishop.com/wp-content/uploads/2023/08/FG-Naturals-Sandalwood-Incense-Sticks-1.jpg' },
        { name: 'Coconut', price: 35, originalPrice: 39, image: 'https://static.tnn.in/thumb/msid-109757736,thumbsize-85762,width-1280,height-720,resizemode-75/109757736.jpg?quality=100' },
        { name: 'Flowers', price: 125, originalPrice: 139, image: 'https://res.cloudinary.com/djcyhbk2e/image/upload/c_fit,f_auto,h_800,q_35,w_800/v1/gvv/prod/b0boj7zlrnhlwqrffv6f' },
        { name: 'Rice', price: 72, originalPrice: 80, image: 'https://www.roopmahalrice.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-07-18-at-11.19.09-PM-1024x1024.jpeg' },
        { name: 'Ghee Lamp', price: 269, originalPrice: 299, image: 'https://tse1.mm.bing.net/th/id/OIP.X9-F9DU-3B366faOgux7TQHaJL?w=1946&h=2412&rs=1&pid=ImgDetMain&o=7&rm=3' },
        { name: 'Sandalwood Paste', price: 89, originalPrice: 99, image: 'https://m.media-amazon.com/images/I/61s4OQYiGJL.jpg' },
        { name: 'Turmeric Powder', price: 89, originalPrice: 99, image: 'https://as2.ftcdn.net/v2/jpg/10/04/00/87/1000_F_1004008777_uEpnZ4yuc6Z2WuGDbO0Dkx50fBTXjM2j.jpg' },
        { name: 'Kumkum', price: 44, originalPrice: 49, image: 'https://i.etsystatic.com/17612060/r/il/5125a2/4066620608/il_300x300.4066620608_r6e8.jpg' },
        { name: 'Pooja Thali', price: 449, originalPrice: 499, image: 'https://m.media-amazon.com/images/I/81wfebfRIjL.jpg' },
        { name: 'Betel Leaves', price: 26, originalPrice: 29, image: 'https://static.vecteezy.com/system/resources/previews/006/784/348/non_2x/betel-leaf-paan-for-indian-pooja-image-photo.jpg' },
        { name: 'Sweets Box', price: 225, originalPrice: 250, image: 'https://assets.isu.pub/document-structure/230601092922-72886d08276ffeb308b4dd9bcc0b9ab4/v1/7ecf35b3fc9f72c4f066c4532a4ae38b.jpeg' },
        { name: 'Camphor', price: 71, originalPrice: 79, image: 'https://tse3.mm.bing.net/th/id/OIP.pvcEMdQQfxwqxqdJa_KnaQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3' },
        { name: 'Pooja Book', price: 179, originalPrice: 199, image: 'https://i.ebayimg.com/images/g/ivIAAOSwq7xanDJD/s-l1600.jpg' },
        { name: 'Bell', price: 80, originalPrice: 89, image: 'https://i.zoomtventertainment.com/story/Puja_bell_istock.jpg' },
        { name: 'Diya Set', price: 134, originalPrice: 149, image: 'https://m.media-amazon.com/images/I/61pobu20plL._SL1500_.jpg' },
        { name: 'Flower Garland', price: 116, originalPrice: 129, image: 'https://tse2.mm.bing.net/th/id/OIP.EQV0_av8fqvjCOaeJGAwXQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
        { name: 'Agarbatti Holder', price: 89, originalPrice: 99, image: 'https://5.imimg.com/data5/SELLER/Default/2021/7/DC/SN/LW/67743740/agarbatti-stand-1000x1000.jpg' },
        { name: 'Conch', price: 809, originalPrice: 899, image: 'https://shreeyaash.com/wp-content/uploads/2023/04/2-Inch-14.png' },
        { name: 'Holy Basil Plant', price: 179, originalPrice: 199, image: 'https://m.media-amazon.com/images/I/51SMYIbRGHL._SX300_SY300_QL70_ML2_.jpg' },
        { name: 'Ghee', price: 359, originalPrice: 399, image: 'https://m.media-amazon.com/images/I/61t5KplmhfL.jpg' },
        { name: 'Honey', price: 269, originalPrice: 299, image: 'https://5.imimg.com/data5/SELLER/Default/2022/6/FR/AY/LC/153228480/100gm-puja-honey-500x500.jpg' },
        { name: 'Fruits', price: 179, originalPrice: 199, image: 'https://5.imimg.com/data5/SELLER/Default/2021/6/KK/IH/XQ/92877594/fruit-packaging-box-500x500.jpg' },
        { name: 'Panchamrit', price: 269, originalPrice: 299, image: 'https://www.funfoodfrolic.com/wp-content/uploads/2023/09/Panchamrit-Blog-1024x1024.jpg' }
      ]
    },
    {
      name: 'Baby Naming Ceremony',
      image: 'https://m.media-amazon.com/images/I/81mfX4Z8vGL._SL1500_.jpg',
      description: 'Sacred items for the auspicious naming of your newborn.',
      customizable: true,
      relatedProducts: [
        { name: 'Silver Bowl', price: 360, originalPrice: 400, image: 'https://example.com/bowl.jpg' },
        { name: 'Honey', price: 54, originalPrice: 60, image: 'https://example.com/honey.jpg' },
        { name: 'Betel Leaves', price: 27, originalPrice: 30, image: 'https://example.com/leaves.jpg' },
        { name: 'Turmeric Powder', price: 36, originalPrice: 40, image: 'https://example.com/turmeric.jpg' },
        { name: 'Sweets', price: 180, originalPrice: 200, image: 'https://example.com/sweets.jpg' },
        { name: 'Oil Lamp', price: 135, originalPrice: 150, image: 'https://example.com/oil-lamp.jpg' },
        { name: 'Fruits', price: 90, originalPrice: 100, image: 'https://example.com/fruits.jpg' },
        { name: 'Sacred Water Pot', price: 225, originalPrice: 250, image: 'https://example.com/water-pot.jpg' }
      ]
    },
    {
      name: 'Festival Pooja Set',
      image: 'https://webneel.com/daily/sites/default/files/images/daily/10-2015/12-diwali-lakshmi-pooja.jpg',
      description: 'Essential puja materials for all major festivals and rituals.',
      customizable: true,
      relatedProducts: [
        { name: 'Diya Set', price: 180, image: 'https://example.com/diya.jpg' },
        { name: 'Puja Thali', price: 350, image: 'https://example.com/thali.jpg' },
        { name: 'Camphor', price: 70, image: 'https://example.com/camphor.jpg' },
        { name: 'Sweets Tray', price: 250, image: 'https://example.com/sweets-tray.jpg' },
        { name: 'Flower Garland', price: 120, image: 'https://example.com/garland.jpg' },
        { name: 'Bell', price: 90, image: 'https://example.com/bell.jpg' },
        { name: 'Agarbatti', price: 80, image: 'https://example.com/agarbatti.jpg' },
        { name: 'Puja Book', price: 150, image: 'https://example.com/book.jpg' }
      ]
    },
    {
      name: 'Wedding Rituals',
      image: 'https://tse3.mm.bing.net/th/id/OIP.s8jQfmulQxcLlX7nrA7TQQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
      description: 'Traditional items for sacred wedding ceremonies and rituals.',
      customizable: true,
      relatedProducts: [
        { name: 'Wedding Garland', price: 500, image: 'https://example.com/wedding-garland.jpg' },
        { name: 'Sindoor Box', price: 200, image: 'https://example.com/sindoor.jpg' },
        { name: 'Mangalsutra', price: 800, image: 'https://example.com/mangalsutra.jpg' },
        { name: 'Wedding Cards', price: 300, image: 'https://example.com/cards.jpg' },
        { name: 'Coconut Pair', price: 40, image: 'https://example.com/coconut-pair.jpg' },
        { name: 'Rice Bag', price: 100, image: 'https://example.com/rice-bag.jpg' },
        { name: 'Oil Lamp Set', price: 250, image: 'https://example.com/oil-lamp-set.jpg' },
        { name: 'Sacred Thread Set', price: 150, image: 'https://example.com/thread-set.jpg' }
      ]
    },
    {
      name: 'Navratri Special Kit',
      image: 'https://i.pinimg.com/originals/5a/8a/5c/5a8a5c8b8b8b8b8b8b8b8b8b8b8b8b8b.jpg',
      description: 'Complete puja set for Navratri celebrations with goddess idols.',
      customizable: true,
      relatedProducts: [
        { name: 'Goddess Idol', price: 600, image: 'https://example.com/goddess.jpg' },
        { name: 'Navratri Thali', price: 400, image: 'https://example.com/navratri-thali.jpg' },
        { name: 'Colorful Flowers', price: 180, image: 'https://example.com/colorful-flowers.jpg' },
        { name: 'Sweets Box', price: 300, image: 'https://example.com/sweets-box.jpg' },
        { name: 'Diya Stand', price: 220, image: 'https://example.com/diya-stand.jpg' },
        { name: 'Incense Holder', price: 100, image: 'https://example.com/incense-holder.jpg' },
        { name: 'Puja Bell', price: 120, image: 'https://example.com/puja-bell.jpg' },
        { name: 'Sacred Cloth', price: 80, image: 'https://example.com/sacred-cloth.jpg' }
      ]
    },
    {
      name: 'Shivaratri Pooja Kit',
      image: 'https://tse2.mm.bing.net/th/id/OIP.8jQfmulQxcLlX7nrA7TQQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
      description: 'Sacred items for Maha Shivaratri night-long worship.',
      customizable: true,
      relatedProducts: [
        { name: 'Shivling', price: 700, image: 'https://example.com/shivling.jpg' },
        { name: 'Bilva Leaves', price: 50, image: 'https://example.com/bilva.jpg' },
        { name: 'Milk Pot', price: 150, image: 'https://example.com/milk-pot.jpg' },
        { name: 'Rudraksha Mala', price: 400, image: 'https://example.com/rudraksha.jpg' },
        { name: 'Gangajal', price: 60, image: 'https://example.com/gangajal.jpg' },
        { name: 'Honey Jar', price: 80, image: 'https://example.com/honey-jar.jpg' },
        { name: 'Sandalwood Powder', price: 200, image: 'https://example.com/sandalwood.jpg' },
        { name: 'Puja Prasad', price: 100, image: 'https://example.com/prasad.jpg' }
      ]
    }
  ]

  const handleCustomize = (kit) => {
    navigate('/kit-customization', { state: { kit } })
  }

  const handleSelectProduct = (product) => {
    // Removed unused customization state and handlers as navigation is used now
  }

  return (
    <section className="featured-kits" id="sanskaar">
      <h2 onClick={handleTap} style={{ cursor: 'pointer' }}>TOP TRENDING PRODUCTS</h2>

      {showAdminLogin && !isAdminAuthenticated && (
        <AdminLogin
          onLogin={handleAdminLogin}
          onClose={() => setShowAdminLogin(false)}
        />
      )}

      {isAdminAuthenticated && (
        <div className="admin-kit-editor">
          <h3>Add New Kit</h3>
          <input
            type="text"
            placeholder="Kit Name"
            value={newKit.name}
            onChange={(e) => setNewKit({ ...newKit, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newKit.image}
            onChange={(e) => setNewKit({ ...newKit, image: e.target.value })}
          />
          <textarea
            placeholder="Description"
            value={newKit.description}
            onChange={(e) => setNewKit({ ...newKit, description: e.target.value })}
            rows={3}
          />
          <button onClick={handleAddKit}>Add Kit</button>
          <button onClick={() => setIsAdminAuthenticated(false)}>Logout</button>
        </div>
      )}

      <div className="kits-grid">
        {kits.map((kit, index) => (
          <div key={index} className="kit-card">
            <img src={kit.image} alt={kit.name} />
            <h3>{kit.name}</h3>
            <p className="kit-description">{kit.description}</p>
            <button className="customize-btn" onClick={() => handleCustomize(kit)}>Customize</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedKits
