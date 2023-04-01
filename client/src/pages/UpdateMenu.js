import React from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";

const Reviews = () => {
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(name, message);
        setTitle("");
        setDesc("");
        setPrice("");
    };
    return (
        <div className="review">
            <h3>Please Review our food</h3>
            <form onSubmit={handleSubmit} className="review-form">
                <TextField
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type={"text"}
                    placeholder="Title"
                    sx={{ margin: 3 }}
                />
                <TextField
                    value={description}
                    onChange={(e) => setDesc(e.target.value)}
                    type={"text"}
                    multiline
                    rows={5}
                    placeholder="Description"
                    sx={{ margin: 3 }}
                />
                <TextField
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type={"text"}
                    multiline
                    rows={5}
                    placeholder="Price"
                    sx={{ margin: 3 }}
                />
                <Button type="submit" variant="contained">
                    submit
                </Button>
            </form>
        </div>
    );
};

export default Reviews;
