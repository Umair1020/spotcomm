import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import "./form.css";

const Form = () => {
    const [status, setStatus] = useState("");
    const [state, setState] = useForm("myzyzlnz");
   
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        const action = form.action;

        const response = await fetch(action, {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            setStatus("SUCCESS");
            form.reset();
        } else {
            setStatus("ERROR");
        }
    };

    return (
        <div id="smooth-content" className='bg-dark'>
            <div className="undefined relative z-50 ">
                <main>
                    <div className="px-6  md:pt-[10.5rem] max-w-7xl mx-auto pt-5">
                        <div className="md:flex">
                            <div className="w-full md:w-[40%] md:pr-20">
                                <div className="overflow-hidden">
                                    <h1 className="font-bold text-light pb-6 lg:pb-[2.375rem] text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[65px]">
                                        Got an Idea for your Project?
                                    </h1>
                                </div>
                                <p className="undefined text-light text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    We’d love to learn more about you and how our Experts can help your Networks.
                                </p>
                                <div className="mt-8 md:mt-[220px] 2xl:mt-[175px] flex flex-col wrap md:gap-x-0 gap-2 gap-x-4">
                                    <div className="flex items-center">
                                        <img
                                            alt="c"
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNiAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjQyMDcgMEMyMS4xNjQgMCAyMi44NDEgMC43MDY2NjcgMjQuMDc0NyAxLjk3NDY3QzI1LjMwOTcgMy4yNCAyNiA0Ljk0NjY3IDI2IDYuNzMzMzNWMTcuMjY2N0MyNiAyMC45ODY3IDIzLjA0OSAyNCAxOS40MjA3IDI0SDYuNTc4QzIuOTQ5NyAyNCAwIDIwLjk4NjcgMCAxNy4yNjY3VjYuNzMzMzNDMCAzLjAxMzMzIDIuOTM2NyAwIDYuNTc4IDBIMTkuNDIwN1pNMjAuODkxIDYuOTMzMzNDMjAuNjE4IDYuOTE4NjcgMjAuMzU4IDcuMDEzMzMgMjAuMTYxNyA3LjJMMTQuMyAxMkMxMy41NDYgMTIuNjQxMyAxMi40NjU3IDEyLjY0MTMgMTEuNyAxMkw1Ljg1IDcuMkM1LjQ0NTcgNi44OTMzMyA0Ljg4NjcgNi45MzMzMyA0LjU1IDcuMjkzMzNDNC4xOTkgNy42NTMzMyA0LjE2IDguMjI2NjcgNC40NTc3IDguNjI2NjdMNC42MjggOC44TDEwLjU0MyAxMy41MzMzQzExLjI3MSAxNC4xMiAxMi4xNTM3IDE0LjQ0IDEzLjA3OCAxNC40NEMxMy45OTk3IDE0LjQ0IDE0Ljg5OCAxNC4xMiAxNS42MjQ3IDEzLjUzMzNMMjEuNDg5IDguNzJMMjEuNTkzIDguNjEzMzNDMjEuOTAzNyA4LjIyNjY3IDIxLjkwMzcgNy42NjY2NyAyMS41Nzg3IDcuMjhDMjEuMzk4IDcuMDgxMzMgMjEuMTQ5NyA2Ljk2IDIwLjg5MSA2LjkzMzMzWiIgZmlsbD0iIzBCMEMwRCIvPgo8L3N2Zz4K"
                                        />
                                        <p className="mx-3 text-light font-bold text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                                            <a href="mailto: support@spotcommglobal.com" className='text-light'>
                                                support@spotcommglobal.com
                                            </a>
                                        </p>
                                    </div>
                                    <div className="flex items-center md:mt-4">
                                        <img
                                            alt="c"
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyMiAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjQyMTggMjNDMTMuNDY0MSAyMi45NzI3IDExLjc1NTYgMjIuMzY4NSAxMC4xNTc3IDIxLjQyMzhDNy45MTM4OCAyMC4wOTY5IDYuMDg1OTQgMTguMzE4MiA0LjQxNDMyIDE2LjM3MzVDMy4wMjk1MyAxNC43NjQyIDEuODA3NzEgMTMuMDUxNiAwLjk1NTMwOCAxMS4xMDgzQzAuMzIxOTA3IDkuNjY1MDIgLTAuMDcxMTEyNiA4LjE2OTMgMC4wMTA3MzU2IDYuNTg4MUMwLjExNjE4IDQuNTQ4NTYgMC45MTU0OSAyLjgxNzkyIDIuNTA1MjYgMS40NTg3MUMyLjkwMTk3IDEuMTE5NjIgMy4zMDQzMyAwLjc4Njc2MiAzLjcxMjM0IDAuNDYwMTI5QzQuNDgwNjggLTAuMTUxOTUgNS4zMDcyNyAtMC4xNzI3ODMgNS45OTA4MSAwLjUxNDcyOEM3LjE3ODcyIDEuNzA5NDMgOC4xMjEwOCAzLjA3ODcxIDguNjM4NzEgNC42ODE0NkM4LjkwODU5IDUuNTE1NTMgOC43MTI0NSA2LjMwMDAyIDguMDM0MDcgNi45MDg1MUM3LjU2NDM2IDcuMzI4MDYgNy4wNjczOCA3LjcyMDMgNi41NjUyMyA4LjEwMzIxQzUuNzg2NTYgOC42OTgwNSA1LjUxODE2IDkuMzE1ODcgNS44MzIyOCAxMC4yMzlDNi4wNTE4MSAxMC44OTUgNi4zNTg3MSAxMS41MjAxIDYuNzQ1MTQgMTIuMDk4MkM3Ljg1MTIgMTMuNzIwNCA5LjE0MjM0IDE1LjE5NjcgMTAuNzg0NSAxNi4zMzY4QzExLjE4NDkgMTYuNjE0MSAxMS42NjEyIDE2LjgwODEgMTIuMTI4NyAxNi45NjgzQzEyLjgwNjMgMTcuMjAxOCAxMy40MDA3IDE2Ljk4OTggMTMuOTA4NyAxNi41MTA3QzE0LjI4NzcgMTYuMTUxNSAxNC42NjIzIDE1Ljc4ODcgMTUuMDYzNCAxNS40NTUzQzE2LjIwMjcgMTQuNTA5OSAxNi45ODA2IDE0LjQwNSAxOC4yNzE3IDE1LjE1MjlDMTkuNTM3MSAxNS44NzM3IDIwLjY1MTIgMTYuODIxMSAyMS41NTUyIDE3Ljk0NTNDMjIuMjE4OSAxOC43NzcyIDIyLjEzNTYgMTkuNTY2IDIxLjMzNCAyMC4yNjA3QzIwLjQzODkgMjEuMDM4IDE5LjU5MDkgMjEuODc0MyAxOC40NTgzIDIyLjM1N0MxNy41MDA1IDIyLjc2NzIgMTYuNDY3OSAyMi45ODU4IDE1LjQyMTggMjNaIiBmaWxsPSIjMEIwQzBEIi8+Cjwvc3ZnPgo="
                                        />
                                        <p className="mx-4 font-bold text-light text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                                            <a href="tel: +971 557015596 " className='text-light'>
                                                +971 557015596
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-[60%]">
                                <form onSubmit={handleSubmit} action="https://formspree.io/f/myzyzlnz" method="POST">
                                    <div className="grid grid-col-12 gap-x-2 md:gap-x-10 md:gap-y-10 gap-y-6 text-light">
                                        <div className="col-span-12 mt-14 md:mt-0 text-light">
                                            <p className="font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">Name*</p>
                                            <div className="mt-2">
                                                <input
                                                    autoComplete="given-name"
                                                    className=" h-12 md:h-14 px-5 block w-full rounded-[15px] border-0 py-1.5 text-black focus-visible:outline-[#2ED06E] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-12 sm:col-span-6">
                                            <p className="font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">Email*</p>
                                            <div className="mt-2">
                                                <input
                                                    autoComplete="email"
                                                    className=" h-12 md:h-14 px-5 block w-full rounded-[15px] border-0 py-1.5 text-black focus-visible:outline-[#2ED06E] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                />
                                              
                                            </div>
                                        </div>
                                        <div className="col-span-12 sm:col-span-6">
                                            <p className="font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">Phone*</p>
                                            <div className="mt-2">
                                                <input
                                                    autoComplete="tel"
                                                    className=" h-12 md:h-14 px-5 block w-full rounded-[15px] border-0 py-1.5 text-black focus-visible:outline-[#2ED06E] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"
                                                    id="number"
                                                    name="number"
                                                    type="tel"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-12">
                                            <p className="font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">Message*</p>
                                            <div className="mt-2">
                                                <textarea
                                                    className=" px-5 pt-5 block w-full rounded-[15px] border-0 py-1.5 text-black focus-visible:outline-[#2ED06E] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"
                                                    id="message"
                                                    name="message"
                                                    rows="3"
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-span-12 mt-2">
                                            <button
                                                className="px-6 md:px-11 w-full h-[40px] md:h-[68px] border-transparent rounded-full bg-black text-white"
                                                type="submit" disabled={state.submitting}
                                            >
                                                <p className="font-bold text-xs xl:text-sm 2xl:text-base">Send Message</p>
                                            </button>
                                        </div>
                                        {status === "SUCCESS" && <p className="">Thanks! Your message has been sent.</p>}
                                        {status === "ERROR" && <p className="text-red-500">Oops! There was an error sending your message.</p>}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <br /> <br />
        </div>
    );
};

export default Form;
