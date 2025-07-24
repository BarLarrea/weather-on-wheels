import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { PlaceType, Place } from "../../types/Place";
import "./CreatePage.css";

const places: Place[] = [];

const CreatePage: React.FC = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState<PlaceType>("restaurant");
    const [address, setAddress] = useState("");
    const [isCreating, setIsCreating] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (name.length > 25) {
            alert("Name must be 25 characters or less.");
            return;
        }

        setIsCreating(true);
        setSuccessMessage("");

        const newPlace: Place = {
            name,
            type,
            address
        };

        setTimeout(() => {
            places.push(newPlace);
            setIsCreating(false);
            setSuccessMessage("Place created ssuccessfully!!!!!!!!");
            setName("");
            setType("restaurant");
            setAddress("");

            setTimeout(() => {
                setSuccessMessage("");
            }, 2500);
        }, 1000);
    };

    const handleNavigate = () => {
        navigate("/place-view", { state: places });
    };

    return (
        <div className='create-place-container'>
            <h1>Create a Place</h1>
            <form
                onSubmit={handleSubmit}
                className='create-place-form'
            >
                <div>
                    <label>Name (max 25 chars):</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        maxLength={25}
                        required
                        disabled={isCreating}
                    />
                </div>

                <div>
                    <label>Type:</label>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value as PlaceType)}
                        required
                        disabled={isCreating}
                    >
                        <option value='restaurant'>Restaurant</option>
                        <option value='park'>Park</option>
                        <option value='hotel'>Hotel</option>
                    </select>
                </div>

                <div>
                    <label>Address:</label>
                    <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        disabled={isCreating}
                    />
                </div>

                <button
                    type='submit'
                    disabled={isCreating}
                >
                    {isCreating
                        ? "Creating your plac..."
                        : "Create a new place"}
                </button>

                <button
                    type='button'
                    onClick={handleNavigate}
                    disabled={isCreating}
                >
                    Go to places page
                </button>

                {successMessage && (
                    <p style={{ color: "green", marginTop: "1rem" }}>
                        {successMessage}
                    </p>
                )}
            </form>
        </div>
    );
};

export default CreatePage;
