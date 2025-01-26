import React from 'react';

interface SubscriptionProps {
   subscription: any; // Replace 'any' with the appropriate type if known
}

export default function Subscription({ subscription }: SubscriptionProps) {
   return (
      <>
         <div className="group relative h-full m-6 md:w-[25rem] lg:w-[25rem] xl:w-[25rem] 2xl:w-[25rem] cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-white p-[1px] shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/25 h-full">
               <div className="absolute inset-0 bg-gray-50 opacity-20"></div>

               <div className="relative rounded-2xl bg-white p-6 border border-[#F4D793] shadow-xl transition-all duration-300 group-hover:border-cyan-500 group-hover:bg-white group-hover:shadow-cyan-500/25 h-full flex flex-col">
                  <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70"></div>
                  <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70"></div>

                  <div className="absolute -right-[1px] -top-[1px] overflow-hidden rounded-tr-2xl">
                     <div className="absolute h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                     <div className="absolute h-20 w-20 bg-slate-950/90"></div>
                     <div className="absolute right-0 top-[22px] h-[2px] w-[56px] rotate-45 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                     <span className="absolute right-1 top-1 text-[10px] font-semibold text-gray-800">POPULAR</span>
                  </div>

                  <div className="relative">
                     <h3 className="text-sm font-medium uppercase tracking-wider text-cyan-700">
                        {subscription.heading}
                     </h3>
                     <div className="mt-2 flex subscriptions-baseline gap-2">
                        <span className="text-3xl font-bold text-slate-600">₹
                           {subscription.price}
                        </span>
                        <span className="text-sm text-slate-500">/month</span>
                     </div>
                     <p className="mt-2 text-sm text-slate-400">
                        {subscription.title}
                     </p>
                  </div>

                  <div className="relative mt-6 space-y-4 flex-1"> {/* Description section takes remaining space */}
                     {subscription.description.map((desc: { text: string; subDescription: string; status: string }, index: number) => (
                        <div key={index} className="flex items-start gap-3">
                           {desc.status === 'true' ? (
                              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10">
                                 <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-cyan-800">
                                    <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                                 </svg>
                              </div>
                           ) : (
                              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/10">
                                 <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-slate-500">
                                    <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                                 </svg>
                              </div>
                           )}
                           <div>
                              <p className="text-sm font-medium text-gray-800">{desc.text}</p>
                              <p className="text-xs text-slate-500">{desc.subDescription}</p>
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="relative mt-8"> {/* Button section */}
                     <button className="group/btn relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 p-px font-semibold text-white shadow-[0_1000px_0_0_hsl(0_0%_100%_/_0%)_inset] transition-colors hover:shadow-[0_1000px_0_0_hsl(0_0%_100%_/_2%)_inset]">
                        <div className="relative rounded-xl bg-slate-950/50 px-4 py-3 transition-colors group-hover/btn:bg-transparent">
                           <span className="relative flex subscriptions-center justify-center gap-2">
                              Get Started
                              <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1">
                                 <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                              </svg>
                           </span>
                        </div>
                     </button>
                  </div>

                  <div className="mt-4 flex subscriptions-center justify-center gap-2"> {/* Footer section */}
                     <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-slate-400">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                     </svg>
                     <span className="text-xs font-medium text-slate-400">
                        30-day money-back guarantee
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}