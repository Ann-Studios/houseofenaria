export type Product = {
  id: string;
  name: string;
  category: "perfume" | "diffuser" | "air-freshener" | "jewelry" | "bag";
  subtitle: string;
  priceXof: number;
  notes?: string[];
  description?: string;
  image: string;
};

export const CATALOG: Product[] = [
  { id: "mint-accords", name: "Mint Accords", category: "perfume", subtitle: "Eau de Parfum", priceXof: 95000, notes: ["Fresh Mint", "Green Tea", "White Musk"], image: "/perfumes/mint-accords.jpg" },
  { id: "lemon-accord", name: "Lemon Accord", category: "perfume", subtitle: "Eau de Parfum", priceXof: 85000, notes: ["Sicilian Lemon", "Verbena", "Cedar"], image: "/perfumes/lemon-accord.jpg" },
  { id: "croissant-accord", name: "Croissant Accord", category: "perfume", subtitle: "Eau de Parfum", priceXof: 110000, notes: ["Butter", "Almond", "Warm Vanilla"], image: "/perfumes/croissant-accord.jpg" },
  { id: "cookies-cream", name: "Cookies & Cream", category: "perfume", subtitle: "Eau de Parfum", priceXof: 95000, notes: ["Dark Cocoa", "Sweet Cream", "Tonka"], image: "/perfumes/cookies-cream.jpg" },
  { id: "vanilla-accord", name: "Vanilla Accord", category: "perfume", subtitle: "Eau de Parfum", priceXof: 90000, notes: ["Madagascar Vanilla", "Caramel", "Sandalwood"], image: "/perfumes/vanilla-accord.jpg" },
  { id: "chocolate-accord", name: "Chocolate Accord", category: "perfume", subtitle: "Eau de Parfum", priceXof: 100000, notes: ["Dark Chocolate", "Coffee", "Amber"], image: "/perfumes/chocolate-accord.jpg" },
  { id: "strawberry-accord", name: "Strawberry Accord", category: "perfume", subtitle: "Eau de Parfum", priceXof: 85000, notes: ["Fresh Strawberry", "Pink Pepper", "Musk"], image: "/perfumes/strawberry-accord.jpg" },

  { id: "serene-garden", name: "Serene Garden", category: "diffuser", subtitle: "Reed Diffuser", priceXof: 45000, notes: ["Green Tea", "Bamboo", "White Lily"], image: "" },
  { id: "cozy-fireside", name: "Cozy Fireside", category: "diffuser", subtitle: "Reed Diffuser", priceXof: 55000, notes: ["Cedarwood", "Tobacco", "Leather"], image: "" },
  { id: "mediterranean-breeze", name: "Mediterranean Breeze", category: "diffuser", subtitle: "Reed Diffuser", priceXof: 40000, notes: ["Citrus", "Olive Leaf", "Fig"], image: "" },

  { id: "fresh-breeze", name: "Fresh Breeze", category: "air-freshener", subtitle: "Automatic Spray", priceXof: 15000, notes: ["Ocean", "Eucalyptus", "Mint"], image: "" },
  { id: "lavender-dream", name: "Lavender Dream", category: "air-freshener", subtitle: "Automatic Spray", priceXof: 15000, notes: ["Lavender", "Chamomile", "Cotton"], image: "" },
  { id: "citrus-burst", name: "Citrus Burst", category: "air-freshener", subtitle: "Automatic Spray", priceXof: 12500, notes: ["Lemon", "Orange", "Grapefruit"], image: "" },
  { id: "forest-pine", name: "Forest Pine", category: "air-freshener", subtitle: "Automatic Spray", priceXof: 15000, notes: ["Pine", "Cedar", "Moss"], image: "" },

  { id: "golden-pearl-necklace", name: "Golden Pearl Necklace", category: "jewelry", subtitle: "Handcrafted beaded necklace", priceXof: 35000, image: "/products/jewelry-2.jpg" },
  { id: "amber-gold-set", name: "Amber & Gold Set", category: "jewelry", subtitle: "Handcrafted beaded set", priceXof: 55000, image: "/products/jewelry-1.jpg" },
  { id: "rainbow-bracelet-stack", name: "Rainbow Bracelet Stack", category: "jewelry", subtitle: "Handcrafted beaded bracelets", priceXof: 25000, image: "/products/jewelry-3.jpg" },

  { id: "beaded-handbag", name: "Cream & Gold Beaded Handbag", category: "bag", subtitle: "Custom beaded bag", priceXof: 0, description: "Made to order — send your design and we replicate it.", image: "/products/bag-1.jpg" },
  { id: "pearl-clutch", name: "Pearl Beaded Evening Clutch", category: "bag", subtitle: "Custom beaded bag", priceXof: 0, description: "Made to order — send your design and we replicate it.", image: "/products/bag-2.jpg" },
  { id: "beaded-tote", name: "Colorful Beaded Tote", category: "bag", subtitle: "Custom beaded bag", priceXof: 0, description: "Made to order — send your design and we replicate it.", image: "/products/bag-3.jpg" },
];

export const STORE_INFO = {
  brand: "House of Enaria",
  location: "Cotonou, Benin Republic",
  currency: "XOF (CFA franc)",
  freeShippingThresholdXof: 100000,
  newUserDiscount: "10% off sitewide for new customers",
  categories: ["perfume", "diffuser", "air-freshener", "jewelry", "bag"],
  customBags: "Beaded bags are made to order: customers send their own design and we replicate it.",
};
