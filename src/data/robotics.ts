import type { ImageKey } from "@/lib/images";

/** Sample product data. Specifications are placeholders — no real-world values are implied. */
export type SpecRow = { label: string; value: string };

export type Product = {
  id: string;
  name: string;
  categorySlug: string;
  category: string;
  positioning: string;
  description: string;
  overview: string;
  image: Exclude<ImageKey, "hero">;
  features: string[];
  specifications: SpecRow[];
  applications: string[];
  requirements: string[];
  specs: string[];
  integration: string;
  related: string[];
};

export type Category = {
  slug: string;
  title: string;
  menuItems: string[];
  positioning: string;
  intro: string;
  capabilities: string[];
  applications: string[];
  considerations: string[];
  card: string;
  image: Exclude<ImageKey, "hero">;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
};

const placeholderSpecs: SpecRow[] = [
  { label: "Rated Torque", value: "[Specification]" },
  { label: "Maximum Speed", value: "[Specification]" },
  { label: "Payload", value: "[Specification]" },
  { label: "Accuracy / Repeatability", value: "[Specification]" },
  { label: "Operating Voltage", value: "[Specification]" },
  { label: "Communication", value: "[Specification]" },
  { label: "Protection Rating", value: "[Specification]" },
  { label: "Operating Temperature", value: "[Specification]" },
];

