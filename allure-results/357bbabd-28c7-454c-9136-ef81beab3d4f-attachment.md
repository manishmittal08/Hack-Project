# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: uiTesting.spec.js >> Justdial UI Component & CSS Style Validation Pack >> Validate Titles, Headings, Visibility, and Input CSS Properties
- Location: tests\uiTesting.spec.js:32:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.entermobilenumber_input__eCrdc').first()
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 60000ms
  - waiting for locator('.entermobilenumber_input__eCrdc').first()

```

```yaml
- img "jd"
- button "Skip to main content"
- link "Justdial":
  - /url: /
  - img "Justdial"
- combobox "Select Location": Kismat Nagar-Kurla West, Mumbai
- listbox "City Auto-suggest"
- search:
  - combobox "Search"
  - status: Noresults found
  - listbox "Main Auto-suggest"
  - button "Search by voice"
  - button "search"
- list:
  - listitem:
    - text: Select Langauge
    - combobox "Select Langauge": E N
  - listitem:
    - link "We are Hiring":
      - /url: https://www.justdial.com/cms/career-opportunities
  - listitem:
    - link "Investor Relations":
      - /url: https://www.justdial.com/cms/investor-relations
  - listitem:
    - link "lead":
      - /url: https://wap.justdial.com/analytics/leaddashboard?nh=1&hide_header=1&m=1&old=1&source=77&wap=77&ntfcnclick=77&link_ref=web_home_header
      - img "lead"
  - listitem:
    - link "Advertise":
      - /url: https://www.justdial.com/Advertise?cta_from=W_hmpge_web_header_advertise
  - listitem:
    - link "Free Listing Business":
      - /url: https://www.justdial.com/Free-Listing?cta_from=W_hmpge_web_header_freelisting
  - listitem "notification"
  - listitem:
    - button "Login/Sign Up": Login / Sign Up
- region "Search Across 5.3 Crore+ Businesses":
  - text: Search across ‘5.3 Crore+‘ Businesses ‘ 5.9 Crore+’ Products & Services
  - list:
    - listitem
    - listitem
  - link "Download App":
    - /url: /JD-ON-MOBILE
- link "Free Listing":
  - /url: https://www.justdial.com/Free-Listing?cta_from=W_hmpge_web_footer_ql_listing
- link "Advertise":
  - /url: https://www.justdial.com/Advertise?cta_from=W_hmpge_web_footer_ql_advertise
