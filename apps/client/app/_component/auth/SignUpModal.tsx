"use client";

import React, { useCallback, useState } from "react";

import CustomInput from "@repo/ui/customInput";
import Modal from "@repo/ui/modal";

const SignUpModal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    // close signUp Open SignIn
  }, [isLoading]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      //  write signUpLogic
    } catch (error) {
      //   show error logic
    } finally {
      setIsLoading(false);
    }
  }, []);

  const bodyContent = (
    <div className="flex flex-col gap-2">
      <CustomInput
        placehoder={"Name"}
        type={"text"}
        value={name}
        disabled={isLoading}
        onChange={(e) => setName(e.target.value)}
      />
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
      <CustomInput
        placehoder={"Confirm Password"}
        type={"password"}
        value={confirmPassword}
        disabled={isLoading}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
    </div>
  );

  const footerContent = (
    <div className="text-center mt-4">
      <p>
        Existing User ?
        <span
          onClick={onToggle}
          className="text-red-500 font-semibold cursor-pointer hover:underline"
        >
          {" "}
          Sign In
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
        title={"Sign Up"}
        body={bodyContent}
        footer={footerContent}
        actionLabel={"Register"}
        disabled={isLoading}
      />
    </div>
  );
};

export default SignUpModal;
