const {
  User,
  validateUserCreate,
  validateUserUpdate,
} = require("../models/User");
const bcrypt = require("bcryptjs");

async function getUsers() {
  return await User.where({ deleted_at: null }).select("-password");
}

async function getUser(id) {
  const user = await User.findOne({ _id: id, deleted_at: null }).select(
    "-password"
  );
  if (!user) throw new Error("user not found.");
  return user;
}

async function createUser(data) {
  const { error } = validateUserCreate(data);
  if (error) throw new Error(error);
  const userExists = await User.findOne({
    email: data.email,
    deleted_at: null,
  });
  if (userExists) throw new Error("e-mail already registered.");
  var query = {
    password: await bcrypt.hash(data.password, await bcrypt.genSalt()),
    created_at: Date.now(),
    updated_at: Date.now(),
    is_enabled: true,
  };
  return await User.create(Object.assign(data, query));
}

async function updateUser(id, data) {
  const { error } = validateUserUpdate(data);
  if (error) throw new Error(error);
  const user = await User.findOne({ _id: id, deleted_at: null });
  if (!user) throw new Error("user not found.");
  if (data.password) {
    data.password = await bcrypt.hash(data.password, await bcrypt.genSalt());
  }
  console.log(data);
  var query = Object.assign(data, { updated_at: Date.now() });
  return await User.findByIdAndUpdate(id, query, { new: true }).select(
    "-password"
  );
}

async function deleteUser(id) {
  const user = await User.findOne({ _id: id, deleted_at: null });
  if (!user) throw new Error("user not found.");
  const query = {
    is_enabled: false,
    updated_at: Date.now(),
    deleted_at: Date.now(),
  };
  return await User.findByIdAndUpdate(id, query, { new: true }).select(
    "-password"
  );
}

module.exports.getUsers = getUsers;
module.exports.getUser = getUser;
module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
