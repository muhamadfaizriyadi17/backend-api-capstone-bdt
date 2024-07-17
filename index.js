const express = require('express');
const cors = require('cors');
const app = express();
const usersRouter = require('./routes/usersRoutes');
const placeRoutes = require('./routes/placeRoutes');
const favoritesRouter = require('./routes/favoritesRoutes');
const userReviewRoutes = require('./routes/userReviewsRoutes');

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

app.use('/users', usersRouter);
app.use('/places', placeRoutes);
app.use('/favorites', favoritesRouter);
app.use('/reviews', userReviewRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
