import React from 'react'
// import logo from '../../public/nuralogo.svg'
import {footerInfo} from '../Constants/index.js'
import FooterInfo from "../Components/FooterInfo.jsx";


function Footer() {
    return (
        <section className={"w-full h-[498px] flex flex-col justify-center items-center gap-16 bg-black"}>
            <div className={"w-[1312px] h-[312px] flex justify-between items-start gap-4"}>
                <div className={"flex flex-col h-[312px] w-[354px] gap-8"}>
                    <div className={"flex w-[239px] flex-col"}>
                        {/*<img src={logo} alt={"logo"} className={"w-40 h-auto cursor-pointer"}/>*/}
                    </div>
                    <div className={"w-[311.03px] h-[124.56px]"}>
                        <h1 className={"text-white font-primary text-2xl font-normal"}>Address- <br/> Flat No. 202,
                            Shree Sai Enclave,
                            Lokhandwala Complex,
                            Andheri West, Mumbai - 400053,
                            Maharashtra, India
                        </h1>
                    </div>
                </div>

                <div className={"flex "}>
                    {
                        footerInfo.map((item) => (
                            <FooterInfo key={item.id}
                                        label={item.label}
                                        text1={item.text1}
                                        text2={item.text2}
                                        text3={item.text3}
                                        text4={item.text4}
                                        text5={item.text5}
                                        text6={item.text6}
                                        text7={item.text7}
                                        text8={item.text8}
                            />
                        ))
                    }
                </div>
            </div>
            <div className={"h-4 w-[1312px] flex  justify-between items-center"}>
                <h1 className={"text-neutral-500 text-[13px] font-primary font-normal leading-[16.90px] "}>Copyright ©
                    2022 Nura Operations Pty Ltd. All rights reserved.</h1>
                <div className={"flex gap-16"}>
                    <h1 className={"text-neutral-500 text-[13px] font-primary font-normal leading-[16.90px] "}>Privacy
                        Policy.</h1>
                    <h1 className={"text-neutral-500 text-[13px] font-primary font-normal leading-[16.90px] "}>Terms of
                        Use.</h1>
                    <h1 className={"text-neutral-500 text-[13px] font-primary font-normal leading-[16.90px] "}>Legal</h1>
                </div>
            </div>

        </section>
    )
}

export default Footer