export const categories: Category[] = [
  {
    slug: "actuators",
    title: "Actuators",
    menuItems: ["Linear Actuators", "Rotary Actuators", "Electric Actuators", "Servo Actuators"],
    positioning: "Controlled movement where your machine needs it.",
    intro:
      "An actuator converts electrical energy into controlled mechanical movement. In a robotic system it sits between the motor and the mechanism: the motor supplies rotation, the actuator shapes that rotation into usable linear or rotary motion at a defined speed, force, and position. Actuator selection influences joint stiffness, positioning accuracy, duty cycle, and how easily the axis can be coordinated with the rest of the machine.",
    capabilities: [
      "Linear and rotary motion formats for joints, slides, and positioning axes",
      "Electric and servo variants with closed-loop position and velocity control",
      "Integrated feedback options for repeatable positioning",
      "Compact housings suited to space-constrained robotic structures",
      "Interfaces intended for coordination with drives and motion controllers",
    ],
    applications: ["Robotic joint actuation", "Pick and place axes", "Machine positioning systems", "Automated test and inspection stations"],
    considerations: [
      "Required force or torque across the full duty cycle, not just peak load",
      "Travel, stroke, or rotation range and the accuracy needed at end position",
      "Feedback type and how it integrates with your controller and drive",
      "Mounting envelope, orientation, and environmental conditions",
    ],
    card: "Actuators convert electrical input into controlled linear or rotary motion. They define how accurately and how repeatably a robotic axis moves, and are used in robotic joints, positioning systems, handling mechanisms, and automated machinery.",
    image: "components",
    seoTitle: "Robotic Actuators | Linear, Rotary & Servo Actuators",
    seoDescription:
      "Explore robotic actuators for industrial automation — linear, rotary, electric, and servo actuators engineered for precise, repeatable robotic motion.",
    keywords: "robotic actuators, servo actuators, linear actuators",
  },
  {
    slug: "precision-reducers",
    title: "Precision Reducers",
    menuItems: ["Planetary Reducers", "Harmonic Reducers", "Cycloidal Reducers", "Gearboxes"],
    positioning: "Reduced speed, multiplied torque, controlled motion.",
    intro:
      "A precision reducer lowers the rotational speed of a motor while increasing the torque available at the output. In robotics that trade is essential: motors run efficiently at high speed, while robotic joints need slow, forceful, controlled movement. The reducer also affects how precisely a joint holds position, because backlash, torsional stiffness, and efficiency all shape the accuracy the axis can achieve.",
    capabilities: [
      "Speed reduction with corresponding torque multiplication",
      "Low-backlash designs for repeatable joint positioning",
      "Planetary, harmonic, and cycloidal architectures for different stiffness and ratio needs",
      "Compact formats intended for integration into robotic joints",
      "Ratio options selected around load, inertia, and cycle time",
    ],
    applications: ["Robotic arm joints", "Rotary indexing axes", "Automated machinery drives", "Positioning and alignment systems"],
    considerations: [
      "Output torque required, including shock and acceleration loads",
      "Acceptable backlash for the accuracy your process demands",
      "Torsional stiffness and its effect on settling time",
      "Efficiency, thermal behaviour, and expected duty cycle",
      "Mounting interface with the motor and the driven structure",
    ],
    card: "Precision reducers reduce motor speed and multiply usable torque. In robotic joints they also contribute to controlled, repeatable movement, making them central to arms, rotary axes, and automated machinery.",
    image: "components",
    seoTitle: "Precision Reducers | Planetary, Harmonic & Cycloidal",
    seoDescription:
      "Precision reducers for robotics: speed reduction, torque multiplication, and low-backlash motion for robotic joints, rotary axes, and automated machinery.",
    keywords: "precision reducers, harmonic reducer, planetary gearbox",
  },
  {
    slug: "robotic-wheels",
    title: "Robotic Wheels",
    menuItems: ["Drive Wheels", "Omni Wheels", "Mecanum Wheels", "Mobile Robot Modules"],
    positioning: "Mobility for autonomous industrial platforms.",
    intro:
      "Wheels and drive modules determine how a mobile robot moves, turns, and carries load. AGVs following fixed routes, AMRs navigating dynamic environments, and inspection platforms working in confined aisles all place different demands on traction, manoeuvrability, and drive layout. Omni and Mecanum arrangements allow sideways and rotational movement without changing heading, which can be valuable where floor space is limited.",
    capabilities: [
      "Drive wheels for conventional differential and tricycle layouts",
      "Omni and Mecanum wheels for omnidirectional movement",
      "Drive modules combining motor, reduction, and wheel in one assembly",
      "Mounting arrangements suited to modular chassis design",
      "Encoder-ready configurations for closed-loop navigation",
    ],
    applications: ["AGV transport platforms", "AMR fleets in warehousing", "Mobile inspection robots", "Automated intralogistics vehicles"],
    considerations: [
      "Payload per wheel and total platform mass",
      "Floor surface, joints, ramps, and available traction",
      "Required travel speed and acceleration profile",
      "Manoeuvrability: turning radius or true omnidirectional movement",
      "Drive configuration and how it maps to your navigation stack",
    ],
    card: "Robotic wheels and drive modules move autonomous platforms. Drive, omni, and Mecanum options support AGV and AMR applications where payload, traction, and manoeuvrability define the design.",
    image: "mobile",
    seoTitle: "Robotic Wheels & Drive Modules for AGV and AMR",
    seoDescription:
      "Robotic wheels for mobile robotics — drive, omni, and Mecanum wheels plus drive modules for AGVs, AMRs, and autonomous industrial platforms.",
    keywords: "robotic wheels, mecanum wheels, AGV drive module",
  },
  {
    slug: "robotic-arms",
    title: "Robotic Arms",
    menuItems: ["4-Axis Robots", "6-Axis Robots", "Collaborative Robots", "Pick & Place Robots"],
    positioning: "Multi-axis motion with repeatable positioning.",
    intro:
      "A robotic arm coordinates several actuated joints so a tool can reach a position and orientation within a defined work envelope. Four-axis arms suit planar handling and palletising-style tasks; six-axis arms add the orientation freedom needed for welding, assembly, and complex part presentation. Payload, reach, repeatability, and the end effector are decided together, because each one constrains the others.",
    capabilities: [
      "Four-axis, six-axis, and collaborative configurations",
      "Coordinated multi-axis path control through a robot controller",
      "Mounting and tooling interfaces for a range of end effectors",
      "Programmable motion paths for repeatable production cycles",
      "Integration with sensors, vision, and cell safety systems",
    ],
    applications: ["Assembly", "Welding", "Pick and place", "Machine tending", "Inspection", "Material handling"],
    considerations: [
      "Payload including the end effector, cabling, and any carried part",
      "Reach and the shape of the required work envelope",
      "Repeatability needed by the process, and how it is measured",
      "Cycle time targets and resulting acceleration demands",
      "Safety strategy: guarding, collaborative operation, or both",
    ],
    card: "Robotic arms deliver coordinated multi-axis movement with repeatable positioning. They are applied to assembly, welding, pick and place, machine tending, and inspection across industrial production.",
    image: "arm",
    seoTitle: "Robotic Arms | 4-Axis, 6-Axis & Collaborative Robots",
    seoDescription:
      "Industrial robotic arms for assembly, welding, pick and place, and machine tending — 4-axis, 6-axis, and collaborative configurations.",
    keywords: "robotic arms, 6 axis robot, collaborative robot",
  },
  {
    slug: "industrial-robots",
    title: "Industrial Robots",
    menuItems: ["Assembly Robots", "Welding Robots", "Handling Robots", "Inspection Robots", "Palletizing Robots"],
    positioning: "Production automation built for repeatable output.",
    intro:
      "Industrial robots are complete robotic systems deployed inside production cells. Their value comes from consistency: the same motion, executed the same way, cycle after cycle. Assembly, welding, handling, palletising, inspection, and packaging tasks all benefit from that repeatability, provided the cell around the robot — fixtures, tooling, sensing, and safety — is designed with the same care as the robot itself.",
    capabilities: [
      "Robot platforms configured for assembly, welding, handling, and palletising",
      "Repeatable motion profiles suited to continuous production duty",
      "Integration points for tooling, fixtures, conveyors, and vision",
      "Controller-level coordination with upstream and downstream equipment",
      "Support for cell safety and guarding concepts",
    ],
    applications: ["Manufacturing cells", "Arc and spot welding", "Material handling", "Palletising and depalletising", "Inspection", "Packaging"],
    considerations: [
      "Process requirements: force, orientation, tolerance, and cycle time",
      "Part presentation and fixture design",
      "Integration with existing lines, PLCs, and data systems",
      "Maintenance access, spare strategy, and operator training",
      "Risk assessment and the safety concept for the cell",
    ],
    card: "Industrial robots automate production tasks such as assembly, welding, handling, palletising, and inspection, supporting consistent process execution and predictable cycle behaviour within integrated cells.",
    image: "arm",
    seoTitle: "Industrial Robots for Assembly, Welding & Handling",
    seoDescription:
      "Industrial robots for manufacturing automation — assembly, welding, material handling, palletising, and inspection within integrated production cells.",
    keywords: "industrial robots, welding robot, palletizing robot",
  },
  {
    slug: "control-systems",
    title: "Control Systems",
    menuItems: ["Robot Controllers", "Motion Controllers", "Servo Drives", "PLC & Automation", "Sensors & Feedback"],
    positioning: "The logic that turns commands into coordinated motion.",
    intro:
      "Control systems close the loop between intent and movement. A command is issued, the controller plans the motion, drives deliver current to the motors, sensors report actual position and load, and the controller corrects continuously: command, control, motion, feedback, correction. Robot controllers, motion controllers, servo drives, PLCs, and feedback devices each own part of that loop, and they must share a common communication architecture to work as one machine.",
    capabilities: [
      "Robot and motion controllers for coordinated multi-axis paths",
      "Servo drives delivering regulated current, velocity, and position control",
      "PLC and automation logic for sequencing and interlocks",
      "Sensors and feedback devices for position, force, and presence",
      "Industrial communication for deterministic data exchange",
    ],
    applications: ["Robotic cell control", "Synchronised multi-axis machines", "Automated production lines", "Test and inspection systems"],
    considerations: [
      "Number of axes, and whether they must be synchronised",
      "Control loop rates and the determinism your process requires",
      "Feedback resolution and where it is measured in the drivetrain",
      "Communication protocol compatibility across the machine",
      "Diagnostics, data access, and long-term maintainability",
    ],
    card: "Control systems coordinate motion across a machine. Controllers, servo drives, PLCs, sensors, and feedback devices work together so commands become accurate, corrected, repeatable movement.",
    image: "components",
    seoTitle: "Control Systems | Robot Controllers, Drives & Sensors",
    seoDescription:
      "Motion control systems for robotics — robot controllers, motion controllers, servo drives, PLC automation, and sensor feedback for coordinated machines.",
    keywords: "motion control, robot controller, servo drives",
  },
];

