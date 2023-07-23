import axios from "axios";

const BASE_URL = "https://sharebnb-f627c1c8705c.herokuapp.com/";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class ShareBnBApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(
    endpoint,
    data = {},
    method = "get",
    contentType = "application/json"
  ) {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = {
      Authorization: `Bearer ${ShareBnBApi.token}`,
      "Content-Type": contentType,
    };
    const params = method === "get" ? data : {};

    try {
      return await axios({ url, method, data, params, headers });
    } catch (err) {
      console.error("API Error:", err);
      if (err.response.data.msg) {
        let msg = err.response.data.msg;
        throw Array.isArray(msg) ? msg : [msg];
      }
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get the current user. */

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.data.user;
  }

  /** Get listings (filtered by name if not undefined) */
  //TODO: add filtering route in backend

  static async getListings(name) {
    let res = await this.request("listings", { q: name });
    return res.data.listings;
  }

  /** Get details on a listing by id. */

  static async getListing(id) {
    let res = await this.request(`listings/${id}`);
    console.log("RESPONSE FOR A LISTING", res)
    return res.data.listing;
  }

  /** Post a listing. */

  static async postListing(formData) {
    const headerType = "multipart/form-data";

    const form = new FormData();
    form.append("title", formData.title);
    form.append("details", formData.details);
    form.append("street", formData.street);
    form.append("city", formData.city);
    form.append("state", formData.state);
    form.append("zip", formData.zip);
    form.append("country", formData.country);
    form.append("price_per_night", formData.price_per_night);
    form.append("image", formData.image);
    form.append("username", formData.username);

    let res = await this.request(`listings`, form, "post", headerType);
    return res.data.listing;
  }

  /** Get token for login from username, password. */

  static async login(data) {
    const res = await this.request(`auth/login`, data, "post");
    return res.data.token;
  }

  /** Signup for site. */

  static async signup(data) {
    const res = await this.request(`auth/signup`, data, "post");
    return res.data.token;
  }

  /** Save user profile page. */

  static async updateProfile(data, username) {
    const res = await this.request(`users/${username}`, data, "patch");
    return res.data.user;
  }

  static async messageListing(data) {
    const res = await this.request(`messages`, data, "post");
    return res.data.user;
  }

  static async bookProperty(data) {
    const res = await this.request(`bookings`, data, "post");
    return res.data.user;
  }

  static async deleteListing(listingId) {
    const res = await this.request(`listings/${listingId}`, {} ,"delete");
    return res.data.message;
  }
}

export default ShareBnBApi;
