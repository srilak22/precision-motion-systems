export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: "components" | "arm" | "mobile";
  features: string[];
  applications: string[];
  requirements: string[];
  specs: string[];
};

export const categories = [
  { title: "Actuators", items: ["Linear Actuators", "Rotary Actuators", "Electric Actuators", "Servo Actuators"] },
  { title: "Precision Reducers", items: ["Planetary Reducers", "Harmonic Reducers", "Cycloidal Reducers", "Gearboxes"] },
  { title: "Robotic Wheels", items: ["Drive Wheels", "Omni Wheels", "Mecanum Wheels", "Mobile Robot Modules"] },
  { title: "Robotic Arms", items: ["4-Axis Robots", "6-Axis Robots", "Collaborative Robots", "Pick & Place Robots"] },
  { title: "Industrial Robots", items: ["Assembly Robots", "Welding Robots", "Handling Robots", "Inspection Robots", "Palletizing Robots"] },
  { title: "Control Systems", items: ["Robot Controllers", "Motion Controllers", "Servo Drives", "PLC & Automation", "Sensors & Feedback"] },
];

export const products: Product[] = [
  {
    id: "servo-actuator",
    name: "Integrated Servo Actuator",
    category: "Actuators",
    description: "Compact motion module for coordinated robotic joints and positioning systems.",
    image: "components",
    features: ["Integrated feedback", "Configurable motion", "Compact format"],
    applications: ["Assembly", "Pick & Place", "Inspection"],
    requirements: ["High Precision", "Compact Design", "High Speed"],
    specs: ["Rotary motion", "Closed-loop control", "Configurable interface"],
  },
  {
    id: "precision-reducer",
    name: "Precision Robotic Reducer",
    category: "Reducers",
    description: "Low-backlash reduction platform for controlled torque transmission.",
    image: "components",
    features: ["Low-backlash design", "High rigidity", "Flexible ratios"],
    applications: ["Assembly", "Welding", "Material Handling"],
    requirements: ["High Torque", "High Precision", "Compact Design"],
    specs: ["Rotary output", "Precision gearing", "Multiple frame sizes"],
  },
  {
    id: "mecanum-module",
    name: "Mecanum Drive Module",
    category: "Wheels",
    description: "Omnidirectional mobility module for agile industrial transport platforms.",
    image: "mobile",
    features: ["Omnidirectional travel", "Modular mounting", "Integrated drive option"],
    applications: ["Mobile Robotics", "Material Handling", "Inspection"],
    requirements: ["High Payload", "Compact Design", "High Precision"],
    specs: ["Multi-direction travel", "Modular chassis fit", "Encoder-ready"],
  },
  {
    id: "six-axis-arm",
    name: "6-Axis Robotic Arm",
    category: "Robotic Arms",
    description: "Flexible multi-axis platform for complex automated production tasks.",
    image: "arm",
    features: ["Six-axis motion", "Flexible tooling", "Programmable paths"],
    applications: ["Assembly", "Welding", "Pick & Place"],
    requirements: ["High Precision", "High Speed", "High Payload"],
    specs: ["6 controlled axes", "Flexible reach options", "Controller compatible"],
  },
  {
    id: "handling-robot",
    name: "Industrial Handling Robot",
    category: "Industrial Robots",
    description: "Production-focused robot platform for repeatable handling and machine tending.",
    image: "arm",
    features: ["Production duty cycle", "Flexible payloads", "Cell-ready integration"],
    applications: ["Material Handling", "Assembly", "Pick & Place"],
    requirements: ["High Payload", "High Speed", "High Precision"],
    specs: ["Multi-axis platform", "Multiple reach classes", "Safety integration ready"],
  },
  {
    id: "motion-controller",
    name: "Coordinated Motion Controller",
    category: "Control Systems",
    description: "Centralized control for synchronized axes, drives, sensors, and automation logic.",
    image: "components",
    features: ["Multi-axis coordination", "Industrial networking", "Diagnostics"],
    applications: ["Assembly", "Inspection", "Mobile Robotics"],
    requirements: ["High Speed", "High Precision", "Compact Design"],
    specs: ["Scalable axis count", "Industrial protocols", "Real-time feedback"],
  },
];

export const productFamilies = [
  ["Actuators", "Powering precise robotic movement.", "High-performance motion for robotic joints, linear systems, and automated machinery."],
  ["Precision Reducers", "Turning speed into controlled power.", "Reduction systems designed around torque, accuracy, stability, and controlled motion."],
  ["Robotic Wheels", "Mobility for autonomous machines.", "Mobility solutions for AGVs, AMRs, inspection platforms, and industrial systems."],
  ["Robotic Arms", "Precision at every joint.", "Multi-axis systems for assembly, handling, welding, inspection, and automation."],
  ["Industrial Robots", "Automation built for production.", "Robotic systems designed for manufacturing, handling, and production automation."],
  ["Control Systems", "The intelligence behind every movement.", "Controllers, drives, servo systems, and feedback technologies for coordinated automation."],
] as const;

export const searchItems = [
  ...products.map((product) => ({ title: product.name, type: "Product", detail: product.category })),
  { title: "6-Axis Robotic Arms", type: "Product family", detail: "Robotic Arms" },
  { title: "Robotic Welding", type: "Application", detail: "Automated fabrication" },
  { title: "Motion System Selection Guide", type: "Technical resource", detail: "Engineering guide" },
  { title: "How do I select a robotic reducer?", type: "FAQ", detail: "Product selection" },
];
