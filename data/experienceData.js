export const experiences = [
    {
      id: 1,
      slug: 'fpga-security-dfx',
      title: 'FPGA Security Intern — DFX Lab, NYUAD',
      duration: 'May 2025 – Present',
      bullets: [
        'Engineered logic-locking mechanisms for secure HDC execution on Xilinx FPGAs.',
        'Conducted SAT-based vulnerability analysis and synthesized hardened configurations.',
        'Documented full design tradeoffs and presented findings to senior faculty.',
      ],
      description: `During my internship at DFX Lab, I worked on developing advanced logic-locking security techniques to protect FPGA intellectual property and hardware execution from reverse engineering attacks. My work involved both theoretical vulnerability analysis using SAT solvers, as well as practical synthesis of hardened FPGA bitstreams using Xilinx toolchains. The internship culminated in a detailed technical presentation.`,
      media: [
        { type: 'image', src: '/images/experience/fpga_board.jpg', alt: 'Xilinx FPGA Board' },
        { type: 'video', src: '/videos/fpga_demo.mp4', alt: 'FPGA Security Demo' }
      ]
    },
      {
        id: 2,
        slug: 'autonomous-uav-lab',
        title: 'Research Assistant — Autonomous UAV Lab, NYUAD',
        duration: 'Jan 2025 – Apr 2025',
        bullets: [
          'Developed a ROS 2-based autonomous UAV pipeline integrating ArduPilot SITL, Gazebo, and Cartographer SLAM.',
          'Enhanced sensor fusion accuracy by 25% in GPS-denied environments through LiDAR, IMU, and depth camera integration.',
          'Configured EKF3 parameters in ArduPilot for seamless external odometry integration.',
          'Automated simulation workflows using ROS 2 launch files for efficient testing and validation.'
        ],
        description: `During my tenure at the Autonomous UAV Lab, I engineered a comprehensive simulation environment for autonomous drone navigation using ROS 2 and ArduPilot. Leveraging ArduPilot's Software-In-The-Loop (SITL) capabilities, I integrated Gazebo Harmonic as the physics simulator, facilitating realistic flight dynamics and sensor feedback. The UAV platform was equipped with simulated LiDAR, IMU, and depth cameras, enabling robust SLAM implementation via Google's Cartographer. I meticulously configured ArduPilot's EKF3 parameters to accept external odometry inputs, ensuring accurate state estimation in GPS-denied scenarios. This setup allowed for extensive testing and validation of autonomous navigation algorithms in a controlled, repeatable environment.`,
        media: [
          { type: 'image', src: 'https://dl.dropboxusercontent.com/scl/fi/ldvwcfkh6nqoltesurmx0/UAV_lab_2.PNG?rlkey=zg6widw7am7qqqst5hv4n7237&st=gqfmf15a&dl=0', alt: 'UAV Lab Testbed' },
          { type: 'image', src: 'https://dl.dropboxusercontent.com/scl/fi/qo2ls2yu2g3jfqdev0ol6/UAV_lab_1.PNG?rlkey=ij2evyw5ym3kdbuzmj4qcy5ng&st=ww8pkzbn&dl=0', alt: 'Autonomous UAV Demo' }
        ],
        images: [
          { src: 'https://dl.dropboxusercontent.com/scl/fi/qo2ls2yu2g3jfqdev0ol6/UAV_lab_1.PNG?rlkey=ij2evyw5ym3kdbuzmj4qcy5ng&st=ww8pkzbn&dl=0' }
        ]
      },      
      {
        id: 3,
        slug: 'automation-construction-mubadala',
        title: 'Research Intern — Automation in Construction (Mubadala & NYUAD)',
        duration: 'Jan 2024 – Jul 2024',
        bullets: [
          'Developed LiDAR-based autonomous navigation using ROS, increasing site inspection efficiency by 35%.',
          'Enhanced sensor fusion algorithms for precise mapping.',
          'Co-authored a conference paper (CCC 2025 submission).',
        ],
        description: `During my research internship at Mubadala & NYUAD, I contributed to the development of an autonomous robotic system for reality capture and data acquisition on dynamic construction sites. The robotic system integrated advanced SLAM algorithms, autonomous exploration planners, and robust data management pipelines, all validated in real-world construction environments. My work included SLAM integration (LIO-SAM), LiDAR sensor evaluation, SQL-based robotic data handling, and field deployment of autonomous scanning missions. This work was presented at CCC 2025.`,
        media: [
          { type: 'image', src: 'https://dl.dropboxusercontent.com/scl/fi/2gu2pymjefdckeg560wne/SMART1.PNG?rlkey=edpplknu8lml070jm5j7vyta3&st=63riksuy&dl=0', alt: 'Robotic platform' },
          { type: 'image', src: 'https://dl.dropboxusercontent.com/scl/fi/1hhkq0f6ebvxz6gb32423/SMART2.PNG?rlkey=jbjufeg8qcd8rtkyzi5xbnnq4&st=3fuivzwv&dl=0', alt: 'Research Summit at Mubadala HQ' },
          { type: 'image', src: 'https://dl.dropboxusercontent.com/scl/fi/m2f5f72fr0byk5ikdrl0p/SMART3.PNG?rlkey=amp9zkap0oielmqbw2z41tsuf&st=spiiv55s&dl=0', alt: 'SMART Construction team' },
          { type: 'video', src: 'https://dl.dropboxusercontent.com/scl/fi/fkwqua880iiertljiyf7o/NHM_slam.mp4?rlkey=vsk4ty5xwn56enfow0rliw8pa&st=k5snebpn&dl=0', alt: 'Field test demo at Mubadala site' },
          { type: 'video', src: 'https://dl.dropboxusercontent.com/scl/fi/kx2vbr9n6xj0s30yhgnbk/NHM_blk360.mp4?rlkey=y5beii942xdvph1a11l2po2fv&st=djl5r52x&dl=0', alt: 'Field test demo at Mubadala site' },
          { type: 'video', src: 'https://dl.dropboxusercontent.com/scl/fi/qtu5ohca74dbpbik8ivwp/IMG_4311.MOV?rlkey=b3cvue2hqbkthtmgot4b606b3&st=7b7730j0&dl=0', alt: 'Field test demo at Mubadala site' }
        ],
        publication: {
          title: 'Robotic Systems for Autonomous Data Acquisition in Construction: A Case Study',
          conference: 'Creative Construction Conference (CCC 2025)',
          doi: 'https://doi.org/10.22260/CCC2025/[LECTURE ID]',
          pdf: '/papers/robotic_systems_autonomous_data_acquisition.pdf'
        },
        images: [
          { src: 'https://dl.dropboxusercontent.com/scl/fi/m2f5f72fr0byk5ikdrl0p/SMART3.PNG?rlkey=amp9zkap0oielmqbw2z41tsuf&st=spiiv55s&dl=0', alt: 'Construction robot overview' }
        ]
      },
      

      {
        id: 4,
        slug: 'slam-room-labeling',
        title: 'Research Experience — Automated SLAM-Based Room Labeling',
        duration: 'Fall 2024',
        bullets: [
          'Automated room detection in 360° construction site imagery by integrating SLAM trajectories with BIM floor plans.',
          'Achieved 87% labeling accuracy through 3D reconstruction and PCA-based alignment.',
          'Co-authored a paper published at ACCCBE 2025.'
        ],
        description: `During this research project, I developed an automated pipeline to assign room labels to 360-degree construction imagery without requiring manual tagging. By combining visual-inertial SLAM with simplified floorplans derived from BIM, my work enabled full spatial referencing of thousands of panoramic frames collected on active construction sites. I designed the SLAM alignment, room segmentation, and georeferencing algorithms while also integrating PCA-based point cloud processing and trajectory slicing. The system eliminates the tedious process of manually tagging images and significantly accelerates progress tracking, inspection workflows, and safety monitoring.`,
        media: [
          { type: 'image', src: 'https://dl.dropboxusercontent.com/scl/fi/ddsaxheu4q28tb147xpdo/demo.gif?rlkey=jdmvo3rd2wdizz952wt1z117k&st=e0a44sai&dl=0', alt: 'Visual SLAM Algorithm used' },
          { type: 'image', src: 'https://dl.dropboxusercontent.com/scl/fi/mptrxhchfg6ik3045c9x2/Room_labelling_1.PNG?rlkey=hcc51w38j8j4vaihv0s4jswnf&st=xjy2ohni&dl=0', alt: 'Raw Data Visualized in 3D' },
          { type: 'image', src: 'https://dl.dropboxusercontent.com/scl/fi/heenpqlhztjqlz9ajjzxx/Room_labelling_2.PNG?rlkey=1i599ipfvir78za2kq25cfqr8&st=w5b4kfgi&dl=0', alt: 'Processed (Projected) Data Visualization' },
          { type: 'image', src: 'https://dl.dropboxusercontent.com/scl/fi/mzxnss1y1cuhdohqfqsml/Room_labelling_3.PNG?rlkey=xy9fypm2v7iuam6ex9mtyrpmp&st=mow5by8j&dl=0', alt: ' perspective view of the SLAM reconstructed point cloud' },
          { type: 'image', src: 'https://dl.dropboxusercontent.com/scl/fi/uegcx3luff7a5tx6wksdi/Room_labelling_4.PNG?rlkey=5nkwh8t8smfhczry13ob1iysk&st=4bzn2ykb&dl=0', alt: 'Reconstructed operator’s trajectory (in red) superimposed to the point cloud (ceiling has been removed for visualization purposes)' },
          { type: 'image', src: 'https://dl.dropboxusercontent.com/scl/fi/094566dfzlxumdl7epxln/Room_labelling_6.PNG?rlkey=g6ti17hrbohee6nf2t0jgxz3x&st=1qluziab&dl=0', alt: 'Projected point cloud (in blue) and trajectory (in red) aligned with the simplified floor plan (in black)' }
        ],
        publication: {
          title: 'Automated Room-Level Labelling of 360 Degree Video Frames Using SLAM',
          conference: 'ACCCBE 2025',
          doi: '#',
          pdf: '/papers/automated_room_level_labelling.pdf'
        },
        images: [
          { src: 'https://dl.dropboxusercontent.com/scl/fi/uegcx3luff7a5tx6wksdi/Room_labelling_4.PNG?rlkey=5nkwh8t8smfhczry13ob1iysk&st=4bzn2ykb&dl=0', alt: 'Construction robot overview' }
        ]
      },
  ];
  