import { getLocalStorageProperty } from "../../src/utils/getLocalStorageProperty";
import axios, { AxiosInstance } from "axios";

type Headers = {
  [key: string]: string;
};

class AxiosDomain {
  private baseURL = "";
  private headers: Headers = {};
  private withCredentials = false;

  constructor(baseURL: string, headers: Headers, withCredentials: boolean) {
    this.baseURL = baseURL;
    this.headers = headers;
    this.withCredentials = withCredentials;
  };

  initInstance(): AxiosInstance {
    return axios.create({
      baseURL: this.baseURL,
      headers: this.headers,
      withCredentials: this.withCredentials
    });
  };
};

export class AxiosBuilder {
  private baseURL = "";
  private headers: Headers = {};
  private withCredentials = false;
  private token = getLocalStorageProperty("user", "token");

  static build(): AxiosBuilder {
    return new AxiosBuilder();
  };

  toDomain(): AxiosDomain {
    return new AxiosDomain(this.baseURL, this.headers, this.withCredentials);
  };

  withUrl(url: string) {
    this.baseURL = url;
    return this;
  };

  withDefaultHeader() {
    this.headers = {
      "content-type": "application/json",
      "Authorization": `Bearer ${this.token}`,
    };
    return this;
  };

  withHeaders(headers: Headers) {
    this.headers = headers;
    return this;
  };

  haveCredentials() {
    this.withCredentials = true;
    return this;
  };
};
