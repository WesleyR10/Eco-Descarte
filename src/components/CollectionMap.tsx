"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { collectionPoints } from "@/data/collection-points";

const typeConfig: Record<string, { color: string; emoji: string; label: string }> = {
  prefeitura: { color: "#3b82f6", emoji: "🏛️", label: "Órgão Público" },
  cooperativa: { color: "#f59e0b", emoji: "🤝", label: "Cooperativa" },
  empresa: { color: "#10b981", emoji: "🏭", label: "Empresa de Reciclagem" },
  loja: { color: "#a855f7", emoji: "🛒", label: "Loja / Varejo" },
  ong: { color: "#f43f5e", emoji: "♻️", label: "Programa Nacional" },
  user: { color: "#ef4444", emoji: "🏠", label: "Sua Localização" },
};

function createIcon(type: string) {
  const config = typeConfig[type] || typeConfig.empresa;
  const size = type === "user" ? 38 : 32;
  return L.divIcon({
    className: "",
    html: `<div style="
      font-size: ${size * 0.55}px;
      width: ${size}px;
      height: ${size}px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${config.color};
      border: 2.5px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 10px rgba(0,0,0,0.3);
      cursor: pointer;
      ${type === "user" ? "animation: userPulse 2s infinite;" : ""}
    ">${config.emoji}</div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
  });
}

function calcDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function formatDistance(km: number): string {
  return km < 1 ? `${Math.round(km * 1000)}m` : `${km.toFixed(1)} km`;
}

function FlyToUser({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo([lat, lng], 12, { duration: 1.5 });
  }, [map, lat, lng]);
  return null;
}

interface CollectionMapProps {
  onUserLocation?: (pos: { lat: number; lng: number }) => void;
}

export default function CollectionMap({ onUserLocation }: CollectionMapProps) {
  const [userPos, setUserPos] = useState<{ lat: number; lng: number } | null>(null);
  const [geoStatus, setGeoStatus] = useState<"loading" | "granted" | "denied">("loading");

  useEffect(() => {
    if (!navigator.geolocation) {
      setGeoStatus("denied");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setUserPos(loc);
        setGeoStatus("granted");
        onUserLocation?.(loc);
      },
      () => setGeoStatus("denied"),
      { enableHighAccuracy: true, timeout: 8000 }
    );
  }, [onUserLocation]);

  const sortedPoints = userPos
    ? [...collectionPoints].sort(
      (a, b) =>
        calcDistance(userPos.lat, userPos.lng, a.lat, a.lng) -
        calcDistance(userPos.lat, userPos.lng, b.lat, b.lng)
    )
    : collectionPoints;

  return (
    <div>
      <style jsx global>{`
        @keyframes userPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(239,68,68,0.4); }
          50% { box-shadow: 0 0 0 14px rgba(239,68,68,0); }
        }
        .leaflet-container { border-radius: 1rem; }
        .leaflet-popup-content-wrapper {
          border-radius: 12px !important;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15) !important;
        }
      `}</style>

      {/* Status */}
      {geoStatus === "loading" && (
        <div className="mb-4 p-3 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center gap-2 text-sm">
          <span className="w-4 h-4 border-2 border-primary-400 border-t-transparent rounded-full animate-spin" />
          <span className="text-primary-400">Obtendo sua localização para mostrar pontos próximos...</span>
        </div>
      )}
      {geoStatus === "denied" && (
        <div className="mb-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-sm text-amber-400">
          ⚠️ Localização não disponível. Mostrando pontos a partir do bairro Novo Retiro, Esmeraldas/MG.
        </div>
      )}
      {geoStatus === "granted" && userPos && (
        <div className="mb-4 p-3 rounded-xl bg-primary-500/10 border border-primary-500/20 text-sm text-primary-400 font-medium">
          ✅ Localização obtida! Mostrando {sortedPoints.length} pontos ordenados por proximidade.
        </div>
      )}

      <MapContainer
        center={userPos ? [userPos.lat, userPos.lng] : [-19.76, -44.31]}
        zoom={11}
        scrollWheelZoom={false}
        style={{ height: "420px", width: "100%", borderRadius: "1rem" }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {userPos && (
          <>
            <FlyToUser lat={userPos.lat} lng={userPos.lng} />
            <Marker position={[userPos.lat, userPos.lng]} icon={createIcon("user")}>
              <Popup><strong>🏠 Você está aqui</strong></Popup>
            </Marker>
          </>
        )}

        {sortedPoints.map((point) => {
          const dist = userPos
            ? calcDistance(userPos.lat, userPos.lng, point.lat, point.lng)
            : null;
          const config = typeConfig[point.type] || typeConfig.empresa;
          return (
            <Marker key={point.id} position={[point.lat, point.lng]} icon={createIcon(point.type)}>
              <Popup>
                <div style={{ minWidth: "230px", lineHeight: "1.5" }}>
                  <span style={{
                    background: config.color,
                    color: "white",
                    padding: "2px 10px",
                    borderRadius: "12px",
                    fontSize: "10px",
                    fontWeight: "600",
                  }}>
                    {config.emoji} {config.label}
                  </span>
                  <div style={{ marginTop: "6px" }}>
                    <strong style={{ fontSize: "13px" }}>{point.name}</strong>
                  </div>
                  <div style={{ fontSize: "11px", color: "#666", marginTop: "2px" }}>{point.address}</div>
                  {point.phone && (
                    <div style={{ fontSize: "11px", marginTop: "2px" }}>📞 {point.phone}</div>
                  )}
                  {point.hours && (
                    <div style={{ fontSize: "11px", marginTop: "2px" }}>🕐 {point.hours}</div>
                  )}
                  {dist !== null && (
                    <div style={{ fontSize: "12px", color: "#10b981", fontWeight: "700", marginTop: "6px" }}>
                      📏 {formatDistance(dist)} de você
                    </div>
                  )}
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${point.lat},${point.lng}${userPos ? `&origin=${userPos.lat},${userPos.lng}` : ""}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: "8px",
                      background: "#10b981",
                      color: "white",
                      padding: "6px 14px",
                      borderRadius: "8px",
                      fontSize: "12px",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                  >
                    🗺️ Ir Agora — Rota no Maps
                  </a>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mt-4">
        {Object.entries(typeConfig).map(([key, config]) => (
          <div key={key} className="flex items-center gap-1.5 text-xs text-dark-300">
            <span
              style={{ background: config.color }}
              className="w-3.5 h-3.5 rounded-full inline-block border-2 border-white shadow-sm"
            />
            {config.emoji} {config.label}
          </div>
        ))}
      </div>
    </div>
  );
}
