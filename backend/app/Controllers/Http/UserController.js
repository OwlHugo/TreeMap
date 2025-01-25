"use strict";

const User = use("App/Models/User");

class UserController {
  async create({ request, response }) {
    const data = request.only(["username", "email", "password"]);
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.error("Error creating user:", error);
      return response.status(500).send({ error: "Internal Server Error" });
    }
  }
}

module.exports = UserController;
