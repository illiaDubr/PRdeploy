import React from "react";
import Header from "@/components/main/section/header/Header";
import SectionHeader from "@/components/main/section/components/SectionHeader";
import Resize from "@/components/main/section/components/Resize";

const Main = ({ children, secClassName, secID }) => (
    <>
        <Resize width={801} fallback={null}>
            <Header />
        </Resize>
        <main className="main" id="main">
            <section className={`section ${secClassName || ""}`} id={secID}>
                <SectionHeader />
                {children}
            </section>
        </main>
    </>
);

export default Main;