"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface FormData {
  gender: string;
  vipTransfer: string;
  fullName: string;
  email: string;
  district: string;
  phone: string;
  marketingConsent: boolean;
  privacyConsent: boolean;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    gender: "erkek",
    vipTransfer: "evet",
    fullName: "",
    email: "",
    district: "",
    phone: "",
    marketingConsent: false,
    privacyConsent: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added here
    console.log(formData);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-10 px-4">
      <div className="max-w-[500px] mx-auto">
        <Card className="p-6 shadow-lg">
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-2xl font-bold text-primaryBlue text-center">
              Ücretsiz Randevu Alın
            </h1>
            <div className="w-16 h-0.5 bg-primaryOrange mt-2"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Cinsiyet */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Cinsiyetiniz</Label>
              <RadioGroup
                defaultValue="erkek"
                onValueChange={(value: string) => setFormData({...formData, gender: value})}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="erkek" id="erkek" />
                  <Label htmlFor="erkek" className="text-sm">Erkek</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="kadin" id="kadin" />
                  <Label htmlFor="kadin" className="text-sm">Kadın</Label>
                </div>
              </RadioGroup>
            </div>

            {/* VIP Transfer */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">VIP Transfer ve Konaklama Hizmeti</Label>
              <RadioGroup
                defaultValue="evet"
                onValueChange={(value: string) => setFormData({...formData, vipTransfer: value})}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="evet" id="evet" />
                  <Label htmlFor="evet" className="text-sm">İstiyorum</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="hayir" id="hayir" />
                  <Label htmlFor="hayir" className="text-sm">İstemiyorum</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Ad Soyad */}
            <div className="relative space-y-2">
              <Input
                id="fullName"
                placeholder=" "
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-primaryBlue focus:ring-1 focus:ring-primaryBlue/20 transition-colors peer placeholder-transparent"
              />
              <Label 
                htmlFor="fullName" 
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-9 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9 peer-focus:text-primaryBlue"
              >
                Adınız ve soyadınız
              </Label>
            </div>

            {/* Email */}
            <div className="relative space-y-2">
              <Input
                id="email"
                type="email"
                placeholder=" "
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-primaryBlue focus:ring-1 focus:ring-primaryBlue/20 transition-colors peer placeholder-transparent"
              />
              <Label 
                htmlFor="email" 
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-9 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9 peer-focus:text-primaryBlue"
              >
                E-posta adresiniz
              </Label>
            </div>

            {/* İlçe */}
            <div className="relative space-y-2">
              <Input
                id="district"
                placeholder=" "
                value={formData.district}
                onChange={(e) => setFormData({...formData, district: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-primaryBlue focus:ring-1 focus:ring-primaryBlue/20 transition-colors peer placeholder-transparent"
              />
              <Label 
                htmlFor="district" 
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-9 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9 peer-focus:text-primaryBlue"
              >
                İstanbul içi ilçe
              </Label>
            </div>

            {/* Telefon */}
            <div className="space-y-2">
              <div className="flex gap-2">
                <div className="w-[90px]">
                  <Input 
                    disabled 
                    value="TR (+90)" 
                    className="bg-gray-50 rounded-xl border-gray-200"
                  />
                </div>
                <div className="relative flex-1">
                  <Input
                    id="phone"
                    type="tel"
                    placeholder=" "
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-primaryBlue focus:ring-1 focus:ring-primaryBlue/20 transition-colors peer placeholder-transparent"
                  />
                  <Label 
                    htmlFor="phone" 
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-9 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9 peer-focus:text-primaryBlue"
                  >
                    5XX XXX XX XX
                  </Label>
                </div>
              </div>
            </div>

            {/* Consent Checkboxes */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="marketing"
                  checked={formData.marketingConsent}
                  onCheckedChange={(checked: boolean) => 
                    setFormData({...formData, marketingConsent: checked})
                  }
                />
                <Label htmlFor="marketing" className="text-xs text-gray-600 leading-tight">
                  Kampanya ve fırsatlardan haberdar olmak istiyorum
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="privacy"
                  checked={formData.privacyConsent}
                  onCheckedChange={(checked: boolean) => 
                    setFormData({...formData, privacyConsent: checked})
                  }
                />
                <Label htmlFor="privacy" className="text-xs text-gray-600 leading-tight">
                  <span className="text-primaryOrange hover:underline cursor-pointer">KVKK</span> ve{" "}
                  <span className="text-primaryOrange hover:underline cursor-pointer">Gizlilik Politikası</span>'nı
                  kabul ediyorum
                </Label>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-primaryOrange hover:bg-primaryOrange/90 text-white font-semibold py-3 rounded-full mt-4"
            >
              Randevu Oluştur
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
} 