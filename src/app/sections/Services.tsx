import React from 'react'
import {services} from "@/app/constants";
import ServiceCard from "@/app/Components/ServiceCard";

const Services = () => {
    return (
        <section className="max-container flex justify-center flex-wrap gap-10">
            {services.map((service) => (<ServiceCard
                key={service.label}
                {...service}/>
            ))}
        </section>
    )
}
export default Services
