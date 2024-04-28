"use client";

import React, { useCallback, useState } from "react";

import CustomInput from "../common/CustomInput";
import Modal from "@repo/ui/modal";

const SignInModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    // close signIn Open Signup
  }, [isLoading]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      //  write signinLogic
    } catch (error) {
      //   show error logic
    } finally {
      setIsLoading(false);
    }
  }, []);

  const bodyContent = (
    <div className="flex flex-col gap-2">
      <CustomInput
        placehoder={"Email"}
        type={"email"}
        value={email}
        disabled={isLoading}
        onChange={(e) => setEmail(e.target.value)}
      />
      <CustomInput
        placehoder={"Password"}
        type={"password"}
        value={password}
        disabled={isLoading}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );

  const footerContent = (
    <div className="text-center mt-4">
      <p>
        New User ?
        <span
          onClick={onToggle}
          className="text-red-500 font-semibold cursor-pointer hover:underline"
        >
          {" "}
          Sign Up
        </span>
      </p>
    </div>
  );

  return (
    <div>
      <Modal
        isOpen={false}
        onClose={() => {}}
        onSubmit={onSubmit}
        title={"Sign In"}
        body={bodyContent}
        footer={footerContent}
        actionLabel={"SignIn"}
        disabled={isLoading}
      />
    </div>
  );
};

export default SignInModal;
