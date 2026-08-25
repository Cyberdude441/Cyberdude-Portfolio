import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const CyberGlobe3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Dimensions
    const width = currentMount.clientWidth || 500;
    const height = currentMount.clientHeight || 500;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Group to hold all 3D cyber objects
    const cyberGroup = new THREE.Group();
    scene.add(cyberGroup);

    // 1. Inner Core Wireframe (Icosahedron)
    const coreGeometry = new THREE.IcosahedronGeometry(1.6, 2);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    cyberGroup.add(coreMesh);

    // 2. Inner Solid Glow Sphere with Cyber Dark Shield
    const shieldGeometry = new THREE.IcosahedronGeometry(1.3, 1);
    const shieldMaterial = new THREE.MeshBasicMaterial({
      color: 0x0a1628,
      wireframe: false,
      transparent: true,
      opacity: 0.85,
    });
    const shieldMesh = new THREE.Mesh(shieldGeometry, shieldMaterial);
    cyberGroup.add(shieldMesh);

    // 3. Surrounding Hologram Orbital Rings
    const ring1Geo = new THREE.TorusGeometry(2.4, 0.02, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.6 });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    cyberGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.6, 0.015, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.5 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    cyberGroup.add(ring2);

    const ring3Geo = new THREE.TorusGeometry(2.8, 0.012, 16, 100);
    const ring3Mat = new THREE.MeshBasicMaterial({ color: 0x00ff66, transparent: true, opacity: 0.4 });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.z = Math.PI / 4;
    cyberGroup.add(ring3);

    // 4. Point Cloud Particle Swarm
    const particleCount = 450;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00f0ff);
    const purpleColor = new THREE.Color(0xa855f7);
    const greenColor = new THREE.Color(0x00ff66);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const colorChoice = Math.random();
      const chosenColor = colorChoice > 0.6 ? cyanColor : (colorChoice > 0.3 ? purpleColor : greenColor);
      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const particlePoints = new THREE.Points(particleGeometry, particleMaterial);
    cyberGroup.add(particlePoints);

    // Mouse Interaction
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      const rect = currentMount.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.5;
      targetY = y * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Observer
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      cyberGroup.rotation.y = elapsedTime * 0.25 + mouseX;
      cyberGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.2 + mouseY;

      coreMesh.rotation.y = -elapsedTime * 0.35;
      coreMesh.rotation.z = elapsedTime * 0.2;

      ring1.rotation.z = elapsedTime * 0.4;
      ring2.rotation.x = -elapsedTime * 0.3;
      ring3.rotation.y = elapsedTime * 0.25;

      particlePoints.rotation.y = elapsedTime * 0.08;

      // Pulse core scale slightly
      const pulse = 1 + Math.sin(elapsedTime * 3) * 0.03;
      coreMesh.scale.set(pulse, pulse, pulse);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      shieldGeometry.dispose();
      shieldMaterial.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[550px] flex items-center justify-center">
      {/* 3D Canvas Mounting Node */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Cyber HUD Overlays & HUD Ring Guides */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {/* Outer Circular Targeting Scope */}
        <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-cyber-cyan/15 border-dashed animate-spin" style={{ animationDuration: '60s' }} />
        <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-cyber-purple/20 border-dotted animate-spin" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />
      </div>

      {/* HUD Telemetry Badges */}
      <div className="absolute top-4 left-4 pointer-events-none bg-cyber-dark/80 backdrop-blur-md border border-cyber-cyan/30 px-3 py-1.5 rounded text-[11px] font-mono text-cyber-cyan flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
        <span>CYBER_CORE // LIVE</span>
      </div>

      <div className="absolute bottom-4 right-4 pointer-events-none bg-cyber-dark/80 backdrop-blur-md border border-cyber-matrix/30 px-3 py-1.5 rounded text-[11px] font-mono text-cyber-matrix flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-cyber-matrix" />
        <span>NODES: 450 ACTIVE // 60 FPS</span>
      </div>

      <div className="absolute top-4 right-4 pointer-events-none bg-cyber-dark/80 backdrop-blur-md border border-cyber-purple/30 px-3 py-1.5 rounded text-[10px] font-mono text-cyber-purple">
        LAT: 20.2961° N // LNG: 85.8245° E
      </div>
    </div>
  );
};
