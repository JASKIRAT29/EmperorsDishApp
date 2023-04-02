import React from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from '@apollo/client';

import { GET_REVIEWS } from '../utils/queries';
import { CREATE_REVIEW } from '../utils/mutations';

const Reviews = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const { loading, error, data } = useQuery(GET_REVIEWS);
    const reviews = data?.reviews || [];

    if (loading) return <p>Loading...</p>;
    if (error) console.log(error);//return <p>Error</p>;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, message);
        setMessage("");
        setName("");
    };

    return (
        <div className="review">
            <h3>Please Review our food</h3>
            <form onSubmit={handleSubmit} className="review-form">
                <TextField
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type={"text"}
                    placeholder="Name"
                    sx={{ margin: 3 }}
                />
                <TextField
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type={"text"}
                    multiline
                    rows={5}
                    placeholder="Review message"
                    sx={{ margin: 3 }}
                />
                <Button type="submit" variant="contained">
                    submit
                </Button>
            </form>
            <div className="reviews">
                {reviews.map((review) => (
                <div key={review.id}>
                    <h4>{review.name}</h4>
                    <p>{review.comment}</p>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
