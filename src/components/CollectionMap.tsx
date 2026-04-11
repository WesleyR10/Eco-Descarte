"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ExternalLink } from "lucide-react";

interface MapPoint {
  name: string;
  address: string;
  lat: number;
  lng: number;
  type: string;
  phone?: string;
}

const points: MapPoint[] = [
  {
    name: "Prefeitura Municipal de Esmeraldas",
    address: "Praça Getúlio Vargas, 36 — Centro",
    lat: -19.7631,
    lng: -44.3142,
    type: "prefeitura",
    phone: "(31) 3623-1000",
  },
  {
    name: "Ecoponto SLU — Pampulha",
    address: "Av. Antônio Carlos, 7596 — Pampulha, BH",
    lat: -19.8694,
    lng: -43.9673,
    type: "prefeitura",
    phone: "(31) 3277-9380",
  },
  {
    name: "Cooperativa de Catadores de Esmeraldas",
    address: "Bairro Industrial — Esmeraldas",
    lat: -19.7580,
    lng: -44.3050,
    type: "cooperativa",
  },
  {
    name: "GM&C Reciclagem de Eletrônicos",
    address: "R. Vinte e Quatro, 50 — Contagem",
    lat: -19.9320,
    lng: -44.0538,
    type: "empresa",
    phone: "(31) 3391-7000",
  },
  {
    name: "Bairro Novo Retiro (Sua localização)",
    address: "Novo Retiro — Esmeraldas/MG",
    lat: -19.7450,
    lng: -44.3100,
    type: "home",
  },
];

const typeColors: Record<string, string> = {
  prefeitura: "#3b82f6",
  cooperativa: "#f59e0b",
  empresa: "#10b981",
  home: "#ef4444",
};

function createIcon(type: string) {
  const color = typeColors[type] || "#10b981";
  const isHome = type === "home";
  return L.divIcon({
    className: "custom-marker",
    html: `<div style="
      width: ${isHome ? "20px" : "14px"};
      height: ${isHome ? "20px" : "14px"};
      background: ${color};
      border: 3px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0,0,0,0.4);
      ${isHome ? "animation: pulse 2s infinite;" : ""}
    "></div>`,
    iconSize: [isHome ? 20 : 14, isHome ? 20 : 14],
    iconAnchor: [isHome ? 10 : 7, isHome ? 10 : 7],
  });
}

export default function CollectionMap() {
  return (
    <>
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.8; }
        }
        .leaflet-container {
          background: #0f172a !important;
          border-radius: 1rem;
        }
      `}</style>
      <MapContainer
        center={[-19.76, -44.31]}
        zoom={11}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%", borderRadius: "1rem" }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {points.map((point, i) => (
          <Marker key={i} position={[point.lat, point.lng]} icon={createIcon(point.type)}>
            <Popup>
              <div style={{ minWidth: "200px" }}>
                <strong style={{ fontSize: "14px" }}>{point.name}</strong>
                <br />
                <span style={{ fontSize: "12px", color: "#666" }}>{point.address}</span>
                {point.phone && (
                  <>
                    <br />
                    <span style={{ fontSize: "12px" }}>📞 {point.phone}</span>
                  </>
                )}
                {point.type !== "home" && (
                  <div style={{ marginTop: "8px" }}>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(point.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        background: "#10b981",
                        color: "white",
                        padding: "4px 12px",
                        borderRadius: "8px",
                        fontSize: "12px",
                        fontWeight: "600",
                        textDecoration: "none",
                      }}
                    >
                      Ir Agora ↗
                    </a>
                  </div>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
