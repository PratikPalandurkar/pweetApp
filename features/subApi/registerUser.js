import { Api } from "../api/api";

const userApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (body) => ({
        url: "/api/user/create",
        method: "POST",
        body: body,
      }),
    }),

    //
  }),
});

export const { useRegisterUserMutation } = userApi;
