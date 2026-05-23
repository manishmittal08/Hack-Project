# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: justdial_hackathon.spec.js >> Justdial - Continuous Integrated E2E POM Flow
- Location: tests\justdial_hackathon.spec.js:12:1

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - img "jd"
  - generic [ref=e3]:
    - button "Skip to main content" [ref=e4] [cursor=pointer]
    - generic [ref=e6]:
      - link "Justdial" [ref=e9] [cursor=pointer]:
        - /url: /
        - img "Justdial" [ref=e10]
      - generic [ref=e12]:
        - combobox "Select Location" [ref=e16]: Kismat Nagar Kurla West, Mumbai
        - search [ref=e18]:
          - generic [ref=e19]:
            - generic [ref=e20]:
              - combobox "Search" [ref=e21]: Gyms Near Me Near Kismat Nagar Kurla West
              - status [ref=e22]: Noresults found
              - listbox "Main Auto-suggest"
            - button "close" [ref=e23] [cursor=pointer]
            - button "Search by voice" [ref=e24] [cursor=pointer]
            - button "search" [ref=e25] [cursor=pointer]
      - list [ref=e29]:
        - listitem [ref=e30]:
          - generic [ref=e31]: Select Langauge
          - combobox "Select Langauge" [ref=e32] [cursor=pointer]:
            - generic [ref=e33]: E N
        - listitem [ref=e34]:
          - link "lead" [ref=e35] [cursor=pointer]:
            - /url: https://wap.justdial.com/analytics/leaddashboard?nh=1&hide_header=1&m=1&old=1&source=77&wap=77&ntfcnclick=77&link_ref=web_rsltpge_header
            - img "lead" [ref=e36]
        - listitem [ref=e37]:
          - link "Advertise" [ref=e38] [cursor=pointer]:
            - /url: https://www.justdial.com/Advertise?cta_from=W_hmpge_web_header_advertise
            - generic [ref=e40]: Advertise
        - listitem [ref=e41]:
          - link "Free Listing Business" [ref=e42] [cursor=pointer]:
            - /url: https://www.justdial.com/Free-Listing?cta_from=W_hmpge_web_header_freelisting
            - generic [ref=e44]: Free Listing
            - generic [ref=e45]: Business
        - listitem "notification" [ref=e46]
        - listitem [ref=e49]:
          - button "Login/Sign Up" [ref=e50] [cursor=pointer]:
            - generic [ref=e51]: Login / Sign Up
    - generic [ref=e52]:
      - link "Free Listing" [ref=e53] [cursor=pointer]:
        - /url: https://www.justdial.com/Free-Listing?cta_from=W_hmpge_web_footer_ql_listing
      - link "Advertise" [ref=e54] [cursor=pointer]:
        - /url: https://www.justdial.com/Advertise?cta_from=W_hmpge_web_footer_ql_advertise
    - generic [ref=e56]:
      - list [ref=e60]:
        - listitem [ref=e61]:
          - link "Show slide 0 of 7 R7" [ref=e62] [cursor=pointer]:
            - /url: /Mumbai/Power-Point-Gym-Opp-Kls-Memorial-Hospital-Vile-Parle-West/022PXX22-XX22-201203125427-L5K9_BZDET?ncatid=11575244&area=Kismat%20Nagar%20Kurla%20West&search=Gyms-Near-Me-in-Kismat-Nagar-Kurla-West&mncatname=Gyms
            - generic "Show slide 0 of 7" [ref=e63]:
              - img "Power Point Gym" [ref=e64]
            - generic [ref=e65]: R7
      - generic [ref=e67]:
        - navigation "Bread crumbs" [ref=e68]:
          - list [ref=e71]:
            - listitem [ref=e72]:
              - link "Mumbai" [ref=e73] [cursor=pointer]:
                - /url: https://www.justdial.com/Mumbai
            - listitem [ref=e74]:
              - link "Gyms in Mumbai" [ref=e75] [cursor=pointer]:
                - /url: https://www.justdial.com/Mumbai/Gyms/nct-11575244
            - listitem [ref=e76]:
              - link "Gyms in Kismat Nagar Kurla West" [ref=e77] [cursor=pointer]:
                - /url: https://www.justdial.com/Mumbai/Gyms-in-Kismat-Nagar-Kurla-West/nct-11575244
            - listitem:
              - link "93+ Listings":
                - /url: https://www.justdial.com/Mumbai/Gyms-in-Kismat-Nagar-Kurla-West/nct-11575244?#listings
        - heading "Popular Gyms in Kismat Nagar Kurla West, Mumbai" [level=1] [ref=e79]
      - navigation [ref=e84]:
        - list [ref=e85]:
          - listitem [ref=e86] [cursor=pointer]:
            - combobox "Sort by" [ref=e87]:
              - generic [ref=e88]: Sort by
          - listitem [ref=e90] [cursor=pointer]:
            - combobox "Amenities" [ref=e91]:
              - generic [ref=e92]: Amenities
          - listitem [ref=e94] [cursor=pointer]:
            - combobox "Open Now" [ref=e95]:
              - generic [ref=e96]: Open Now
          - listitem [ref=e97] [cursor=pointer]:
            - combobox [active] [ref=e98]:
              - generic [ref=e99]: Fitness Options
              - generic [ref=e101]: Gym
          - listitem [ref=e103] [cursor=pointer]:
            - combobox "Top Rated" [ref=e104]:
              - img "filter" [ref=e106]
              - generic [ref=e107]: Top Rated
          - listitem [ref=e108] [cursor=pointer]:
            - combobox "Quick Response" [ref=e109]:
              - img "filter" [ref=e111]
              - generic [ref=e112]: Quick Response
          - listitem [ref=e113] [cursor=pointer]:
            - combobox "Jd Verified" [ref=e114]:
              - img "filter" [ref=e116]
              - generic [ref=e117]: Jd Verified
          - listitem [ref=e118] [cursor=pointer]:
            - combobox "Ratings" [ref=e119]:
              - generic [ref=e120]: Ratings
          - listitem [ref=e122] [cursor=pointer]:
            - combobox "Deals" [ref=e123]:
              - img "filter" [ref=e125]
              - generic [ref=e126]: Deals
          - listitem [ref=e127] [cursor=pointer]:
            - combobox "Jd Trust" [ref=e128]:
              - img "filter" [ref=e130]
              - generic [ref=e131]: Jd Trust
          - listitem [ref=e132] [cursor=pointer]:
            - button "All Filters" [ref=e133]:
              - generic [ref=e134]: All Filters
      - generic [ref=e136]:
        - main [ref=e139]:
          - generic "contract info of Pro Warrior Fitness Centre" [ref=e141] [cursor=pointer]:
            - generic [ref=e142]:
              - generic "Pro Warrior Fitness Centre Above Bata Showroom Akash Lane Near Kurla Station Opposite Saiba Shopping Centre Kurla West, Mumbai" [ref=e143]:
                - link [ref=e144]:
                  - /url: /Mumbai/Pro-Warrior-Fitness-Centre-Above-Bata-Showroom-Akash-Lane-Near-Kurla-Station-Opposite-Saiba-Shopping-Centre-Kurla-West/022PXX22-XX22-220416102718-M2W5_BZDET?trkid=6619-mumbai&term=&ncatid=11575244&area=Kismat%20Nagar%20Kurla%20West&search=Popular%20Gyms%20in%20Kismat%20Nagar%20Kurla%20West,%20Mumbai&mncatname=Gyms&ftterm=&csell=&oncatid=11575244&abd_btn=Send%20Enquiry&abd_heading=Gyms&isOpenAbd=1&bd=1&cat_b2b_flag=0&searchfrom=lst&thumbnail=
                  - generic [ref=e145]:
                    - img [ref=e147]
                    - img [ref=e149]
                    - img [ref=e151]
                    - img [ref=e153]
                    - generic [ref=e154]:
                      - img [ref=e155]
                      - generic [ref=e156]:
                        - generic [ref=e157]: "+38"
                        - generic [ref=e158]: More
              - generic [ref=e159]:
                - heading "Pro Warrior Fitness Centre" [level=2] [ref=e160]:
                  - link "Pro Warrior Fitness Centre" [ref=e161]:
                    - /url: /Mumbai/Pro-Warrior-Fitness-Centre-Above-Bata-Showroom-Akash-Lane-Near-Kurla-Station-Opposite-Saiba-Shopping-Centre-Kurla-West/022PXX22-XX22-220416102718-M2W5_BZDET?trkid=6619-mumbai&term=&ncatid=11575244&area=Kismat%20Nagar%20Kurla%20West&search=Popular%20Gyms%20in%20Kismat%20Nagar%20Kurla%20West,%20Mumbai&mncatname=Gyms&ftterm=&csell=&oncatid=11575244&abd_btn=Send%20Enquiry&abd_heading=Gyms&isOpenAbd=1&bd=1&cat_b2b_flag=0&searchfrom=lst&thumbnail=
                    - generic [ref=e162]: Pro Warrior Fitness Centre
                - list [ref=e163]:
                  - 'listitem "Ratings : 4.9" [ref=e164]': "4.9"
                  - text: 441 Ratings
                  - contentinfo "tags" [ref=e166]
                - list [ref=e168]:
                  - generic [ref=e172]: New Mill Road Kurla West, Mumbai
                  - generic [ref=e173]: 1.1 km
                - list [ref=e174]: Swimming Pool Aerobics Crossfit
                - list [ref=e176]:
                  - button "Show Number" [ref=e177]:
                    - generic [ref=e178]: Show Number
                  - listitem [ref=e179]:
                    - button "WhatsApp or chat with company Pro Warrior Fitness Centre" [ref=e180]:
                      - generic [ref=e181]: WhatsApp
                  - listitem [ref=e182]:
                    - button "Send Enquiry with company Pro Warrior Fitness Centre" [ref=e183]:
                      - generic [ref=e185]: Send Enquiry
          - generic "contract info of Fitness Kingdom Gym 2.0" [ref=e187] [cursor=pointer]:
            - generic [ref=e188]:
              - generic "Fitness Kingdom Gym 2.0 Opposite McDonald Above Audi Service Center Opposite BurgerKing Santacruz East, Mumbai" [ref=e189]:
                - link [ref=e190]:
                  - /url: /Mumbai/Fitness-Kingdom-Gym-20-Opposite-Mcdonald-Above-Audi-Service-Center-Opposite-Burgerking-Santacruz-East/022PXX22-XX22-180421160601-X7G3_BZDET?trkid=6619-mumbai&term=&ncatid=11575244&area=Kismat%20Nagar%20Kurla%20West&search=Popular%20Gyms%20in%20Kismat%20Nagar%20Kurla%20West,%20Mumbai&mncatname=Gyms&ftterm=&csell=&oncatid=11575244&abd_btn=Send%20Enquiry&abd_heading=Gyms&isOpenAbd=1&bd=1&cat_b2b_flag=0&searchfrom=lst&thumbnail=
                  - generic [ref=e191]:
                    - img [ref=e193]
                    - img [ref=e195]
                    - img [ref=e197]
                    - img [ref=e199]
                    - generic [ref=e200]:
                      - img [ref=e201]
                      - generic [ref=e202]:
                        - generic [ref=e203]: "+70"
                        - generic [ref=e204]: More
              - generic [ref=e205]:
                - heading "Fitness Kingdom Gym 2.0" [level=2] [ref=e206]:
                  - link "Fitness Kingdom Gym 2.0" [ref=e207]:
                    - /url: /Mumbai/Fitness-Kingdom-Gym-20-Opposite-Mcdonald-Above-Audi-Service-Center-Opposite-Burgerking-Santacruz-East/022PXX22-XX22-180421160601-X7G3_BZDET?trkid=6619-mumbai&term=&ncatid=11575244&area=Kismat%20Nagar%20Kurla%20West&search=Popular%20Gyms%20in%20Kismat%20Nagar%20Kurla%20West,%20Mumbai&mncatname=Gyms&ftterm=&csell=&oncatid=11575244&abd_btn=Send%20Enquiry&abd_heading=Gyms&isOpenAbd=1&bd=1&cat_b2b_flag=0&searchfrom=lst&thumbnail=
                    - generic [ref=e208]: Fitness Kingdom Gym 2.0
                - list [ref=e209]:
                  - 'listitem "Ratings : 4.4" [ref=e210]': "4.4"
                  - text: 446 Ratings
                  - contentinfo "tags" [ref=e212]
                - list [ref=e214]:
                  - generic [ref=e218]: CST Road Santacruz East, Mumbai
                  - generic [ref=e219]: 1.1 km
                - list [ref=e220]: 24 Hours Open Crossfit
                - list [ref=e222]:
                  - button "Show Number" [ref=e223]:
                    - generic [ref=e224]: Show Number
                  - listitem [ref=e225]:
                    - button "WhatsApp or chat with company Fitness Kingdom Gym 2.0" [ref=e226]:
                      - generic [ref=e227]: WhatsApp
                  - listitem [ref=e228]:
                    - button "Send Enquiry with company Fitness Kingdom Gym 2.0" [ref=e229]:
                      - generic [ref=e231]: Send Enquiry
          - generic "contract info of Fusion Gym" [ref=e233] [cursor=pointer]:
            - generic [ref=e234]:
              - generic "Fusion Gym Next to Kurla Bus Depot Kurla West, Mumbai" [ref=e235]:
                - link [ref=e236]:
                  - /url: /Mumbai/Fusion-Gym-Next-To-Kurla-Bus-Depot-Kurla-West/022PXX22-XX22-190423130647-Q5T9_BZDET?trkid=6619-mumbai&term=&ncatid=11575244&area=Kismat%20Nagar%20Kurla%20West&search=Popular%20Gyms%20in%20Kismat%20Nagar%20Kurla%20West,%20Mumbai&mncatname=Gyms&ftterm=&csell=&oncatid=11575244&abd_btn=Send%20Enquiry&abd_heading=Gyms&isOpenAbd=1&bd=1&cat_b2b_flag=0&searchfrom=lst&thumbnail=
              - generic [ref=e248]:
                - heading "Fusion Gym" [level=2] [ref=e249]:
                  - link "Fusion Gym" [ref=e250]:
                    - /url: /Mumbai/Fusion-Gym-Next-To-Kurla-Bus-Depot-Kurla-West/022PXX22-XX22-190423130647-Q5T9_BZDET?trkid=6619-mumbai&term=&ncatid=11575244&area=Kismat%20Nagar%20Kurla%20West&search=Popular%20Gyms%20in%20Kismat%20Nagar%20Kurla%20West,%20Mumbai&mncatname=Gyms&ftterm=&csell=&oncatid=11575244&abd_btn=Send%20Enquiry&abd_heading=Gyms&isOpenAbd=1&bd=1&cat_b2b_flag=0&searchfrom=lst&thumbnail=
                    - generic [ref=e251]: Fusion Gym
                - list [ref=e252]:
                  - 'listitem "Ratings : 4.3" [ref=e253]': "4.3"
                  - text: 273 Ratings
                  - contentinfo "tags" [ref=e255]
                - list [ref=e257]:
                  - generic [ref=e261]: L B S Marg Kurla West, Mumbai
                  - generic [ref=e262]: 10 mts
                - list [ref=e263]: Locker Facility Crossfit
                - list [ref=e265]:
                  - button "Show Number" [ref=e266]:
                    - generic [ref=e267]: Show Number
                  - listitem [ref=e268]:
                    - button "WhatsApp or chat with company Fusion Gym" [ref=e269]:
                      - generic [ref=e270]: WhatsApp
                  - listitem [ref=e271]:
                    - button "Send Enquiry with company Fusion Gym" [ref=e272]:
                      - generic [ref=e274]: Send Enquiry
          - generic "contract info of Work Out World Fitness Center" [ref=e276] [cursor=pointer]:
            - generic [ref=e277]:
              - generic "Work Out World Fitness Center Sunder Nagar Ahead Creative Industries Santacruz East, Mumbai" [ref=e278]:
                - link [ref=e279]:
                  - /url: /Mumbai/Work-Out-World-Fitness-Center-Sunder-Nagar-Ahead-Creative-Industries-Santacruz-East/022PXX22-XX22-090703172847-R5I2_BZDET?trkid=6619-mumbai&term=&ncatid=11575244&area=Kismat%20Nagar%20Kurla%20West&search=Popular%20Gyms%20in%20Kismat%20Nagar%20Kurla%20West,%20Mumbai&mncatname=Gyms&ftterm=&csell=&oncatid=11575244&abd_btn=Send%20Enquiry&abd_heading=Gyms&isOpenAbd=1&bd=1&cat_b2b_flag=0&searchfrom=lst&thumbnail=
              - generic [ref=e291]:
                - heading "Work Out World Fitness Center" [level=2] [ref=e292]:
                  - link "Work Out World Fitness Center" [ref=e293]:
                    - /url: /Mumbai/Work-Out-World-Fitness-Center-Sunder-Nagar-Ahead-Creative-Industries-Santacruz-East/022PXX22-XX22-090703172847-R5I2_BZDET?trkid=6619-mumbai&term=&ncatid=11575244&area=Kismat%20Nagar%20Kurla%20West&search=Popular%20Gyms%20in%20Kismat%20Nagar%20Kurla%20West,%20Mumbai&mncatname=Gyms&ftterm=&csell=&oncatid=11575244&abd_btn=Send%20Enquiry&abd_heading=Gyms&isOpenAbd=1&bd=1&cat_b2b_flag=0&searchfrom=lst&thumbnail=
                    - generic [ref=e294]: Work Out World Fitness Center
                - list [ref=e295]:
                  - 'listitem "Ratings : 4.1" [ref=e296]': "4.1"
                  - text: 230 Ratings
                  - contentinfo "tags" [ref=e298]
                - list [ref=e300]:
                  - generic [ref=e304]: Jerome Apartment Kalina Santacruz East, Mumbai
                  - generic [ref=e305]: 1.1 km
                - list [ref=e307]:
                  - button "Show Number" [ref=e308]:
                    - generic [ref=e309]: Show Number
                  - listitem [ref=e310]:
                    - button "WhatsApp or chat with company Work Out World Fitness Center" [ref=e311]:
                      - generic [ref=e312]: WhatsApp
                  - listitem [ref=e313]:
                    - button "Send Enquiry with company Work Out World Fitness Center" [ref=e314]:
                      - generic [ref=e316]: Send Enquiry
          - generic [ref=e318]:
            - generic [ref=e319]:
              - generic [ref=e320]:
                - generic [ref=e321]: Get the List of Top
                - generic [ref=e322]: Gyms
              - generic [ref=e323]: We'll send you contact details in seconds for free
            - generic [ref=e324]:
              - generic [ref=e327]:
                - generic [ref=e328]: What is your primary focus in fitness?
                - radiogroup [ref=e331]:
                  - radio "Weight loss" [checked] [ref=e334] [cursor=pointer]:
                    - generic [ref=e336]: Weight loss
                  - radio "Muscle building" [ref=e339] [cursor=pointer]:
                    - generic [ref=e341]: Muscle building
                  - radio "Others" [ref=e344] [cursor=pointer]:
                    - generic [ref=e346]: Others
              - generic [ref=e347]:
                - textbox "Name" [ref=e349]
                - textbox "Mobile Number" [ref=e351]
                - button "Send Enquiry" [ref=e353] [cursor=pointer]
              - generic [ref=e355]:
                - generic [ref=e358] [cursor=pointer]: I Agree to
                - link "Terms Conditions Privacy Policy" [ref=e359] [cursor=pointer]:
                  - /url: https://www.justdial.com/Terms-of-Use
                  - text: T&C's Privacy Policy
          - generic "contract info of World Wide Fitness" [ref=e361] [cursor=pointer]:
            - generic [ref=e362]:
              - generic "World Wide Fitness Kurla West, Mumbai" [ref=e363]:
                - link [ref=e364]:
                  - /url: /Mumbai/World-Wide-Fitness-Kurla-West/022PXX22-XX22-171130130426-K3C1_BZDET?trkid=6619-mumbai&term=&ncatid=11575244&area=Kismat%20Nagar%20Kurla%20West&search=Popular%20Gyms%20in%20Kismat%20Nagar%20Kurla%20West,%20Mumbai&mncatname=Gyms&ftterm=&csell=&oncatid=11575244&abd_btn=Send%20Enquiry&abd_heading=Gyms&isOpenAbd=1&bd=1&cat_b2b_flag=0&searchfrom=lst&thumbnail=
              - generic [ref=e376]:
                - heading "World Wide Fitness" [level=2] [ref=e377]:
                  - link "World Wide Fitness" [ref=e378]:
                    - /url: /Mumbai/World-Wide-Fitness-Kurla-West/022PXX22-XX22-171130130426-K3C1_BZDET?trkid=6619-mumbai&term=&ncatid=11575244&area=Kismat%20Nagar%20Kurla%20West&search=Popular%20Gyms%20in%20Kismat%20Nagar%20Kurla%20West,%20Mumbai&mncatname=Gyms&ftterm=&csell=&oncatid=11575244&abd_btn=Send%20Enquiry&abd_heading=Gyms&isOpenAbd=1&bd=1&cat_b2b_flag=0&searchfrom=lst&thumbnail=
                    - generic [ref=e379]: World Wide Fitness
                - list [ref=e380]:
                  - 'listitem "Ratings : 4.6" [ref=e381]': "4.6"
                  - text: 175 Ratings
                  - contentinfo "tags" [ref=e383]
                - list [ref=e385]:
                  - generic [ref=e389]: Station Road Kurla West, Mumbai
                  - generic [ref=e390]: 1 km
                - list [ref=e391]: Locker Facility Steam Room Shower Facility
                - list [ref=e393]:
                  - button "Show Number" [ref=e394]:
                    - generic [ref=e395]: Show Number
                  - listitem [ref=e396]:
                    - button "WhatsApp or chat with company World Wide Fitness" [ref=e397]:
                      - generic [ref=e398]: WhatsApp
                  - listitem [ref=e399]:
                    - button "Send Enquiry with company World Wide Fitness" [ref=e400]:
                      - generic [ref=e402]: Send Enquiry
          - generic "contract info of Adiyash Gym" [ref=e404] [cursor=pointer]:
            - generic [ref=e405]:
              - generic "Adiyash Gym Opposite O Near Phoenix Marketcity Kurla Kurla West, Mumbai" [ref=e406]:
                - link [ref=e407]:
                  - /url: /Mumbai/Adiyash-Gym-Opposite-O-Near-Phoenix-Marketcity-Kurla-Kurla-West/022PXX22-XX22-240712160243-M9Y1_BZDET?trkid=6619-mumbai&term=&ncatid=11575244&area=Kismat%20Nagar%20Kurla%20West&search=Popular%20Gyms%20in%20Kismat%20Nagar%20Kurla%20West,%20Mumbai&mncatname=Gyms&ftterm=&csell=&oncatid=11575244&abd_btn=Send%20Enquiry&abd_heading=Gyms&isOpenAbd=1&bd=1&cat_b2b_flag=0&searchfrom=lst&thumbnail=
              - generic [ref=e419]:
                - heading "Adiyash Gym" [level=2] [ref=e420]:
                  - link "Adiyash Gym" [ref=e421]:
                    - /url: /Mumbai/Adiyash-Gym-Opposite-O-Near-Phoenix-Marketcity-Kurla-Kurla-West/022PXX22-XX22-240712160243-M9Y1_BZDET?trkid=6619-mumbai&term=&ncatid=11575244&area=Kismat%20Nagar%20Kurla%20West&search=Popular%20Gyms%20in%20Kismat%20Nagar%20Kurla%20West,%20Mumbai&mncatname=Gyms&ftterm=&csell=&oncatid=11575244&abd_btn=Send%20Enquiry&abd_heading=Gyms&isOpenAbd=1&bd=1&cat_b2b_flag=0&searchfrom=lst&thumbnail=
                    - generic [ref=e422]: Adiyash Gym
                - list [ref=e423]:
                  - 'listitem "Ratings : 4.6" [ref=e424]': "4.6"
                  - text: 174 Ratings
                  - contentinfo "tags" [ref=e426]
                - list [ref=e428]:
                  - generic [ref=e432]: Lal Bahadur Shastri Marg Kurla West, Mumbai
                  - generic [ref=e433]: 1.6 km
                - list [ref=e434]: Crossfit Zumba
                - list [ref=e436]:
                  - button "Show Number" [ref=e437]:
                    - generic [ref=e438]: Show Number
                  - listitem [ref=e439]:
                    - button "WhatsApp or chat with company Adiyash Gym" [ref=e440]:
                      - generic [ref=e441]: WhatsApp
                  - listitem [ref=e442]:
                    - button "Send Enquiry with company Adiyash Gym" [ref=e443]:
                      - generic [ref=e445]: Send Enquiry
          - generic "contract info of Tarun Fitness Gym" [ref=e447] [cursor=pointer]:
            - generic [ref=e448]:
              - generic "Tarun Fitness Gym Lal Maidan Santacruz East, Mumbai" [ref=e449]:
                - link [ref=e450]:
                  - /url: /Mumbai/Tarun-Fitness-Gym-Lal-Maidan-Santacruz-East/022PXX22-XX22-220121153533-Q1K6_BZDET?trkid=6619-mumbai&term=&ncatid=11575244&area=Kismat%20Nagar%20Kurla%20West&search=Popular%20Gyms%20in%20Kismat%20Nagar%20Kurla%20West,%20Mumbai&mncatname=Gyms&ftterm=&csell=&oncatid=11575244&abd_btn=Send%20Enquiry&abd_heading=Gyms&isOpenAbd=1&bd=1&cat_b2b_flag=0&searchfrom=lst&thumbnail=
              - generic [ref=e462]:
                - heading "Tarun Fitness Gym" [level=2] [ref=e463]:
                  - link "Tarun Fitness Gym" [ref=e464]:
                    - /url: /Mumbai/Tarun-Fitness-Gym-Lal-Maidan-Santacruz-East/022PXX22-XX22-220121153533-Q1K6_BZDET?trkid=6619-mumbai&term=&ncatid=11575244&area=Kismat%20Nagar%20Kurla%20West&search=Popular%20Gyms%20in%20Kismat%20Nagar%20Kurla%20West,%20Mumbai&mncatname=Gyms&ftterm=&csell=&oncatid=11575244&abd_btn=Send%20Enquiry&abd_heading=Gyms&isOpenAbd=1&bd=1&cat_b2b_flag=0&searchfrom=lst&thumbnail=
                    - generic [ref=e465]: Tarun Fitness Gym
                - list [ref=e466]:
                  - 'listitem "Ratings : 4.9" [ref=e467]': "4.9"
                  - text: 155 Ratings
                  - contentinfo "tags" [ref=e469]
                - list [ref=e471]:
                  - generic [ref=e475]: Datta Mandir Road Santacruz East, Mumbai
                  - generic [ref=e476]: 1.3 km
                - list [ref=e477]: Strengthening Exercises Get Your Own Trainer
                - list [ref=e479]:
                  - button "Show Number" [ref=e480]:
                    - generic [ref=e481]: Show Number
                  - listitem [ref=e482]:
                    - button "WhatsApp or chat with company Tarun Fitness Gym" [ref=e483]:
                      - generic [ref=e484]: WhatsApp
                  - listitem [ref=e485]:
                    - button "Send Enquiry with company Tarun Fitness Gym" [ref=e486]:
                      - generic [ref=e488]: Send Enquiry
          - generic "contract info of Evolve Fitness" [ref=e490] [cursor=pointer]:
            - generic [ref=e491]:
              - generic "Evolve Fitness Oppositie Sarvodaya Hospital Ghatkopar West, Mumbai" [ref=e492]:
                - link [ref=e493]:
                  - /url: /Mumbai/Evolve-Fitness-Oppositie-Sarvodaya-Hospital-Ghatkopar-West/022PXX22-XX22-150717120503-S4S5_BZDET?trkid=6619-mumbai&term=&ncatid=11575244&area=Kismat%20Nagar%20Kurla%20West&search=Popular%20Gyms%20in%20Kismat%20Nagar%20Kurla%20West,%20Mumbai&mncatname=Gyms&ftterm=&csell=&oncatid=11575244&abd_btn=Send%20Enquiry&abd_heading=Gyms&isOpenAbd=1&bd=1&cat_b2b_flag=0&searchfrom=lst&thumbnail=
              - generic [ref=e505]:
                - heading "Evolve Fitness" [level=2] [ref=e506]:
                  - link "Evolve Fitness" [ref=e507]:
                    - /url: /Mumbai/Evolve-Fitness-Oppositie-Sarvodaya-Hospital-Ghatkopar-West/022PXX22-XX22-150717120503-S4S5_BZDET?trkid=6619-mumbai&term=&ncatid=11575244&area=Kismat%20Nagar%20Kurla%20West&search=Popular%20Gyms%20in%20Kismat%20Nagar%20Kurla%20West,%20Mumbai&mncatname=Gyms&ftterm=&csell=&oncatid=11575244&abd_btn=Send%20Enquiry&abd_heading=Gyms&isOpenAbd=1&bd=1&cat_b2b_flag=0&searchfrom=lst&thumbnail=
                    - generic [ref=e509]: Evolve Fitness
                - list [ref=e510]:
                  - 'listitem "Ratings : 4.5" [ref=e511]': "4.5"
                  - text: 172 Ratings
                  - listitem [ref=e513]:
                    - img "Justdial verified" [ref=e514]
                  - contentinfo "tags" [ref=e515]
                - list [ref=e517]:
                  - generic [ref=e521]: L B S Marg Ghatkopar West, Mumbai
                  - generic [ref=e522]: 3.4 km
                - list [ref=e523]: Locker Facility Steam Room Shower Facility
                - list [ref=e525]:
                  - listitem [ref=e526]:
                    - button "09845421736" [ref=e527]:
                      - generic [ref=e529]: "09845421736"
                  - listitem [ref=e530]:
                    - button "WhatsApp or chat with company Evolve Fitness" [ref=e531]:
                      - generic [ref=e532]: WhatsApp
                  - listitem [ref=e533]:
                    - button "Send Enquiry with company Evolve Fitness" [ref=e534]:
                      - generic [ref=e536]: Send Enquiry
          - generic "contract info of K3 Oxygen Gym" [ref=e538] [cursor=pointer]:
            - generic [ref=e539]:
              - generic "K3 Oxygen Gym Behind Crime Branch Office Chembur East, Mumbai" [ref=e540]:
                - link [ref=e541]:
                  - /url: /Mumbai/K3-Oxygen-Gym-Behind-Crime-Branch-Office-Chembur-East/022PXX22-XX22-150109123938-H8Y3_BZDET?trkid=6619-mumbai&term=&ncatid=11575244&area=Kismat%20Nagar%20Kurla%20West&search=Popular%20Gyms%20in%20Kismat%20Nagar%20Kurla%20West,%20Mumbai&mncatname=Gyms&ftterm=&csell=&oncatid=11575244&abd_btn=Send%20Enquiry&abd_heading=Gyms&isOpenAbd=1&bd=1&cat_b2b_flag=0&searchfrom=lst&thumbnail=
              - generic [ref=e553]:
                - heading "K3 Oxygen Gym" [level=2] [ref=e554]:
                  - link "K3 Oxygen Gym" [ref=e555]:
                    - /url: /Mumbai/K3-Oxygen-Gym-Behind-Crime-Branch-Office-Chembur-East/022PXX22-XX22-150109123938-H8Y3_BZDET?trkid=6619-mumbai&term=&ncatid=11575244&area=Kismat%20Nagar%20Kurla%20West&search=Popular%20Gyms%20in%20Kismat%20Nagar%20Kurla%20West,%20Mumbai&mncatname=Gyms&ftterm=&csell=&oncatid=11575244&abd_btn=Send%20Enquiry&abd_heading=Gyms&isOpenAbd=1&bd=1&cat_b2b_flag=0&searchfrom=lst&thumbnail=
                    - generic [ref=e557]: K3 Oxygen Gym
                - list [ref=e558]:
                  - 'listitem "Ratings : 4" [ref=e559]': "4.0"
                  - text: 492 Ratings
                  - contentinfo "tags" [ref=e561]
                - list [ref=e563]:
                  - generic [ref=e567]: R C F Marg Chembur East, Mumbai
                  - generic [ref=e568]: 3.7 km
                - list [ref=e569]:
                  - generic [ref=e570]:
                    - heading "Gym Membership" [level=3] [ref=e571]
                    - generic [ref=e572]:
                      - generic [ref=e573]: ₹5,500
                      - text: / 7 months
                  - generic [ref=e574]:
                    - heading "Gym Membership - 1 Day" [level=3] [ref=e575]
                    - generic [ref=e576]:
                      - generic [ref=e577]: ₹150
                      - text: / day
                  - generic [ref=e578]:
                    - heading "Gym Membership - 1 Month" [level=3] [ref=e579]
                    - generic [ref=e580]:
                      - generic [ref=e581]: ₹2,000
                      - text: / month
                  - button "+1 More" [ref=e582]:
                    - generic [ref=e583]: "+1"
                    - generic [ref=e584]: More
                - list [ref=e586]:
                  - listitem [ref=e587]:
                    - button "09054663597" [ref=e588]:
                      - generic [ref=e590]: "09054663597"
                  - listitem [ref=e591]:
                    - button "WhatsApp or chat with company K3 Oxygen Gym" [ref=e592]:
                      - generic [ref=e593]: WhatsApp
                  - listitem [ref=e594]:
                    - button "Send Enquiry with company K3 Oxygen Gym" [ref=e595]:
                      - generic [ref=e597]: Send Enquiry
          - generic "contract info of The Zone 360 Fitness" [ref=e599] [cursor=pointer]:
            - generic [ref=e600]:
              - generic "The Zone 360 Fitness Off Linking Road Bandra West, Mumbai" [ref=e601]:
                - link [ref=e602]:
                  - /url: /Mumbai/The-Zone-360-Fitness-Off-Linking-Road-Bandra-West/022PXX22-XX22-220404174044-F2K8_BZDET?trkid=6619-mumbai&term=&ncatid=11575244&area=Kismat%20Nagar%20Kurla%20West&search=Popular%20Gyms%20in%20Kismat%20Nagar%20Kurla%20West,%20Mumbai&mncatname=Gyms&ftterm=&csell=&oncatid=11575244&abd_btn=Send%20Enquiry&abd_heading=Gyms&isOpenAbd=1&bd=1&cat_b2b_flag=0&searchfrom=lst&thumbnail=
              - generic [ref=e614]:
                - heading "The Zone 360 Fitness" [level=2] [ref=e615]:
                  - link "The Zone 360 Fitness" [ref=e616]:
                    - /url: /Mumbai/The-Zone-360-Fitness-Off-Linking-Road-Bandra-West/022PXX22-XX22-220404174044-F2K8_BZDET?trkid=6619-mumbai&term=&ncatid=11575244&area=Kismat%20Nagar%20Kurla%20West&search=Popular%20Gyms%20in%20Kismat%20Nagar%20Kurla%20West,%20Mumbai&mncatname=Gyms&ftterm=&csell=&oncatid=11575244&abd_btn=Send%20Enquiry&abd_heading=Gyms&isOpenAbd=1&bd=1&cat_b2b_flag=0&searchfrom=lst&thumbnail=
                    - generic [ref=e618]: The Zone 360 Fitness
                - list [ref=e619]:
                  - 'listitem "Ratings : 4.3" [ref=e620]': "4.3"
                  - text: 209 Ratings
                  - contentinfo "tags" [ref=e622]
                - list [ref=e624]:
                  - generic [ref=e628]: Corner Of 24th Bandra West, Mumbai
                  - generic [ref=e629]: 4.7 km
                - list [ref=e630]: Shower Facility 24 Hours Open
                - list [ref=e631]:
                  - generic [ref=e632]:
                    - generic [ref=e634]: 1 Year Gym Membership Starting at
                    - generic [ref=e635]: ₹ 40,000
                - list [ref=e637]:
                  - listitem [ref=e638]:
                    - button "09972451468" [ref=e639]:
                      - generic [ref=e641]: "09972451468"
                  - listitem [ref=e642]:
                    - button "WhatsApp or chat with company The Zone 360 Fitness" [ref=e643]:
                      - generic [ref=e644]: WhatsApp
                  - listitem [ref=e645]:
                    - button "Send Enquiry with company The Zone 360 Fitness" [ref=e646]:
                      - generic [ref=e648]: Send Enquiry
        - generic [ref=e649]:
          - generic [ref=e651]:
            - heading "Get the List of Top Gyms" [level=2] [ref=e652]:
              - generic [ref=e653]: Get the List of Top
              - generic [ref=e654]: Gyms
            - generic [ref=e655]: We'll send you contact details in seconds for free
            - generic [ref=e657]:
              - generic "What is your primary focus in fitness?" [ref=e658]
              - radiogroup [ref=e661]:
                - radio "Weight loss" [checked] [ref=e664] [cursor=pointer]:
                  - generic [ref=e666]: Weight loss
                - radio "Muscle building" [ref=e669] [cursor=pointer]:
                  - generic [ref=e671]: Muscle building
                - radio "Others" [ref=e674] [cursor=pointer]:
                  - generic [ref=e676]: Others
            - generic [ref=e677]:
              - textbox "Name" [ref=e679]
              - textbox "Mobile Number" [ref=e681]
            - generic [ref=e683]:
              - generic [ref=e686] [cursor=pointer]: I Agree to
              - link "Terms Conditions Privacy Policy" [ref=e687] [cursor=pointer]:
                - /url: https://www.justdial.com/Terms-of-Use
                - text: T&C's Privacy Policy
            - button "Apply" [ref=e688] [cursor=pointer]: Send Enquiry
          - generic [ref=e694]:
            - definition [ref=e695]: Customers "Top Picks"
            - generic [ref=e696]: Gyms in Kismat Nagar Kurla West, Mumbai
            - list [ref=e697]:
              - listitem [ref=e698]:
                - link "Hurdles Fitness image Hurdles Fitness 4.4 191 Ratings Tilak Nagar" [ref=e699] [cursor=pointer]:
                  - /url: /Mumbai/Hurdles-Fitness-Tilak-Nagar-Tilak-Nagar/022PXX22-XX22-220317145245-N5A9_BZDET
                  - img "Hurdles Fitness image" [ref=e701]
                  - generic [ref=e702]:
                    - generic [ref=e703]: Hurdles Fitness
                    - generic [ref=e704]:
                      - generic [ref=e705]: "4.4"
                      - generic [ref=e706]: 191 Ratings
                    - generic [ref=e707]: Tilak Nagar
                - generic [ref=e708]:
                  - button "09972445603" [ref=e709]:
                    - generic [ref=e711] [cursor=pointer]: "09972445603"
                  - button "WhatsApp or chat with company Durgashree Samruddhi Grand" [ref=e712] [cursor=pointer]:
                    - generic [ref=e713]: WhatsApp
              - listitem [ref=e714]:
                - link "Kosmos Gym image Kosmos Gym 4.3 200 Ratings Chembur Camp-Chembur East" [ref=e715] [cursor=pointer]:
                  - /url: /Mumbai/Kosmos-Gym-Chembur-Camp-Chembur-East-Chembur-Camp-Chembur-East/022PXX22-XX22-131219173133-Q4G6_BZDET
                  - img "Kosmos Gym image" [ref=e717]
                  - generic [ref=e718]:
                    - generic [ref=e719]: Kosmos Gym
                    - generic [ref=e720]:
                      - generic [ref=e721]: "4.3"
                      - generic [ref=e722]: 200 Ratings
                    - generic [ref=e723]: Chembur Camp-Chembur East
                - generic [ref=e724]:
                  - button "Show Number" [ref=e725]:
                    - generic [ref=e727] [cursor=pointer]: Show Number
                  - button "WhatsApp or chat with company Durgashree Samruddhi Grand" [ref=e728] [cursor=pointer]:
                    - generic [ref=e729]: WhatsApp
              - listitem [ref=e730]:
                - link "Ih Remind Fitness image Ih Remind Fitness 4.5 77 Ratings Andheri East" [ref=e731] [cursor=pointer]:
                  - /url: /Mumbai/Ih-Remind-Fitness-Andheri-East-Andheri-East/022PXX22-XX22-230822145931-Y8R7_BZDET
                  - img "Ih Remind Fitness image" [ref=e733]
                  - generic [ref=e734]:
                    - generic [ref=e735]: Ih Remind Fitness
                    - generic [ref=e736]:
                      - generic [ref=e737]: "4.5"
                      - generic [ref=e738]: 77 Ratings
                    - generic [ref=e739]: Andheri East
                - generic [ref=e740]:
                  - button "08401125486" [ref=e741]:
                    - generic [ref=e743] [cursor=pointer]: "08401125486"
                  - button "WhatsApp or chat with company Durgashree Samruddhi Grand" [ref=e744] [cursor=pointer]:
                    - generic [ref=e745]: WhatsApp
              - listitem [ref=e746]:
                - link "S D W M image S D W M 4.1 113 Ratings Vile Parle West" [ref=e747] [cursor=pointer]:
                  - /url: /Mumbai/S-D-W-M-Vile-Parle-West-Vile-Parle-West/022PXX22-XX22-100107132843-R4D8_BZDET
                  - img "S D W M image" [ref=e749]
                  - generic [ref=e750]:
                    - generic [ref=e751]: S D W M
                    - generic [ref=e752]:
                      - generic [ref=e753]: "4.1"
                      - generic [ref=e754]: 113 Ratings
                    - generic [ref=e755]: Vile Parle West
                - generic [ref=e756]:
                  - button "09845165428" [ref=e757]:
                    - generic [ref=e759] [cursor=pointer]: "09845165428"
                  - button "WhatsApp or chat with company Durgashree Samruddhi Grand" [ref=e760] [cursor=pointer]:
                    - generic [ref=e761]: WhatsApp
    - generic [ref=e767]:
      - generic [ref=e768]:
        - generic [ref=e769]: Average Ratings
        - generic [ref=e770]: "4.4"
      - generic [ref=e771]: (3532 Ratings & Reviews as on 22/05/2026)
  - alert [ref=e772]: /Mumbai/Gyms-Near-Me-in-Kismat-Nagar-Kurla-West/nct-11575244?trkid=6619-mumbai&term=&asnm=1&cbflg=2
