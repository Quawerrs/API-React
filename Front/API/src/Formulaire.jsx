
import React, { useState } from 'react';

const Formulaire = () => {
    const [formData, setFormData] = useState({
        id: '',
        theme: '',
        question: '',
        reponse: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        fetch('http://localhost:5000/add', {
            method: POST,
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then(response=>console.log(response))

    };

    

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}>
            <label htmlFor="id">ID :</label>
            <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} />

            <label htmlFor="theme">Thème :</label>
            <input type="text" id="theme" name="theme" value={formData.theme} onChange={handleChange} />

            <label htmlFor="question">Question :</label>
            <input type="text" id="question" name="question" value={formData.question} onChange={handleChange} />

            <label htmlFor="reponse">Réponse :</label>
            <input type="text" id="reponse" name="reponse" value={formData.reponse} onChange={handleChange} />

            <button type="submit">Envoyer</button>
        </form>
    );
};

export default Formulaire;