"use client"

import React from "react";
import Link from "next/link";
import Select from "react-select";
import { toast } from 'react-hot-toast';
import { useRouter } from "next/navigation";
import { toastError, toastSuccess } from '@/utils/toast';
import { createUser } from '@/services/user.services';

export default function Home() {
   const router = useRouter();

   const [isTermsAccepted, setIsTermsAccepted] = React.useState(false);
   const [formData, setFormData] = React.useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      dob: '',
      gender: '',
      password: '',
      confirmPassword: '',
   });

   const handleChange = (e: any) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };


   const genderOptions = [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Other' },
   ];

   const handleSubmit = async (e: any) => {
      e.preventDefault();
      try {
         if (formData.firstName === '') {
            toast.error('Name is required.');
            return;
         } else if (!/^[a-zA-Z ]+$/.test(formData.firstName)) {
            toast.error('Please enter a valid name without numbers or special characters.');
            return;
         }

         if (formData.lastName === '') {
            toast.error('Name is required.');
            return;
         } else if (!/^[a-zA-Z ]+$/.test(formData.lastName)) {
            toast.error('Please enter a valid name without numbers or special characters.');
            return;
         }

         if (formData.email === '') {
            toast.error('Email is required.');
            return;
         } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            toast.error('Please enter a valid email.');
            return;
         }

         if (formData.phone === '') {
            toast.error('Phone number is required.');
            return;
         } else if (!/^[0-9]+$/.test(formData.phone)) {
            toast.error('Please enter a valid phone number.');
            return;
         }

         if (formData.address === '') {
            toast.error('Address is required.');
            return;
         } else if (!/^[a-zA-Z0-9 ]+$/.test(formData.address)) {
            toast.error('Please enter a valid address.');
            return;
         }

         if (formData.dob === '') {
            toast.error('Date of birth is required.');
            return;
         }

         if (formData.password === '') {
            toast.error('Password is required.');
            return;
         } else if (formData.password.length < 8) {
            toast.error('Password must be at least 8 characters.');
            return;
         } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(formData.password)) {
            toast.error('Password must contain at least one uppercase letter, one lowercase letter, and one number.');
            return;
         } 
         
         if (formData.confirmPassword === '') {
            toast.error('Confirm password is required.');
            return;
         } else if (formData.confirmPassword.length < 8) {
            toast.error('Confirm password must be at least 8 characters.');
            return;
         } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(formData.confirmPassword)) {
            toast.error('Confirm password must contain at least one uppercase letter, one lowercase letter, and one number.');
            return;
         } 
         
         if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match.');
            return;
         }

         if (!isTermsAccepted) {
            toast.error('You must accept the terms and conditions.');
            return;
         }

         const fillData = { 
            firstName: formData.firstName,
            lastName: formData.lastName, 
            email: formData.email,
            dob: formData.dob,
            gender: formData.gender,
            address: formData.address,
            phone: formData.phone, 
            password: formData.password 
         };

         const result = await createUser(fillData);

         if (result?.data?.message) {
            toastSuccess(result?.data?.message);
            router.push('/signIn');
         }
      } catch (error) {
         toastError(error);
      }
   };

   
   return (
      <>
         <div className={`min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center`}
            style={{
               backgroundImage: 'url(/signupbackground.webp)',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
            }}
         >
            <div className="absolute right-56 max-w-screen-xl h-fit m-0 sm:m-10 lg:my-28 bg-white shadow sm:rounded-lg flex justify-center">
               <div className={`bg-gray-200 flex justify-center bg-slate-800`}>
                  <div className="bg-white p-6 shadow-lg w-full dark:bg-slate-100">
                     <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit}>
                        <div className="text-2xl text-teal-800 font-semibold capitalize text-center mb-4">
                           <h3>Welcome to Bazario!</h3>
                           <p className="text-[1.12rem] font-normal text-gray-400">
                              Register to your account
                           </p>
                        </div>
                        <div>
                           <div>
                              <div className="capitalize mb-1">
                                 <label className='text-[1.12rem] ml-1'>Name</label>
                              </div>
                              <div className="relative mb-4">
                                 <div className="w-full flex gap-3">
                                    <input className="capitalize shadow-2xl px-3 py-2 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-darkgray" type="text" placeholder="First Name" id="First-Name" name="firstName" autoComplete="false" required onChange={handleChange}/>
                                    <input className="px-3 py-2 capitalize shadow-2xl  glass w-full placeholder:text-darkgray outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="text" placeholder="Last Name" id="Last-Name" name="Last-Name" autoComplete="false" required onChange={handleChange}/>
                                 </div>
                              </div>
                           </div>
                           <div className="mt-4">
                              <div className="capitalize text-xl mb-1">
                                 <label className='text-[1.12rem]'>Email</label>
                              </div>
                              <div className="flex gap-3">
                                 <input className="px-3 py-2 glass shadow-2xl w-full placeholder:text-darkgray outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="email" placeholder="Email" id="txtEmail" name="email" autoComplete="false" required onChange={handleChange}/>
                              </div>
                           </div>
                           <div className="mt-4">
                              <div className="flex gap-3 items-center w-full">
                                 <div className="w-full">
                                    <div className="capitalize mb-1">
                                       <label className='text-[1.12rem] ml-1'>Contact</label>
                                    </div>
                                    <div className="relative">
                                       <div className="w-full flex gap-3">
                                          <input className="capitalize shadow-2xl px-3 py-2 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-darkgray" type="tel" placeholder="Contact Number" id="txtContactNo" name="contactnum" maxLength={10} required onChange={handleChange} />
                                       </div>
                                    </div>
                                 </div>
                                 <div className="w-full">
                                    <div className="capitalize text-xl mb-1">
                                       <label className='text-[1.12rem]'>Date of Birth</label>
                                    </div>
                                    <div className="relative">
                                       <div className="w-full flex gap-3">
                                          <input className="px-3 py-[0.45rem] shadow-2xl glass w-full text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="date" required onChange={handleChange}/>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="w-full">
                                    <div className="capitalize text-xl mb-1">
                                       <label className='text-[1.12rem]'>Gender</label>
                                    </div>
                                    <div className="relative">
                                       <div className="w-full flex gap-3">
                                          <Select
                                             options={genderOptions}
                                             placeholder="Select Gender"
                                             className="w-full"
                                             styles={{
                                                control: (styles: any) => ({ ...styles, backgroundColor: "white", border: "none", boxShadow: "none", minHeight: "2.5rem" }),
                                                option: (styles: any, { isFocused, isSelected }: { isFocused: boolean, isSelected: boolean }) => ({
                                                   ...styles, backgroundColor: isSelected ? "#AB4459" : isFocused ? "#F1F1F1" : "white",
                                                   color: isSelected ? "white" : "inherit",
                                                   fontSize: "1rem",
                                                }),
                                                menu: (styles: any) => ({ ...styles, backgroundColor: "white" }),
                                                menuList: (styles: any) => ({ ...styles, overflowY: "auto", scrollbarWidth: "none", msOverflowStyle: "none", }),
                                                placeholder: (styles: any) => ({ ...styles, color: "darkgray", fontSize: "1rem" }),
                                                singleValue: (styles: any) => ({ ...styles, color: "darkslategrey", fontSize: "1rem", }),
                                             }}
                                             onChange={handleChange}
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="mt-4">
                              <div className="capitalize text-xl mb-1">
                                 <label className='text-[1.12rem]'>Address</label>
                              </div>
                              <div className="flex gap-3">
                                 <input className="px-3 py-2 glass shadow-2xl w-full placeholder:text-darkgray outline-none focus:border-solid focus:border-[1px] border-[#035ec5] uppercase" type="text" placeholder="Address" id="address" name="address" autoComplete="false" required onChange={handleChange}/>
                              </div>
                           </div>
                           <div className="mt-4">
                              <div className="capitalize text-xl mb-1">
                                 <label className='text-[1.12rem]'>Password</label>
                              </div>
                              <div className="flex gap-3">
                                 <input className="px-3 py-2 glass shadow-2xl w-full placeholder:text-darkgray outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="password" placeholder="Password" id="password" name="password" required onChange={handleChange}/>
                                 <input className="px-3 py-2 glass shadow-2xl  w-full placeholder:text-darkgray outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="password" placeholder="Confirm password" required onChange={handleChange}/>
                              </div>
                           </div>
                           <div className="sm:flex sm:justify-between flex-col inline-block my-8">
                              <div className="flex">
                                 <input className="text-blue-800" type="checkbox" checked={isTermsAccepted} onChange={(e) => setIsTermsAccepted(e.target.checked)}/>
                                 <span className="pl-1">
                                    I agree to the
                                    <Link href="#" className="text-blue-800 hover:underline"> Terms & Conditions</Link> and <Link href="#" className="text-blue-800 hover:underline">Privacy Policy</Link>
                                 </span>
                              </div>
                           </div>
                           <div>
                              <button type="submit" className="bg-blue-800 text-xl text-white font-medium uppercase p-2 rounded-lg w-full opacity-90 hover:opacity-100">Sign Up</button>
                           </div>
                           <div className="text-[18px] text-center mt-4">
                              <p>Already have an account? <Link className="capitalize text-blue-800 hover:underline cursor-pointer" href="/signin">Sign In</Link></p>
                           </div>
                        </div>
                     </form>
                     <div className="flex items-center space-x-2 mt-4">
                        <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
                        <span className="text-zinc-400 dark:text-zinc-700 text-sm">OR</span>
                        <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
                     </div>
                     <div className="flex flex-col md:flex-row gap-4 mt-3">
                        <button
                           className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                           type="submit"
                        >
                           <span className="mr-2 inline-block">
                              <svg
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="h-6 w-6 text-rose-500"
                              >
                                 <path
                                    d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                                 ></path>
                              </svg>
                           </span>
                           Sign in with Google
                        </button>
                     </div>
                  </div>
               </div>
            </div >
         </div >
      </>
   );
};