import type { Product, Category } from "@/types";

export const categories: Category[] = [
  {
    id: "lumber",
    name: "Lumber & Building Materials",
    description: "Quality lumber, boards, and structural materials",
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    slug: "lumber",
  },
  {
    id: "tools",
    name: "Tools & Equipment",
    description: "Power tools, hand tools, and equipment",
    imageUrl:
      "https://images.unsplash.com/photo-1581092795442-48544a65e3d1?w=400&h=300&fit=crop",
    slug: "tools",
  },
  {
    id: "hardware",
    name: "Hardware & Fasteners",
    description: "Screws, bolts, nails, and hardware accessories",
    imageUrl:
      "https://images.unsplash.com/photo-1609205096401-2ee8b8caa1e9?w=400&h=300&fit=crop",
    slug: "hardware",
  },
  {
    id: "electrical",
    name: "Electrical Supplies",
    description: "Wire, outlets, switches, and electrical components",
    imageUrl:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop",
    slug: "electrical",
  },
  {
    id: "plumbing",
    name: "Plumbing",
    description: "Pipes, fittings, fixtures, and plumbing supplies",
    imageUrl:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    slug: "plumbing",
  },
  {
    id: "concrete",
    name: "Concrete & Masonry",
    description: "Cement, concrete mix, blocks, and masonry supplies",
    imageUrl:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
    slug: "concrete",
  },
];

