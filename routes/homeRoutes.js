import express from "express";
import * as HomeController from "@/controllers/HomeControllers";
import { RefreshToken } from "../middlewares/authenToken";

let route = express.Router();

route.get("/Appchat", RefreshToken, HomeController.home);
route.get("/insertReact", RefreshToken, HomeController.insertReact);
route.get("/request-friend", RefreshToken, HomeController.requestFriend);
route.get("/confirm-friend", RefreshToken, HomeController.confirmFriend);
route.get("/unfriend", RefreshToken, HomeController.unFriend);
route.delete("/delete-session", RefreshToken, HomeController.deleteSession);
route.get("/update-contact", RefreshToken, HomeController.updateContact);
route.post("/update-privacy", RefreshToken, HomeController.updatePrivacy);
route.get("/search-contact", RefreshToken, HomeController.searchContact);
route.get("/search-contact", RefreshToken, HomeController.searchContact);
route.get("/info-user", RefreshToken, HomeController.infoUser);

export default route;
