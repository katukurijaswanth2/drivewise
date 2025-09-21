const vehicleData = [
    {
        range: "Below ₹2,00,000",
        suggestion: "Bikes / Scooters",
        vehicles: [
            {
                name: "Honda Activa 6G",
                imageCar: "./images/Honda Activa 6G.jpg",
                priceRange: "₹80,000 - ₹90,000",
                mileage: "45 km/l",
                fuelType: "Petrol",
                serviceCost: "₹2,000/year",
                description: "India’s most trusted scooter with reliable performance.",
                features: ["LED Headlamp", "Silent Start", "Fuel Injection"],
                specifications: { engine: "109.51cc", power: "7.7 bhp", type: "Scooter" },
                reviews: [{ user: "Ravi", rating: 4.5, comment: "Smooth and reliable." }]
            },
            {
                name: "TVS Jupiter",
                imageCar: "./images/TVS Jupiter.jpg",
                priceRange: "₹90,000 - ₹1,00,000",
                mileage: "47 km/l",
                fuelType: "Petrol",
                serviceCost: "₹2,200/year",
                description: "Stylish scooter with good comfort for city rides.",
                features: ["Large Boot Space", "EcoThrust Engine", "Mobile Charger"],
                specifications: { engine: "109.7cc", power: "7.8 bhp", type: "Scooter" },
                reviews: [{ user: "Sneha", rating: 4.3, comment: "Great comfort, decent mileage." }]
            },
            {
                name: "Bajaj Pulsar 150",
                imageCar: "./images/Bajaj Pulsar 150.jpg",
                priceRange: "₹1,20,000 - ₹1,30,000",
                mileage: "50 km/l",
                fuelType: "Petrol",
                serviceCost: "₹2,500/year",
                description: "Sporty design with reliable performance.",
                features: ["Front Disc Brake", "Digital Console", "Tubeless Tyres"],
                specifications: { engine: "149.5cc", power: "13.8 bhp", type: "Bike" },
                reviews: [{ user: "Arjun", rating: 4.4, comment: "Classic Pulsar performance." }]
            },
            {
                name: "Hero Splendor Plus",
                imageCar: "./images/Hero Splendor Plus.jpg",
                priceRange: "₹70,000 - ₹80,000",
                mileage: "65 km/l",
                fuelType: "Petrol",
                serviceCost: "₹1,800/year",
                description: "India’s most fuel-efficient and affordable bike.",
                features: ["Kick + Self Start", "i3S Technology", "Alloy Wheels"],
                specifications: { engine: "97.2cc", power: "8.02 bhp", type: "Bike" },
                reviews: [{ user: "Manoj", rating: 4.6, comment: "Best mileage in the segment." }]
            },
            {
                name: "TVS Apache RTR 160",
                imageCar: "./images/TVS Apache RTR 160.jpg",
                priceRange: "₹1,50,000 - ₹1,60,000",
                mileage: "45 km/l",
                fuelType: "Petrol",
                serviceCost: "₹3,000/year",
                description: "Sporty commuter bike with powerful performance.",
                features: ["Racing Graphics", "LED DRLs", "ABS"],
                specifications: { engine: "159.7cc", power: "15.5 bhp", type: "Bike" },
                reviews: [{ user: "Neeraj", rating: 4.5, comment: "Powerful for city and highway." }]
            },
            {
                name: "Suzuki Access 125",
                imageCar: "./images/Suzuki Access 125.jpg",
                priceRange: "₹95,000 - ₹1,05,000",
                mileage: "48 km/l",
                fuelType: "Petrol",
                serviceCost: "₹2,300/year",
                description: "Premium scooter with smooth performance.",
                features: ["Digital Cluster", "Eco Mode", "Front Disc Brake"],
                specifications: { engine: "124cc", power: "8.7 bhp", type: "Scooter" },
                reviews: [{ user: "Divya", rating: 4.4, comment: "Stylish and refined scooter." }]
            },
            {
                name: "Royal Enfield Bullet 350",
                imageCar: "./images/Royal Enfield Bullet 350.jpg",
                priceRange: "₹1,90,000 - ₹2,00,000",
                mileage: "35 km/l",
                fuelType: "Petrol",
                serviceCost: "₹3,500/year",
                description: "Iconic bike known for its thump and retro looks.",
                features: ["ABS", "Fuel Injection", "Classic Styling"],
                specifications: { engine: "349cc", power: "20.2 bhp", type: "Bike" },
                reviews: [{ user: "Aman", rating: 4.7, comment: "True classic, heavy but powerful." }]
            }
        ]
    },
    {
        range: "₹2,00,000 - ₹8,00,000",
        suggestion: "Budget Cars",
        vehicles: [
            {
                name: "Maruti Suzuki Alto 800",
                imageCar: "./images/Maruti Suzuki Alto 800.jpg",
                priceRange: "₹3,50,000 - ₹3,60,000",
                mileage: "22 km/l",
                fuelType: "Petrol",
                serviceCost: "₹4,000/year",
                description: "India’s entry-level car, affordable and reliable.",
                features: ["Dual Airbags", "ABS", "Compact Size"],
                specifications: { engine: "796cc", power: "47 bhp", type: "Hatchback" },
                reviews: [{ user: "Kiran", rating: 4.2, comment: "Cheap to run and maintain." }]
            },
            {
                name: "Hyundai i10 Nios",
                imageCar: "./images/Hyundai i10 Nios.jpg",
                priceRange: "₹5,50,000 - ₹5,60,000",
                mileage: "20 km/l",
                fuelType: "Petrol",
                serviceCost: "₹5,500/year",
                description: "Modern hatchback with premium interiors.",
                features: ["Touchscreen", "Rear Parking Sensors", "Apple CarPlay"],
                specifications: { engine: "1197cc", power: "82 bhp", type: "Hatchback" },
                reviews: [{ user: "Sonia", rating: 4.3, comment: "Feature-packed and comfy." }]
            },
            {
                name: "Tata Tiago",
                imageCar: "./images/Tata Tiago.jpg",
                priceRange: "₹6,00,000 - ₹6,10,000",
                mileage: "23 km/l",
                fuelType: "Petrol",
                serviceCost: "₹6,000/year",
                description: "Safe and sturdy hatchback with good features.",
                features: ["Harman Audio", "ABS", "Dual Airbags"],
                specifications: { engine: "1199cc", power: "84 bhp", type: "Hatchback" },
                reviews: [{ user: "Raj", rating: 4.5, comment: "Best safety in budget cars." }]
            },
            {
                name: "Renault Kwid",
                imageCar: "./images/Renault Kwid.jpg",
                priceRange: "₹5,00,000 - ₹5,10,000",
                mileage: "21 km/l",
                fuelType: "Petrol",
                serviceCost: "₹5,000/year",
                description: "Stylish entry-level hatchback with SUV looks.",
                features: ["Digital Cluster", "8-inch Touchscreen", "ABS"],
                specifications: { engine: "999cc", power: "67 bhp", type: "Hatchback" },
                reviews: [{ user: "Mehul", rating: 4.1, comment: "Great looks, decent features." }]
            },
            {
                name: "Maruti Suzuki Swift",
                imageCar: "./images/Maruti Suzuki Swift.jpg",
                priceRange: "₹7,50,000 - ₹7,60,000",
                mileage: "22 km/l",
                fuelType: "Petrol",
                serviceCost: "₹5,000/year",
                description: "Popular hatchback with sporty performance.",
                features: ["ABS", "Touchscreen", "Dual Airbags"],
                specifications: { engine: "1197cc", power: "88 bhp", type: "Hatchback" },
                reviews: [{ user: "Neha", rating: 4.6, comment: "Sporty and efficient." }]
            },
            {
                name: "Honda Amaze",
                imageCar: "./images/Honda Amaze.jpg",
                priceRange: "₹7,00,000 - ₹7,10,000",
                mileage: "18 km/l",
                fuelType: "Petrol / Diesel",
                serviceCost: "₹6,000/year",
                description: "Compact sedan with comfort and efficiency.",
                features: ["Spacious Cabin", "Touchscreen", "ABS"],
                specifications: { engine: "1199cc", power: "89 bhp", type: "Sedan" },
                reviews: [{ user: "Priya", rating: 4.3, comment: "Good family sedan." }]
            },
            {
                name: "Hyundai Venue",
                imageCar: "./images/Hyundai Venue.jpg",
                priceRange: "₹8,00,000 - ₹8,10,000",
                mileage: "17 km/l",
                fuelType: "Petrol / Diesel",
                serviceCost: "₹7,000/year",
                description: "Compact SUV with modern design and features.",
                features: ["Sunroof", "Touchscreen", "ADAS"],
                specifications: { engine: "1197cc", power: "118 bhp", type: "SUV" },
                reviews: [{ user: "Vikas", rating: 4.5, comment: "Best compact SUV option." }]
            }
        ]
    },
    {
        range: "₹8,00,000 - ₹20,00,000",
        suggestion: "Mid-range Cars (Sedan/SUV)",
        vehicles: [
            {
                name: "Hyundai Creta",
                imageCar: "./images/Hyundai Creta.jpg",
                priceRange: "₹12,00,000 - ₹12,10,000",
                mileage: "17 km/l",
                fuelType: "Petrol / Diesel",
                serviceCost: "₹10,000/year",
                description: "Most popular SUV in India with feature-rich options.",
                features: ["Panoramic Sunroof", "ADAS", "10.25-inch Touchscreen"],
                specifications: { engine: "1497cc", power: "138 bhp", type: "SUV" },
                reviews: [{ user: "Aman", rating: 4.7, comment: "Spacious and stylish." }]
            },
            {
                name: "Kia Seltos",
                imageCar: "./images/Kia Seltos.jpg",
                priceRange: "₹15,00,000 - ₹15,10,000",
                mileage: "16 km/l",
                fuelType: "Petrol / Diesel",
                serviceCost: "₹11,000/year",
                description: "Premium SUV with modern features and strong build.",
                features: ["HUD Display", "ADAS", "Ventilated Seats"],
                specifications: { engine: "1493cc", power: "138 bhp", type: "SUV" },
                reviews: [{ user: "Rohit", rating: 4.6, comment: "Great design and features." }]
            },
            {
                name: "Honda City",
                imageCar: "./images/Honda City.jpg",
                priceRange: "₹14,00,000 - ₹14,10,000",
                mileage: "18 km/l",
                fuelType: "Petrol / Hybrid",
                serviceCost: "₹8,000/year",
                description: "Premium sedan with hybrid technology.",
                features: ["ADAS", "Hybrid Powertrain", "Spacious Cabin"],
                specifications: { engine: "1498cc", power: "121 bhp", type: "Sedan" },
                reviews: [{ user: "Meera", rating: 4.5, comment: "Class-leading comfort." }]
            },
            {
                name: "Mahindra XUV700",
                imageCar: "./images/Mahindra XUV700.jpg",
                priceRange: "₹18,00,000 - ₹18,10,000",
                mileage: "15 km/l",
                fuelType: "Petrol / Diesel",
                serviceCost: "₹12,000/year",
                description: "Feature-loaded SUV with ADAS Level 2.",
                features: ["ADAS", "7-Seater", "Luxury Interiors"],
                specifications: { engine: "1999cc", power: "200 bhp", type: "SUV" },
                reviews: [{ user: "Suresh", rating: 4.8, comment: "Powerful and futuristic." }]
            },
            {
                name: "Toyota Innova Crysta",
                imageCar: "./images/Toyota Innova Crysta.jpg",
                priceRange: "₹20,00,000 - ₹20,10,000",
                mileage: "14 km/l",
                fuelType: "Diesel",
                serviceCost: "₹15,000/year",
                description: "MPV with unmatched reliability and comfort.",
                features: ["Captain Seats", "Spacious Cabin", "Strong Resale"],
                specifications: { engine: "2393cc", power: "150 bhp", type: "MPV" },
                reviews: [{ user: "Anjali", rating: 4.6, comment: "Best for family trips." }]
            },
            {
                name: "Tata Harrier",
                imageCar: "./images/Tata Harrier.jpg",
                priceRange: "₹16,00,000 - ₹16,10,000",
                mileage: "16 km/l",
                fuelType: "Diesel",
                serviceCost: "₹12,000/year",
                description: "Bold SUV with strong road presence.",
                features: ["Panoramic Sunroof", "ADAS", "Terrain Modes"],
                specifications: { engine: "1956cc", power: "170 bhp", type: "SUV" },
                reviews: [{ user: "Kunal", rating: 4.5, comment: "Solid build, stylish looks." }]
            },
            {
                name: "Skoda Slavia",
                imageCar: "./images/Skoda Slavia.jpg",
                priceRange: "₹15,00,000 - ₹15,10,000",
                mileage: "17 km/l",
                fuelType: "Petrol",
                serviceCost: "₹10,000/year",
                description: "Premium sedan with European design.",
                features: ["Turbo Engine", "6 Airbags", "Ventilated Seats"],
                specifications: { engine: "1498cc", power: "150 bhp", type: "Sedan" },
                reviews: [{ user: "Riya", rating: 4.4, comment: "Smooth drive, luxury feel." }]
            }
        ]
    },
    {
        range: "Above ₹20,00,000",
        suggestion: "Luxury Cars",
        vehicles: [
            {
                name: "BMW 3 Series (2025)",
                imageCar: "./images/BMW 3 Series (2025).jpg",
                priceRange: "₹48,00,000 - ₹49,00,000",
                mileage: "12 km/l",
                fuelType: "Petrol",
                serviceCost: "₹50,000/year",
                description: "Luxury sedan with sporty handling.",
                features: ["ADAS", "Luxury Interiors", "AI Voice Assistant"],
                specifications: { engine: "1998cc", power: "255 bhp", type: "Sedan" },
                reviews: [{ user: "Vikram", rating: 4.9, comment: "Thrilling drive." }]
            },
            {
                name: "Mercedes-Benz C-Class (2025)",
                imageCar: "./images/Mercedes-Benz C-Class (2025).jpg",
                priceRange: "₹52,00,000 - ₹53,00,000",
                mileage: "11 km/l",
                fuelType: "Petrol / Diesel",
                serviceCost: "₹55,000/year",
                description: "Luxury sedan with advanced MBUX.",
                features: ["MBUX Infotainment", "ADAS Level 3", "Massage Seats"],
                specifications: { engine: "1999cc", power: "201 bhp", type: "Sedan" },
                reviews: [{ user: "Shreya", rating: 4.7, comment: "Comfort and tech-rich." }]
            },
            {
                name: "Audi A4",
                imageCar: "./images/Audi A4.jpg",
                priceRange: "₹48,00,000 - ₹49,00,000",
                mileage: "12 km/l",
                fuelType: "Petrol",
                serviceCost: "₹52,000/year",
                description: "Elegant sedan with luxury features.",
                features: ["Virtual Cockpit", "LED Matrix Lights", "Quattro"],
                specifications: { engine: "1984cc", power: "190 bhp", type: "Sedan" },
                reviews: [{ user: "Kartik", rating: 4.6, comment: "Smooth and premium feel." }]
            },
            {
                name: "Jaguar XE",
                imageCar: "./images/Jaguar XE.jpg",
                priceRange: "₹55,00,000 - ₹56,00,000",
                mileage: "11 km/l",
                fuelType: "Petrol",
                serviceCost: "₹60,000/year",
                description: "British luxury sedan with sporty styling.",
                features: ["Premium Leather", "Advanced Infotainment", "ADAS"],
                specifications: { engine: "1997cc", power: "247 bhp", type: "Sedan" },
                reviews: [{ user: "Nisha", rating: 4.5, comment: "Luxury + performance." }]
            },
            {
                name: "Volvo XC60",
                imageCar: "./images/Volvo XC60.jpg",
                priceRange: "₹60,00,000 - ₹61,00,000",
                mileage: "13 km/l",
                fuelType: "Petrol Hybrid",
                serviceCost: "₹65,000/year",
                description: "Luxury SUV with top safety features.",
                features: ["Pilot Assist", "Bowers & Wilkins Audio", "Panoramic Sunroof"],
                specifications: { engine: "1969cc", power: "250 bhp", type: "SUV" },
                reviews: [{ user: "Anand", rating: 4.7, comment: "Safe and premium." }]
            },
            {
                name: "Tesla Model 3 (2025, India)",
                imageCar: "./images/Tesla Model 3 (2025, India).jpg",
                priceRange: "₹60,00,000 - ₹61,00,000",
                mileage: "500 km/charge",
                fuelType: "Electric",
                serviceCost: "₹15,000/year",
                description: "Futuristic EV sedan with Autopilot.",
                features: ["Autopilot", "Supercharging", "OTA Updates"],
                specifications: { engine: "Electric", power: "283 bhp", type: "Sedan" },
                reviews: [{ user: "Nikhil", rating: 5.0, comment: "Best EV experience." }]
            },
            {
                name: "Lexus ES 300h",
                imageCar: "./images/Lexus ES 300h.jpg",
                priceRange: "₹62,00,000 - ₹63,00,000",
                mileage: "19 km/l",
                fuelType: "Hybrid",
                serviceCost: "₹70,000/year",
                description: "Luxury hybrid sedan with smooth performance.",
                features: ["Hybrid Drive", "Mark Levinson Audio", "ADAS"],
                specifications: { engine: "2487cc Hybrid", power: "215 bhp", type: "Sedan" },
                reviews: [{ user: "Arun", rating: 4.8, comment: "Refined and" }]
            }
        ]
    }
]
