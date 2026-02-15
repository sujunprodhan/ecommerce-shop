'use client';

import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { signUpFits } from '@/constants/data';
import { PanelTop, Star } from 'lucide-react';

const SignUpPage = () => {
  const searchParam = useSearchParams();
  const redirectTo = searchParam.get('redirectTo');

  return (
    <div className="flex flex-col lg:flex-row min-h-[100vh-120px]">
      {/* Left Side - Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:w-3/5  text-black p-10 flex flex-col justify-center"
      >
        <div className="space-y-5 max-w-md">
          <div className="mb-10 space-y-5">
            <h1 className="text-3xl font-semibold text-green-800 flex items-center gap-3 ">
              Join Signup E-shop Cart
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Signup this account today and benefits your unlock exclusive benefits personalize and
              recommendations, and seamless shopping experience
            </p>
          </div>

          <div className="space-y-5">
            {signUpFits?.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div key={index} className=" items-center gap-4">
                  <div className="flex gap-3 ">
                    <Icon className="w-8 h-8 flex items-center text-orange-500 p-1 rounded-md bg-amber-100" />

                    <div>
                      <h1 className="text-xl text-green-900 font-semibold">{benefit.title}</h1>
                      <p className="text-gray-500">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="bg-white/50 backdrop-blur-md border border-orange-300/20 shadow-sm rounded-md flex-col justify-center items-center gap-4 p-5">
            <p className='text-center'>
              <strong>Trusted by 50000+ Customer</strong>
            </p>
            <div className="flex items-center shadow-2xl justify-center">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={15} className="text-yellow-400 fill-yellow-400" />
              ))}
              <p className="ml-2 text-gray-600">4.8/5 average rating</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Sign Up */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:w-2/5 p-10 flex items-center justify-center"
      >
        {/* sign up from */}
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold text-green-700 mb-6">Create your Account</h1>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpPage;
