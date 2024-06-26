import React, { useState } from "react";
import { April, Feb, March, May, Month } from "./common/Helper";
import { Profile } from "./common/SvgExport";
const MyWorks = () => {
  const [first, setfirst] = useState("Tab5");
  function ChangeTab(Tab) {
    setfirst(Tab);
  }
  return (
    <div className="bg-black py-5 ">
      <div className="container py-5 ">
        <div className="flex items-center justify-between">
          {" "}
          <h1 className="text-center font-bold text-white fs-24 ff_Poppins ">
            Work Sheet 2024
          </h1>
          <div>
            <p className="text-white font-bold flex items-center justify-between gap-3 ff_Poppins ">
              Sunil Verma 358{" "}
              <span className="cursor">
                {" "}
                <Profile />
              </span>
            </p>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-4 bg-white py-3">
            <h2 className="font-bold text-center ff_Poppins ">Work Month</h2>
            <div className="py-3 flex-col flex">
              <button
                onClick={() => ChangeTab("Tab1")}
                className={`${
                  first === "Tab1" ? "link-modify2" : ""
                } link-modify ff_Poppins font-medium fs-18`}
              >
                January
              </button>
              <button
                onClick={() => ChangeTab("Tab2")}
                className={`${
                  first === "Tab2" ? "link-modify2" : ""
                } link-modify ff_Poppins font-medium fs-18`}
              >
                February
              </button>
              <button
                onClick={() => ChangeTab("Tab3")}
                className={`${
                  first === "Tab3" ? " link-modify2" : ""
                } link-modify ff_Poppins font-medium fs-18`}
              >
                March
              </button>
              <button
                onClick={() => ChangeTab("Tab4")}
                className={`${
                  first === "Tab4" ? "link-modify2" : ""
                } link-modify  ff_Poppins font-medium fs-18`}
              >
                April
              </button>
              <button
                onClick={() => ChangeTab("Tab5")}
                className={`${
                  first === "Tab5" ? "link-modify2" : ""
                } link-modify ff_Poppins font-medium fs-18 `}
              >
                May
              </button>
            </div>
          </div>
          <div className="col-8 bg-gray py-5 min-h-600 overflow-scrollbar">
            {first === "Tab1" && (
              <div>
                <p className="text-white ff_Poppins fs-24 font-bold ">
                  January Topics :-
                </p>
                {Month.map((Props, index) => (
                  <div key={index} className="row py-3 items-center">
                    <div className="col-4">
                      <div className="flex items-center">
                        <p className="line ff_Poppins">{Props.number}</p>
                        <img
                          className="max_w_250 w-100 rounded-xl"
                          src={Props.imagePage}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="col-8">
                      <p className=" py-3 text-white ff_Poppins font-semibold fs-20">
                        {Props.Tittle} :-
                      </p>
                      <div className="flex flex-col">
                        <a
                          href={Props.GitHub}
                          target="blank"
                          className=" font-medium fs-18 ff_Poppins textOne"
                        >
                          {Props.GitHubW}
                        </a>
                        <a
                          href={Props.LiveLink}
                          target="blank"
                          className=" font-medium fs-18   textOne ff_Poppins py-3"
                        >
                          {Props.LiveLinkW}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {first === "Tab2" && (
              <div>
                <p className="text-white ff_Poppins fs-24 font-bold">
                  Feburary Topics :-
                </p>
                {Feb.map((Props, index) => (
                  <div key={index} className="row py-3 items-center ">
                    <div className="col-4">
                      <div className="flex items-center">
                        <p className="line ff_Poppins">{Props.number}</p>
                        <img
                          className="max_w_250 rounded-xl"
                          src={Props.imagePage}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="col-8">
                      <p className=" py-3 text-white ff_Poppins font-semibold fs-20">
                        {Props.Tittle} :-
                      </p>
                      <div className="flex flex-col">
                        <a
                          href={Props.GitHub}
                          target="blank"
                          className=" ff_Poppins font-medium fs-18 textOne"
                        >
                          {Props.GitHubW}
                        </a>
                        <a
                          href={Props.LiveLink}
                          target="blank"
                          className=" ff_Poppins font-medium fs-18  textOne py-3"
                        >
                          {Props.LiveLinkW}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {first === "Tab3" && (
              <div>
                <p className="text-white ff_Poppins fs-24 font-bold">
                  March Topics :-
                </p>
                {March.map((Props, index) => (
                  <div key={index} className="row py-3 items-center ">
                    <div className="col-4">
                      <div className="flex items-center">
                        <p className="line ff_Poppins">{Props.number}</p>
                        <img
                          className="max_w_250 rounded-xl"
                          src={Props.imagePage}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="col-8">
                      <p className=" py-3 text-white ff_Poppins font-semibold fs-20">
                        {Props.Tittle} :-
                      </p>
                      <div className="flex flex-col">
                        <a
                          href={Props.GitHub}
                          target="blank"
                          className=" font-medium fs-18 ff_Poppins textOne"
                        >
                          {Props.GitHubW}
                        </a>
                        <a
                          href={Props.LiveLink}
                          target="blank"
                          className=" font-medium fs-18 ff_Poppins  textOne py-3"
                        >
                          {Props.LiveLinkW}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {first === "Tab4" && (
              <div>
                <p className="text-white ff_Poppins fs-24 font-bold">
                  April Topics :-
                </p>
                {April.map((Props, index) => (
                  <div key={index} className="row py-3 items-center">
                    <div className="col-4">
                      <div className="flex items-center">
                        <p className="line ff_Poppins">{Props.number}</p>
                        <img
                          className="max_w_250 w-100 rounded-xl"
                          src={Props.imagePage}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="col-8">
                      <p className=" py-3 text-white ff_Poppins font-semibold fs-20">
                        {Props.Tittle} :-
                      </p>
                      <div className="flex flex-col">
                        <a
                          href={Props.GitHub}
                          target="blank"
                          className=" font-medium fs-18 ff_Poppins text_black "
                        >
                          <p className="block">Git Hub link :-</p>
                          <p className="textOne"> {Props.GitHubW}</p>
                        </a>
                        <a
                          href={Props.LiveLink}
                          target="blank"
                          className=" font-medium fs-18 text_black  ff_Poppins py-3"
                        >
                          <p className="block">Live link :-</p>
                          <p className="textOne">{Props.LiveLinkW}</p>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {first === "Tab5" && (
              <div>
                <p className="text-white ff_Poppins fs-24 font-bold">
                  May Topics :-
                </p>
                {May.map((Props, index) => (
                  <div key={index} className="row py-3 items-center">
                    <div className="col-4">
                      <div className="flex items-center">
                        <p className="line ff_Poppins">{Props.number}</p>
                        <img
                          className="max_w_250 w-100 rounded-xl"
                          src={Props.imagePage}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="col-8">
                      <p className=" py-3 text-white ff_Poppins font-semibold fs-20">
                        {Props.Tittle} :-
                      </p>
                      <div className="flex flex-col">
                        <a
                          href={Props.GitHub}
                          target="blank"
                          className=" font-medium fs-18 ff_Poppins text_black "
                        >
                          <p className="block">Git Hub link :-</p>
                          <p className="textOne"> {Props.GitHubW}</p>
                        </a>
                        <a
                          href={Props.LiveLink}
                          target="blank"
                          className=" font-medium fs-18 text_black  ff_Poppins py-3"
                        >
                          <p className="block">Live link :-</p>
                          <p className="textOne">{Props.LiveLinkW}</p>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
