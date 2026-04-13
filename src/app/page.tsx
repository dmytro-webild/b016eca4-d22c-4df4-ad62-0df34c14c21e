"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="small"
        sizing="large"
        background="floatingGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Heritage",
          id: "heritage",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Book Now",
          id: "contact",
        },
      ]}
      brandName="Brunel Medical"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardCarousel
      background={{
        variant: "sparkles-gradient",
      }}
      title="30 Years of Bristol's Most Trusted Aesthetics"
      description="Three decades of excellence, honesty, and confidential care in comfortable, relaxed surroundings."
      buttons={[
        {
          text: "Book Your Consultation",
          href: "#contact",
        },
        {
          text: "Explore Services",
          href: "#services",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/modern-kitchen-interior-design_23-2151821272.jpg",
          imageAlt: "Clinic interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-minimal-interior-design_23-2151913231.jpg",
          imageAlt: "Professional aesthetic setting",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/female-cosmetologist-making-facial-treatment-beautiful-woma_158595-4588.jpg",
          imageAlt: "Brunel medical care",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-making-beauty-procedures-beauty-salon_1303-16730.jpg",
          imageAlt: "Clinic environment",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-equiped-medical-cabinet_1303-23918.jpg",
          imageAlt: "30 years of care",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-kitchen-interior-design_23-2151821338.jpg",
          imageAlt: "Medical aesthetics",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardEight
      textboxLayout="inline-image"
      useInvertedBackground={true}
      features={[
        {
          title: "Botox Injections",
          description: "Expert anti-wrinkle injections delivering natural-looking results.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-still-life-assortment-nail-care-products_23-2148974553.jpg",
        },
        {
          title: "Dermal Skin Fillers",
          description: "Premium fillers to restore volume and define facial contours.",
          imageSrc: "http://img.b2bpic.net/free-photo/person-getting-micro-needling-beauty-treatment_23-2149334251.jpg",
        },
        {
          title: "Skin Peels",
          description: "Clinical-strength peels tailored to your unique skin type.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-beautiful-woman-getting-white-facial-mask-spa-treatment-beauty-salon_637285-2198.jpg",
        },
      ]}
      title="Comprehensive Aesthetic Solutions"
      description="Our approach prioritises subtle enhancement, honesty, and your unique facial anatomy."
    />
  </div>

  <div id="heritage" data-section="heritage">
      <TextAbout
      useInvertedBackground={false}
      tag="Since 1994"
      title="Our Heritage of Trust"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          title: "Incredible Results",
          quote: "I am so happy with the results of my botox, and the team is fantastic — so friendly and fun!",
          name: "Charlotte N.",
          role: "Patient",
          imageSrc: "http://img.b2bpic.net/free-photo/glamour-female-model-with-short-brown-hair-black-dress-posing-near-light-wall_613910-7032.jpg",
        },
        {
          id: "2",
          title: "Professional Service",
          quote: "Extremely impressed and delighted with the consultation & service. Amazing work.",
          name: "Alexandra V.",
          role: "Patient",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-happy-patient-dentist_23-2149164277.jpg",
        },
        {
          id: "3",
          title: "Highly Recommend",
          quote: "I've had a few treatments and I can't recommend them enough. Professional and super friendly.",
          name: "Emily N.",
          role: "Patient",
          imageSrc: "http://img.b2bpic.net/free-photo/natural-beauty-young-woman_329181-1207.jpg",
        },
        {
          id: "4",
          title: "Confidence Boost",
          quote: "The most professional and friendly clinician, achieved great results tailored to my needs.",
          name: "Hollie L.",
          role: "Patient",
          imageSrc: "http://img.b2bpic.net/free-photo/blonde-senior-woman-sitting-chair-looking-away_23-2148286463.jpg",
        },
        {
          id: "5",
          title: "Effective Treatment",
          quote: "My experience having Botox done here was painless, effective and professional.",
          name: "Jessica T.",
          role: "Patient",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-wearing-bathrobe-hotel-room_23-2148095362.jpg",
        },
      ]}
      title="What Our Clients Say"
      description="Building trust through thirty years of excellence."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Consultation"
      title="Start Your Journey"
      description="Schedule your confidential consultation with Brunel Medical today."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Brunel Medical"
      columns={[
        {
          title: "Clinic",
          items: [
            {
              label: "About Us",
              href: "#heritage",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Brunel Medical. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
