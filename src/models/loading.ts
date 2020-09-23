import { RequestUrls, RequestMethods } from "@/constants";
import { Model } from "@/action/model";

type InitialState = {
  loadingKeys: string[];
};

export class Loading extends Model<InitialState> {
  constructor() {
    super("loading", { loadingKeys: [] });
  }

  methods = {
    login: (data: any) => super.init(RequestMethods.POST, RequestUrls.login, data),
  };
}