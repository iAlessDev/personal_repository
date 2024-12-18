import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { useForm  } from "react-hook-form";

function Contact() {

    const form = useRef();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();   

    let isSending = false; 

    const [formdata, setFormdata] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });


    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value });
    };
      
    const sendEmail = async (data) => {
        if (isSending) return; 
        isSending = true; 
    
        try {
            const result = await emailjs.sendForm(
                "service_h6tulwe", 
                "template_i5xdd6u", 
                form.current,
                "dIaKCgy1URkI1gEUK"
            );
    
            console.log(result);
            alert("Mensaje enviado correctamente.");
    
            // Reinicia el formulario en react-hook-form
            setFormdata({
                name: '',
                email: '',
                company: '',
                message: '',
            });

            form.current.reset(); // Reinicia los valores en el DOM del formulario.
    
        } catch (error) {
            console.error(error);
            alert("Hubo un error al enviar el mensaje.");
        } finally {
            isSending = false; // Desbloqueamos el envío
        }
    };
    

    return (
        <div id="contact" className="w-full px-12 md:px-28 bg-[#E5E5E5]">

            <h1 className="text-3xl md:text-4xl font-oswald text-center bg-[#E5E5E5]">
                Lets Talk About Your Project
            </h1>

            <div className="flex flex-col md:flex-row justify-center bg-[#E5E5E5] py-5 md:py-16 w-full md:space-x-24">

                <div className="w-full pb-10">
                    <p className="text-2xl md:text-4xl font-funnel pt-5 bg-gradient-to-r from-[#FF5733] via-[#0077FF] to-[#6A0DAD] inline-block text-transparent bg-clip-text font-bold">
                        I'm open to work as a freelancer or full-time employee. 
                        If you have a project in mind, feel free to contact me. 
                    </p>
                </div>

                <div className="text-1xl w-full md:w-[80%]">

                <form className="flex flex-col space-y-4" onSubmit={handleSubmit(sendEmail)} ref={form}>
                    <div flex flex-col>
                            <input
                                type="text"
                                placeholder="Name"
                                onChange={handleChangeForm}
                                {...register("name", { 
                                    required: "Name is required",
                                    validate: {
                                        minLenght: (value) => value.length > 3 || "This field must be at least 3 characters",
                                        matchPattern: (value) => /^[a-zA-Z\s]*$/.test(value) || "This field must be a valid name",
                                    },
                                })}
                                
                                name="name"
                                id="name"
                                className="p-2 border border-gray-300 rounded-2xl w-full"
                            />

                            <br />

                            {errors.name?.message && (
                                <span className="text-red-500">{errors.name.message}</span>
                            )}


                        </div>

                        <div flex flex-col>
                           <input
                                type="text"
                                placeholder="Email"
                                onChange={handleChangeForm}
                                {...register("email", { 
                                    required: "Email is required",
                                    validate: {
                                        matchPattern: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || "This field must be a valid email",
                                    }, 
                                })}
                                name="email"
                                id="email"
                                className="p-2 border border-gray-300 rounded-2xl w-full"
                            />

                            <br />

                            {errors.email?.message && (
                                <span className="text-red-500">{errors.email.message}</span>
                            )}

                        </div>

                        <div>

                            <input
                                type="text"
                                placeholder="Company"
                                onChange={handleChangeForm}
                                {...register("company", { 
                                    required: "Company is required", 
                                })}
                                name="company"
                                id="company"
                                className="p-2 border border-gray-300 rounded-2xl w-full"
                            ></input>

                            <br />

                            {errors.company?.message && (
                                <span className="text-red-500">{errors.company.message}</span>
                            )}

                        </div>

                        <div>
                            <textarea
                                placeholder="Message"
                                onChange={handleChangeForm}
                                {...register("message", { 
                                    required: "Message content cannot be empty" 
                                })}
                                name="message"
                                id="message"
                                className="p-2 border border-gray-300 rounded-2xl w-full"
                                rows="4"
                            ></textarea>

                            <br />

                            {errors.message?.message && (
                                <span className="text-red-500">{errors.message.message}</span>
                            )}

                        </div>



                        <div className="flex flex-col md:flex-row py-5 md:py-2 space-y-5 w-full md:px-10">

                            <div className="flex flex-col justify-center md:w-full text-center">

                                <h2 className="font-funnel text-lg">
                                    Project Type
                                </h2>

                                <div className="flex space-x-2 md:mb:1 py-2 w-full justify-center">
                                
                                    <label className={`p-3 border border-gray-300 rounded-lg cursor-pointer ${
                                    watch("projectType") === 'ios' ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
                                    }`}>
                                        <input 
                                            type="radio" 
                                            name="projectType" 
                                            value="ios" 
                                            { ...register("projectType") }
                                            id="ios"
                                            className="hidden"
                                        />
                                        <span className="px-2">IOS</span>
                                    </label>

                                    
                                    <label className={`p-3 border border-gray-300 rounded-lg cursor-pointer ${
                                    watch("projectType") === 'web' ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
                                    }`}>
                                        <input 
                                            type="radio" 
                                            name="projectType" 
                                            value="web" 
                                            { ...register("projectType") }
                                            id="web"
                                            className="hidden"
                                        />
                                        <span className="px-2">WEB</span>
                                    </label>
                                </div>
                            </div>
                            

                            <div className="flex flex-col w-full text-center md:pb-4"> 

                                <h2 className="font-funnel text-lg">
                                    Modality
                                </h2>

                                <div className="flex space-x-2 py-2 w-full justify-center">

                                    <label className={`p-3 border border-gray-300 rounded-lg cursor-pointer ${
                                    watch("modality") === 'freelance' ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
                                    }`}>
                                        <input 
                                            type="radio" 
                                            name="modality" 
                                            value="freelance" 
                                            { ...register("modality") }
                                            id="freelance"
                                            className="hidden"
                                        />
                                        <span className="px-2">Freelance</span>
                                    </label>

                                    
                                    <label className={`p-3 border border-gray-300 rounded-lg cursor-pointer ${
                                    watch("modality") === 'full-time' ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
                                    }`}>
                                        <input 
                                            type="radio" 
                                            name="modality" 
                                            value="full-time" 
                                            { ...register("modality") }
                                            id="full-time"                               
                                            className="hidden"
                                        />
                                        <span className="px-2">Full-Time</span>
                                    </label>
                                </div>
                            </div>

                        </div>

                        <button
                            type="submit"
                            className="
                                border-2
                                border-solid
                                border-gray-800
                                p-2 
                                bg-gray-800 
                                text-white 
                                hover:bg-white 
                                hover:text-gray-800 
                                transition-all 
                                rounded-2xl"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;