import React, { useState } from 'react';
import axios from 'axios';

const IncidentForm = () => {
    const [formData, setFormData] = useState({
        type: '',
        location: '',
        severity: 1,
        description: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/incidents/report', formData);
            alert(response.data.message);
        } catch (error) {
            console.error('Erreur lors de la soumission:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Type d'incident"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Localisation"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
            />
            <input
                type="number"
                placeholder="Gravité"
                value={formData.severity}
                onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                required
            />
            <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
            />
            <button type="submit">Soumettre</button>
        </form>
    );
};

export default IncidentForm;
