import express from "express";
const api = require("./api")
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