export const products: Product[] = [
  {
    id: "integrated-servo-actuator",
    name: "Integrated Servo Actuator",
    categorySlug: "actuators",
    category: "Actuators",
    positioning: "A compact rotary actuation module for robotic joints and positioning axes.",
    description: "Compact rotary motion module with integrated feedback for robotic joints.",
    overview:
      "The Integrated Servo Actuator combines motor, reduction, and feedback in a single rotary module intended for robotic joints and machine positioning axes. Housing the drivetrain together shortens the mechanical chain between motor and output, which helps maintain stiffness and simplifies assembly in space-constrained structures. Engineers typically select an integrated actuator when an axis must be added without redesigning the surrounding mechanics, when wiring should be reduced, or when a joint requires closed-loop position control coordinated with other axes. Suitability depends on the load profile, duty cycle, and control architecture of the target machine.",
    image: "components",
    features: [
      "Motor, reduction, and feedback integrated in one module",
      "Closed-loop position and velocity control",
      "Compact envelope for joint-level installation",
      "Reduced cabling compared with discrete drivetrains",
      "Configurable motion profiles",
      "Interfaces intended for coordination with motion controllers",
    ],
    specifications: placeholderSpecs,
    applications: ["Assembly", "Pick & Place", "Inspection", "Machine positioning"],
    requirements: ["High Precision", "Compact Design", "High Speed"],
    specs: ["Rotary motion", "Closed-loop control", "Configurable interface"],
    integration:
      "Pairs with motion controllers and servo drives over an industrial network, and can be combined with external sensors where the process requires feedback measured at the load rather than the motor.",
    related: ["precision-robotic-reducer", "coordinated-motion-controller"],
  },
  {
    id: "linear-positioning-actuator",
    name: "Linear Positioning Actuator",
    categorySlug: "actuators",
    category: "Actuators",
    positioning: "A linear axis module for controlled travel and repeatable end positioning.",
    description: "Linear motion module for controlled travel and repeatable end positioning.",
    overview:
      "The Linear Positioning Actuator converts rotary motor output into guided linear travel for handling, feeding, and adjustment axes. It is typically applied where a part must be moved along a defined path and stopped accurately, such as transfer stations, gantry axes, and automated test fixtures. Selection normally begins with the required thrust across the duty cycle, the stroke length, and the accuracy needed at the end position, followed by the mounting orientation and any side loading the guide must absorb. Feedback options allow the axis to be coordinated with other machine movements.",
    image: "components",
    features: [
      "Guided linear travel with defined stroke options",
      "Thrust characteristics suited to handling and feeding axes",
      "Feedback options for repeatable end positioning",
      "Multiple mounting orientations",
      "Designed for coordination with drives and controllers",
    ],
    specifications: placeholderSpecs,
    applications: ["Material Handling", "Assembly", "Inspection", "Pick & Place"],
    requirements: ["High Precision", "High Speed", "Compact Design"],
    specs: ["Linear travel", "Guided axis", "Feedback ready"],
    integration:
      "Operates as one axis within a coordinated machine, driven by a servo drive and sequenced by a motion controller or PLC alongside robotic and conveying equipment.",
    related: ["integrated-servo-actuator", "coordinated-motion-controller"],
  },
  {
    id: "precision-robotic-reducer",
    name: "Precision Robotic Reducer",
    categorySlug: "precision-reducers",
    category: "Precision Reducers",
    positioning: "A low-backlash reduction stage for controlled torque at robotic joints.",
    description: "Low-backlash reduction platform for controlled torque transmission.",
    overview:
      "The Precision Robotic Reducer sits between the motor and the joint structure, lowering speed and increasing available torque while limiting lost motion. Its contribution to accuracy comes from backlash behaviour and torsional stiffness: both influence how precisely a joint reaches a commanded position and how quickly it settles once it arrives. Engineers select this class of reducer for robotic arm joints, rotary indexing axes, and positioning systems where movement must be repeatable under changing load. Ratio, frame size, and mounting interface are chosen from the load and inertia of the driven axis.",
    image: "components",
    features: [
      "Low-backlash gearing for repeatable positioning",
      "High torsional rigidity for stable settling behaviour",
      "Ratio options selected around load and inertia",
      "Compact frame sizes for joint integration",
      "Motor-side and output-side mounting interfaces",
      "Suited to continuous industrial duty cycles",
    ],
    specifications: placeholderSpecs,
    applications: ["Assembly", "Welding", "Material Handling", "Inspection"],
    requirements: ["High Torque", "High Precision", "Compact Design"],
    specs: ["Rotary output", "Precision gearing", "Multiple frame sizes"],
    integration:
      "Mounts between a servo motor and the joint structure, and is commonly specified together with the actuator and drive so that inertia matching and control tuning are handled as one problem.",
    related: ["integrated-servo-actuator", "six-axis-robotic-arm"],
  },
  {
    id: "mecanum-drive-module",
    name: "Mecanum Drive Module",
    categorySlug: "robotic-wheels",
    category: "Robotic Wheels",
    positioning: "An omnidirectional drive module for agile mobile robot platforms.",
    description: "Omnidirectional mobility module for agile industrial transport platforms.",
    overview:
      "The Mecanum Drive Module provides omnidirectional movement for mobile platforms operating in confined industrial spaces. Angled rollers allow the platform to translate sideways and rotate on the spot without changing heading, which can simplify docking, aisle work, and load transfer where a conventional turning radius is impractical. The module combines wheel, drive, and mounting interface so a chassis can be built around a repeatable unit. Payload per module, floor condition, and required speed determine how many modules a platform needs and how they should be arranged.",
    image: "mobile",
    features: [
      "Omnidirectional travel including lateral movement",
      "Integrated drive and mounting interface",
      "Modular arrangement for varied chassis layouts",
      "Encoder-ready for closed-loop navigation",
      "Designed for indoor industrial floor conditions",
    ],
    specifications: placeholderSpecs,
    applications: ["Mobile Robotics", "Material Handling", "Inspection", "Warehousing"],
    requirements: ["High Payload", "Compact Design", "High Precision"],
    specs: ["Multi-direction travel", "Modular chassis fit", "Encoder-ready"],
    integration:
      "Connects to a mobile platform controller that coordinates each module's velocity command, and works alongside navigation sensors and safety scanners on the vehicle.",
    related: ["amr-drive-wheel", "coordinated-motion-controller"],
  },
  {
    id: "amr-drive-wheel",
    name: "AMR Drive Wheel Unit",
    categorySlug: "robotic-wheels",
    category: "Robotic Wheels",
    positioning: "A differential drive unit for AGV and AMR transport platforms.",
    description: "Traction drive unit for AGV and AMR platforms operating on industrial floors.",
    overview:
      "The AMR Drive Wheel Unit provides traction and speed control for autonomous transport platforms using differential drive layouts. It brings motor, reduction, and wheel together so vehicle builders can standardise the traction interface across a fleet. Applications include warehouse transport, line-side delivery, and inspection platforms where predictable traction and controlled acceleration matter more than omnidirectional freedom. Wheel selection depends on payload per unit, floor surface and joints, required speed, and how the vehicle's navigation system expects velocity to be commanded and reported.",
    image: "mobile",
    features: [
      "Integrated motor, reduction, and wheel assembly",
      "Traction characteristics suited to indoor industrial floors",
      "Controlled acceleration and braking behaviour",
      "Feedback interface for closed-loop navigation",
      "Standardised mounting for fleet consistency",
    ],
    specifications: placeholderSpecs,
    applications: ["Mobile Robotics", "Warehousing", "Material Handling"],
    requirements: ["High Payload", "High Speed", "Compact Design"],
    specs: ["Differential drive", "Traction wheel", "Feedback interface"],
    integration:
      "Commanded by the vehicle controller, typically alongside navigation sensors, battery management, and fleet software that assigns transport tasks.",
    related: ["mecanum-drive-module", "coordinated-motion-controller"],
  },
  {
    id: "six-axis-robotic-arm",
    name: "6-Axis Robotic Arm",
    categorySlug: "robotic-arms",
    category: "Robotic Arms",
    positioning: "A six-axis platform for tasks requiring position and orientation control.",
    description: "Flexible multi-axis platform for complex automated production tasks.",
    overview:
      "The 6-Axis Robotic Arm coordinates six actuated joints so a tool can reach both a position and an orientation within its work envelope. That freedom is what makes six-axis arms suitable for welding, assembly, and part presentation tasks where the approach angle matters as much as the location. Payload, reach, and repeatability are evaluated together with the end effector, because tooling mass and offset directly affect what the arm can achieve. Cycle time targets and the cell safety concept should be defined before the configuration is fixed.",
    image: "arm",
    features: [
      "Six coordinated axes for position and orientation control",
      "Defined work envelope with configurable reach classes",
      "Tooling interface for a range of end effectors",
      "Programmable, repeatable motion paths",
      "Compatible with vision and sensor-guided operation",
      "Designed for integration into guarded production cells",
    ],
    specifications: placeholderSpecs,
    applications: ["Assembly", "Welding", "Pick & Place", "Inspection", "Machine tending"],
    requirements: ["High Precision", "High Speed", "High Payload"],
    specs: ["6 controlled axes", "Flexible reach options", "Controller compatible"],
    integration:
      "Operates under a robot controller that can exchange signals with PLCs, vision systems, conveyors, and safety devices so the arm acts as part of a complete cell rather than a standalone machine.",
    related: ["industrial-handling-robot", "precision-robotic-reducer"],
  },
  {
    id: "industrial-handling-robot",
    name: "Industrial Handling Robot",
    categorySlug: "industrial-robots",
    category: "Industrial Robots",
    positioning: "A production-duty robot platform for repeatable handling and machine tending.",
    description: "Production-focused robot platform for repeatable handling and machine tending.",
    overview:
      "The Industrial Handling Robot is intended for continuous production work: loading and unloading machines, transferring parts between stations, and palletising finished goods. Its value comes from executing the same motion consistently across long production runs, which supports predictable cycle behaviour and stable downstream processes. Configuration depends on the part, the fixture, and the cell layout as much as on the robot itself. Payload must include gripper mass and any offset, and the safety concept should be assessed before layout is finalised.",
    image: "arm",
    features: [
      "Configured for continuous production duty cycles",
      "Multiple payload and reach classes",
      "Interfaces for grippers and custom tooling",
      "Signal exchange with conveyors, PLCs, and machines",
      "Suited to guarded or sensor-monitored cells",
    ],
    specifications: placeholderSpecs,
    applications: ["Material Handling", "Assembly", "Pick & Place", "Palletising"],
    requirements: ["High Payload", "High Speed", "High Precision"],
    specs: ["Multi-axis platform", "Multiple reach classes", "Safety integration ready"],
    integration:
      "Sits inside a production cell with fixtures, conveyors, and sensors, exchanging state and interlock signals with plant control so the robot and the line remain synchronised.",
    related: ["six-axis-robotic-arm", "coordinated-motion-controller"],
  },
  {
    id: "coordinated-motion-controller",
    name: "Coordinated Motion Controller",
    categorySlug: "control-systems",
    category: "Control Systems",
    positioning: "Central control for synchronised axes, drives, and machine logic.",
    description: "Centralised control for synchronised axes, drives, sensors, and automation logic.",
    overview:
      "The Coordinated Motion Controller plans and supervises motion across multiple axes so they behave as one machine rather than a group of independent drives. It issues target positions, receives feedback, and corrects continuously, while also handling sequencing and interlocks with the surrounding automation. Engineers select a coordinated controller when axes must move in a defined relationship — interpolated paths, synchronised transfers, or camming — or when diagnostics and process data need to be collected in one place. Axis count, loop rate, and protocol compatibility guide the specification.",
    image: "components",
    features: [
      "Multi-axis coordination with interpolated motion",
      "Deterministic industrial communication",
      "Closed-loop correction from axis feedback",
      "Sequencing and interlock handling",
      "Diagnostics and process data access",
      "Scalable axis count for machine growth",
    ],
    specifications: placeholderSpecs,
    applications: ["Assembly", "Inspection", "Mobile Robotics", "Production lines"],
    requirements: ["High Speed", "High Precision", "Compact Design"],
    specs: ["Scalable axis count", "Industrial protocols", "Real-time feedback"],
    integration:
      "Connects servo drives, actuators, sensors, and PLC logic over an industrial network, and can expose production data to higher-level systems for monitoring and analysis.",
    related: ["integrated-servo-actuator", "six-axis-robotic-arm"],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getProduct = (id: string) => products.find((p) => p.id === id);
export const productsIn = (slug: string) => products.filter((p) => p.categorySlug === slug);

export const productFamilies = categories.map((c) => ({
  slug: c.slug,
  title: c.title,
  subtitle: c.positioning,
  text: c.card,
}));

export const searchItems = [
  ...products.map((p) => ({ title: p.name, type: "Product", detail: p.category, href: `/products/${p.categorySlug}/${p.id}` })),
  ...categories.map((c) => ({ title: c.title, type: "Product family", detail: c.positioning, href: `/products/${c.slug}` })),
  { title: "6-Axis Robotic Arms", type: "Product family", detail: "Robotic Arms", href: "/products/robotic-arms" },
  { title: "Robotic Welding", type: "Application", detail: "Welding & Fabrication", href: "/applications/welding-fabrication" },
  { title: "Motion Control Explained", type: "Technical article", detail: "Technology", href: "/technology" },
  { title: "How do I select a reducer for a robotic arm?", type: "FAQ", detail: "Resources", href: "/resources" },
  { title: "Product Catalogues & Datasheets", type: "Resource", detail: "Resources", href: "/resources" },
];
