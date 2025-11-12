import { defineBackend } from "@aws-amplify/backend";
import { storage } from "./storage/resource.js";

defineBackend({
  storage
});
