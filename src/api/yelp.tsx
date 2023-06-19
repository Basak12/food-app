import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer NdA4wcG18w2D-K5m0yzikitPr-gcz-XeYTRAs1M6gg32jSwF-qPYbizKp0tTtYc4sx1UBrigfvlxxYTMBCXW-gQMrXj1bfPLqCtNg_w9HuwpPSF988q-I8F-7i-QZHYx'
    }
});