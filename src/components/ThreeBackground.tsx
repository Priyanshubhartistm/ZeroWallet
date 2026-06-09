import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Scene Setup ──────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x05010f, 12, 38);
    scene.background = new THREE.Color(0x05010f);

    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 6, 14);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // ── Lights ────────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0x9945ff, 2, 25);
    purpleLight.position.set(0, 8, 0);
    scene.add(purpleLight);

    const greenLight = new THREE.PointLight(0x14f195, 1.5, 20);
    greenLight.position.set(4, 5, -4);
    scene.add(greenLight);

    const dirLight = new THREE.DirectionalLight(0x9945ff, 0.6);
    dirLight.position.set(5, 10, 5);
    scene.add(dirLight);

    // ── City Blocks ───────────────────────────────────────────
    const blocks: THREE.Mesh[] = [];
    const gridSize = 8;
    const spacing = 2.2;

    for (let x = -gridSize; x <= gridSize; x++) {
      for (let z = -gridSize; z <= gridSize; z++) {
        const height = Math.max(
          0.3,
          (Math.sin(x * 0.7) + Math.cos(z * 0.6) + 2) * 1.8
        );
        const isPurple = (x + z) % 3 === 0;
        const color = isPurple ? 0x3d1a8f : 0x1a0a40;

        const geo = new THREE.BoxGeometry(0.8, height, 0.8);
        const mat = new THREE.MeshStandardMaterial({
          color,
          emissive: new THREE.Color(color),
          emissiveIntensity: 0.1,
          roughness: 0.6,
          metalness: 0.4,
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x * spacing, height / 2 - 2, z * spacing);
        scene.add(mesh);
        blocks.push(mesh);
      }
    }

    // ── Floating Orbs ─────────────────────────────────────────
    const orbData = [
      { pos: [-2, 3, -3], color: 0x9945ff },
      { pos: [3, 2.5, -1], color: 0x14f195 },
      { pos: [0, 4, 2],   color: 0x9945ff },
      { pos: [-4, 3.5, 1], color: 0x14f195 },
      { pos: [5, 2, -4],  color: 0x9945ff },
      { pos: [-1, 5, -5], color: 0x14f195 },
    ];

    const orbs = orbData.map(({ pos, color }) => {
      const geo = new THREE.SphereGeometry(0.15, 16, 16);
      const mat = new THREE.MeshStandardMaterial({
        color,
        emissive: new THREE.Color(color),
        emissiveIntensity: 4,
        transparent: true,
        opacity: 0.85,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(pos[0], pos[1], pos[2]);
      scene.add(mesh);
      return { mesh, baseY: pos[1], baseX: pos[0] };
    });

    // ── Animation Loop ────────────────────────────────────────
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Slow camera drift
      camera.position.x = Math.sin(t * 0.08) * 2;
      camera.position.y = 6 + Math.sin(t * 0.05) * 0.5;
      camera.lookAt(0, 0, 0);

      // Float orbs
      orbs.forEach(({ mesh, baseY, baseX }) => {
        mesh.position.y = baseY + Math.sin(t * 0.5 + baseX) * 0.3;
      });

      // Subtle purple light pulse
      purpleLight.intensity = 1.5 + Math.sin(t * 1.2) * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    // ── Resize Handler ────────────────────────────────────────
    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // ── Cleanup ───────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div ref={mountRef} className="w-full h-full" />
      {/* Edge fades */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
    </div>
  );
}