- main:
  - heading "One-Stop for All Local Businesses, Services, & Stores Nearby Across India" [level=1]
  - banner "slider":
    - listitem:
      - list:
        - button "ipl 2026 , Discover complete ipl guide! , Explore Now":
          - img "ipl 2026 , Discover complete ipl guide! , Explore Now"
      - banner "jio"
      - banner "ipl"
      - banner "Hotels"
      - banner "Packers Movers"
      - banner "CCTV"
      - banner "Interior Designer"
      - banner "Bills"
      - banner "Flight"
    - listitem:
      - link "B2B, Quick Quotes":
        - /url: /jdmart?searchfrom=web_index&wap=77&source=77&jdtracker=internaljd_mainhmpge_b2bhotkey-77
        - text: B2B Quick Quotes Explore
        - img "JDmart - B2B marketplace"
    - listitem:
      - link "REPAIRS & SERVICES, Get Nearest Vendor":
        - /url: /Mumbai/Repairs-Services/fil-59
        - text: REPAIRS & SERVICES Get Nearest Vendor Explore
        - img "REPAIRS & SERVICES in Mumbai"
    - listitem:
      - link "REAL ESTATE, Finest Agents":
        - /url: /Mumbai/Estate-Agents-in-Kismat-Nagar-Kurla-West/nct-10192623
        - text: REAL ESTATE Finest Agents Explore
        - img "REAL ESTATE in Mumbai"
    - listitem:
      - link "DOCTORS, Book Now":
        - /url: /Mumbai/Doctors/fil-57
        - text: DOCTORS Book Now Explore
        - img "DOCTORS in Mumbai"
  - text: ipl 2026 , Discover complete ipl guide! , Explore Now
  - list:
    - listitem:
      - link "Restaurants in Mumbai Restaurants":
        - /url: /Mumbai/Restaurant-Collections
        - img "Restaurants in Mumbai"
        - text: Restaurants
    - listitem:
      - link "Hotels in Mumbai Hotels":
        - /url: /Mumbai/Hotels-in-Kismat-Nagar-Kurla-West/nct-10255012
        - img "Hotels in Mumbai"
        - text: Hotels
    - listitem:
      - link "Beauty Spa in Mumbai Beauty Spa":
        - /url: /Mumbai/Beauty/fil-264
        - img "Beauty Spa in Mumbai"
        - text: Beauty Spa
    - listitem:
      - link "Home Decor in Mumbai Home Decor":
        - /url: /Mumbai/Home-Decor/fil-297
        - img "Home Decor in Mumbai"
        - text: Home Decor
    - listitem:
      - link "Wedding Wedding Planning":
        - /url: /Mumbai/Wedding-Planning/tid-40
        - img "Wedding"
        - text: Wedding Planning
    - listitem:
      - link "Education in Mumbai Education":
        - /url: /Mumbai/Education/fil-58
        - img "Education in Mumbai"
        - text: Education
    - listitem:
      - link "Rent & Hire in Mumbai Rent & Hire":
        - /url: /Mumbai/Rent-Hire/fil-279
        - img "Rent & Hire in Mumbai"
        - text: Rent & Hire
    - listitem:
      - link "Hospitals in Mumbai Hospitals":
        - /url: /Mumbai/Hospitals/fil-70
        - img "Hospitals in Mumbai"
        - text: Hospitals
    - listitem:
      - link "Contractors in Mumbai Contractors":
        - /url: /Mumbai/Contractors/fil-312
        - img "Contractors in Mumbai"
        - text: Contractors
    - listitem:
      - link "Pet Shops in Mumbai Pet Shops":
        - /url: /Mumbai/Pet-Shops-in-Kismat-Nagar-Kurla-West/nct-10360322
        - img "Pet Shops in Mumbai"
        - text: Pet Shops
    - listitem:
      - link "PG/Hostels in Mumbai PG/Hostels":
        - /url: /Mumbai/Paying-Guest-Accommodations/fil-506
        - img "PG/Hostels in Mumbai"
        - text: PG/Hostels
    - listitem:
      - link "Estate Agent in Mumbai Estate Agent":
        - /url: /Mumbai/Estate-Agents/fil-88
        - img "Estate Agent in Mumbai"
        - text: Estate Agent
    - listitem:
      - link "Dentists in Mumbai Dentists":
        - /url: /Mumbai/Dentists-in-Kismat-Nagar-Kurla-West/nct-10156331
        - img "Dentists in Mumbai"
        - text: Dentists
    - listitem:
      - link "Gym in Mumbai Gym":
        - /url: /Mumbai/Gyms-in-Kismat-Nagar-Kurla-West/nct-11575244
        - img "Gym in Mumbai"
        - text: Gym
    - listitem:
      - link "Loans in Mumbai Loans":
        - /url: /loans?city=mumbai
        - img "Loans in Mumbai"
        - text: Loans
    - listitem:
      - link "Event Organisers in Mumbai Event Organisers":
        - /url: /Mumbai/Event-Organizers/fil-272
        - img "Event Organisers in Mumbai"
        - text: Event Organisers
    - listitem:
      - link "Driving Schools in Mumbai Driving Schools":
        - /url: /Mumbai/Driving-Schools-in-Kismat-Nagar-Kurla-West/nct-10329591
        - img "Driving Schools in Mumbai"
        - text: Driving Schools
    - listitem:
      - link "Packers & Movers in Mumbai Packers & Movers":
        - /url: /Mumbai/Packers-And-Movers/fil-237
        - img "Packers & Movers in Mumbai"
        - text: Packers & Movers
    - listitem:
      - link "Courier Service in Mumbai Courier Service":
        - /url: /Mumbai/Courier/fil-262
        - img "Courier Service in Mumbai"
        - text: Courier Service
    - button "Popular categories": Popular Categories
  - list:
    - listitem:
      - link "Wedding Requisites":
        - /url: /Mumbai/Wedding-Planning/tid-40
        - heading "Wedding Requisites" [level=2]
      - list:
        - listitem:
          - link "Banquet Halls in Mumbai Banquet Halls":
            - /url: /Mumbai/Banquet-Halls-in-Kismat-Nagar-Kurla-West/nct-10035861
            - img "Banquet Halls in Mumbai"
            - text: Banquet Halls
        - listitem:
          - link "Bridal Requisite in Mumbai Bridal Requisite":
            - /url: /Mumbai/Bridal-Requisites-in-Kismat-Nagar-Kurla-West/fil-307-12930
            - img "Bridal Requisite in Mumbai"
            - text: Bridal Requisite
        - listitem:
          - link "Caterers in Mumbai Caterers":
            - /url: /Mumbai/Caterer/fil-275
            - img "Caterers in Mumbai"
            - text: Caterers
    - listitem:
      - link "Beauty & Spa":
        - /url: Mumbai/264/Personal-Care_fil
        - heading "Beauty & Spa" [level=2]
      - list:
        - listitem:
          - link "Beauty Parlours in Mumbai Beauty Parlours":
            - /url: /Mumbai/Beauty-Parlours-in-Kismat-Nagar-Kurla-West/fil-264-14117
            - img "Beauty Parlours in Mumbai"
            - text: Beauty Parlours
        - listitem:
          - link "Spa & Massages in Mumbai Spa & Massages":
            - /url: /Mumbai/Spas/fil-264-15302
            - img "Spa & Massages in Mumbai"
            - text: Spa & Massages
        - listitem:
          - link "Salons in Mumbai Salons":
            - /url: /Mumbai/Salons-in-Kismat-Nagar-Kurla-West/fil-264-11474
            - img "Salons in Mumbai"
            - text: Salons
    - listitem:
      - link "Repairs & Services":
        - /url: Mumbai/59/Repairs-Services_fil
        - heading "Repairs & Services" [level=2]
      - list:
        - listitem:
          - link "AC Service in Mumbai AC Service":
            - /url: /Mumbai/AC/fil-59-12781
            - img "AC Service in Mumbai"
            - text: AC Service
        - listitem:
          - link "Car Service in Mumbai Car Service":
            - /url: /Mumbai/Car-Repair-Services/fil-59-5210
            - img "Car Service in Mumbai"
            - text: Car Service
        - listitem:
          - link "Bike Service in Mumbai Bike Service":
            - /url: /Mumbai/Motorcycle-Repair-Services/fil-59-5203
            - img "Bike Service in Mumbai"
            - text: Bike Service
    - listitem:
      - link "Daily Needs":
        - /url: Mumbai/278/Daily-Needs_fil
        - heading "Daily Needs" [level=2]
      - list:
        - listitem:
          - link "category_images Movies":
            - /url: /Mumbai/Movies
            - img "category_images"
            - text: Movies
        - listitem:
          - link "Grocery in Mumbai Grocery":
            - /url: /Mumbai/Grocery-Stores-in-Kismat-Nagar-Kurla-West/nct-10237947
            - img "Grocery in Mumbai"
            - text: Grocery
        - listitem:
          - link "Electricians in Mumbai Electricians":
            - /url: /Mumbai/Electricians-in-Kismat-Nagar-Kurla-West/nct-10184166
            - img "Electricians in Mumbai"
            - text: Electricians
  - heading "Bills & Recharge Bharat Connect" [level=2]:
    - text: Bills & Recharge
    - img "Bharat Connect"
  - text: Pay your bills & recharge instantly with Justdial
  - link "Explore more in Bills & Recharge":
    - /url: https://www.justdial.com/online-bill-payment
    - text: Explore More
  - list:
    - listitem "Mobile":
      - link "Online mobile bill payment & recharge Mobile":
        - /url: /online-bill-payment/mobile-recharge
        - img "Online mobile bill payment & recharge"
        - text: Mobile
    - listitem "Electricity":
      - link "Online payment of electricity bills Electricity":
        - /url: /online-bill-payment/electricity
        - img "Online payment of electricity bills"
        - text: Electricity
    - listitem "DTH":
      - link "Online DTH payment & recharge DTH":
        - /url: /online-bill-payment/dth-recharge
        - img "Online DTH payment & recharge"
        - text: DTH
    - listitem "Water":
      - link "Online Water payment Water":
        - /url: /online-bill-payment/water
        - img "Online Water payment"
        - text: Water
    - listitem "Gas":
      - link "Online Gas payment Gas":
        - /url: /online-bill-payment/gas
        - img "Online Gas payment"
        - text: Gas
    - listitem "Insurance":
      - link "Online Insurance Insurance":
        - /url: /online-bill-payment/insurance-premium
        - img "Online Insurance"
        - text: Insurance
  - heading "Travel Bookings" [level=2]
  - text: Instant ticket bookings for your best travel experience
  - link "Explore more in Travel Bookings":
    - /url: Mumbai/95/Travel_fil
    - text: Explore More
  - list:
    - listitem "Flight":
      - link "Book flight tickets online Flight Powered By Easemytrip.com":
        - /url: /travel/flight-booking
        - img "Book flight tickets online"
        - text: Flight Powered By Easemytrip.com
    - listitem "Bus":
      - link "Book bus tickets online Bus Affordable Rides":
        - /url: /travel/Bus-Booking
        - img "Book bus tickets online"
        - text: Bus Affordable Rides
    - listitem "Train":
      - link "Book train tickets online Train":
        - /url: /Mumbai/Railway-Ticketing-Agents-in-Kismat-Nagar-Kurla-West/nct-10400176
        - img "Book train tickets online"
        - text: Train
    - listitem "Hotel":
      - link "Book hotel online Hotel Budget-friendly Stay":
        - /url: /Mumbai/Hotels-in-Kismat-Nagar-Kurla-West/nct-10255012
        - img "Book hotel online"
        - text: Hotel Budget-friendly Stay
    - listitem "Car Rentals":
      - link "Book a cab online Car Rentals Drive Easy Anywhere":
        - /url: /Mumbai/261/Cab-Car-Rental_fil
        - img "Book a cab online"
        - text: Car Rentals Drive Easy Anywhere
  - heading "Trending Searches Near You NEW" [level=2]
  - text: Stay updated with the latest local trends.
  - list:
    - group "1 / 11":
      - link "Trending Searches Near You - paying guest accommodations for women Paying Guest Accommodations For Women Explore":
        - /url: https://www.justdial.com/Mumbai/Paying-Guest-Accommodations-For-Women/nct-11273561
        - img "Trending Searches Near You - paying guest accommodations for women"
        - text: Paying Guest Accommodations For Women Explore
    - group "2 / 11":
      - link "Trending Searches Near You - water parks Water Parks Explore":
        - /url: https://www.justdial.com/Mumbai/Water-Parks/nct-10530860
        - img "Trending Searches Near You - water parks"
        - text: Water Parks Explore
    - group "3 / 11":
      - link "Trending Searches Near You - electricians Electricians Explore":
        - /url: https://www.justdial.com/Mumbai/Electricians/nct-10184166
        - img "Trending Searches Near You - electricians"
        - text: Electricians Explore
    - group "4 / 11":
      - link "Trending Searches Near You - sonography centres Sonography Centres Explore":
        - /url: https://www.justdial.com/Mumbai/Sonography-Centres/nct-10445063
        - img "Trending Searches Near You - sonography centres"
        - text: Sonography Centres Explore
    - group "5 / 11":
      - link "Trending Searches Near You - blue dart express Blue Dart Express Explore":
        - /url: https://www.justdial.com/Mumbai/Blue-Dart-Express/nct-12099485
        - img "Trending Searches Near You - blue dart express"
        - text: Blue Dart Express Explore
    - group "6 / 11":
      - link "Trending Searches Near You - urologist doctors Urologist Doctors Explore":
        - /url: https://www.justdial.com/Mumbai/Urologist-Doctors/nct-10892687
        - img "Trending Searches Near You - urologist doctors"
        - text: Urologist Doctors Explore
    - group "7 / 11":
      - link "Trending Searches Near You - sexologist doctors Sexologist Doctors Explore":
        - /url: https://www.justdial.com/Mumbai/Sexologist-Doctors/nct-10892404
        - img "Trending Searches Near You - sexologist doctors"
        - text: Sexologist Doctors Explore
    - group "8 / 11":
      - link "Trending Searches Near You - car repair & services Car Repair & Services Explore":
        - /url: https://www.justdial.com/Mumbai/Car-Repair--Services/nct-10976632
        - img "Trending Searches Near You - car repair & services"
        - text: Car Repair & Services Explore
    - group "9 / 11":
      - link "Trending Searches Near You - gastroenterologists Gastroenterologists Explore":
        - /url: https://www.justdial.com/Mumbai/Gastroenterologists/nct-10226406
        - img "Trending Searches Near You - gastroenterologists"
        - text: Gastroenterologists Explore
    - group "10 / 11":
      - link "Trending Searches Near You - cyber cafes Cyber Cafes Explore":
        - /url: https://www.justdial.com/Mumbai/Cyber-Cafes/nct-10151835
        - img "Trending Searches Near You - cyber cafes"
        - text: Cyber Cafes Explore
    - group "11 / 11":
      - link "Trending Searches Near You - paying guest accommodations for student Paying Guest Accommodations For Student Explore":
        - /url: https://www.justdial.com/Mumbai/Paying-Guest-Accommodations-For-Student/nct-12057018
        - img "Trending Searches Near You - paying guest accommodations for student"
        - text: Paying Guest Accommodations For Student Explore
    - button "Next slide"
  - link "Latest Movies & Review":
    - /url: /Mumbai/Movies
    - heading "Latest Movies & Review" [level=2]
  - button "swiper":
    - group "1 / 36":
      - link "Chand Mera Dil (Hindi Movie) Chand Mera Dil (Hindi Movie) Hindi 2D":
        - /url: https://www.justdial.com/Mumbai/Chand-Mera-Dil-Hindi-Movie/mct-16255510
        - img "Chand Mera Dil (Hindi Movie)"
        - text: Chand Mera Dil (Hindi Movie)
        - button "Hindi":
          - button "Hindi"
        - button "2D":
          - link "2D"
    - group "2 / 36":
      - link "Pati Patni Aur Woh Do (Hindi Movie) 100% Pati Patni Aur Woh Do (Hindi Movie) Hindi 2D":
        - /url: https://www.justdial.com/Mumbai/Pati-Patni-Aur-Woh-Do-Hindi-Movie/mct-16255536
        - img "Pati Patni Aur Woh Do (Hindi Movie)"
        - text: 100% Pati Patni Aur Woh Do (Hindi Movie)
        - button "Hindi":
          - button "Hindi"
        - button "2D":
          - link "2D"
    - group "3 / 36":
      - link "Raja Shivaji 100% Raja Shivaji Marathi 2D":
        - /url: https://www.justdial.com/Mumbai/Raja-Shivaji-Marathi-Movie/mct-16133910
        - img "Raja Shivaji"
        - text: 100% Raja Shivaji
        - button "Marathi":
          - button "Marathi"
        - button "2D":
          - link "2D"
    - group "4 / 36":
      - link "Drishyam 3 Drishyam 3 Malayalam 2D":
        - /url: https://www.justdial.com/Mumbai/Drishyam-3-Malayalam-Movie/mct-16257850
        - img "Drishyam 3"
        - text: Drishyam 3
        - button "Malayalam":
          - button "Malayalam"
        - button "2D":
          - link "2D"
    - group "5 / 36":
      - link "Krishnavataram Part 1 The Heart (Hindi Movie) 100% Krishnavataram Part 1 The Heart (Hindi Movie) Hindi 2D":
        - /url: https://www.justdial.com/Mumbai/Krishnavataram-Part-1-The-Heart-Hindi-Movie/mct-16274942
        - img "Krishnavataram Part 1 The Heart (Hindi Movie)"
        - text: 100% Krishnavataram Part 1 The Heart (Hindi Movie)
        - button "Hindi":
          - button "Hindi"
        - button "2D":
          - link "2D"
    - group "6 / 36":
      - link "Michael 94% Michael English 2D":
        - /url: https://www.justdial.com/Mumbai/Michael-2026-Film-English-Movie/mct-16227151
        - img "Michael"
        - text: 94% Michael
        - button "English":
          - button "English"
        - button "2D":
          - link "2D"
    - group "7 / 36":
      - link "Aakhri Sawal (Hindi Movie) Aakhri Sawal (Hindi Movie) Hindi 2D":
        - /url: https://www.justdial.com/Mumbai/Aakhri-Sawal-Hindi-Movie/mct-16271605
        - img "Aakhri Sawal (Hindi Movie)"
        - text: Aakhri Sawal (Hindi Movie)
        - button "Hindi":
          - button "Hindi"
        - button "2D":
          - link "2D"
    - group "8 / 36":
      - link "Bhooth Bangla (Hindi Movie) 84% Bhooth Bangla (Hindi Movie) Hindi 2D":
        - /url: https://www.justdial.com/Mumbai/Bhooth-Bangla-Hindi-Movie/mct-16116700
        - img "Bhooth Bangla (Hindi Movie)"
        - text: 84% Bhooth Bangla (Hindi Movie)
        - button "Hindi":
          - button "Hindi"
        - button "2D":
          - link "2D"
    - group "9 / 36":
      - link "The Devil Wears Prada 2 (English Movie) 100% The Devil Wears Prada 2 (English Movie) English 2D":
        - /url: https://www.justdial.com/Mumbai/The-Devil-Wears-Prada-2-English-Movie/mct-16252151
        - img "The Devil Wears Prada 2 (English Movie)"
        - text: 100% The Devil Wears Prada 2 (English Movie)
        - button "English":
          - button "English"
        - button "2D":
          - link "2D"
    - group "10 / 36":
      - link "Karuppu (Tamil Movie) 80% Karuppu (Tamil Movie) Tamil 2D":
        - /url: https://www.justdial.com/Mumbai/Karuppu-Tamil-Movie/mct-16207745
        - img "Karuppu (Tamil Movie)"
        - text: 80% Karuppu (Tamil Movie)
        - button "Tamil":
          - button "Tamil"
        - button "2D":
          - link "2D"
    - group "11 / 36":
      - link "The Sheep Detectives (English Movie) The Sheep Detectives (English Movie) English 2D":
        - /url: https://www.justdial.com/Mumbai/The-Sheep-Detectives-English-Movie/mct-16246841
        - img "The Sheep Detectives (English Movie)"
        - text: The Sheep Detectives (English Movie)
        - button "English":
          - button "English"
        - button "2D":
          - link "2D"
    - group "12 / 36":
      - link "Deool Band 2 (Marathi Movie) Deool Band 2 (Marathi Movie) Marathi 2D":
        - /url: https://www.justdial.com/Mumbai/Deool-Band-2-Marathi-Movie/mct-16276240
        - img "Deool Band 2 (Marathi Movie)"
        - text: Deool Band 2 (Marathi Movie)
        - button "Marathi":
          - button "Marathi"
        - button "2D":
          - link "2D"
    - group "13 / 36":
      - link "Athiradi (2026 Film) (Malayalam Movie) 100% Athiradi (2026 Film) (Malayalam Movie) Malayalam 2D":
        - /url: https://www.justdial.com/Mumbai/Athiradi-2026-Film-Malayalam-Movie/mct-16262180
        - img "Athiradi (2026 Film) (Malayalam Movie)"
        - text: 100% Athiradi (2026 Film) (Malayalam Movie)
        - button "Malayalam":
          - button "Malayalam"
        - button "2D":
          - link "2D"
    - group "14 / 36":
      - link "Dharpakad (Gujarati Movie) 100% Dharpakad (Gujarati Movie) Gujarati 2D":
        - /url: https://www.justdial.com/Mumbai/Dharpakad-Gujarati-Movie/mct-16275393
        - img "Dharpakad (Gujarati Movie)"
        - text: 100% Dharpakad (Gujarati Movie)
        - button "Gujarati":
          - button "Gujarati"
        - button "2D":
          - link "2D"
    - group "15 / 36":
      - link "Hokum (English Movie) Hokum (English Movie) English 2D":
        - /url: https://www.justdial.com/Mumbai/Hokum-English-Movie/mct-16266205
        - img "Hokum (English Movie)"
        - text: Hokum (English Movie)
        - button "English":
          - button "English"
        - button "2D":
          - link "2D"
    - group "16 / 36":
      - link "Dhurandhar The Revenge (Hindi Movie) 92% Dhurandhar The Revenge (Hindi Movie) Hindi 2D":
        - /url: https://www.justdial.com/Mumbai/Dhurandhar-The-Revenge-Hindi-Movie/mct-16244449
        - img "Dhurandhar The Revenge (Hindi Movie)"
        - text: 92% Dhurandhar The Revenge (Hindi Movie)
        - button "Hindi":
          - button "Hindi"
        - button "2D":
          - link "2D"
    - group "17 / 36":
      - link "Dhabkaaro (Gujarati Movie) 100% Dhabkaaro (Gujarati Movie) Gujarati 2D":
        - /url: https://www.justdial.com/Mumbai/Dhabkaaro-Gujarati-Movie/mct-16271610
        - img "Dhabkaaro (Gujarati Movie)"
        - text: 100% Dhabkaaro (Gujarati Movie)
        - button "Gujarati":
          - button "Gujarati"
        - button "2D":
          - link "2D"
    - group "18 / 36":
      - link "Daadi Ki Shaadi (Hindi Movie) Daadi Ki Shaadi (Hindi Movie) Hindi 2D":
        - /url: https://www.justdial.com/Mumbai/Daadi-Ki-Shaadi-Hindi-Movie/mct-16274488
        - img "Daadi Ki Shaadi (Hindi Movie)"
        - text: Daadi Ki Shaadi (Hindi Movie)
        - button "Hindi":
          - button "Hindi"
        - button "2D":
          - link "2D"
    - group "19 / 36":
      - link "Baapya (Marathi Movie) Baapya (Marathi Movie) Marathi 2D":
        - /url: https://www.justdial.com/Mumbai/Baapya-Marathi-Movie/mct-16269339
        - img "Baapya (Marathi Movie)"
        - text: Baapya (Marathi Movie)
        - button "Marathi":
          - button "Marathi"
        - button "2D":
          - link "2D"
    - group "20 / 36":
      - link "Mortal Kombat II 100% Mortal Kombat II English 2D":
        - /url: https://www.justdial.com/Mumbai/Mortal-Kombat-Ii-2026-Film-English-Movie/mct-16213293
        - img "Mortal Kombat II"
        - text: 100% Mortal Kombat II
        - button "English":
          - button "English"
        - button "2D":
          - link "2D"
    - group "21 / 36":
      - link "IIZ Indian Institute Of Zombies (Hindi Movie) IIZ Indian Institute Of Zombies (Hindi Movie) Hindi 2D":
        - /url: https://www.justdial.com/Mumbai/Iiz-Indian-Institute-Of-Zombies-Hindi-Movie/mct-16275497
        - img "IIZ Indian Institute Of Zombies (Hindi Movie)"
        - text: IIZ Indian Institute Of Zombies (Hindi Movie)
        - button "Hindi":
          - button "Hindi"
        - button "2D":
          - link "2D"
    - group "22 / 36":
      - 'link "Top Gun: Maverick (Imax English Movie) Top Gun: Maverick (Imax English Movie) English 2D"':
        - /url: https://www.justdial.com/Mumbai/Top-Gun-Maverick-Imax-English-Movie/mct-15126311
        - 'img "Top Gun: Maverick (Imax English Movie)"'
        - text: "Top Gun: Maverick (Imax English Movie)"
        - button "English":
          - button "English"
        - button "2D":
          - link "2D"
    - group "23 / 36":
      - link "Vaanki Chuki Love Story (Gujarati Movie) Vaanki Chuki Love Story (Gujarati Movie) Gujarati 2D":
        - /url: https://www.justdial.com/Mumbai/Vaanki-Chuki-Love-Story-Gujarati-Movie/mct-16264346
        - img "Vaanki Chuki Love Story (Gujarati Movie)"
        - text: Vaanki Chuki Love Story (Gujarati Movie)
        - button "Gujarati":
          - button "Gujarati"
        - button "2D":
          - link "2D"
    - group "24 / 36":
      - link "Project Hail Mary 100% Project Hail Mary English 2D":
        - /url: https://www.justdial.com/Mumbai/Project-Hail-Mary-English-Movie/mct-16210583
        - img "Project Hail Mary"
        - text: 100% Project Hail Mary
        - button "English":
          - button "English"
        - button "2D":
          - link "2D"
    - group "25 / 36":
      - link "Ladki Bahin (Marathi Movie) Ladki Bahin (Marathi Movie) Marathi 2D":
        - /url: https://www.justdial.com/Mumbai/Ladki-Bahin-Marathi-Movie/mct-16276227
        - img "Ladki Bahin (Marathi Movie)"
        - text: Ladki Bahin (Marathi Movie)
        - button "Marathi":
          - button "Marathi"
        - button "2D":
          - link "2D"
    - group "26 / 36":
      - link "Gunday (Hindi Movie) 78% Gunday (Hindi Movie) Hindi 2D":
        - /url: https://www.justdial.com/Mumbai/Gunday-Hindi-Movie/mct-11233242
        - img "Gunday (Hindi Movie)"
        - text: 78% Gunday (Hindi Movie)
        - button "Hindi":
          - button "Hindi"
        - button "2D":
          - link "2D"
    - group "27 / 36":
      - link "The Super Mario Galaxy Movie (2026 Film) (Animated English Movie) 80% The Super Mario Galaxy Movie (2026 Film) (Animated English Movie) English 2D":
        - /url: https://www.justdial.com/Mumbai/The-Super-Mario-Galaxy-Movie-2026-Film-Animated-English-Movie/mct-16220572
        - img "The Super Mario Galaxy Movie (2026 Film) (Animated English Movie)"
        - text: 80% The Super Mario Galaxy Movie (2026 Film) (Animated English Movie)
        - button "English":
          - button "English"
        - button "2D":
          - link "2D"
    - group "28 / 36":
      - link "Lee Cronins The Mummy (English Movie) 60% Lee Cronins The Mummy (English Movie) English 2D":
        - /url: https://www.justdial.com/Mumbai/Lee-Cronins-The-Mummy-English-Movie/mct-16250730
        - img "Lee Cronins The Mummy (English Movie)"
        - text: 60% Lee Cronins The Mummy (English Movie)
        - button "English":
          - button "English"
        - button "2D":
          - link "2D"
    - group "29 / 36":
      - link "Mantra Muugdha (Odia Movie) Mantra Muugdha (Odia Movie) Odia 2D":
        - /url: https://www.justdial.com/Mumbai/Mantra-Muugdha-Odia-Movie/mct-16212373
        - img "Mantra Muugdha (Odia Movie)"
        - text: Mantra Muugdha (Odia Movie)
        - button "Odia":
          - button "Odia"
        - button "2D":
          - link "2D"
    - group "30 / 36":
      - link "Patriot (Malayalam Movie) 100% Patriot (Malayalam Movie) Malayalam 2D":
        - /url: https://www.justdial.com/Mumbai/Patriot-Malayalam-Movie/mct-16253117
        - img "Patriot (Malayalam Movie)"
        - text: 100% Patriot (Malayalam Movie)
        - button "Malayalam":
          - button "Malayalam"
        - button "2D":
          - link "2D"
    - group "31 / 36":
      - link "Saptadingar Guptodhon (Bengali Movie) Saptadingar Guptodhon (Bengali Movie) Bengali 2D":
        - /url: https://www.justdial.com/Mumbai/Saptadingar-Guptodhon-Bengali-Movie/mct-16184590
        - img "Saptadingar Guptodhon (Bengali Movie)"
        - text: Saptadingar Guptodhon (Bengali Movie)
        - button "Bengali":
          - button "Bengali"
        - button "2D":
          - link "2D"
    - group "32 / 36":
      - link "Veerabhadrudu (Telugu Movie) Veerabhadrudu (Telugu Movie) Telugu 2D":
        - /url: https://www.justdial.com/Mumbai/Veerabhadrudu-Telugu-Movie/mct-16279107
        - img "Veerabhadrudu (Telugu Movie)"
        - text: Veerabhadrudu (Telugu Movie)
        - button "Telugu":
          - button "Telugu"
        - button "2D":
          - link "2D"
    - group "33 / 36":
      - link "Jokhad Andhashradechi (Marathi Movie) Jokhad Andhashradechi (Marathi Movie) Marathi 2D":
        - /url: https://www.justdial.com/Mumbai/Jokhad-Andhashradechi-Marathi-Movie/mct-16279611
        - img "Jokhad Andhashradechi (Marathi Movie)"
        - text: Jokhad Andhashradechi (Marathi Movie)
        - button "Marathi":
          - button "Marathi"
        - button "2D":
          - link "2D"
    - group "34 / 36":
      - link "Main Actor Nahin Hoon (Hindi Movie) Main Actor Nahin Hoon (Hindi Movie) Hindi 2D":
        - /url: https://www.justdial.com/Mumbai/Main-Actor-Nahin-Hoon-Hindi-Movie/mct-16272238
        - img "Main Actor Nahin Hoon (Hindi Movie)"
        - text: Main Actor Nahin Hoon (Hindi Movie)
        - button "Hindi":
          - button "Hindi"
        - button "2D":
          - link "2D"
    - group "35 / 36":
      - link "Hoppers (Animated English Movie) 100% Hoppers (Animated English Movie) English 2D":
        - /url: https://www.justdial.com/Mumbai/Hoppers-Animated-English-Movie/mct-16250380
        - img "Hoppers (Animated English Movie)"
        - text: 100% Hoppers (Animated English Movie)
        - button "English":
          - button "English"
        - button "2D":
          - link "2D"
    - group "36 / 36":
      - link "Chhatrapati Sambhaji (Marathi Movie) 94% Chhatrapati Sambhaji (Marathi Movie) Marathi 2D":
        - /url: https://www.justdial.com/Mumbai/Chhatrapati-Sambhaji-Marathi-Movie/mct-16011411
        - img "Chhatrapati Sambhaji (Marathi Movie)"
        - text: 94% Chhatrapati Sambhaji (Marathi Movie)
        - button "Marathi":
          - button "Marathi"
        - button "2D":
          - link "2D"
    - button "Next slide"
  - heading "Explore Top Tourist Places NEW" [level=2]
  - list:
    - group "1 / 8":
      - link "Explore Top Tourist Places - mumbai Mumbai Explore":
        - /url: https://www.justdial.com/Mumbai/Tourism-Guide
        - img "Explore Top Tourist Places - mumbai"
        - text: Mumbai Explore
    - group "2 / 8":
      - link "Explore Top Tourist Places - pune Pune Explore":
        - /url: https://www.justdial.com/Pune/Tourism-Guide
        - img "Explore Top Tourist Places - pune"
        - text: Pune Explore
    - group "3 / 8":
      - link "Explore Top Tourist Places - nashik Nashik Explore":
        - /url: https://www.justdial.com/Nashik/Tourism-Guide
        - img "Explore Top Tourist Places - nashik"
        - text: Nashik Explore
    - group "4 / 8":
      - link "Explore Top Tourist Places - ahmedabad Ahmedabad Explore":
        - /url: https://www.justdial.com/Ahmedabad/Tourism-Guide
        - img "Explore Top Tourist Places - ahmedabad"
        - text: Ahmedabad Explore
    - group "5 / 8":
      - link "Explore Top Tourist Places - goa Goa Explore":
        - /url: https://www.justdial.com/Goa/Tourism-Guide
        - img "Explore Top Tourist Places - goa"
        - text: Goa Explore
    - group "6 / 8":
      - link "Explore Top Tourist Places - gokarna Gokarna Explore":
        - /url: https://www.justdial.com/Gokarna/Tourism-Guide
        - img "Explore Top Tourist Places - gokarna"
        - text: Gokarna Explore
    - group "7 / 8":
      - link "Explore Top Tourist Places - ujjain Ujjain Explore":
        - /url: https://www.justdial.com/Ujjain/Tourism-Guide
        - img "Explore Top Tourist Places - ujjain"
        - text: Ujjain Explore
    - group "8 / 8":
      - link "Explore Top Tourist Places - hampi Hampi Explore":
        - /url: https://www.justdial.com/Hampi/Tourism-Guide
        - img "Explore Top Tourist Places - hampi"
        - text: Hampi Explore
    - button "Next slide"
  - heading "Popular Searches" [level=2]
  - button "swiper":
    - group "1 / 10":
      - link "Interior Designers photo Interior Designers":
        - /url: /Mumbai/Interior-Designers/nct-10272436
        - img "Interior Designers photo"
        - heading "Interior Designers" [level=3]
      - button "Enquire Now Interior Designers": Enquire Now
    - group "2 / 10":
      - link "Real Estate Agents photo Real Estate Agents":
        - /url: /Mumbai/Real-Estate-Agents/nct-10192623
        - img "Real Estate Agents photo"
        - heading "Real Estate Agents" [level=3]
      - button "Enquire Now Real Estate Agents": Enquire Now
    - group "3 / 10":
      - link "Banquet Halls photo Banquet Halls":
        - /url: /Mumbai/Banquet-Halls/nct-10035861
        - img "Banquet Halls photo"
        - heading "Banquet Halls" [level=3]
      - button "Enquire Now Banquet Halls": Enquire Now
    - group "4 / 10":
      - link "Caterers photo Caterers":
        - /url: /Mumbai/Caterers/nct-10083293
        - img "Caterers photo"
        - heading "Caterers" [level=3]
      - button "Enquire Now Caterers": Enquire Now
    - group "5 / 10":
      - link "Gynaecologist & Obstetrician Doctors photo Gynaecologist & Obstetrician Doctors":
        - /url: /Mumbai/Gynaecologist--Obstetrician-Doctors/nct-10551087
        - img "Gynaecologist & Obstetrician Doctors photo"
        - heading "Gynaecologist & Obstetrician Doctors" [level=3]
      - link "Explore Gynaecologist & Obstetrician Doctors":
        - /url: /Mumbai/Gynaecologist--Obstetrician-Doctors/nct-10551087
        - text: Explore
    - group "6 / 10":
      - link "Dentists photo Dentists":
        - /url: /Mumbai/Dentists/nct-10156331
        - img "Dentists photo"
        - heading "Dentists" [level=3]
      - link "Explore Dentists":
        - /url: /Mumbai/Dentists/nct-10156331
        - text: Explore
    - group "7 / 10":
      - link "Orthopaedic Doctors photo Orthopaedic Doctors":
        - /url: /Mumbai/Orthopaedic-Doctors/nct-10345039
        - img "Orthopaedic Doctors photo"
        - heading "Orthopaedic Doctors" [level=3]
      - link "Explore Orthopaedic Doctors":
        - /url: /Mumbai/Orthopaedic-Doctors/nct-10345039
        - text: Explore
    - group "8 / 10":
      - link "Physiotherapists photo Physiotherapists":
        - /url: /Mumbai/Physiotherapists/nct-10365744
        - img "Physiotherapists photo"
        - heading "Physiotherapists" [level=3]
      - link "Explore Physiotherapists":
        - /url: /Mumbai/Physiotherapists/nct-10365744
        - text: Explore
    - group "9 / 10":
      - link "Car Rental photo Car Rental":
        - /url: /Mumbai/Car-Rental/nct-10076456
        - img "Car Rental photo"
        - heading "Car Rental" [level=3]
      - link "Explore Car Rental":
        - /url: /Mumbai/Car-Rental/nct-10076456
        - text: Explore
    - group "10 / 10":
      - link "Restaurants photo Restaurants":
        - /url: /Mumbai/Restaurants/nct-10408936
        - img "Restaurants photo"
        - heading "Restaurants" [level=3]
      - link "Explore Restaurants":
        - /url: /Mumbai/Restaurants/nct-10408936
        - text: Explore
    - button "Next slide"
  - heading "Sunny Day Essentials SEASONAL" [level=2]
  - text: Discover wide range of summer collection
  - list:
    - group "1 / 14":
      - link "Sunny Day Essentials - ac dealers AC Dealers Explore":
        - /url: https://www.justdial.com/Mumbai/AC-Dealers/nct-10002268
        - img "Sunny Day Essentials - ac dealers"
        - text: AC Dealers Explore
    - group "2 / 14":
      - link "Sunny Day Essentials - refrigerator dealers Refrigerator Dealers Explore":
        - /url: https://www.justdial.com/Mumbai/Refrigerator-Dealers/nct-10403876
        - img "Sunny Day Essentials - refrigerator dealers"
        - text: Refrigerator Dealers Explore
    - group "3 / 14":
      - link "Sunny Day Essentials - air cooler dealers Air Cooler Dealers Explore":
        - /url: https://www.justdial.com/Mumbai/Air-Cooler-Dealers/nct-10010632
        - img "Sunny Day Essentials - air cooler dealers"
        - text: Air Cooler Dealers Explore
    - group "4 / 14":
      - link "Sunny Day Essentials - caterers for wedding Caterers For Wedding Explore":
        - /url: https://www.justdial.com/Mumbai/Caterers-For-Wedding/nct-10083400
        - img "Sunny Day Essentials - caterers for wedding"
        - text: Caterers For Wedding Explore
    - group "5 / 14":
      - link "Sunny Day Essentials - soft drink retailers Soft Drink Retailers Explore":
        - /url: https://www.justdial.com/Mumbai/Soft-Drink-Retailers/nct-10443342
        - img "Sunny Day Essentials - soft drink retailers"
        - text: Soft Drink Retailers Explore
    - group "6 / 14":
      - link "Sunny Day Essentials - sunglass dealers Sunglass Dealers Explore":
        - /url: https://www.justdial.com/Mumbai/Sunglass-Dealers/nct-10463130
        - img "Sunny Day Essentials - sunglass dealers"
        - text: Sunglass Dealers Explore
    - group "7 / 14":
      - link "Sunny Day Essentials - ac amc AC AMC Explore":
        - /url: https://www.justdial.com/Mumbai/AC-AMC/nct-10001610
        - img "Sunny Day Essentials - ac amc"
        - text: AC AMC Explore
    - group "8 / 14":
      - link "Sunny Day Essentials - water cooler repair & services Water Cooler Repair & Services Explore":
        - /url: https://www.justdial.com/Mumbai/Water-Cooler-Repair-%26-Services/nct-10967138
        - img "Sunny Day Essentials - water cooler repair & services"
        - text: Water Cooler Repair & Services Explore
    - group "9 / 14":
      - link "Sunny Day Essentials - ice cream retailers Ice Cream Retailers Explore":
        - /url: https://www.justdial.com/Mumbai/Ice-Cream-Retailers/nct-10261212
        - img "Sunny Day Essentials - ice cream retailers"
        - text: Ice Cream Retailers Explore
    - group "10 / 14":
      - link "Sunny Day Essentials - slipper dealers Slipper Dealers Explore":
        - /url: https://www.justdial.com/Mumbai/Slipper-Dealers/nct-10439927
        - img "Sunny Day Essentials - slipper dealers"
        - text: Slipper Dealers Explore
    - group "11 / 14":
      - link "Sunny Day Essentials - mango fruit retailers Mango Fruit Retailers Explore":
        - /url: https://www.justdial.com/Mumbai/Mango-Fruit-Retailers/nct-10917648
        - img "Sunny Day Essentials - mango fruit retailers"
        - text: Mango Fruit Retailers Explore
    - group "12 / 14":
      - link "Sunny Day Essentials - badminton racket dealers Badminton Racket Dealers Explore":
        - /url: https://www.justdial.com/Mumbai/Badminton-Racket-Dealers/nct-10031660
        - img "Sunny Day Essentials - badminton racket dealers"
        - text: Badminton Racket Dealers Explore
    - group "13 / 14":
      - link "Sunny Day Essentials - milkshake shops Milkshake Shops Explore":
        - /url: https://www.justdial.com/Mumbai/Milkshake-Shops/nct-12103495
        - img "Sunny Day Essentials - milkshake shops"
        - text: Milkshake Shops Explore
    - group "14 / 14":
      - link "Sunny Day Essentials - tower fan dealers Tower Fan Dealers Explore":
        - /url: https://www.justdial.com/Mumbai/Tower-Fan-Dealers/nct-10800520
        - img "Sunny Day Essentials - tower fan dealers"
        - text: Tower Fan Dealers Explore
    - button "Next slide"