```

# Test source

```ts
  11  | 
  12  | test('Justdial - Continuous Integrated E2E POM Flow', async () => {
  13  |     const userDataDir = path.join(process.cwd(), 'jd_reliable_session');
  14  | 
  15  |     const context = await chromium.launchPersistentContext(userDataDir, {
  16  |         headless: false,
  17  |         viewport: { width: 1366, height: 768 },
  18  |         userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  19  |         args: ['--disable-blink-features=AutomationControlled']
  20  |     });
  21  | 
  22  |     const page = context.pages()[0] || await context.newPage();
  23  | 
  24  |     // Initialize Page Objects
  25  |     const homePage = new HomePage(page);
  26  |     const freeListingPage = new FreeListingPage(page);
  27  |     const carWashPage = new CarWashPage(page);
  28  |     const fitnessPage = new FitnessPage(page);
  29  | 
  30  |     // Global Popup Manager
  31  |     page.on("popup", async () => {
  32  |         try {
  33  |             await page.getByLabel("May be later").click().catch(() => {});
  34  |             await page.locator("button").nth(5).click().catch(() => {});
  35  |         } catch(e) {}
  36  |     });
  37  | 
  38  |     // ---------------------------------------------------------------------
  39  |     // PART 2: FREE LISTING FLOW
  40  |     // ---------------------------------------------------------------------
  41  |     console.log("Navigating to Justdial Base Portal...");
  42  |     await homePage.open();
  43  |     // await page.waitForTimeout(1000); // ⏱️ Wait for the landing page elements to completely settle
  44  |     await expect(page).toHaveTitle(/justdial/i);
  45  |     await homePage.handleBanner();
  46  |     // await page.waitForTimeout(500); // ⏱️ Wait for banner close transitions to finish
  47  | 
  48  |     console.log("Executing Step 2: Interactive Free Listing Submissions...");
  49  |     await homePage.clickFreeListing();
  50  |     // await page.waitForTimeout(1000); // ⏱️ Wait for the free listing script chunks to fully hydrate
  51  | 
  52  |     // Generate test data layout matching bounds
  53  |     const firstDigit = Math.floor(Math.random() * 5) + 1; 
  54  |     const remainingDigits = Math.floor(Math.random() * 1000000000); 
  55  |     const random_number = (firstDigit * 1000000000 + remainingDigits).toString();
  56  | 
  57  |     await freeListingPage.enterMobileNumber(random_number);
  58  |     // await page.waitForTimeout(500); // ⏱️ Small natural human delay after typing
  59  |     await freeListingPage.submitForm();
  60  |     
  61  |     // await page.waitForTimeout(500); // ⏱️ Wait for the form processing layout to change
  62  |     await expect(page).toHaveURL(/justdial\.com/);
  63  | 
  64  |     const errorMsgText = await freeListingPage.getErrorMessage();
  65  |     console.log('Number validation error message captured:', errorMsgText.trim());
  66  |     expect(errorMsgText).not.toBe('result message did not appear');
  67  |     expect(errorMsgText.trim().length).toBeGreaterThan(0);
  68  | 
  69  |     // Go back using your precise application button sequences
  70  |     await freeListingPage.navigateBack();
  71  |     await page.waitForTimeout(1500); // ⏱️ Give the home page ample time to re-render from cache
  72  | 
  73  |     // ---------------------------------------------------------------------
  74  |     // PART 1: CAR WASH DATA SCRAPER
  75  |     // ---------------------------------------------------------------------
  76  |     console.log("\nExecuting Step 1: Car Service Scraper Loop...");
  77  |     await homePage.searchCategory('Car Service', 'Car Service Centres Category');
  78  |    // await page.waitForTimeout(1000); // ⏱️ Wait for the category listing layouts to fully display
  79  |     
  80  |     await carWashPage.applyFilters();
  81  |     //await page.waitForTimeout(1000); // ⏱️ Wait for final filtered search DOM mutations to stop
  82  |     
  83  |     const services = await carWashPage.extractTopListings(5);
  84  | 
  85  |     console.log('--- Displaying 5 Top Rated Car Wash Services ---');
  86  |     services.forEach((service, index) => {
  87  |         console.log(`${index + 1}. Business Name: ${service.name}`);
  88  |         console.log(`   Rating Profile: ${service.rating} ★ (${service.votes} Votes)`);
  89  |         console.log(`   Phone Number: ${service.phone}`);
  90  |         console.log('--------------------------------------------------');
  91  |     });
  92  |     expect(services.length).toBeGreaterThan(0);
  93  | 
  94  |     // ---------------------------------------------------------------------
  95  |     // PART 3: FITNESS GYM DROPDOWN PARSER
  96  |     // ---------------------------------------------------------------------
  97  |     console.log("\nExecuting Step 3: Gym Option Dataset Extraction...");
  98  |     await homePage.clickLogo();
  99  |     //await page.waitForTimeout(1000); // ⏱️ Wait for redirect and cleanup back to home portal
  100 |     
  101 |     await homePage.searchCategory('Gym', 'Gyms near me');
  102 |     //await page.waitForTimeout(1000); // ⏱️ Wait for the Gym listing template view to fill
  103 |     
  104 |     await fitnessPage.expandGymSubMenu();
  105 |     //await page.waitForTimeout(500); // ⏱️ Wait for dropdown open sliding animation to rest
  106 |     
  107 |     const subMenuOptions = await fitnessPage.getSubMenuOptions();
  108 | 
  109 |     console.log('----- Sub-menu Items Extracted under Gym -----');
  110 |     console.log(subMenuOptions);
> 111 |     expect(subMenuOptions.length).toBeGreaterThan(0);
      |                                   ^ Error: expect(received).toBeGreaterThan(expected)
  112 | 
  113 |     // Wrap execution context cleanly
  114 |     //await page.waitForTimeout(500); // Final cooldown delay
  115 |     //wait context.close();
  116 | });
```