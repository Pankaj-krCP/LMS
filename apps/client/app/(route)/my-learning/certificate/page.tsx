"use client";

import React from "react";
import { MdCloudDownload } from "react-icons/md";
import { underlineBlueCSS } from "../../../_utils/constant";

const Certificate = () => {
  const certificates = [
    {
      id: 1,
      issuedDate: "May 10, 2022",
      certificateID: "CS123456",
      courses: ["MERN Stack", "React Native"],
    },
    {
      id: 2,
      issuedDate: "June 15, 2022",
      certificateID: "CS789012",
      courses: ["Node.js", "Express"],
    },
  ];

  const handleDownload = (certificateId: number) => {
    console.log("certificateid", certificateId);
  };

  return (
    <div className="p-4">
      <h1 className={`${underlineBlueCSS} text-2xl font-bold mb-4`}>
        Certificates
      </h1>
      {certificates.map((certificate) => (
        <div
          key={certificate.id}
          className="bg-white dark:bg-slate-800 p-4 shadow-xl rounded-lg mb-4"
        >
          <div className="flex items-center">
            <div className="w-1/2">
              <h2 className={`text-lg font-semibold mb-2`}>
                CodingSync Platform Certificate
              </h2>
              <p className="text-gray-400">
                This is to certify that Pankaj Kumar has successfully completed
                the following courses:
              </p>
              <ul className="list-disc list-inside text-gray-400">
                {certificate.courses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
              <p className="text-gray-400">
                Issued on: {certificate.issuedDate}
              </p>
              <p className="text-gray-400">
                Certificate ID: {certificate.certificateID}
              </p>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <div className="w-72 h-52 border dark:border-gray-600 bg-gray-200 rounded-lg flex flex-col justify-center items-center">
                <p className="text-gray-600">Your Certificate</p>
                <div className="flex justify-center items-center mt-4">
                  <button
                    className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                    onClick={() => handleDownload(certificate.id)}
                  >
                    <MdCloudDownload className="mr-2" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificate;
