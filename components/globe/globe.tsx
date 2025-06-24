"use client";

import { useEffect, useRef } from "react";
import Globe from "globe.gl";
import * as THREE from "three";

type Location = {
  name: string;
  lat: number;
  lng: number;
};

const GlobeVisualizer = () => {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const ARC_DASH_ANIMATE_TIME = 3000;
    const BASE_ANIMATION_DELAY = 1000;
    const STAGGER_DELAY_BETWEEN_ARCS = 1200;
    const ARC_VISIBLE_DURATION_AFTER_ANIMATION = 1500;

    const globe = Globe()
      .globeImageUrl("/images/earth-light-blue.png")
      .backgroundColor("rgba(0,0,0,0)")
      .showGraticules(false)
      .arcsData([])
      .arcColor((d) => d.color)
      .arcStroke(0.3)
      .arcAltitude(0.25)
      .arcDashLength(0.5)
      .arcDashGap(0.8)
      .arcDashAnimateTime(ARC_DASH_ANIMATE_TIME)
      .pointsData([])
      .pointColor((d) => d.color)
      .pointRadius(0.25)
      .pointAltitude(0.01)
      .ringsData([])
      .ringColor((d) => d.color)
      .ringAltitude(0.0015)
      .ringMaxRadius(2)
      .ringPropagationSpeed(1.5)
      .ringRepeatPeriod(0);

    globe(globeRef.current);

    // Add lighting to improve top visibility
    const scene = globe.scene();
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(0, 1, 1); // Above and slightly forward
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Camera setup
    const camera = globe.camera();
    camera.zoom = 2;
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.4;
    globe.controls().enableZoom = false;
    camera.updateProjectionMatrix();

    // Adjust globe position to show top better
    globe.pointOfView({ lat: 15, lng: 0, altitude: 1.8 });

    const locations: Location[] = [
      { name: "Mumbai", lat: 19.076, lng: 72.8777 },
      { name: "New York", lat: 40.7128, lng: -74.006 },
      { name: "Tokyo", lat: 35.6895, lng: 139.6917 },
      { name: "London", lat: 51.5074, lng: -0.1278 },
      { name: "Sydney", lat: -33.8688, lng: 151.2093 },
      { name: "Moscow", lat: 55.7558, lng: 37.6173 },
      { name: "Singapore", lat: 1.3521, lng: 103.8198 },
      { name: "São Paulo", lat: -23.5505, lng: -46.6333 },
      { name: "Los Angeles", lat: 34.0522, lng: -118.2437 },
      { name: "Paris", lat: 48.8566, lng: 2.3522 },
      { name: "Beijing", lat: 39.9042, lng: 116.4074 },
      { name: "Cairo", lat: 30.0444, lng: 31.2357 },
      { name: "Buenos Aires", lat: -34.6037, lng: -58.3816 },
      { name: "Mexico City", lat: 19.4326, lng: -99.1332 },
      { name: "Johannesburg", lat: -26.2041, lng: 28.0473 },
    ];

    const generatedArcs: any[] = [];
    const routeCount = 10;

    for (let i = 0; i < routeCount; i++) {
      let from: Location, to: Location;
      do {
        from = locations[Math.floor(Math.random() * locations.length)];
        to = locations[Math.floor(Math.random() * locations.length)];
      } while (
        from === to ||
        generatedArcs.find(
          (a) =>
            a.startLat === from.lat &&
            a.startLng === from.lng &&
            a.endLat === to.lat &&
            a.endLng === to.lng
        )
      );

      generatedArcs.push({
        defId: `def-${from.name}-${to.name}-${i}`,
        startLat: from.lat,
        startLng: from.lng,
        endLat: to.lat,
        endLng: to.lng,
        color: `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`,
        fromName: from.name,
        toName: to.name,
      });
    }

    let currentVisibleArcs: any[] = [];
    let currentPoints: any[] = [];
    let currentRings: any[] = [];

    const triggerRing = (lat: number, lng: number, color: string) => {
      const ringId = `ring-${Date.now()}-${Math.random()}`;
      const ring = {
        id: ringId,
        lat,
        lng,
        color,
        maxRadius: globe.ringMaxRadius(),
        propagationSpeed: globe.ringPropagationSpeed(),
        repeatPeriod: globe.ringRepeatPeriod(),
      };
      currentRings.push(ring);
      globe.ringsData([...currentRings]);

      const ringDuration =
        (ring.maxRadius / ring.propagationSpeed) * 1000 + 500;
      setTimeout(() => {
        currentRings = currentRings.filter((r) => r.id !== ringId);
        globe.ringsData([...currentRings]);
      }, ringDuration);
    };

    const triggerPoint = (lat: number, lng: number, color: string) => {
      const pointId = `point-${Date.now()}-${Math.random()}`;
      const point = { id: pointId, lat, lng, color };
      currentPoints.push(point);
      globe.pointsData([...currentPoints]);

      setTimeout(() => {
        currentPoints = currentPoints.filter((p) => p.id !== pointId);
        globe.pointsData([...currentPoints]);
      }, ARC_DASH_ANIMATE_TIME + 1000);
    };

    const animateArcSequence = () => {
      currentPoints = [];
      currentRings = [];
      globe.pointsData([]);
      globe.ringsData([]);

      generatedArcs.forEach((arcDefinition, i) => {
        const eventTimeOffset = i * STAGGER_DELAY_BETWEEN_ARCS;
        const arcEffectiveStartTime = BASE_ANIMATION_DELAY + eventTimeOffset;
        const arcInstanceId = `arc-inst-${arcDefinition.defId}-${Date.now()}`;
        const arcInstance = { ...arcDefinition, id: arcInstanceId };

        setTimeout(() => {
          currentVisibleArcs.push(arcInstance);
          globe.arcsData([...currentVisibleArcs]);

          triggerRing(
            arcInstance.startLat,
            arcInstance.startLng,
            arcInstance.color
          );
          triggerPoint(
            arcInstance.startLat,
            arcInstance.startLng,
            arcInstance.color
          );
        }, arcEffectiveStartTime);

        setTimeout(() => {
          triggerRing(
            arcInstance.endLat,
            arcInstance.endLng,
            arcInstance.color
          );
          triggerPoint(
            arcInstance.endLat,
            arcInstance.endLng,
            arcInstance.color
          );
        }, arcEffectiveStartTime + ARC_DASH_ANIMATE_TIME);

        const arcDisappearTime =
          arcEffectiveStartTime +
          ARC_DASH_ANIMATE_TIME +
          ARC_VISIBLE_DURATION_AFTER_ANIMATION;

        setTimeout(() => {
          currentVisibleArcs = currentVisibleArcs.filter(
            (a) => a.id !== arcInstanceId
          );
          globe.arcsData([...currentVisibleArcs]);
        }, arcDisappearTime);
      });

      const totalDuration =
        BASE_ANIMATION_DELAY +
        generatedArcs.length * STAGGER_DELAY_BETWEEN_ARCS +
        ARC_DASH_ANIMATE_TIME +
        ARC_VISIBLE_DURATION_AFTER_ANIMATION;

      setTimeout(animateArcSequence, totalDuration);
    };

    animateArcSequence();

    return () => {
      globe._destructor?.();
    };
  }, []);

  return (
    <div
      id="globeViz"
      ref={globeRef}
      className="w-full h-full bg-gradient-to-br from-white via-blue-50 to-blue-100 "
    />
  );
};

export default GlobeVisualizer;
