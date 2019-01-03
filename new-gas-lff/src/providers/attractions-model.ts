import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AttractionsModel {

  aklAttractions = [
    {
      name: "Adele Live 2017",
      type: "event",
      id: "1Ae8ZfpGknN7sF4",
      test: false,
      url: "http://ticketmaster.co.nz/event/2400516AA3131215",
      locale: "en-nz",
      heroimage: 'https://s1.ticketm.net/dam/a/fd8/229f5a78-b9cb-49d9-adb5-2fab41f45fd8_229471_RETINA_PORTRAIT_16_9.jpg',
      images: [
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/a/fd8/229f5a78-b9cb-49d9-adb5-2fab41f45fd8_229471_ARTIST_PAGE_3_2.jpg",
          width: 305,
          height: 203,
          fallback: false
        },
        {
          ratio: "4_3",
          url: "https://s1.ticketm.net/dam/a/fd8/229f5a78-b9cb-49d9-adb5-2fab41f45fd8_229471_CUSTOM.jpg",
          width: 305,
          height: 225,
          fallback: false
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/fd8/229f5a78-b9cb-49d9-adb5-2fab41f45fd8_229471_RECOMENDATION_16_9.jpg",
          width: 100,
          height: 56,
          fallback: false
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/fd8/229f5a78-b9cb-49d9-adb5-2fab41f45fd8_229471_RETINA_PORTRAIT_16_9.jpg",
          width: 640,
          height: 360,
          fallback: false
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/fd8/229f5a78-b9cb-49d9-adb5-2fab41f45fd8_229471_TABLET_LANDSCAPE_16_9.jpg",
          width: 1024,
          height: 576,
          fallback: false
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/a/fd8/229f5a78-b9cb-49d9-adb5-2fab41f45fd8_229471_TABLET_LANDSCAPE_3_2.jpg",
          width: 1024,
          height: 683,
          fallback: false
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/a/fd8/229f5a78-b9cb-49d9-adb5-2fab41f45fd8_229471_RETINA_PORTRAIT_3_2.jpg",
          width: 640,
          height: 427,
          fallback: false
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/fd8/229f5a78-b9cb-49d9-adb5-2fab41f45fd8_229471_EVENT_DETAIL_PAGE_16_9.jpg",
          width: 205,
          height: 115,
          fallback: false
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/fd8/229f5a78-b9cb-49d9-adb5-2fab41f45fd8_229471_RETINA_LANDSCAPE_16_9.jpg",
          width: 1136,
          height: 639,
          fallback: false
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/fd8/229f5a78-b9cb-49d9-adb5-2fab41f45fd8_229471_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          width: 2048,
          height: 1152,
          fallback: false
        }
      ],
      sales: {
        public: {
          startDateTime: "2016-11-23T23:00:00Z",
          startTBD: false,
          endDateTime: "2017-03-25T09:00:00Z"
        }
      },
      dates: {
        start: {
          localDate: "2017-03-25",
          localTime: "19:30:00",
          dateTime: "2017-03-25T06:30:00Z",
          dateTBD: false,
          dateTBA: false,
          timeTBA: false,
          noSpecificTime: false
        },
        timezone: "Pacific/Auckland",
        status: {
          code: "onsale"
        }
      },
      classifications: [
        {
          primary: true,
          segment: {
            id: "KZFzniwnSyZfZ7v7nJ"
          },
          genre: {
            id: "KnvZfZ7vAeA"
          },
          subGenre: {
            id: "KZazBEonSMnZfZ7v6F1"
          },
          type: {
            id: "KZAyXgnZfZ7v7la"
          },
          subType: {
            id: "KZFzBErXgnZfZ7vAd7"
          }
        }
      ],
      info: "Global superstar ADELE will visit Australia and New Zealand for the very first time in February and March, 2017 to perform a series of special stadium concerts in a unique 360º in-the-round production. Designed to create intimacy, the tour venues will feature reserved seating on both the playing arenas and the grandstands. Having broken album sales records worldwide and with in excess of two million albums sold in Australasia, the multiple Grammy, Brit, Oscar and Golden Globe winner is on the cusp of completing her 107 date sold out Live 2016 tour which has taken her all over the UK, Europe and North America. The tour has been hailed by critics and fans alike. There is a strict limit of 4 tickets per household on this event. Persons who exceed the ticket limit may have any or all of their orders and tickets cancelled without notice. This includes orders associated with the same name, e-mail address, billing address, credit card number or other information.",
      pleaseNote: "*Fees & Charges: A payment processing fee of 2.3% applies to purchases by credit card, debit card or gift card. The payment processing fee includes (but is not limited to) credit and debit card fees and expenses, administration and associated infrastructure costs. The payment processing fee will be added to the price displayed. This payment processing fee does not apply when you purchase tickets by cash at outlets or box-offices. In addition, a delivery fee may apply. A Handling Fee of $11.00 per transaction applies over the phone and $5.00 online. Please note: There is a strict limit of 4 tickets per household on this event. Persons who exceed the ticket limit may have any or all of their orders and tickets cancelled without notice. Floor is flat and not tiered. Please be aware that patrons may stand during the performance Ticket Delivery: Tickets will be suppressed from printing until 24th February 2017.",
      priceRanges: [
        {
          type: "standard",
          currency: "NZD",
          min: 99.9,
          max: 399.9
        }
      ],
      _links: {
        self: {
          href: "/discovery/v2/events/1Ae8ZfpGknN7sF4?locale=en-nz"
        },
        attractions: [
          {
            href: "/discovery/v2/attractions/K8vZ917Gku7?locale=en-nz"
          }
        ],
        venues: [
          {
            href: "/discovery/v2/venues/KovZpZA6t7lA?locale=en-nz"
          }
        ]
      },
      _embedded: {
        venues: [
          {
            name: "Mt Smart Stadium",
            type: "venue",
            id: "KovZpZA6t7lA",
            test: false,
            url: "http://ticketmaster.co.nz/venue/294941",
            locale: "en-nz",
            images: [
              {
                ratio: "4_3",
                url: "https://s1.ticketm.net/dbimages/16414v.jpg",
                width: 305,
                height: 225,
                fallback: false
              }
            ],
            postalCode: "1061",
            timezone: "Pacific/Auckland",
            city: {
              name: "Auckland"
            },
            state: {
              name: "New Zealand",
              stateCode: "NZ"
            },
            country: {
              name: "New Zealand",
              countryCode: "NZ"
            },
            address: {
              line1: "Beasley Avenue",
              line2: "Penrose"
            },
            location: {
              longitude: "174.8134003",
              latitude: "-36.9199905"
            },
            markets: [
              {
                id: "350"
              },
              {
                id: "351"
              }
            ],
            dmas: [
              {
                id: 750
              },
              {
                id: 751
              }
            ],
            social: {
              twitter: {
                handle: "@MtSmartEvents"
              }
            },
            _links: {
              self: {
                href: "/discovery/v2/venues/KovZpZA6t7lA?locale=en-nz"
              }
            }
          }
        ],
        attractions: [
          {
            name: "Adele",
            type: "attraction",
            id: "K8vZ917Gku7",
            test: false,
            url: "http://ticketmaster.co.nz/artist/1159272",
            locale: "en-nz",
            images: [],
          }
        ]
      }
    },
    {
      name: "Rushes",
      type: "event",
      id: "1A0ZAAYGkd-q-SW",
      test: false,
      url: "http://ticketmaster.co.nz/event/24005170E1761CFD",
      locale: "en-nz",
      heroimage: 'https://s1.ticketm.net/dam/c/2db/d6726400-e873-433e-abbf-4d43eb78d2db_105941_RETINA_LANDSCAPE_16_9.jpg',
      images: [
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/c/2db/d6726400-e873-433e-abbf-4d43eb78d2db_105941_RETINA_LANDSCAPE_16_9.jpg",
          width: 1136,
          height: 639,
          fallback: true
        },
        {
          ratio: "4_3",
          url: "https://s1.ticketm.net/dam/c/2db/d6726400-e873-433e-abbf-4d43eb78d2db_105941_CUSTOM.jpg",
          width: 305,
          height: 225,
          fallback: true
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/c/2db/d6726400-e873-433e-abbf-4d43eb78d2db_105941_RETINA_PORTRAIT_3_2.jpg",
          width: 640,
          height: 427,
          fallback: true
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/c/2db/d6726400-e873-433e-abbf-4d43eb78d2db_105941_ARTIST_PAGE_3_2.jpg",
          width: 305,
          height: 203,
          fallback: true
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/c/2db/d6726400-e873-433e-abbf-4d43eb78d2db_105941_TABLET_LANDSCAPE_3_2.jpg",
          width: 1024,
          height: 683,
          fallback: true
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dbimages/269593a.jpg",
          width: 205,
          height: 115,
          fallback: false
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/c/2db/d6726400-e873-433e-abbf-4d43eb78d2db_105941_TABLET_LANDSCAPE_16_9.jpg",
          width: 1024,
          height: 576,
          fallback: true
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/c/2db/d6726400-e873-433e-abbf-4d43eb78d2db_105941_RECOMENDATION_16_9.jpg",
          width: 100,
          height: 56,
          fallback: true
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/c/2db/d6726400-e873-433e-abbf-4d43eb78d2db_105941_RETINA_PORTRAIT_16_9.jpg",
          width: 640,
          height: 360,
          fallback: true
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/c/2db/d6726400-e873-433e-abbf-4d43eb78d2db_105941_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          width: 2048,
          height: 1152,
          fallback: true
        }
      ],
      sales: {
        public: {
          startDateTime: "2017-01-17T20:00:00Z",
          startTBD: false,
          endDateTime: "2017-02-24T07:00:00Z"
        },
        presales: [
          {
            startDateTime: "2017-01-17T02:00:00Z",
            endDateTime: "2017-01-17T19:59:00Z",
            name: "My Ticketmaster Presale"
          }
        ]
      },
      dates: {
        start: {
          localDate: "2017-02-24",
          localTime: "20:00:00",
          dateTime: "2017-02-24T07:00:00Z",
          dateTBD: false,
          dateTBA: false,
          timeTBA: false,
          noSpecificTime: false
        },
        timezone: "Pacific/Auckland",
        status: {
          code: "onsale"
        }
      },
      classifications: [
        {
          primary: true,
          segment: {
            id: "KZFzniwnSyZfZ7v7na"
          },
          genre: {
            id: "KnvZfZ7v7l6"
          },
          subGenre: {
            id: "KZazBEonSMnZfZ7v7l1"
          },
          type: {
            id: "KZAyXgnZfZ7v7nI"
          },
          subType: {
            id: "KZFzBErXgnZfZ7v7lJ"
          }
        }
      ],
      info: "Immerse yourself in Rushes, a unique experience where live music gig meets art gallery meets theatre, dance and film. Directed and choreographed by Malia Johnston in collaboration with visual artist Rowan Pierce, and with live music from Eden Mulholland, Rushes is an inter-arts experience like no other. Featuring over 20 dancers from across New Zealand, guest musicians and performers, as well as stunning visual imagery, lighting and sound, Rushes will leave you energised and exhilarated.",
      pleaseNote: "Fees & Charges: A payment processing fee of no more than 2.3% applies to purchases by credit card, debit card or gift card. The payment processing fee includes (but is not limited to) credit and debit card fees and expenses, administration and associated infrastructure costs. The payment processing fee will be added to the price displayed. This payment processing fee does not apply when you purchase tickets by cash at outlets or box-offices (subject to availability). A Handling Fee of $11.00 per transaction applies over the phone and $5.00 online. In addition a delivery fee may apply depending on the mode of delivery selected. A $2.50 booking fee per ticket applies if purchasing tickets from an outlet or the venue Box Office. Performance Information Audience walks through the space. It is estimated that groups will be split into 15-20 Pax to move through. Performance may also include patial nudity.",
      priceRanges: [
        {
          type: "standard",
          currency: "NZD",
          min: 42,
          max: 42
        }
      ],
      _links: {
        self: {
          href: "/discovery/v2/events/1A0ZAAYGkd-q-SW?locale=en-nz"
        },
        venues: [
          {
            href: "/discovery/v2/venues/KovZpZAJFveA?locale=en-nz"
          }
        ]
      },
      _embedded: {
        venues: [
          {
            name: "Lower NZI, Aotea Centre",
            type: "venue",
            id: "KovZpZAJFveA",
            test: false,
            url: "http://ticketmaster.co.nz/venue/295581",
            locale: "en-nz",
            images: [
              {
                ratio: "4_3",
                url: "https://s1.ticketm.net/dbimages/16421v.jpg",
                width: 305,
                height: 225,
                fallback: false
              }
            ],
            postalCode: "1010",
            timezone: "Pacific/Auckland",
            city: {
              name: "Auckland"
            },
            state: {
              name: "New Zealand",
              stateCode: "NZ"
            },
            country: {
              name: "New Zealand",
              countryCode: "NZ"
            },
            address: {
              line1: "50 Mayoral Drive"
            },
            location: {
              longitude: "174.7614746",
              latitude: "-36.8531418"
            },
            markets: [
              {
                id: "350"
              },
              {
                id: "351"
              }
            ],
            dmas: [
              {
                id: 750
              },
              {
                id: 751
              }
            ],
            _links: {
              self: {
                href: "/discovery/v2/venues/KovZpZAJFveA?locale=en-nz"
              }
            }
          }
        ]
      }
    },
    {
      name: "Summer Pops with the Modern Maori Quartet",
      type: "event",
      id: "1A0ZAkAGkePcsfH",
      test: false,
      url: "http://ticketmaster.co.nz/event/24005185A5B7153C",
      locale: "en-nz",
      heroimage: 'https://s1.ticketm.net/dam/a/5a7/95dcf65e-3478-478d-b352-2a111fadb5a7_241641_TABLET_LANDSCAPE_16_9.jpg',
      images: [
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/5a7/95dcf65e-3478-478d-b352-2a111fadb5a7_241641_RETINA_LANDSCAPE_16_9.jpg",
          width: 1136,
          height: 639,
          fallback: false
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dbimages/265684a.jpg",
          width: 205,
          height: 115,
          fallback: false
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/5a7/95dcf65e-3478-478d-b352-2a111fadb5a7_241641_TABLET_LANDSCAPE_16_9.jpg",
          width: 1024,
          height: 576,
          fallback: false
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/a/5a7/95dcf65e-3478-478d-b352-2a111fadb5a7_241641_ARTIST_PAGE_3_2.jpg",
          width: 305,
          height: 203,
          fallback: false
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/5a7/95dcf65e-3478-478d-b352-2a111fadb5a7_241641_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          width: 2048,
          height: 1152,
          fallback: false
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/5a7/95dcf65e-3478-478d-b352-2a111fadb5a7_241641_RECOMENDATION_16_9.jpg",
          width: 100,
          height: 56,
          fallback: false
        },
        {
          ratio: "4_3",
          url: "https://s1.ticketm.net/dam/a/5a7/95dcf65e-3478-478d-b352-2a111fadb5a7_241641_CUSTOM.jpg",
          width: 305,
          height: 225,
          fallback: false
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/5a7/95dcf65e-3478-478d-b352-2a111fadb5a7_241641_RETINA_PORTRAIT_16_9.jpg",
          width: 640,
          height: 360,
          fallback: false
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/a/5a7/95dcf65e-3478-478d-b352-2a111fadb5a7_241641_TABLET_LANDSCAPE_3_2.jpg",
          width: 1024,
          height: 683,
          fallback: false
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/a/5a7/95dcf65e-3478-478d-b352-2a111fadb5a7_241641_RETINA_PORTRAIT_3_2.jpg",
          width: 640,
          height: 427,
          fallback: false
        }
      ],
      sales: {
        public: {
          startDateTime: "2016-12-11T23:30:00Z",
          startTBD: false,
          endDateTime: "2017-02-24T06:30:00Z"
        }
      },
      dates: {
        start: {
          localDate: "2017-02-24",
          localTime: "19:30:00",
          dateTime: "2017-02-24T06:30:00Z",
          dateTBD: false,
          dateTBA: false,
          timeTBA: false,
          noSpecificTime: false
        },
        timezone: "Pacific/Auckland",
        status: {
          code: "onsale"
        }
      },
      classifications: [
        {
          primary: true,
          segment: {
            id: "KZFzniwnSyZfZ7v7na"
          },
          genre: {
            id: "KnvZfZ7v7lJ"
          },
          subGenre: {
            id: "KZazBEonSMnZfZ7vAv7"
          },
          type: {
            id: "KZAyXgnZfZ7v7nI"
          },
          subType: {
            id: "KZFzBErXgnZfZ7v7lJ"
          }
        }
      ],
      pleaseNote: "Fees & Charges: A payment processing fee of no more than 2.3% applies to purchases by credit card, debit card or gift card. The payment processing fee includes (but is not limited to) credit and debit card fees and expenses, administration and associated infrastructure costs. The payment processing fee will be added to the price displayed. This payment processing fee does not apply when you purchase tickets by cash at outlets or box-offices (subject to availability). An Order Processing Fee of $5.00 per transaction applies if booking online. Bookings made by phone will incur a transaction fee of $11.00. In addition a delivery fee may apply depending on the mode of delivery selected. A $2.50 booking fee per ticket applies if purchasing tickets from an outlet or the venue Box Office. Child policy: Children under 3 years are admitted free (sit on lap policy applies).",
      priceRanges: [
        {
          type: "standard",
          currency: "NZD",
          min: 27,
          max: 75
        }
      ],
      _links: {
        self: {
          href: "/discovery/v2/events/1A0ZAkAGkePcsfH?locale=en-nz"
        },
        attractions: [
          {
            href: "/discovery/v2/attractions/K8vZ9173Qp0?locale=en-nz"
          },
          {
            href: "/discovery/v2/attractions/K8vZ917Gaz0?locale=en-nz"
          }
        ],
        venues: [
          {
            href: "/discovery/v2/venues/KovZpZAaF6lA?locale=en-nz"
          }
        ]
      },
      _embedded: {
        venues: [
          {
            name: "Great Hall, Auckland Town Hall",
            type: "venue",
            id: "KovZpZAaF6lA",
            test: false,
            url: "http://ticketmaster.co.nz/venue/295208",
            locale: "en-nz",
            images: [
              {
                ratio: "4_3",
                url: "https://s1.ticketm.net/dbimages/16428v.jpg",
                width: 305,
                height: 225,
                fallback: false
              }
            ],
            postalCode: "1010",
            timezone: "Pacific/Auckland",
            city: {
              name: "Auckland"
            },
            state: {
              name: "New Zealand",
              stateCode: "NZ"
            },
            country: {
              name: "New Zealand",
              countryCode: "NZ"
            },
            address: {
              line1: "Queen Street"
            },
            location: {
              longitude: "174.7645874",
              latitude: "-36.8507309"
            },
            markets: [
              {
                id: "350"
              },
              {
                id: "351"
              }
            ],
            dmas: [
              {
                id: 750
              },
              {
                id: 751
              }
            ],
            parkingDetail: "The closest parking option is the Civic Car Park, located within a short walking distance. There are 1,000 car park spaces available. For information on other Auckland Council car parks visit www.at.govt.nz/driving-parking/parking-in-auckland/ Auckland City Council has many economic, safe and convenient car parks strategically placed throughout the CBD. The parking buildings are staffed during opening hours. All parking buildings provide disabled access.",
            accessibleSeatingDetail: "All Auckland Live venues can be accessed by wheelchairs and have lifts and ramps to assist those who have difficulty climbing stairs. Please communicate any special requirements regarding seats for wheelchair users when booking your tickets. Contact Ticketmaster on (09) 970 9711 or email customer.service@ticketmaster.co.nz If you require a wheelchair when arriving at the theatre or want to discuss anything related to your visit please phone Auckland Live on (09) 309 2677. For more information about accessibility at Auckland Live venues please visit www.aucklandlive.co.nz/accessibility",
            generalInfo: {
              generalRule: "Wheelchair Seats and Guide Dogs Companion seats are available for those booking wheelchair spaces and guide dogs are welcome at our venues. Find out more on Auckland Live website aucklandlive.co.nz/accessibility.aspx",
              childRule: "Children Children are welcome to attend events at Auckland Live but they will need their own ticket and sit in their own seat. All children under 12 years must be with a caregiver at all times. Children under the age of 3 years are considered too young to attend most events except where the event is for children and families. When the event is a family event - unless otherwise specified - a child under the age of 2 will be admitted free of charge but they must be seated on their caregiver’s knee. Please check the event listing for details."
            },
            _links: {
              self: {
                href: "/discovery/v2/venues/KovZpZAaF6lA?locale=en-nz"
              }
            }
          }
        ],
        attractions: [
          {
            name: "The Modern Maori Quartet",
            type: "attraction",
            id: "K8vZ9173Qp0",
            test: false,
            url: "http://ticketmaster.co.nz/artist/1987266",
            locale: "en-nz",
            images: [
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/5a7/95dcf65e-3478-478d-b352-2a111fadb5a7_241641_RETINA_LANDSCAPE_16_9.jpg",
                width: 1136,
                height: 639,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/5a7/95dcf65e-3478-478d-b352-2a111fadb5a7_241641_TABLET_LANDSCAPE_16_9.jpg",
                width: 1024,
                height: 576,
                fallback: false
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/5a7/95dcf65e-3478-478d-b352-2a111fadb5a7_241641_ARTIST_PAGE_3_2.jpg",
                width: 305,
                height: 203,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/5a7/95dcf65e-3478-478d-b352-2a111fadb5a7_241641_EVENT_DETAIL_PAGE_16_9.jpg",
                width: 205,
                height: 115,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/5a7/95dcf65e-3478-478d-b352-2a111fadb5a7_241641_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                width: 2048,
                height: 1152,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/5a7/95dcf65e-3478-478d-b352-2a111fadb5a7_241641_RECOMENDATION_16_9.jpg",
                width: 100,
                height: 56,
                fallback: false
              },
              {
                ratio: "4_3",
                url: "https://s1.ticketm.net/dam/a/5a7/95dcf65e-3478-478d-b352-2a111fadb5a7_241641_CUSTOM.jpg",
                width: 305,
                height: 225,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/5a7/95dcf65e-3478-478d-b352-2a111fadb5a7_241641_RETINA_PORTRAIT_16_9.jpg",
                width: 640,
                height: 360,
                fallback: false
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/5a7/95dcf65e-3478-478d-b352-2a111fadb5a7_241641_TABLET_LANDSCAPE_3_2.jpg",
                width: 1024,
                height: 683,
                fallback: false
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/5a7/95dcf65e-3478-478d-b352-2a111fadb5a7_241641_RETINA_PORTRAIT_3_2.jpg",
                width: 640,
                height: 427,
                fallback: false
              }
            ],
            classifications: [
              {
                primary: true,
                segment: {
                  id: "KZFzniwnSyZfZ7v7na"
                },
                genre: {
                  id: "KnvZfZ7v7lJ"
                },
                subGenre: {
                  id: "KZazBEonSMnZfZ7vAv7"
                },
                type: {
                  id: "KZAyXgnZfZ7v7nI"
                },
                subType: {
                  id: "KZFzBErXgnZfZ7v7lJ"
                }
              }
            ],
            _links: {
              self: {
                href: "/discovery/v2/attractions/K8vZ9173Qp0?locale=en-nz"
              }
            }
          },
          {
            name: "New Zealand Symphony Orchestra",
            type: "attraction",
            id: "K8vZ917Gaz0",
            test: false,
            url: "http://ticketmaster.co.nz/artist/781710",
            locale: "en-nz",
            images: [
              {
                ratio: "4_3",
                url: "https://s1.ticketm.net/dam/a/3c2/2c3b88ef-60bc-4eaf-957a-eff8512733c2_241651_CUSTOM.jpg",
                width: 305,
                height: 225,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/c/f7b/ef64d601-8740-43cd-86ea-ed9b392e4f7b_105961_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                width: 2048,
                height: 1152,
                fallback: true
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/c/f7b/ef64d601-8740-43cd-86ea-ed9b392e4f7b_105961_RETINA_PORTRAIT_3_2.jpg",
                width: 640,
                height: 427,
                fallback: true
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/c/f7b/ef64d601-8740-43cd-86ea-ed9b392e4f7b_105961_TABLET_LANDSCAPE_3_2.jpg",
                width: 1024,
                height: 683,
                fallback: true
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/33b/0745d9de-9618-45cb-8289-a173e1d9033b_63921_RETINA_PORTRAIT_16_9.jpg",
                width: 640,
                height: 360,
                fallback: false,
                attribution: "nzso"
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/3c2/2c3b88ef-60bc-4eaf-957a-eff8512733c2_241651_EVENT_DETAIL_PAGE_16_9.jpg",
                width: 205,
                height: 115,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/c/f7b/ef64d601-8740-43cd-86ea-ed9b392e4f7b_105961_RETINA_LANDSCAPE_16_9.jpg",
                width: 1136,
                height: 639,
                fallback: true
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/c/f7b/ef64d601-8740-43cd-86ea-ed9b392e4f7b_105961_TABLET_LANDSCAPE_16_9.jpg",
                width: 1024,
                height: 576,
                fallback: true
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/3c2/2c3b88ef-60bc-4eaf-957a-eff8512733c2_241651_RECOMENDATION_16_9.jpg",
                width: 100,
                height: 56,
                fallback: false
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/3c2/2c3b88ef-60bc-4eaf-957a-eff8512733c2_241651_ARTIST_PAGE_3_2.jpg",
                width: 305,
                height: 203,
                fallback: false
              }
            ],
            classifications: [
              {
                primary: true,
                segment: {
                  id: "KZFzniwnSyZfZ7v7na"
                },
                genre: {
                  id: "KnvZfZ7v7nJ"
                },
                subGenre: {
                  id: "KZazBEonSMnZfZ7v7nI"
                },
                type: {
                  id: "KZAyXgnZfZ7v7nI"
                },
                subType: {
                  id: "KZFzBErXgnZfZ7v7lJ"
                }
              }
            ],
            _links: {
              self: {
                href: "/discovery/v2/attractions/K8vZ917Gaz0?locale=en-nz"
              }
            }
          }
        ]
      }
    },
    {
      name: "Bruce Springsteen and the E Street Band - Summer '17 Tour",
      type: "event",
      id: "1A0ZA7xGkdZGshe",
      test: false,
      url: "http://ticketmaster.co.nz/event/24005122C03316C2",
      locale: "en-nz",
      heroimage: 'https://s1.ticketm.net/dam/a/887/4c202ef0-f6e8-46d5-a353-38cae4fc5887_234231_RETINA_PORTRAIT_16_9.jpg',
      images: [
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/7a0/bfbc0c4b-ad61-4533-af94-94fab06297a0_168961_RECOMENDATION_16_9.jpg",
          width: 100,
          height: 56,
          fallback: false
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/a/7a0/bfbc0c4b-ad61-4533-af94-94fab06297a0_168961_ARTIST_PAGE_3_2.jpg",
          width: 305,
          height: 203,
          fallback: false
        },
        {
          ratio: "4_3",
          url: "https://s1.ticketm.net/dam/a/7a0/bfbc0c4b-ad61-4533-af94-94fab06297a0_168961_CUSTOM.jpg",
          width: 305,
          height: 225,
          fallback: false
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/887/4c202ef0-f6e8-46d5-a353-38cae4fc5887_234231_RETINA_PORTRAIT_16_9.jpg",
          width: 640,
          height: 360,
          fallback: false
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/a/887/4c202ef0-f6e8-46d5-a353-38cae4fc5887_234231_TABLET_LANDSCAPE_3_2.jpg",
          width: 1024,
          height: 683,
          fallback: false
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/a/887/4c202ef0-f6e8-46d5-a353-38cae4fc5887_234231_RETINA_PORTRAIT_3_2.jpg",
          width: 640,
          height: 427,
          fallback: false
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/7a0/bfbc0c4b-ad61-4533-af94-94fab06297a0_168961_EVENT_DETAIL_PAGE_16_9.jpg",
          width: 205,
          height: 115,
          fallback: false
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/887/4c202ef0-f6e8-46d5-a353-38cae4fc5887_234231_RETINA_LANDSCAPE_16_9.jpg",
          width: 1136,
          height: 639,
          fallback: false
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/887/4c202ef0-f6e8-46d5-a353-38cae4fc5887_234231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          width: 2048,
          height: 1152,
          fallback: false
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/887/4c202ef0-f6e8-46d5-a353-38cae4fc5887_234231_TABLET_LANDSCAPE_16_9.jpg",
          width: 1024,
          height: 576,
          fallback: false
        }
      ],
      sales: {
        public: {
          startDateTime: "2016-09-23T01:00:00Z",
          startTBD: false,
          endDateTime: "2017-02-25T08:00:00Z"
        },
        presales: [
          {
            startDateTime: "2016-09-20T01:00:00Z",
            endDateTime: "2016-09-21T01:00:00Z",
            name: "Frontier Touring Presale"
          }
        ]
      },
      dates: {
        start: {
          localDate: "2017-02-25",
          localTime: "16:30:00",
          dateTime: "2017-02-25T03:30:00Z",
          dateTBD: false,
          dateTBA: false,
          timeTBA: false,
          noSpecificTime: false
        },
        timezone: "Pacific/Auckland",
        status: {
          code: "onsale"
        }
      },
      classifications: [
        {
          primary: true,
          segment: {
            id: "KZFzniwnSyZfZ7v7nJ"
          },
          genre: {
            id: "KnvZfZ7vAeA"
          },
          subGenre: {
            id: "KZazBEonSMnZfZ7v6F1"
          },
          type: {
            id: "KZAyXgnZfZ7v7nI"
          },
          subType: {
            id: "KZFzBErXgnZfZ7v7lJ"
          }
        }
      ],
      info: "Frontier Touring are thrilled to announce the highly anticipated return of Bruce Springsteen and the E Street Band to Australia and New Zealand. Last on our shores in 2014 for a sold out run of shows, the summer of 2017 will see Bruce and his legendary band undertake one of their biggest tours here to date. For one month Bruce Springsteen and the E Street Band will be calling Australia and New Zealand home, with nine shows sure to delight fans who have rabidly been monitoring the international movements of The River Tour. Indeed, those overseas dates have had critics and fans alike in raptures. In further exciting news - and perhaps evidence that no one can say no to Bruce - one of Australia's most successful rock bands of all time, Jet, will be reforming to hit the road with Bruce Springsteen and the E Street Band, appearing as very special Ticket Delivery Info: Tickets will be on print delay until 30th-Sept-2016,9am.",
      pleaseNote: "Fees & Charges: A payment processing fee of 2.3% applies to purchases by credit card, debit card or gift card. The payment processing fee includes (but is not limited to) credit and debit card fees and expenses, administration and associated infrastructure costs. The payment processing fee will be added to the price displayed. This payment processing fee does not apply when you purchase tickets by cash at outlets or box-offices (subject to availability). A Handling Fee of $5.00 per transaction applies if booking online. Bookings made by phone will incur a transaction fee of $11.00. In addition a delivery fee may apply depending on the mode of delivery selected. There is no Print-At-Home available for tickets purchased in the East Stand Lounge or in the General Admission Standing areas. Please note no backpacks or large bags will be admitted. Small handbags permitted only, size limit 30cm x 40cm",
      priceRanges: [
        {
          type: "standard",
          currency: "NZD",
          min: 49.5,
          max: 399
        }
      ],
      _links: {
        self: {
          href: "/discovery/v2/events/1A0ZA7xGkdZGshe?locale=en-nz"
        },
        attractions: [
          {
            href: "/discovery/v2/attractions/K8vZ9171hM0?locale=en-nz"
          },
          {
            href: "/discovery/v2/attractions/K8vZ9171ug7?locale=en-nz"
          }
        ],
        venues: [
          {
            href: "/discovery/v2/venues/KovZpZA6t7lA?locale=en-nz"
          }
        ]
      },
      _embedded: {
        venues: [
          {
            name: "Mt Smart Stadium",
            type: "venue",
            id: "KovZpZA6t7lA",
            test: false,
            url: "http://ticketmaster.co.nz/venue/294941",
            locale: "en-nz",
            images: [
              {
                ratio: "4_3",
                url: "https://s1.ticketm.net/dbimages/16414v.jpg",
                width: 305,
                height: 225,
                fallback: false
              }
            ],
            postalCode: "1061",
            timezone: "Pacific/Auckland",
            city: {
              name: "Auckland"
            },
            state: {
              name: "New Zealand",
              stateCode: "NZ"
            },
            country: {
              name: "New Zealand",
              countryCode: "NZ"
            },
            address: {
              line1: "Beasley Avenue",
              line2: "Penrose"
            },
            location: {
              longitude: "174.8134003",
              latitude: "-36.9199905"
            },
            markets: [
              {
                id: "350"
              },
              {
                id: "351"
              }
            ],
            dmas: [
              {
                id: 750
              },
              {
                id: 751
              }
            ],
            social: {
              twitter: {
                handle: "@MtSmartEvents"
              }
            },
            _links: {
              self: {
                href: "/discovery/v2/venues/KovZpZA6t7lA?locale=en-nz"
              }
            }
          }
        ],
        attractions: [
          {
            name: "Bruce Springsteen and the E Street Band",
            type: "attraction",
            id: "K8vZ9171hM0",
            test: false,
            url: "http://ticketmaster.co.nz/artist/860453",
            locale: "en-nz",
            images: [
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/7a0/bfbc0c4b-ad61-4533-af94-94fab06297a0_168961_RECOMENDATION_16_9.jpg",
                width: 100,
                height: 56,
                fallback: false
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/7a0/bfbc0c4b-ad61-4533-af94-94fab06297a0_168961_ARTIST_PAGE_3_2.jpg",
                width: 305,
                height: 203,
                fallback: false
              },
              {
                ratio: "4_3",
                url: "https://s1.ticketm.net/dam/a/7a0/bfbc0c4b-ad61-4533-af94-94fab06297a0_168961_CUSTOM.jpg",
                width: 305,
                height: 225,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/887/4c202ef0-f6e8-46d5-a353-38cae4fc5887_234231_RETINA_PORTRAIT_16_9.jpg",
                width: 640,
                height: 360,
                fallback: false
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/887/4c202ef0-f6e8-46d5-a353-38cae4fc5887_234231_TABLET_LANDSCAPE_3_2.jpg",
                width: 1024,
                height: 683,
                fallback: false
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/887/4c202ef0-f6e8-46d5-a353-38cae4fc5887_234231_RETINA_PORTRAIT_3_2.jpg",
                width: 640,
                height: 427,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/7a0/bfbc0c4b-ad61-4533-af94-94fab06297a0_168961_EVENT_DETAIL_PAGE_16_9.jpg",
                width: 205,
                height: 115,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/887/4c202ef0-f6e8-46d5-a353-38cae4fc5887_234231_RETINA_LANDSCAPE_16_9.jpg",
                width: 1136,
                height: 639,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/887/4c202ef0-f6e8-46d5-a353-38cae4fc5887_234231_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                width: 2048,
                height: 1152,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/887/4c202ef0-f6e8-46d5-a353-38cae4fc5887_234231_TABLET_LANDSCAPE_16_9.jpg",
                width: 1024,
                height: 576,
                fallback: false
              }
            ],
            classifications: [
              {
                primary: true,
                segment: {
                  id: "KZFzniwnSyZfZ7v7nJ"
                },
                genre: {
                  id: "KnvZfZ7vAeA"
                },
                subGenre: {
                  id: "KZazBEonSMnZfZ7v6F1"
                },
                type: {
                  id: "KZAyXgnZfZ7v7nI"
                },
                subType: {
                  id: "KZFzBErXgnZfZ7v7lJ"
                }
              }
            ],
            _links: {
              self: {
                href: "/discovery/v2/attractions/K8vZ9171hM0?locale=en-nz"
              }
            }
          },
          {
            name: "Bruce Springsteen",
            type: "attraction",
            id: "K8vZ9171ug7",
            test: false,
            url: "http://ticketmaster.co.nz/artist/736179",
            locale: "en-nz",
            images: [
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/52e/d45aae67-71d8-4ff2-b19c-717f8f94d52e_93581_TABLET_LANDSCAPE_3_2.jpg",
                width: 1024,
                height: 683,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/52e/d45aae67-71d8-4ff2-b19c-717f8f94d52e_93581_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                width: 2048,
                height: 1152,
                fallback: false
              },
              {
                ratio: "4_3",
                url: "https://s1.ticketm.net/dam/a/5e9/dd86fc6c-826a-4c65-a066-60421ce615e9_168971_CUSTOM.jpg",
                width: 305,
                height: 225,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/52e/d45aae67-71d8-4ff2-b19c-717f8f94d52e_93581_TABLET_LANDSCAPE_16_9.jpg",
                width: 1024,
                height: 576,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/5e9/dd86fc6c-826a-4c65-a066-60421ce615e9_168971_EVENT_DETAIL_PAGE_16_9.jpg",
                width: 205,
                height: 115,
                fallback: false
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/52e/d45aae67-71d8-4ff2-b19c-717f8f94d52e_93581_RETINA_PORTRAIT_3_2.jpg",
                width: 640,
                height: 427,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/5e9/dd86fc6c-826a-4c65-a066-60421ce615e9_168971_RECOMENDATION_16_9.jpg",
                width: 100,
                height: 56,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/52e/d45aae67-71d8-4ff2-b19c-717f8f94d52e_93581_RETINA_PORTRAIT_16_9.jpg",
                width: 640,
                height: 360,
                fallback: false
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/5e9/dd86fc6c-826a-4c65-a066-60421ce615e9_168971_ARTIST_PAGE_3_2.jpg",
                width: 305,
                height: 203,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/52e/d45aae67-71d8-4ff2-b19c-717f8f94d52e_93581_RETINA_LANDSCAPE_16_9.jpg",
                width: 1136,
                height: 639,
                fallback: false
              }
            ],
            classifications: [
              {
                primary: true,
                segment: {
                  id: "KZFzniwnSyZfZ7v7nJ"
                },
                genre: {
                  id: "KnvZfZ7vAeA"
                },
                subGenre: {
                  id: "KZazBEonSMnZfZ7v6F1"
                },
                type: {
                  id: "KZAyXgnZfZ7v7nI"
                },
                subType: {
                  id: "KZFzBErXgnZfZ7v7lJ"
                }
              }
            ],
            _links: {
              self: {
                href: "/discovery/v2/attractions/K8vZ9171ug7?locale=en-nz"
              }
            }
          }
        ]
      }
    },
    {
      name: "The Hollies Highway of Hits Tour 2017",
      type: "event",
      id: "1A0ZAAdGkdqqeZP",
      test: false,
      url: "http://ticketmaster.co.nz/event/24005143DD742025",
      locale: "en-nz",
      heroimage: 'https://s1.ticketm.net/dam/a/4fd/38c2c3de-d3b6-435f-a5a3-1ba58778c4fd_111961_RETINA_PORTRAIT_16_9.jpg',
      images: [
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/4fd/38c2c3de-d3b6-435f-a5a3-1ba58778c4fd_111961_RETINA_PORTRAIT_16_9.jpg",
          width: 640,
          height: 360,
          fallback: false
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/4fd/38c2c3de-d3b6-435f-a5a3-1ba58778c4fd_111961_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          width: 2048,
          height: 1152,
          fallback: false
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/4fd/38c2c3de-d3b6-435f-a5a3-1ba58778c4fd_111961_RETINA_LANDSCAPE_16_9.jpg",
          width: 1136,
          height: 639,
          fallback: false
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/4fd/38c2c3de-d3b6-435f-a5a3-1ba58778c4fd_111961_RECOMENDATION_16_9.jpg",
          width: 100,
          height: 56,
          fallback: false
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/a/4fd/38c2c3de-d3b6-435f-a5a3-1ba58778c4fd_111961_TABLET_LANDSCAPE_3_2.jpg",
          width: 1024,
          height: 683,
          fallback: false
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dbimages/156899a.jpg",
          width: 205,
          height: 115,
          fallback: false
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/a/4fd/38c2c3de-d3b6-435f-a5a3-1ba58778c4fd_111961_ARTIST_PAGE_3_2.jpg",
          width: 305,
          height: 203,
          fallback: false
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/a/4fd/38c2c3de-d3b6-435f-a5a3-1ba58778c4fd_111961_RETINA_PORTRAIT_3_2.jpg",
          width: 640,
          height: 427,
          fallback: false
        },
        {
          ratio: "4_3",
          url: "https://s1.ticketm.net/dbimages/157239a.jpg",
          width: 305,
          height: 225,
          fallback: false
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/4fd/38c2c3de-d3b6-435f-a5a3-1ba58778c4fd_111961_TABLET_LANDSCAPE_16_9.jpg",
          width: 1024,
          height: 576,
          fallback: false
        }
      ],
      sales: {
        public: {
          startDateTime: "2016-10-16T20:00:00Z",
          startTBD: false,
          endDateTime: "2017-02-21T07:00:00Z"
        },
        presales: [
          {
            startDateTime: "2016-10-11T20:00:00Z",
            endDateTime: "2016-10-16T19:59:00Z",
            name: "My Ticketmaster Presale"
          },
          {
            startDateTime: "2016-10-11T20:00:00Z",
            endDateTime: "2016-10-16T19:59:00Z",
            name: "Promoter Presale"
          }
        ]
      },
      dates: {
        start: {
          localDate: "2017-02-21",
          localTime: "20:00:00",
          dateTime: "2017-02-21T07:00:00Z",
          dateTBD: false,
          dateTBA: false,
          timeTBA: false,
          noSpecificTime: false
        },
        timezone: "Pacific/Auckland",
        status: {
          code: "offsale"
        }
      },
      classifications: [
        {
          primary: true,
          segment: {
            id: "KZFzniwnSyZfZ7v7nJ"
          },
          genre: {
            id: "KnvZfZ7vAeA"
          },
          subGenre: {
            id: "KZazBEonSMnZfZ7vavA"
          },
          type: {
            id: "KZAyXgnZfZ7v7nI"
          },
          subType: {
            id: "KZFzBErXgnZfZ7v7lJ"
          }
        }
      ],
      info: "Rock n’ Roll Hall of Fame Legends, The Hollies are back in New Zealand next February 2017 on their Highway of Hits Tour. They are one of the best-loved groups from the 1960’s British Rock revolution. Their soaring distinctive harmonies, brilliantly crafted songs, and sublime musicianship along with a back catalogue of hugely popular hits have ensured the longevity of the band and its music for over 50 years. Doors: 7:30pm. First Half: 8:00pm, 50 mins. Interval: 8:50pm, 20 mins. Second Half: 9:10pm, 60 mins. Support Act: No Support. Main Act: The Hollies.",
      pleaseNote: "Fees & Charges: A payment processing fee of no more than 2.3% applies to purchases by credit card, debit card or gift card. The payment processing fee includes (but is not limited to) credit and debit card fees and expenses, administration and associated infrastructure costs. The payment processing fee will be added to the price displayed. This payment processing fee does not apply when you purchase tickets by cash at outlets or box-offices (subject to availability). A Handling Fee of $11.00 per transaction applies over the phone and $5.00 online. In addition a delivery fee may apply depending on the mode of delivery selected. A $2.50 booking fee per ticket applies if purchasing tickets from an outlet or the venue Box Office.",
      priceRanges: [
        {
          type: "standard",
          currency: "USD",
          min: 79.9,
          max: 99.9
        }
      ],
      _links: {
        self: {
          href: "/discovery/v2/events/1A0ZAAdGkdqqeZP?locale=en-nz"
        },
        attractions: [
          {
            href: "/discovery/v2/attractions/K8vZ91757QV?locale=en-nz"
          }
        ],
        venues: [
          {
            href: "/discovery/v2/venues/KovZpZAaF6tA?locale=en-nz"
          }
        ]
      },
      _embedded: {
        venues: [
          {
            name: "The Civic, Auckland",
            type: "venue",
            id: "KovZpZAaF6tA",
            test: false,
            url: "http://ticketmaster.co.nz/venue/295206",
            locale: "en-nz",
            images: [
              {
                ratio: "4_3",
                url: "https://s1.ticketm.net/dbimages/16426v.jpg",
                width: 305,
                height: 225,
                fallback: false
              }
            ],
            postalCode: "1010",
            timezone: "Pacific/Auckland",
            city: {
              name: "Auckland"
            },
            state: {
              name: "New Zealand",
              stateCode: "NZ"
            },
            country: {
              name: "New Zealand",
              countryCode: "NZ"
            },
            address: {
              line1: "Queen Street"
            },
            location: {
              longitude: "174.7645874",
              latitude: "-36.8507309"
            },
            markets: [
              {
                id: "350"
              },
              {
                id: "351"
              }
            ],
            dmas: [
              {
                id: 750
              },
              {
                id: 751
              }
            ],
            parkingDetail: "The closest parking option is the Civic Car Park, located within a short walking distance. There are 1,000 car park spaces available. For information on other Auckland Council car parks visit www.at.govt.nz/driving-parking/parking-in-auckland/ Auckland City Council has many economic, safe and convenient car parks strategically placed throughout the CBD. The parking buildings are staffed during opening hours. All parking buildings provide disabled access.",
            accessibleSeatingDetail: "All Auckland Live venues can be accessed by wheelchairs and have lifts and ramps to assist those who have difficulty climbing stairs. Please communicate any special requirements regarding seats for wheelchair users when booking your tickets. Contact Ticketmaster on (09) 970 9711 or email customer.service@ticketmaster.co.nz If you require a wheelchair when arriving at the theatre or want to discuss anything related to your visit please phone Auckland Live on (09) 309 2677. For more information about accessibility at Auckland Live venues please visit www.aucklandlive.co.nz/accessibility and we want to make sure those who need assistance feel confident about visiting us.",
            generalInfo: {
              generalRule: "Wheelchair Seats and Guide Dogs Companion seats are available for those booking wheelchair spaces and guide dogs are welcome at our venues. Find out more on Auckland Live website aucklandlive.co.nz/accessibility.aspx Attending a Show We suggest you arrive at the theatre 20 minutes prior to the start of the show. This will allow you plenty of time to find your seats before the performance begins. Food and Beverages Many patrons arrive early so that they can enjoy a drink or a meal before the show – this is a great way to make sure you don’t have to rush to be on time for curtain up. Find out about eating and drinking options on Auckland Live’s website aucklandlive.co.nz/eatinganddrinking.aspx",
              childRule: "Children are welcome to attend events at Auckland Live but they will need their own ticket and sit in their own seat. All children under 12 years must be with a caregiver at all times. Children under the age of 3 years are considered too young to attend most events except where the event is for children and families. When the event is a family event - unless otherwise specified - a child under the age of 2 will be admitted free of charge but they must be seated on their caregiver’s knee. Please check event listings for details."
            },
            _links: {
              self: {
                href: "/discovery/v2/venues/KovZpZAaF6tA?locale=en-nz"
              }
            }
          }
        ],
        attractions: [
          {
            name: "The Hollies",
            type: "attraction",
            id: "K8vZ91757QV",
            test: false,
            url: "http://ticketmaster.co.nz/artist/741112",
            locale: "en-nz",
            images: [
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/4fd/38c2c3de-d3b6-435f-a5a3-1ba58778c4fd_111961_RETINA_PORTRAIT_16_9.jpg",
                width: 640,
                height: 360,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/4fd/38c2c3de-d3b6-435f-a5a3-1ba58778c4fd_111961_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                width: 2048,
                height: 1152,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/4fd/38c2c3de-d3b6-435f-a5a3-1ba58778c4fd_111961_RETINA_LANDSCAPE_16_9.jpg",
                width: 1136,
                height: 639,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/4fd/38c2c3de-d3b6-435f-a5a3-1ba58778c4fd_111961_RECOMENDATION_16_9.jpg",
                width: 100,
                height: 56,
                fallback: false
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/4fd/38c2c3de-d3b6-435f-a5a3-1ba58778c4fd_111961_TABLET_LANDSCAPE_3_2.jpg",
                width: 1024,
                height: 683,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dbimages/156899a.jpg",
                width: 205,
                height: 115,
                fallback: false
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/4fd/38c2c3de-d3b6-435f-a5a3-1ba58778c4fd_111961_ARTIST_PAGE_3_2.jpg",
                width: 305,
                height: 203,
                fallback: false
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/4fd/38c2c3de-d3b6-435f-a5a3-1ba58778c4fd_111961_RETINA_PORTRAIT_3_2.jpg",
                width: 640,
                height: 427,
                fallback: false
              },
              {
                ratio: "4_3",
                url: "https://s1.ticketm.net/dbimages/157239a.jpg",
                width: 305,
                height: 225,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/4fd/38c2c3de-d3b6-435f-a5a3-1ba58778c4fd_111961_TABLET_LANDSCAPE_16_9.jpg",
                width: 1024,
                height: 576,
                fallback: false
              }
            ],
            classifications: [
              {
                primary: true,
                segment: {
                  id: "KZFzniwnSyZfZ7v7nJ"
                },
                genre: {
                  id: "KnvZfZ7vAeA"
                },
                subGenre: {
                  id: "KZazBEonSMnZfZ7vavA"
                },
                type: {
                  id: "KZAyXgnZfZ7v7nI"
                },
                subType: {
                  id: "KZFzBErXgnZfZ7v7lJ"
                }
              }
            ],
            _links: {
              self: {
                href: "/discovery/v2/attractions/K8vZ91757QV?locale=en-nz"
              }
            }
          }
        ]
      }
    },

  ];

  constructor() {
  }

}




