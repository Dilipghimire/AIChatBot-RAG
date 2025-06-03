import { useMutation } from "@tanstack/react-query";

type UserLogin = {
  username: string;
  password: string;
};

type UserRegister = {
  username: string;
  email: string;
  password: string;
};

export const userLogin = () => {
  return useMutation({
    mutationFn: async ({ username, password }: UserLogin) => {
      const response = await fetch("https://rag-be-python.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "allow": "*"
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to user credentials");
      }

      return response.json();
    },
  });
};

export const userRegister = () => {
  return useMutation({
    mutationFn: async ({ username, email, password }: UserRegister) => {
      console.log('createUser', username, email, password)

      const response = await fetch(
        "https://rag-be-python.vercel.app/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to user credentials");
      }

      return response.ok;
    },
  });
};
