const products = [
  // CPU
  {
    name: "AMD Ryzen 9 5950X",
    image: "https://example.com/products/cpu1.png",
    category: "CPU",
    price: 749,
    status: "In Stock",
    average_rating: 4.8,
    description:
      "The AMD Ryzen 9 5950X is a high-performance processor for enthusiasts and gamers.",
    features: ["16 cores", "32 threads", "4.9 GHz max boost", "AM4 socket"],
    reviews: [
      { message: "Fast and powerful CPU.", rating: 5 },
      { message: "Great for gaming and multitasking.", rating: 4 },
    ],
    color: "#FF6F00",
  },
  {
    name: "Intel Core i9-11900K",
    image: "https://example.com/products/cpu2.png",
    category: "CPU",
    price: 539,
    status: "In Stock",
    average_rating: 4.6,
    description:
      "The Intel Core i9-11900K delivers excellent performance for gaming and content creation.",
    features: [
      "8 cores",
      "16 threads",
      "5.3 GHz max turbo frequency",
      "LGA 1200 socket",
    ],
    reviews: [
      { message: "Impressive single-core performance.", rating: 5 },
      { message: "Runs cool under heavy loads.", rating: 4 },
    ],
    color: "#1976D2",
  },
  {
    name: "Intel Core i7-11700K",
    image: "https://example.com/products/cpu3.png",
    category: "CPU",
    price: 399,
    status: "In Stock",
    average_rating: 4.7,
    description:
      "The Intel Core i7-11700K offers exceptional gaming and multitasking performance.",
    features: [
      "8 cores",
      "16 threads",
      "5.0 GHz max turbo frequency",
      "LGA 1200 socket",
    ],
    reviews: [
      { message: "Great CPU for gaming and content creation.", rating: 5 },
      { message: "Easy to overclock for extra performance.", rating: 4 },
    ],
    color: "#8E24AA",
  },
  {
    name: "AMD Ryzen 5 5600X",
    image: "https://example.com/products/cpu4.png",
    category: "CPU",
    price: 299,
    status: "In Stock",
    average_rating: 4.5,
    description:
      "The AMD Ryzen 5 5600X is a powerful CPU that offers excellent value for performance.",
    features: ["6 cores", "12 threads", "4.6 GHz max boost", "AM4 socket"],
    reviews: [
      {
        message: "Great mid-range CPU for gaming and productivity.",
        rating: 5,
      },
      { message: "Efficient and runs cool under load.", rating: 4 },
    ],
    color: "#FF3D00",
  },
  // Motherboard
  {
    name: "MSI MAG B550 TOMAHAWK",
    image: "https://example.com/products/motherboard3.png",
    category: "Motherboard",
    price: 189,
    status: "In Stock",
    average_rating: 4.6,
    description:
      "The MSI MAG B550 TOMAHAWK offers solid performance and features for gaming enthusiasts.",
    features: [
      "ATX form factor",
      "AM4 socket",
      "PCIe 4.0 support",
      "Dual M.2 slots",
      "USB 3.2 Gen 2",
    ],
    reviews: [
      { message: "Reliable motherboard with great VRM cooling.", rating: 5 },
      { message: "Easy BIOS update and customization.", rating: 4 },
    ],
    color: "#FF5722",
  },
  {
    name: "ASRock B450 Steel Legend",
    image: "https://example.com/products/motherboard4.png",
    category: "Motherboard",
    price: 129,
    status: "In Stock",
    average_rating: 4.4,
    description:
      "The ASRock B450 Steel Legend offers a budget-friendly option with solid build quality.",
    features: [
      "ATX form factor",
      "AM4 socket",
      "Dual M.2 slots",
      "USB 3.1 Gen2",
    ],
    reviews: [
      { message: "Great value motherboard for Ryzen processors.", rating: 5 },
      { message: "Good overclocking capabilities.", rating: 4 },
    ],
    color: "#00C853",
  },
  {
    name: "ASUS ROG Strix X570-E Gaming",
    image: "https://example.com/products/motherboard1.png",
    category: "Motherboard",
    price: 319,
    status: "In Stock",
    average_rating: 4.7,
    description:
      "The ASUS ROG Strix X570-E Gaming offers robust features for gaming enthusiasts.",
    features: [
      "ATX form factor",
      "AM4 socket",
      "PCIe 4.0 support",
      "WiFi 6",
      "Dual M.2 slots",
    ],
    reviews: [
      {
        message: "High-quality motherboard with excellent performance.",
        rating: 5,
      },
      { message: "Easy BIOS setup and overclocking options.", rating: 4 },
    ],
    color: "#F50057",
  },
  {
    name: "GIGABYTE B550 AORUS PRO",
    image: "https://example.com/products/motherboard2.png",
    category: "Motherboard",
    price: 189,
    status: "In Stock",
    average_rating: 4.4,
    description:
      "The GIGABYTE B550 AORUS PRO offers a balance of features and performance for gamers.",
    features: [
      "ATX form factor",
      "AM4 socket",
      "PCIe 4.0 support",
      "Dual NVMe PCIe 4.0 M.2 slots",
    ],
    reviews: [
      { message: "Great value for a B550 motherboard.", rating: 5 },
      { message: "Solid build quality and easy installation.", rating: 4 },
    ],
    color: "#00C853",
  },

  // RAM
  {
    name: "Crucial Ballistix 32GB",
    image: "https://example.com/products/ram3.png",
    category: "RAM",
    price: 149,
    status: "In Stock",
    average_rating: 4.6,
    description:
      "The Crucial Ballistix 32GB offers excellent performance and reliability for demanding tasks.",
    features: [
      "32GB (2 x 16GB) DDR4 3600",
      "CAS latency 16",
      "XMP 2.0 support",
    ],
    reviews: [
      { message: "Solid RAM kit for gaming and content creation.", rating: 5 },
      {
        message: "Stable performance with no compatibility issues.",
        rating: 4,
      },
    ],
    color: "#FFC107",
  },
  {
    name: "Corsair Vengeance LPX",
    image: "https://example.com/products/ram4.png",
    category: "RAM",
    price: 129,
    status: "In Stock",
    average_rating: 4.5,
    description:
      "The Corsair Vengeance LPX is a reliable choice for high-performance computing.",
    features: [
      "32GB (2 x 16GB) DDR4 3200",
      "CAS latency 16",
      "XMP 2.0 support",
    ],
    reviews: [
      { message: "Affordable RAM kit with excellent performance.", rating: 5 },
      { message: "Works perfectly with XMP enabled.", rating: 4 },
    ],
    color: "#1976D2",
  },
  {
    name: "Corsair Vengeance RGB Pro",
    image: "https://example.com/products/ram1.png",
    category: "RAM",
    price: 169,
    status: "In Stock",
    average_rating: 4.9,
    description:
      "The Corsair Vengeance RGB Pro delivers impressive performance with stylish RGB lighting.",
    features: [
      "32GB (2 x 16GB) DDR4 3200",
      "CAS latency 16",
      "XMP 2.0 support",
      "RGB lighting",
    ],
    reviews: [
      { message: "Excellent RAM with beautiful RGB effects.", rating: 5 },
      { message: "Works flawlessly with XMP enabled.", rating: 5 },
    ],
    color: "#FFD600",
  },
  {
    name: "G.SKILL Trident Z Neo",
    image: "https://example.com/products/ram2.png",
    category: "RAM",
    price: 189,
    status: "In Stock",
    average_rating: 4.7,
    description:
      "The G.SKILL Trident Z Neo is optimized for Ryzen processors and offers high-speed performance.",
    features: [
      "32GB (2 x 16GB) DDR4 3600",
      "CAS latency 16",
      "XMP 2.0 support",
      "Sleek heatspreader design",
    ],
    reviews: [
      {
        message: "Fast and reliable RAM for gaming and multitasking.",
        rating: 5,
      },
      { message: "RGB lighting looks stunning.", rating: 4 },
    ],
    color: "#FF1744",
  },

  // GPU
  {
    name: "NVIDIA GeForce RTX 3060 Ti",
    image: "https://example.com/products/gpu3.png",
    category: "GPU",
    price: 499,
    status: "In Stock",
    average_rating: 4.7,
    description:
      "The NVIDIA GeForce RTX 3060 Ti offers great performance for 1440p gaming and ray tracing.",
    features: [
      "8GB GDDR6",
      "CUDA cores: 4864",
      "PCI Express 4.0",
      "Real-time ray tracing",
    ],
    reviews: [
      {
        message: "Highly recommended GPU for price-to-performance ratio.",
        rating: 5,
      },
      { message: "Handles ray tracing effects surprisingly well.", rating: 4 },
    ],
    color: "#00E676",
  },
  {
    name: "AMD Radeon RX 6700 XT",
    image: "https://example.com/products/gpu4.png",
    category: "GPU",
    price: 579,
    status: "In Stock",
    average_rating: 4.6,
    description:
      "The AMD Radeon RX 6700 XT delivers excellent performance for smooth 1440p gaming.",
    features: [
      "12GB GDDR6",
      "Compute units: 40",
      "PCI Express 4.0",
      "AMD Infinity Cache",
    ],
    reviews: [
      { message: "Impressive GPU for gaming and productivity.", rating: 5 },
      {
        message: "Solid driver support and great software features.",
        rating: 4,
      },
    ],
    color: "#FF3D00",
  },
  {
    name: "NVIDIA GeForce RTX 3080",
    image: "https://example.com/products/gpu1.png",
    category: "GPU",
    price: 1099,
    status: "Out of Stock",
    average_rating: 4.8,
    description:
      "The NVIDIA GeForce RTX 3080 offers exceptional gaming performance and ray tracing capabilities.",
    features: [
      "10GB GDDR6X",
      "CUDA cores: 8704",
      "PCI Express 4.0",
      "Real-time ray tracing",
    ],
    reviews: [
      {
        message: "Powerful GPU for 4K gaming and content creation.",
        rating: 5,
      },
      { message: "Ray tracing effects are mind-blowing.", rating: 4 },
    ],
    color: "#304FFE",
  },
  {
    name: "AMD Radeon RX 6800 XT",
    image: "https://example.com/products/gpu2.png",
    category: "GPU",
    price: 799,
    status: "In Stock",
    average_rating: 4.6,
    description:
      "The AMD Radeon RX 6800 XT delivers impressive performance for demanding tasks and high-resolution gaming.",
    features: [
      "16GB GDDR6",
      "Compute units: 72",
      "PCI Express 4.0",
      "AMD Infinity Cache",
    ],
    reviews: [
      { message: "Fantastic GPU for 1440p and 4K gaming.", rating: 5 },
      { message: "Great value for the performance it offers.", rating: 4 },
    ],
    color: "#00E676",
  },

  // Power Supply Unit
  {
    name: "Seasonic FOCUS GX-750",
    image: "https://example.com/products/psu3.png",
    category: "Power Supply Unit",
    price: 139,
    status: "In Stock",
    average_rating: 4.7,
    description:
      "The Seasonic FOCUS GX-750 offers efficient and stable power delivery for high-end builds.",
    features: [
      "750W",
      "80 PLUS Gold certified",
      "Fully modular design",
      "Hybrid Silent Fan Control",
    ],
    reviews: [
      {
        message: "Premium PSU with minimal noise and good power efficiency.",
        rating: 5,
      },
      { message: "Handles overclocking and high loads with ease.", rating: 4 },
    ],
    color: "#FF5722",
  },
  {
    name: "be quiet! Straight Power 11",
    image: "https://example.com/products/psu4.png",
    category: "Power Supply Unit",
    price: 159,
    status: "In Stock",
    average_rating: 4.5,
    description:
      "The be quiet! Straight Power 11 offers silent and reliable power for demanding systems.",
    features: [
      "850W",
      "80 PLUS Gold certified",
      "Semi-modular design",
      "Silent Wings 3 fan",
    ],
    reviews: [
      { message: "Super quiet PSU with great build quality.", rating: 5 },
      { message: "Efficient and stable even under heavy load.", rating: 4 },
    ],
    color: "#304FFE",
  },
  {
    name: "EVGA SuperNOVA 850 G5",
    image: "https://example.com/products/psu1.png",
    category: "Power Supply Unit",
    price: 159,
    status: "In Stock",
    average_rating: 4.7,
    description:
      "The EVGA SuperNOVA 850 G5 offers reliable and efficient power delivery for high-end systems.",
    features: [
      "850W",
      "80 PLUS Gold certified",
      "Fully modular design",
      "Silent operation",
    ],
    reviews: [
      { message: "Top-tier PSU with stable power output.", rating: 5 },
      { message: "Modular design makes cable management a breeze.", rating: 4 },
    ],
    color: "#1B5E20",
  },
  {
    name: "Corsair RM750x",
    image: "https://example.com/products/psu2.png",
    category: "Power Supply Unit",
    price: 129,
    status: "In Stock",
    average_rating: 4.5,
    description:
      "The Corsair RM750x provides reliable power with excellent efficiency and low noise levels.",
    features: [
      "750W",
      "80 PLUS Gold certified",
      "Fully modular design",
      "Zero RPM fan mode",
    ],
    reviews: [
      { message: "Quiet PSU with plenty of power for gaming.", rating: 5 },
      { message: "Efficient and stable even under heavy load.", rating: 4 },
    ],
    color: "#00B0FF",
  },

  // Storage Device
  {
    name: "Crucial MX500",
    image: "https://example.com/products/storage3.png",
    category: "Storage Device",
    price: 99,
    status: "In Stock",
    average_rating: 4.8,
    description:
      "The Crucial MX500 offers reliable and fast SSD performance at an affordable price.",
    features: [
      "500GB capacity",
      "SATA 6Gb/s interface",
      "Read speed up to 560 MB/s",
      "Write speed up to 510 MB/s",
    ],
    reviews: [
      { message: "Great value SSD for improving system speed.", rating: 5 },
      {
        message: "Easy installation and cloning with Crucial software.",
        rating: 4,
      },
    ],
    color: "#FFD600",
  },
  {
    name: "Seagate BarraCuda",
    image: "https://example.com/products/storage4.png",
    category: "Storage Device",
    price: 59,
    status: "In Stock",
    average_rating: 4.6,
    description:
      "The Seagate BarraCuda is a reliable and cost-effective hard drive for mass storage.",
    features: [
      "1TB capacity",
      "SATA 6Gb/s interface",
      "7200 RPM",
      "64MB cache",
    ],
    reviews: [
      { message: "Affordable and spacious hard drive for backups.", rating: 5 },
      { message: "Runs quietly and cool under load.", rating: 4 },
    ],
    color: "#1565C0",
  },
  {
    name: "Samsung 970 EVO Plus",
    image: "https://example.com/products/storage1.png",
    category: "Storage Device",
    price: 179,
    status: "In Stock",
    average_rating: 4.9,
    description:
      "The Samsung 970 EVO Plus offers lightning-fast NVMe SSD performance for speedy data access.",
    features: [
      "1TB capacity",
      "NVMe M.2 form factor",
      "Read speed up to 3,500 MB/s",
      "Write speed up to 3,300 MB/s",
    ],
    reviews: [
      {
        message: "Blazing fast SSD with excellent read/write speeds.",
        rating: 5,
      },
      { message: "Perfect for gaming and video editing.", rating: 5 },
    ],
    color: "#FFD600",
  },
  {
    name: "Western Digital Blue",
    image: "https://example.com/products/storage2.png",
    category: "Storage Device",
    price: 79,
    status: "In Stock",
    average_rating: 4.6,
    description:
      "The Western Digital Blue provides ample storage capacity with reliable performance.",
    features: [
      "2TB capacity",
      "SATA 6Gb/s interface",
      "5400 RPM",
      "64MB cache",
    ],
    reviews: [
      {
        message: "Affordable and reliable hard drive for mass storage.",
        rating: 5,
      },
      { message: "Plenty of space for media and games.", rating: 4 },
    ],
    color: "#1565C0",
  },

  // Monitor
  {
    name: "Dell S2721DGF",
    image: "https://example.com/products/monitor3.png",
    category: "Monitor",
    price: 449,
    status: "In Stock",
    average_rating: 4.7,
    description:
      "The Dell S2721DGF is a feature-packed gaming monitor with a high refresh rate and QHD resolution.",
    features: [
      "27-inch IPS display",
      "2560x1440 resolution",
      "165Hz refresh rate",
      "NVIDIA G-Sync compatible",
    ],
    reviews: [
      { message: "Excellent gaming monitor with vibrant colors.", rating: 5 },
      { message: "Fast response times and minimal ghosting.", rating: 4 },
    ],
    color: "#8E24AA",
  },
  {
    name: "AOC CQ32G1",
    image: "https://example.com/products/monitor4.png",
    category: "Monitor",
    price: 299,
    status: "In Stock",
    average_rating: 4.5,
    description:
      "The AOC CQ32G1 is a budget-friendly curved gaming monitor with a large screen and FreeSync support.",
    features: [
      "31.5-inch VA display",
      "2560x1440 resolution",
      "144Hz refresh rate",
      "AMD FreeSync",
    ],
    reviews: [
      {
        message: "Impressive value for a 32-inch curved gaming monitor.",
        rating: 5,
      },
      { message: "Nice colors and deep blacks for VA panel.", rating: 4 },
    ],
    color: "#00E676",
  },
  {
    name: "LG 27GL850-B",
    image: "https://example.com/products/monitor1.png",
    category: "Monitor",
    price: 449,
    status: "In Stock",
    average_rating: 4.8,
    description:
      "The LG 27GL850-B is a high-quality gaming monitor with a fast refresh rate and low input lag.",
    features: [
      "27-inch IPS display",
      "2560x1440 resolution",
      "Nano IPS panel",
      "144Hz refresh rate",
    ],
    reviews: [
      { message: "Beautiful colors and smooth gaming experience.", rating: 5 },
      { message: "Great monitor for competitive gaming.", rating: 4 },
    ],
    color: "#E91E63",
  },
  {
    name: "ASUS TUF Gaming VG27AQ",
    image: "https://example.com/products/monitor2.png",
    category: "Monitor",
    price: 399,
    status: "In Stock",
    average_rating: 4.6,
    description:
      "The ASUS TUF Gaming VG27AQ offers an immersive gaming experience with impressive colors.",
    features: [
      "27-inch IPS display",
      "2560x1440 resolution",
      "G-Sync compatible",
      "165Hz refresh rate",
    ],
    reviews: [
      { message: "Smooth gaming with minimal motion blur.", rating: 5 },
      { message: "Great value for a 1440p 165Hz monitor.", rating: 4 },
    ],
    color: "#FF5722",
  },
];