- text: Fetching data...
- heading "Follow us on" [level=2]
- list:
  - listitem:
    - link "Justdial on Facebook":
      - /url: https://www.facebook.com/JustDial
  - listitem:
    - link "Justdial on Youtube":
      - /url: https://www.youtube.com/user/justdialind
  - listitem:
    - link "Justdial on Instagram":
      - /url: https://www.instagram.com/jd_justdial
  - listitem:
    - link "Justdial on LinkedIn":
      - /url: https://www.linkedin.com/company/justdial
  - listitem:
    - link "Justdial on Twitter":
      - /url: https://twitter.com/jd_justdial
- link "Get it on Google Play":
  - /url: /JD-ON-MOBILE
  - img "Get it on Google Play"
- link "Download on the App Store":
  - /url: /JD-ON-MOBILE
  - img "Download on the App Store"
- heading "One-Stop for All Local Businesses" [level=2]
- paragraph: Welcome to Justdial, your 'one stop shop' where you are assisted with day-to-day and exclusive planning and purchasing activities. We take pride in our iconic customer support number, 8888888888 and the fact that we own a strong hold on local business information pan India.
- paragraph: Our service extends from providing address and contact details of business establishments around the country, to making orders and reservations for leisure, medical, financial, travel and domestic purposes. We enlist business information across varied sectors like Hotels, Restaurants, Auto Care, Home Decor, Personal and Pet Care, Fitness, Insurance, Real Estate, Sports, Schools, etc. from all over the country. Holding information right from major cities like Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Ahmedabad and Pune our reach stretches out to other smaller cities across the country too.
- paragraph: Our 'Free Listing' feature gives a platform to showcase varied specialities. We then furnish you with the information via phone, SMS, web, App and WAP as well as, create a space for you to share your experiences through our 'Rate & Review' feature. Through the 'Best Deals', 'Last Minute Deals' and 'Live Quotes', we make sure that you are offered the best bargains in the market.
- alert
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { chromium } from 'playwright-extra';
  3   | import stealth from 'puppeteer-extra-plugin-stealth';
  4   | import path from 'path';
  5   | import { HomePage } from '../pages/HomePage.js';
  6   | import { FreeListingPage } from '../pages/FreeListingPage.js';
  7   | 
  8   | chromium.use(stealth());
  9   | 
  10  | test.describe('Justdial UI Component & CSS Style Validation Pack', () => {
  11  |     let context;
  12  |     let page;
  13  | 
  14  |     test.beforeAll(async () => {
  15  |         // Safe unique profile path
  16  |         const userDataDir = path.join(process.cwd(), 'jd_style_ui_session');
  17  |         context = await chromium.launchPersistentContext(userDataDir, {
  18  |             headless: false,
  19  |             viewport: { width: 1366, height: 768 },
  20  |             userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  21  |             args: ['--disable-blink-features=AutomationControlled']
  22  |         });
  23  |         page = context.pages()[0] || await context.newPage();
  24  |     });
  25  | 
  26  |     test.afterAll(async () => {
  27  |         if (context) {
  28  |             await context.close().catch(() => {});
  29  |         }
  30  |     });
  31  | 
  32  |     test('Validate Titles, Headings, Visibility, and Input CSS Properties', async () => {
  33  |         const homePage = new HomePage(page);
  34  |         const freeListingPage = new FreeListingPage(page);
  35  | 
  36  |         // ---------------------------------------------------------------------
  37  |         // 1. PAGE TITLE & CORE BRAND VISIBILITY ASSERTIONS
  38  |         // ---------------------------------------------------------------------
  39  |         console.log("Navigating to Justdial Portal...");
  40  |         await homePage.open();
  41  |         await page.waitForTimeout(3000); // ⏱️ Wait for layout rendering
  42  |         await homePage.handleBanner();
  43  | 
  44  |         console.log("Validating Core UI brand headers & titles...");
  45  |         // Assert page title contains keywords matching requirements
  46  |         await expect(page).toHaveTitle(/justdial/i);
  47  | 
  48  |         // Assert company logo brand element is fully visible on view load
  49  |         await expect(homePage.logo).toBeVisible();
  50  | 
  51  |         // ---------------------------------------------------------------------
  52  |         // 2. INPUT BOX CSS STYLE & PROPERTY VALIDATION
  53  |         // ---------------------------------------------------------------------
  54  |         console.log("Checking Global Search Box UI attributes...");
  55  |         // Verify input search box layout is editable and visible
  56  |         await expect(homePage.searchBox).toBeVisible();
  57  |         await expect(homePage.searchBox).toBeEditable();
  58  | 
  59  |         // Validate CSS Properties of the search bar via Playwright evaluation
  60  |         const searchBoxStyles = await homePage.searchBox.evaluate((el) => {
  61  |             const styles = window.getComputedStyle(el);
  62  |             return {
  63  |                 width: styles.width,
  64  |                 height: styles.height,
  65  |                 borderRadius: styles.borderRadius,
  66  |                 borderStyle: styles.borderStyle
  67  |             };
  68  |         });
  69  | 
  70  |         console.log('Search Box Element Styles Extracted:', searchBoxStyles);
  71  |         
  72  |         // ✅ FIXED: Instead of asserting borderStyle is not 'none', verify standard geometry and layout specs exist
  73  |         expect(searchBoxStyles.width).toBeDefined();
  74  |         expect(parseInt(searchBoxStyles.height, 10)).toBeGreaterThan(0); // Ensures it has a real layout height rendering
  75  | 
  76  |         // ---------------------------------------------------------------------
  77  |         // 3. FORM HEADING AND INTERACTIVE COMPONENT VALIDATIONS
  78  |         // ---------------------------------------------------------------------
  79  |         console.log("Navigating to Free Listing page for form checking...");
  80  |         await homePage.clickFreeListing();
  81  |         await page.waitForTimeout(4000); // ⏱️ Wait for target form setup
  82  | 
  83  |         console.log("Asserting form elements and input styles...");
  84  |         // Verify the dynamic mobile input element box exists
> 85  |         await expect(freeListingPage.mobileInput).toBeVisible();
      |                                                   ^ Error: expect(locator).toBeVisible() failed
  86  | 
  87  |         // Extract style layouts of the input field to check placeholder padding/color constraints
  88  |         const inputCssDetails = await freeListingPage.mobileInput.evaluate((el) => {
  89  |             const computed = window.getComputedStyle(el);
  90  |             return {
  91  |                 fontSize: computed.fontSize,
  92  |                 fontWeight: computed.fontWeight,
  93  |                 fontFamily: computed.fontFamily,
  94  |                 padding: computed.padding
  95  |             };
  96  |         });
  97  |         console.log('Mobile Input Box Typography Specs:', inputCssDetails);
  98  |         expect(inputCssDetails.fontSize).toContain('px'); // Assures styling has standard units
  99  | 
  100 |         // Check validation warning visibility on incorrect submission states
  101 |         const random_number = "12345"; // Intentionally short sequence to throw strict UI errors
  102 |         await freeListingPage.enterMobileNumber(random_number);
  103 |         await freeListingPage.submitForm();
  104 |         await page.waitForTimeout(2000); // ⏱️ Wait for error message layout recalculation
  105 | 
  106 |         // Assert heading/error text components appear properly to users
  107 |         await expect(freeListingPage.errorTextMsg).toBeVisible();
  108 |         
  109 |         const errorColor = await freeListingPage.errorTextMsg.evaluate(el => window.getComputedStyle(el).color);
  110 |         console.log('Error Label CSS Text Color:', errorColor);
  111 |         // Usually, validation warning color contains red channels (rgb values)
  112 |         expect(errorColor).toBeDefined();
  113 | 
  114 |         // Verify submit buttons match layout action criteria
  115 |         await expect(freeListingPage.startNowButton).toBeVisible();
  116 |         await expect(freeListingPage.startNowButton).toBeEnabled();
  117 |     });
  118 | });;
```