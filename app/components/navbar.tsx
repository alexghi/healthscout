"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { stepsConfig, Step } from "./stepsConfig";
import IconCheckmark from "../assets/icons/IconCheckmark";
import IconCompletedLine from "../assets/icons/IconCompletedLine";
import IconIncompleteLine from "../assets/icons/IconIncompleteLine";
import Logo from "../assets/Logo";
import IconSquares from "../assets/icons/IconSquares";
import avatar from '../assets/avatar-placeholder.png';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const isProcessPage = stepsConfig.some(
    (step: Step) => step.path === pathname
  );

  const currentStepIndex = stepsConfig.findIndex(
    (step: Step) => step.path === pathname
  );

  return (
    <nav className="flex justify-between items-center w-full bg-inherit px-7 md:px-14 lg:px-28 py-3 mt-6 fixed">
      <div className="flex items-center">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      {isProcessPage && (
        <div className="flex items-center space-x-4">
          {stepsConfig.map((step: Step, index: number) => (
            <div key={step.label} className="flex items-center space-x-2">
              <div
                className={`flex items-center ps-1 pe-3 py-1 rounded-full text-xs font-bold ${
                  index < currentStepIndex
                    ? "bg-[#D1FAE5] text-[#10B981]"
                    : index === currentStepIndex
                    ? "bg-[#DBEAFE] text-[#334155]"
                    : "bg-[#F8FAFC] text-[#64748B]"
                }`}
              >
                <span>
                  {index < currentStepIndex ? (
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#10B981]">
                      <IconCheckmark />
                    </span>
                  ) : index === currentStepIndex ? (
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#3B82F6] text-white">
                      {index + 1}
                    </span>
                  ) : (
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-[#94A3B8] border border-[#E2E8F0]">
                      {index + 1}
                    </span>
                  )}
                </span>
                <span className="ml-2">{step.label}</span>
              </div>
              {index < stepsConfig.length - 1 &&
                (index < currentStepIndex ? (
                  <IconCompletedLine />
                ) : (
                  <IconIncompleteLine />
                ))}
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center space-x-4">
        <button className="">
          <IconSquares />
        </button>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src={avatar.src}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
