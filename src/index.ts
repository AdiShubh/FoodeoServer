import express from "express";
import path from "path";
import cors from "cors";
import Razorpay from 'razorpay';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const foodData = [
    {
        id: "1",
        name: "Spaghetti",
        price: 10,
        ratings: 5,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "https://res.cloudinary.com/myblogs/image/upload/v1710267840/spaghetti_tt200l.png",
        type: "breakfast",
    },
    {
        id: "2",
        name: "Gnochhi",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "https://res.cloudinary.com/myblogs/image/upload/v1710267839/Gnocchi_vqsonm.png",
        type: "lunch",
        ratings: 5,
    },
    {
        id: "3",
        name: "Splitz Signature",
        price: 45,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "https://res.cloudinary.com/myblogs/image/upload/v1710267840/splitzSignature_jyfygc.png",
        type: "dinner",
        ratings: 5,
    },
    {
        id: "4",
        name: "Rovioli",
        price: 18,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "https://res.cloudinary.com/myblogs/image/upload/v1710267839/rovioli_yec7mz.png",
        type: "breakfast",
        ratings: 5,
    },
    {
        id: "5",
        name: "Risoto",
        price: 23,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "https://res.cloudinary.com/myblogs/image/upload/v1710267840/risoto_rp6pap.png",
        type: "lunch",
        ratings: 5,
    },
    {
        id: "6",
        name: "Penne Alla Vodak",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "https://res.cloudinary.com/myblogs/image/upload/v1710267839/penneAllaVodak_cfujvh.png",
        type: "dinner",
        ratings: 5,
    },
    {
        id: "7",
        name: "Penne Alla Vodak",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "https://res.cloudinary.com/myblogs/image/upload/v1710267839/penneAllaVodak_cfujvh.png",
        type: "dinner",
        ratings: 5,
    },
    {
        id: "8",
        name: "Penne Alla Vodak",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "https://res.cloudinary.com/myblogs/image/upload/v1710267839/penneAllaVodak_cfujvh.png",
        type: "drinks",
        ratings: 5,
    },
    {
        id: "9",
        name: "Penne Alla Vodak",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "https://res.cloudinary.com/myblogs/image/upload/v1710267839/penneAllaVodak_cfujvh.png",
        type: "dessert",
        ratings: 5,
    },

]

res.json(foodData);
});

const instance = new Razorpay({
    key_id: 'rzp_test_twbvrVkvl7ZYGz',
    key_secret: 'uWR6Bjsn8bGP3pzPujRVafxR'
})

app.get('/order',  (req, res)=>{
   res.send("success")
})


app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
