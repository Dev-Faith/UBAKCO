"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useForm, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import clsx from "clsx";
import { Button } from "../buttons/Button";

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  countryCode: z.string().min(1, "Please select a country code"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  serviceType: z.string().min(1, "Please select a service type"),
  packageType: z.string().min(1, "Please select a package type"),
  weightSize: z.string().min(1, "Please select weight/size"),
  pickupAddress: z.string().min(5, "Please enter a valid pickup address"),
  deliveryAddress: z.string().min(5, "Please enter a valid delivery address"),
  privacyAccepted: z.boolean().refine((val: boolean) => val === true, {
    message: "You must accept the privacy policy",
  }),
});

type FormData = z.infer<typeof formSchema>;

// Country interface for API response
interface Country {
  name: {
    common: string;
  };
  cca2: string;
  flag: string;
  idd: {
    root: string;
    suffixes?: string[];
  };
}

// Processed country interface
interface ProcessedCountry {
  code: string;
  country: string;
  name: string;
  flag: string;
}

const QuoteRequestForm = ({className}:{className?:string}) => {
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countries, setCountries] = useState<ProcessedCountry[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      countryCode: "+234", // Default to Nigeria
      phoneNumber: "",
      serviceType: "",
      packageType: "",
      weightSize: "",
      pickupAddress: "",
      deliveryAddress: "",
      privacyAccepted: false,
    }
  });

  // Fetch countries from REST Countries API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,cca2,flag,idd');
        const data: Country[] = await response.json();
        
        const processedCountries: ProcessedCountry[] = data
          .map(country => {
            // Get the main phone code (root + first suffix if exists)
            let phoneCode = country.idd?.root || '';
            if (country.idd?.suffixes && country.idd.suffixes.length > 0) {
              phoneCode += country.idd.suffixes[0];
            }
            
            return {
              code: phoneCode,
              country: country.cca2,
              name: country.name.common,
              flag: country.flag
            };
          })
          .filter(country => country.code && country.code !== '') // Filter out countries without phone codes
          .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically
        
        setCountries(processedCountries);
        setLoadingCountries(false);
      } catch (error) {
        console.error('Failed to fetch countries:', error);
        // Fallback to a few essential countries if API fails
        const fallbackCountries: ProcessedCountry[] = [
          { code: "+1", country: "US", name: "United States", flag: "🇺🇸" },
          { code: "+234", country: "NG", name: "Nigeria", flag: "🇳🇬" },
          { code: "+44", country: "GB", name: "United Kingdom", flag: "🇬🇧" },
          { code: "+33", country: "FR", name: "France", flag: "🇫🇷" },
          { code: "+49", country: "DE", name: "Germany", flag: "🇩🇪" },
        ];
        setCountries(fallbackCountries);
        setLoadingCountries(false);
      }
    };

    fetchCountries();
  }, []);

  // Watch the country code to update the flag
  const selectedCountryCode = useWatch({
    control,
    name: "countryCode",
    defaultValue: "+234"
  });

  // Get the selected country data
  const selectedCountry = countries.find(country => country.code === selectedCountryCode) || 
    { code: "+234", country: "NG", name: "Nigeria", flag: "🇳🇬" }; // Default fallback

  // Filter countries based on search term
  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.includes(searchTerm)
  );

  const handleCountrySelect = (country: ProcessedCountry) => {
    setValue("countryCode", country.code);
    setShowCountryDropdown(false);
    setSearchTerm("");
  };

  // Handle phone number input to only allow numbers
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove any non-digit characters
    const numericValue = e.target.value.replace(/\D/g, '');
    // Update the form field with only numeric value
    setValue("phoneNumber", numericValue);
  };

  // Handle phone number keydown to prevent non-numeric keys
  const handlePhoneNumberKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow: backspace, delete, tab, escape, enter
    if ([8, 9, 27, 13, 46].includes(e.keyCode) ||
        // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
        (e.keyCode === 65 && e.ctrlKey) ||
        (e.keyCode === 67 && e.ctrlKey) ||
        (e.keyCode === 86 && e.ctrlKey) ||
        (e.keyCode === 88 && e.ctrlKey) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  };

  const serviceTypes = [
    "Standard Delivery",
    "Express Delivery", 
    "White Glove Service",
    "Corporate Cargo",
    "Import/Export",
    "Haulage Services"
  ];

  const packageTypes = [
    "Documents",
    "Small Package",
    "Medium Package", 
    "Large Package",
    "Fragile Items",
    "Electronics"
  ];

  const weightSizes = [
    "Under 1kg",
    "1-5kg",
    "5-10kg",
    "10-25kg",
    "25-50kg",
    "Over 50kg"
  ];

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted:", data);
    // Handle form submission here
    // You can add API calls or other submission logic
  };

  return (
    <div className={ clsx ("bg-white rounded-[20px] p-[40px] max-w-[500px] w-full shadow-lg", className)}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-[20px]">
        {/* Full Name Input */}
        <div>
          <input
            type="text"
            placeholder="Full name"
            {...register("fullName")}
            className="w-full h-[60px] bg-[#F5F5F5] rounded-[12px] px-[20px] text-[16px] font-sans text-[#666] placeholder-[#999] border-none focus:outline-none focus:ring-2 focus:ring-[#EA5C2B] transition-all"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Phone Number Input with Dynamic Country Code */}
        <div className="relative">
          <div className="flex items-center h-[60px] bg-[#F5F5F5] rounded-[12px] px-[20px]">
            {/* Country Code Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                className="flex items-center gap-[8px] pr-[12px] border-r border-[#D0D0D0] hover:bg-[#E8E8E8] rounded-l-[8px] transition-colors py-2"
              >
                <span className="text-[20px]">{selectedCountry.flag}</span>
                <span className="text-[14px] font-medium text-[#666]">{selectedCountry.code}</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="text-[#666]">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {/* Country Dropdown */}
              {showCountryDropdown && (
                <div className="absolute top-full left-0 mt-1 w-[320px] bg-white border border-[#D0D0D0] rounded-[8px] shadow-lg z-50">
                  {/* Search Input */}
                  <div className="p-[8px] border-b border-[#E0E0E0]">
                    <input
                      type="text"
                      placeholder="Search countries..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-[8px] py-[6px] text-[14px] border border-[#D0D0D0] rounded-[4px] focus:outline-none focus:border-[#EA5C2B]"
                      autoFocus
                    />
                  </div>
                  
                  {/* Countries List */}
                  <div className="max-h-[200px] overflow-y-auto">
                    {loadingCountries ? (
                      <div className="px-[12px] py-[16px] text-[14px] text-[#999] text-center">
                        Loading countries...
                      </div>
                    ) : filteredCountries.length === 0 ? (
                      <div className="px-[12px] py-[16px] text-[14px] text-[#999] text-center">
                        No countries found
                      </div>
                    ) : (
                      filteredCountries.map((country) => (
                        <button
                          key={`${country.country}-${country.code}`}
                          type="button"
                          onClick={() => handleCountrySelect(country)}
                          className="w-full flex items-center gap-[12px] px-[12px] py-[8px] hover:bg-[#F5F5F5] text-left transition-colors"
                        >
                          <span className="text-[16px]" title={`Flag of ${country.name}`}>
                            {country.flag}
                          </span>
                          <span className="text-[14px] text-[#666] flex-1 truncate">
                            {country.name}
                          </span>
                          <span className="text-[14px] font-medium text-[#666]">
                            {country.code}
                          </span>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
            
            {/* Phone Number Input */}
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={field.value}
                  onChange={(e) => {
                    handlePhoneNumberChange(e);
                    field.onChange(e.target.value.replace(/\D/g, ''));
                  }}
                  onKeyDown={handlePhoneNumberKeyDown}
                  onPaste={(e) => {
                    // Handle paste events to only allow numbers
                    e.preventDefault();
                    const paste = e.clipboardData.getData('text');
                    const numericPaste = paste.replace(/\D/g, '');
                    setValue("phoneNumber", numericPaste);
                  }}
                  className="flex-1 bg-transparent text-[16px] font-sans text-[#666] placeholder-[#999] border-none focus:outline-none ml-[12px]"
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
              )}
            />
          </div>
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
          )}
          {errors.countryCode && (
            <p className="text-red-500 text-sm mt-1">{errors.countryCode.message}</p>
          )}
          
          {/* Hidden input for country code */}
          <input type="hidden" {...register("countryCode")} />
        </div>

        {/* Service Type Dropdown */}
        <div className="relative">
          <select
            {...register("serviceType")}
            className="w-full h-[60px] bg-[#F5F5F5] rounded-[12px] px-[20px] text-[16px] font-sans text-[#666] border-none focus:outline-none focus:ring-2 focus:ring-[#EA5C2B] appearance-none cursor-pointer transition-all"
          >
            <option value="" disabled>Preferred Service Type</option>
            {serviceTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <svg 
            className="absolute right-[20px] top-[50%] transform -translate-y-1/2 pointer-events-none text-[#666]" 
            width="12" 
            height="8" 
            viewBox="0 0 12 8" 
            fill="none"
          >
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {errors.serviceType && (
            <p className="text-red-500 text-sm mt-1">{errors.serviceType.message}</p>
          )}
        </div>

        {/* Package Type Dropdown */}
        <div className="relative">
          <select
            {...register("packageType")}
            className="w-full h-[60px] bg-[#F5F5F5] rounded-[12px] px-[20px] text-[16px] font-sans text-[#666] border-none focus:outline-none focus:ring-2 focus:ring-[#EA5C2B] appearance-none cursor-pointer transition-all"
          >
            <option value="" disabled>Package Type</option>
            {packageTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <svg 
            className="absolute right-[20px] top-[50%] transform -translate-y-1/2 pointer-events-none text-[#666]" 
            width="12" 
            height="8" 
            viewBox="0 0 12 8" 
            fill="none"
          >
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {errors.packageType && (
            <p className="text-red-500 text-sm mt-1">{errors.packageType.message}</p>
          )}
        </div>

        {/* Weight/Size Dropdown */}
        <div className="relative">
          <select
            {...register("weightSize")}
            className="w-full h-[60px] bg-[#F5F5F5] rounded-[12px] px-[20px] text-[16px] font-sans text-[#666] border-none focus:outline-none focus:ring-2 focus:ring-[#EA5C2B] appearance-none cursor-pointer transition-all"
          >
            <option value="" disabled>Weight/Size</option>
            {weightSizes.map((weight) => (
              <option key={weight} value={weight}>{weight}</option>
            ))}
          </select>
          <svg 
            className="absolute right-[20px] top-[50%] transform -translate-y-1/2 pointer-events-none text-[#666]" 
            width="12" 
            height="8" 
            viewBox="0 0 12 8" 
            fill="none"
          >
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {errors.weightSize && (
            <p className="text-red-500 text-sm mt-1">{errors.weightSize.message}</p>
          )}
        </div>

        {/* Pickup Address */}
        <div>
          <input
            type="text"
            placeholder="Enter full pickup address"
            {...register("pickupAddress")}
            className="w-full h-[60px] bg-[#F5F5F5] rounded-[12px] px-[20px] text-[16px] font-sans text-[#666] placeholder-[#999] border-none focus:outline-none focus:ring-2 focus:ring-[#EA5C2B] transition-all"
          />
          {errors.pickupAddress && (
            <p className="text-red-500 text-sm mt-1">{errors.pickupAddress.message}</p>
          )}
        </div>

        {/* Delivery Address */}
        <div>
          <input
            type="text"
            placeholder="Enter full delivery address"
            {...register("deliveryAddress")}
            className="w-full h-[60px] bg-[#F5F5F5] rounded-[12px] px-[20px] text-[16px] font-sans text-[#666] placeholder-[#999] border-none focus:outline-none focus:ring-2 focus:ring-[#EA5C2B] transition-all"
          />
          {errors.deliveryAddress && (
            <p className="text-red-500 text-sm mt-1">{errors.deliveryAddress.message}</p>
          )}
        </div>

        {/* Privacy Policy Checkbox */}
        <div>
          <div className="flex items-start gap-[12px] pt-[10px]">
            <input
              type="checkbox"
              id="privacyAccepted"
              {...register("privacyAccepted")}
              className="mt-[2px] w-[18px] h-[18px] border-2 border-[#D0D0D0] rounded-[4px] focus:ring-[#EA5C2B] focus:border-[#EA5C2B] text-[#EA5C2B]"
            />
            <label htmlFor="privacyAccepted" className="text-[14px] font-sans text-[#666] leading-[20px]">
              I confirm that I have read the{" "}
              <span className="text-[#EA5C2B] underline cursor-pointer hover:no-underline">
                Privacy Policy
              </span>
              .
            </label>
          </div>
          {errors.privacyAccepted && (
            <p className="text-red-500 text-sm mt-1">{errors.privacyAccepted.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-[56px]">
          <Button
            type="submit"
            disabled={isSubmitting}
            className=" gap-[12px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#EA5C2B] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Request a quote"}
            {!isSubmitting && (
              <Image src="/icons/requestBox.png" alt="Request a quote" width={24} height={24} />
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default QuoteRequestForm;
