import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Hero() {
  const [address, setAddress] = useState("");

  const tableData = [
    { property: "Network name", value: "Inco Network" },
    { property: "New RPC URL", value: "https://testnet.inco.org/ "},
    { property: "Chain ID", value: "9090" },
    { property: "Currency symbol", value: "Inco" },
    { property: "Block explorer URL", value: "https://explorer.inco.network/" },
  ];

  const [copiedValue, setCopiedValue] = useState(null);

  const handleCellClick = (value: any) => {
    navigator.clipboard.writeText(value);
    setCopiedValue(value);
  };

  const getTokens = async () => {
    await handlePostRequest();
  };

  const handlePostRequest = async () => {
    try {
      const response = await axios.post(
        "https://faucet.testnet.inco.org/api/get-faucet",
        {
          address: address,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle the response
      console.log("Response:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
  };

  return (
    <>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          {/* Illustration behind hero content */}
          <div
            className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none"
            aria-hidden="true"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Your SVG code */}
          </div>

          <div className="relative pt-32 pb-5 md:pt-40 md:pb-16">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 mb-4" data-aos="fade-up">
                Inco Test Faucet
              </h1>
              <p
                className="text-xl text-gray-400 mb-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                This will give you 0.5 inco faucet. Just put your address below
                or connect wallet ↗
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="fade-up">
                <form className="w-full">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                    <input
                      type="text"
                      className="w-3/4 appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-purple-400"
                      placeholder="Your Wallet Address"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                    <a
                      className="btn text-purple-600 bg-purple-100 hover:bg-white shadow"
                      href="#0"
                      onClick={getTokens}
                    >
                      Get Tokens
                    </a>
                  </div>
                </form>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center pb-6">
            {address=="" ? null :
              <p
                className="text-xl text-gray-400 mb-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Check Your Balance at {"  "}
                <a
                  href={`https://explorer.testnet.inco.org/address/${address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-500"
                >
                  Explorer
                </a>
              </p>}
            </div>

            <div className="max-w-screen-md mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="h1 mb-4" data-aos="fade-up">Connect Metamask</h1>
              </div>
              <table className="table-auto w-full" data-aos="fade-up">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Property</th>
                    <th className="border px-4 py-2">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2" data-aos="fade-up">{row.property}</td>
                      <td
                        className="border px-4 py-2 cursor-pointer"
                        onClick={() => handleCellClick(row.value)}
                      >
                        <div className="flex items-center" data-aos="fade-up">
                          <span>{row.value}     🔖</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {copiedValue && (
                <p className="mt-4 p-2 bg-green-200 text-green-800 rounded">
                  Copied: {copiedValue}
                </p>
              )}
            </div>

            {/* Get Tokens using Git Commands */}
            {/*<section>
              <h2>Get Tokens using Git Commands</h2>

              <div>
                <h3>For Windows:</h3>
                <pre>{`
                  Invoke-WebRequest -Uri "https://faucet.testnet.inco.org/api/get-faucet" -Method Post -Headers @{"Content-Type"="application/json"} -Body '{"address": "address_here"}'`}
                </pre>
                <p>Replace "address_here" with your actual wallet address.</p>
              </div>

              <div>
                <h3>For macOS:</h3>
                <pre>{`
                  curl -X POST https://faucet.testnet.inco.org/api/get-faucet -H "Content-Type: application/json" -d '{"address": "Your Address"}'`}
                </pre>
                <p>Replace "Your Address" with your actual wallet address.</p>
              </div>
                    </section>*/}
          </div>
        </div>
      </section>
    </>
  );
}
