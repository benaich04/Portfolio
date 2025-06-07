export const projects = [
  {
    id: 1,
    title: 'Autonomous 3D LiDAR-Based Area Mapping with UAV',
    description: `Developed a fully autonomous 3D mapping system using ROS2 and ArduPilot, integrating LiDAR sensors mounted on UAVs for real-time area mapping. Simulations were conducted in Gazebo to validate performance.`,
    techStack: ['ROS2', 'ArduPilot', 'Gazebo', 'LiDAR', 'UAVs'],
    image: '/images/projects/UAV_mapping.png',
    link: null,
  },
  {
    id: 2,
    title: 'F-16 Fighting Falcon VR Flight Simulator',
    description: `Built a VR-compatible F-16 flight simulator using Unity and C#, featuring realistic flight physics, takeoff/landing tutorials, and Oculus VR support. Designed both for entertainment and educational purposes to teach aviation basics.`,
    techStack: ['Unity3D', 'C#', 'Oculus VR', 'Flight Physics', 'Avionics'],
    image: 'https://dl.dropboxusercontent.com/scl/fi/0p7pzwcvf77bfynapz1p3/F16.PNG?rlkey=k6lf4uccfqrs2j169n9gs776p&st=h0ftop0y&dl=0',
    link: null,
  },
  {
    id: 3,
    title: '14-bit Microprocessor Design (VHDL + FPGA)',
    description: `Designed and implemented a 14-bit microprocessor using VHDL with RISC-like architecture supporting 16 instructions. The system includes pipelined fetch-decode-execute stages, ALU with overflow detection, control unit, and on-chip debugging via FPGA synthesis and simulation.`,
    techStack: ['VHDL', 'FPGA (Xilinx ISE)', 'ModelSim', 'Digital Design'],
    image: '/images/projects/FPGA.jpg',
    link: null,
  },
  {
    id: 4,
    title: 'Solar-Powered Autonomous IoT Monitoring System',
    description: `Designed and fabricated a fully self-contained solar-powered IoT system for environmental data monitoring. The system integrates a 6V 1W solar panel, 600mAh LiPo battery, and ESP32C3 microcontroller with temperature and humidity sensors (INA202 and HDC2080), all housed within a 3D-printed, waterproof enclosure made from Somos Ledo 6060 resin. The ESP32C3 enables wireless data transmission, efficient power management, and real-time environmental monitoring, while the PCB and enclosure were custom-designed and fabricated using JLCPCB and WENEXT.`,
    techStack: ['ESP32C3', 'IoT', 'Embedded Systems', 'PCB Design', 'Solar Power', 'Energy Management', '3D Printing', 'Waterproofing'],
    image: '/images/projects/3d_pcb.png',
    link: null,
    schematics: '/pcb/pcb_schematics.pdf'
  },
];
