import express from "express";
import { products } from "./deta.js";

const app = express();

// Get all products
app.get("/api/products", (req, res) => {

    let sortedProducts = products.map(({ description, reviews, ...rest }) => rest);

    res.status(200).json({
        count: sortedProducts.length,
        data: sortedProducts
    });

});

// Get details of a particular product
app.get("/api/products/:pid", (req, res) => {

    const { pid } = req.params;

    const item = products.find((p) => p.id === Number(pid));

    if (!item) {
        return res.status(404).json({
            msg: `Product with id ${pid} not found`
        });
    }

    res.status(200).json({
        msg: "Product found",
        data: item
    });

});

// 404 middleware (must be at the end)
app.use((req, res) => {
    res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(4444, () => {
    console.log("PRG4 is running at port 4444");
});