export const products: Product[] = [
  // Lumber Products
  {
    id: "lumber-001",
    name: "2x4x8 Pressure Treated Lumber",
    description:
      "High-quality pressure treated lumber perfect for outdoor construction projects. Resistant to rot, decay, and insects.",
    price: 8.97,
    categoryId: "lumber",
    category: "Lumber & Building Materials",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
    ],
    inStock: true,
    stockQuantity: 250,
    specifications: {
      Dimensions: '2" x 4" x 8\'',
      Material: "Southern Yellow Pine",
      Treatment: "Pressure Treated",
      Grade: "Ground Contact",
      "Moisture Content": "19% or less",
    },
    weight: 12.5,
    dimensions: { length: 96, width: 3.5, height: 1.5 },
    brand: "ProBuild",
    sku: "LUM-PT-2X4X8",
    tags: ["lumber", "treated", "outdoor", "construction"],
  },
  {
    id: "lumber-002",
    name: "1/2\" x 4' x 8' Plywood Sheathing",
    description:
      "CDX plywood sheathing for subflooring, roof decking, and wall sheathing applications.",
    price: 45.98,
    categoryId: "lumber",
    category: "Lumber & Building Materials",
    imageUrl:
      "https://images.unsplash.com/photo-1609205096391-6b6b7a6e5a0e?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1609205096391-6b6b7a6e5a0e?w=400&h=400&fit=crop",
    ],
    inStock: true,
    stockQuantity: 85,
    specifications: {
      Thickness: "1/2 inch",
      Dimensions: "4' x 8'",
      Grade: "CDX",
      Core: "Veneer",
      "Glue Type": "Exterior",
    },
    weight: 46,
    dimensions: { length: 96, width: 48, height: 0.5 },
    brand: "Georgia-Pacific",
    sku: "PLY-CDX-48X96X05",
    tags: ["plywood", "sheathing", "construction", "subflooring"],
  },

  // Tools
  {
    id: "tool-001",
    name: "DEWALT 20V MAX Cordless Drill",
    description:
      "High-performance cordless drill with LED light and 15 clutch settings for precise torque control.",
    price: 129.99,
    categoryId: "tools",
    category: "Tools & Equipment",
    imageUrl:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581092795442-48544a65e3d1?w=400&h=400&fit=crop",
    ],
    inStock: true,
    stockQuantity: 45,
    specifications: {
      Voltage: "20V MAX",
      "Chuck Size": "1/2 inch",
      "Max Torque": "300 UWO",
      Speed: "0-450/0-1,650 RPM",
      Battery: "Lithium Ion",
      "LED Light": "Yes",
    },
    weight: 3.6,
    brand: "DEWALT",
    sku: "DCD771C2",
    tags: ["cordless", "drill", "power tool", "dewalt", "battery"],
  },
  {
    id: "tool-002",
    name: "Estwing Framing Hammer",
    description:
      "Professional grade 22 oz framing hammer with shock reduction grip and milled face.",
    price: 47.99,
    categoryId: "tools",
    category: "Tools & Equipment",
    imageUrl:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop",
    ],
    inStock: true,
    stockQuantity: 78,
    specifications: {
      Weight: "22 oz",
      Handle: "Shock Reduction Grip",
      Face: "Milled",
      Claw: "Straight",
      Length: "13 inches",
    },
    weight: 1.4,
    brand: "Estwing",
    sku: "E3-22S",
    tags: ["hammer", "framing", "hand tool", "estwing"],
  },

  // Hardware
  {
    id: "hardware-001",
    name: '3" Wood Screws (1 lb box)',
    description:
      "Premium quality wood screws with deep threads for superior holding power. Phillips drive head.",
    price: 12.45,
    categoryId: "hardware",
    category: "Hardware & Fasteners",
    imageUrl:
      "https://images.unsplash.com/photo-1609205096401-2ee8b8caa1e9?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1609205096401-2ee8b8caa1e9?w=400&h=400&fit=crop",
    ],
    inStock: true,
    stockQuantity: 120,
    specifications: {
      Length: "3 inches",
      "Drive Type": "Phillips",
      Thread: "Deep Wood Thread",
      Finish: "Yellow Zinc",
      Quantity: "Approximately 45 screws",
    },
    weight: 1,
    brand: "FastenMaster",
    sku: "WS-3-1LB",
    tags: ["screws", "wood", "fasteners", "construction"],
  },

  // Electrical
  {
    id: "electrical-001",
    name: "12 AWG Romex Wire (250 ft)",
    description:
      "Non-metallic sheathed cable for residential wiring. 12 AWG with ground, suitable for 20-amp circuits.",
    price: 89.99,
    categoryId: "electrical",
    category: "Electrical Supplies",
    imageUrl:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop",
    ],
    inStock: true,
    stockQuantity: 32,
    specifications: {
      "Wire Gauge": "12 AWG",
      Conductors: "2 with Ground",
      Length: "250 feet",
      Jacket: "PVC",
      "Temperature Rating": "90°C",
      Voltage: "600V",
    },
    weight: 35,
    brand: "Southwire",
    sku: "ROMEX-12-2WG-250",
    tags: ["wire", "electrical", "romex", "cable"],
  },

  // Plumbing
  {
    id: "plumbing-001",
    name: '1/2" Copper Pipe (10 ft)',
    description:
      "Type L copper tubing for potable water systems. Durable and corrosion resistant.",
    price: 24.95,
    categoryId: "plumbing",
    category: "Plumbing",
    imageUrl:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
    ],
    inStock: true,
    stockQuantity: 95,
    specifications: {
      Diameter: "1/2 inch",
      Type: "Type L",
      Length: "10 feet",
      Material: "Copper",
      Application: "Potable Water",
    },
    weight: 2.1,
    brand: "Mueller",
    sku: "CU-L-05-10",
    tags: ["copper", "pipe", "plumbing", "water"],
  },

  // Concrete
  {
    id: "concrete-001",
    name: "Quikrete Concrete Mix (80 lb)",
    description:
      "Premium concrete mix for setting fence posts, footings, and other general concrete applications.",
    price: 4.98,
    categoryId: "concrete",
    category: "Concrete & Masonry",
    imageUrl:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=400&fit=crop",
    ],
    inStock: true,
    stockQuantity: 200,
    specifications: {
      Weight: "80 pounds",
      Coverage: "0.6 cubic feet",
      "Compressive Strength": "4000 PSI",
      "Set Time": "20-40 minutes",
      "Full Cure": "28 days",
    },
    weight: 80,
    brand: "Quikrete",
    sku: "QC-110180",
    tags: ["concrete", "mix", "cement", "foundation"],
  },
];

// Helper function to get products by category
export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((product) => product.categoryId === categoryId);
};

// Helper function to search products
export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};
