import React from "react";
import { useLocation } from "react-router-dom";
import type { Place } from "../types/Place";

const PlacesPage: React.FC = () => {
    const location = useLocation();
    const places = location.state as Place[];

    if (!places || places.length === 0) {
        return <p>Dont have any places to show</p>;
    }

    return (
        <div style={{ padding: "1rem" }}>
            <h2>List of Places</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {places.map((place, index) => (
                    <li
                        key={index}
                        style={{
                            padding: "1rem",
                            marginBottom: "1rem",
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            background: "#f9f9f9"
                        }}
                    >
                        <strong>{place.name}</strong> ({place.type})<br />
                        <span>{place.address}</span>
                    </li>
                ))}
            </ul>
            <h2>Here supposed to be a map but time is over for me, sorry</h2>
        </div>
    );
};

export default PlacesPage;
