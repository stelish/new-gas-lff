import {Injectable, Query} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {WebApiObservableService} from "./webapi-observable-service";
import {SearchFilter} from "../pipes/search-filter";
import {Observable} from "rxjs";

@Injectable()
export class AirportsModel {

  public airportList:any = [];

  testAP = [];

  featuredNZAirportList = [
    { name: 'Auckland', code:'AKL', country: "NZ",  thumbnail: 'beta/build/assets/destinations/akl/Akl_60x60.jpg',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=160&height=120',
      short_description: "Wandering around the Viaduct and going up the Sky Tower are all very well, but you'll get better memories travelling out of the CBD and into the surrounding suburbs."
    },
    { name: 'Wellington', code:'WLG', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/51efd9db-4288-4736-8a1d-8edfdce9c4f5?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/51efd9db-4288-4736-8a1d-8edfdce9c4f5?width=160&height=120',
      short_description: "Honestly, trying to sell you on Wellington feels like trying to convince you that Natalie Portman is quite good looking."
    },
    { name: 'Christchurch', code:'CHC', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/f1a27c0b-63eb-4b86-a60c-f1b15ef26640?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/4d8a9137-5798-4daf-8225-0ee92f5bea9d?width=160&height=120',
      short_description: "Christchurch, you're a resilient bunch and we like that. The re-build is now underway and although it is not over it's an ideal time to go visit the beautiful garden city."
    },
    { name: 'Dunedin', code:'DUD', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/532e52ed-d734-4811-956a-4c255514b642?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/532e52ed-d734-4811-956a-4c255514b642?width=160&height=120',
      short_description: "Yellow Eyed Penguins - no they're not the Los Angeles hip hop quartet who rose to fame with their singles 'Where is the Love' and 'My Humps'."
    },
    { name: 'Queenstown', code:'ZQN', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/e7ce48a8-0e25-4015-802e-e058b92a7e13?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/e7ce48a8-0e25-4015-802e-e058b92a7e13?width=160&height=120',
      short_description: "Almost two million people visit Queenstown every year - we know this, because we tried to buy a Fergburger at 11 o'clock one Saturday night and most of them were in the line ahead of us."
    },
  ];
  featuredOtherAirport = [
    { name: 'Sydney',code: 'SYD', country: "AU",thumbnail: 'https://grabaseat.co.nz/resource/78b1cca7-4b8a-4a19-9f32-aa0555a6d2f8?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120',short_description:''},
    { name: 'Melbourne',code: 'MEL', country: "AU",thumbnail: 'https://grabaseat.co.nz/resource/78b1cca7-4b8a-4a19-9f32-aa0555a6d2f8?width=80&height=80',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120',short_description:''},
    { name: 'Brisbane',code: 'BNE', country: "AU", thumbnail: 'https://grabaseat.co.nz/resource/78b1cca7-4b8a-4a19-9f32-aa0555a6d2f8?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=160&height=120',short_description:''},
    { name: 'Fiji',code: 'NAN', country: "FJ",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120',short_description:''},
    { name: 'Tokyo',code: 'NRT', country: "JP",thumbnail: 'https://grabaseat.co.nz/resource/10e0f7f2-6477-4a5a-8557-27eaca80a5db?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120',short_description:''},
  ];
  featuredAirportsList = [
    { name: 'Wellington', code:'WLG', country: "NZ",
      thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/51efd9db-4288-4736-8a1d-8edfdce9c4f5?width=80&height=80',
      img_large: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/51efd9db-4288-4736-8a1d-8edfdce9c4f5?width=1425&height=850',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/51efd9db-4288-4736-8a1d-8edfdce9c4f5?width=160&height=120'
    },
    { name: 'Queenstown', code:'ZQN', country: "NZ",
      thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/e7ce48a8-0e25-4015-802e-e058b92a7e13?width=80&height=80',
      img_large: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/e7ce48a8-0e25-4015-802e-e058b92a7e13?width=1425&height=850',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/e7ce48a8-0e25-4015-802e-e058b92a7e13?width=160&height=120'
    },
    { name: 'Rotorua', code:'ROT', country: "NZ",
      thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/beb58431-cc27-468d-bd21-6148281731f4?width=80&height=80',
      img_large: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/beb58431-cc27-468d-bd21-6148281731f4?width=1425&height=850',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/beb58431-cc27-468d-bd21-6148281731f4?width=160&height=120'
    },
    { name: 'Auckland', code:'AKL', country: "NZ",
      thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=80&height=80',
      img_large: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=1425&height=850',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=160&height=120'
    },
    { name: 'Gold Coast',
      thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/14d977c3-4b85-4caa-a0d4-7e4d7d94007a?width=80&height=80',
      img_large: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/14d977c3-4b85-4caa-a0d4-7e4d7d94007a?width=1425&height=850',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/14d977c3-4b85-4caa-a0d4-7e4d7d94007a?width=160&height=120'
    },
    { name: 'Melbourne',
      thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/729649e2-2475-4422-a867-dc9ef834f2f7?width=80&height=80',
      img_large: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/729649e2-2475-4422-a867-dc9ef834f2f7?width=1425&height=850',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/729649e2-2475-4422-a867-dc9ef834f2f7?width=160&height=120'
    },
    { name: 'Rarotonga',
      thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/70fa982f-26e3-4e24-827f-13f736ecac93?width=80&height=80',
      img_large: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/70fa982f-26e3-4e24-827f-13f736ecac93?width=1425&height=850',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/70fa982f-26e3-4e24-827f-13f736ecac93?width=160&height=120'
    },
    { name: 'Samoa',
      thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=80&height=80',
      img_large: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=1425&height=850',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'
    },
  ];
  nzAirportsList = [
    { name: 'Auckland', code:'AKL', country: "NZ",  thumbnail: 'beta/build/assets/destinations/akl/Akl_60x60.jpg',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=160&height=120',
      short_description: "Wandering around the Viaduct and going up the Sky Tower are all very well, but you'll get better memories travelling out of the CBD and into the surrounding suburbs."
    },
    { name: 'Blenheim', code:'BHE', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/4d8a9137-5798-4daf-8225-0ee92f5bea9d?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/4d8a9137-5798-4daf-8225-0ee92f5bea9d?width=160&height=120',
      short_description: "The quality of wine around Blenheim is some of the best New Zealand has to offer, and we're proud to say that we drink the local sauvignon blanc, and we drink it by the bottle."
    },
    { name: 'Christchurch', code:'CHC', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/f1a27c0b-63eb-4b86-a60c-f1b15ef26640?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/4d8a9137-5798-4daf-8225-0ee92f5bea9d?width=160&height=120',
      short_description: "Christchurch, you're a resilient bunch and we like that. The re-build is now underway and although it is not over it's an ideal time to go visit the beautiful garden city."
    },
    { name: 'Dunedin', code:'DUD', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/532e52ed-d734-4811-956a-4c255514b642?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/532e52ed-d734-4811-956a-4c255514b642?width=160&height=120',
      short_description: "Yellow Eyed Penguins - no they're not the Los Angeles hip hop quartet who rose to fame with their singles 'Where is the Love' and 'My Humps'."
    },
    { name: 'Gisborne', code:'GIS', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/1725c3f5-9ca0-4886-8850-e04b13ddfb21?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/1725c3f5-9ca0-4886-8850-e04b13ddfb21?width=160&height=120',
      short_description: "Congratulations, you've already made the most important decision about your Gisborne holiday: travelling by plane."
    },
    { name: 'Hamilton', code:'HLZ', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/a49d0d12-a170-4787-b664-08c48f88b8e8?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/a49d0d12-a170-4787-b664-08c48f88b8e8?width=160&height=120',
      short_description: "These days, it's a cool University town, with some of the best nightlife in the country and enough interesting stuff to easily fill a long weekend visit"
    },
    { name: 'Hokitika', code:'HKK', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/0d580a46-e603-4686-9387-895cfa1a539c?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/0d580a46-e603-4686-9387-895cfa1a539c?width=160&height=120',
      short_description: "Mountains in Hokitika - Cheap flights with Air New Zealand's grabaseat"
    },
    { name: 'Invercargill', code:'IVC', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/ef82db4f-3721-46b7-80d8-1799c57e1da7?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/ef82db4f-3721-46b7-80d8-1799c57e1da7?width=160&height=120',
      short_description: "Invercargill is a beautiful, interesting city and it's a gateway to some of the country's most breathtaking destinations."
    },
    { name: 'Kerikeri', code:'KKE', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/8fc5f30a-8b86-4933-ac25-595f97532098?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/8fc5f30a-8b86-4933-ac25-595f97532098?width=160&height=120',
      short_description: "In the 1980s, New Zealand's Top Town was judged by how many men in stubbies could balance on a slippery log."
    },
    { name: 'Kapiti Coast', code:'PPQ', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/8fc5f30a-8b86-4933-ac25-595f97532098?width=60&height=60',
      img_small: 'https://d30ei5trzxos71.cloudfront.net/resource/50b1da0d-e145-4b9c-b55b-fa574b177afa?width=160&height=120',
      short_description: "The Kapiti Coast is Wellington's backyard, but many in the capital only know the place names from radio traffic reports."
    },
    { name: 'Napier Hastings', code:'NPE', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/1fbe15fe-5b22-4cdb-b467-8a2b5e433129?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/1fbe15fe-5b22-4cdb-b467-8a2b5e433129?width=160&height=120',
      short_description: "Twin cities Napier and Hastings can get competitive with each other at times, but they love each other deep down."
    },
    { name: 'Nelson', code:'NSN', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/51fd1d8b-7492-42e6-a419-f0b00ea3dbb8?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/51fd1d8b-7492-42e6-a419-f0b00ea3dbb8?width=160&height=120',
      short_description: "Nelson Tasman. It's what they call the district at the top left of the South Island (or 'north west', if you've got a background in geography)."
    },
    { name: 'New Plymouth', code:'NPL', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/f795cce7-a084-43e3-8305-5f99f25ea627?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/f795cce7-a084-43e3-8305-5f99f25ea627?width=160&height=120',
      short_description: "Progressive city is the urban heart of Taranaki - a district popular with surfers, nature-lovers and people who meant to go north but accidentally missed the State Highway One turnoff at Bulls."
    },
    { name: 'Palmerston North', code:'PMR', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/cd349bdb-0862-493c-94de-43c1ff526dd9?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/cd349bdb-0862-493c-94de-43c1ff526dd9?width=160&height=120',
      short_description: "Palmy to the locals and adopted locals, is a student town that also boasts an army base, which ensures the pubs will never go out of business."
    },
    { name: 'Queenstown', code:'ZQN', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/e7ce48a8-0e25-4015-802e-e058b92a7e13?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/e7ce48a8-0e25-4015-802e-e058b92a7e13?width=160&height=120',
      short_description: "Almost two million people visit Queenstown every year - we know this, because we tried to buy a Fergburger at 11 o'clock one Saturday night and most of them were in the line ahead of us."
    },
    { name: 'Rotorua', code:'ROT', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/beb58431-cc27-468d-bd21-6148281731f4?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/beb58431-cc27-468d-bd21-6148281731f4?width=160&height=120',
      short_description: "International visitors often head straight for Rotorua, but if you asked the average New Zealander what they know about the place, they'd probably think for a bit, then shrug their shoulders and say, 'it smells?'"
    },
    { name: 'Taupo', code:'TUO', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/d9c533e4-5f61-4b7a-ae18-aaf23fe31e0f?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/d9c533e4-5f61-4b7a-ae18-aaf23fe31e0f?width=160&height=120',
      short_description: "If you're going to spend half a day relaxing by the lakeside, much better to do it in a deckchair with a book."
    },
    { name: 'Tauranga', code:'TRG', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/f4aca6a8-5c4b-4566-9a6e-c0d4644955e5?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/f4aca6a8-5c4b-4566-9a6e-c0d4644955e5?width=160&height=120',
      short_description: "The weather's good, the lifestyle is amazing and the incredible Mount Maunganui is just across the bridge."
    },
    { name: 'Timaru', code:'TIU', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/049e9ea6-73a5-4c12-a8dd-d6b23fa393d8?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/049e9ea6-73a5-4c12-a8dd-d6b23fa393d8?width=160&height=120',
      short_description: "One of South Canterbury's growth areas is astrotourism. Do you know what that is? Right, have a little think about it and we'll come back to it soon and let you know if you're right."
    },
    { name: 'Wellington', code:'WLG', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/51efd9db-4288-4736-8a1d-8edfdce9c4f5?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/51efd9db-4288-4736-8a1d-8edfdce9c4f5?width=160&height=120',
      short_description: "Honestly, trying to sell you on Wellington feels like trying to convince you that Natalie Portman is quite good looking."
    },
    { name: 'Whangarei', code:'WRE', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/0a9ef081-39ff-444e-af78-6ce53cff55aa?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/0a9ef081-39ff-444e-af78-6ce53cff55aa?width=160&height=120',
      short_description: "Well, Whangarei has some incredible walks: along the coast, through massive Kauri forests and up spectacular mountains."
    }

  ];
  australiaAirportsList = [
    { name: 'Adelaide', code: 'ADL', country: "AU", thumbnail: 'https://grabaseat.co.nz/resource/78b1cca7-4b8a-4a19-9f32-aa0555a6d2f8?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=160&height=120'},
    { name: 'Brisbane',code: 'BNE', country: "AU", thumbnail: 'https://grabaseat.co.nz/resource/78b1cca7-4b8a-4a19-9f32-aa0555a6d2f8?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=160&height=120'},
    { name: 'Cairns',code: 'CNS', country: "AU",thumbnail: 'https://grabaseat.co.nz/resource/78b1cca7-4b8a-4a19-9f32-aa0555a6d2f8?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Gold Coast',code: 'OOL', country: "AU",thumbnail: 'https://grabaseat.co.nz/resource/78b1cca7-4b8a-4a19-9f32-aa0555a6d2f8?width=80&height=80',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Melbourne',code: 'MEL', country: "AU",thumbnail: 'https://grabaseat.co.nz/resource/78b1cca7-4b8a-4a19-9f32-aa0555a6d2f8?width=80&height=80',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Perth',code: 'PER', country: "AU",thumbnail: 'https://grabaseat.co.nz/resource/78b1cca7-4b8a-4a19-9f32-aa0555a6d2f8?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Sunshine Coast',code: 'MCY', country: "AU",thumbnail: 'https://grabaseat.co.nz/resource/78b1cca7-4b8a-4a19-9f32-aa0555a6d2f8?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Sydney',code: 'SYD', country: "AU",thumbnail: 'https://grabaseat.co.nz/resource/78b1cca7-4b8a-4a19-9f32-aa0555a6d2f8?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
  ];
  piAirportsList = [
    { name: 'Fiji',code: 'NAN', country: "FJ",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'New Caledonia',code: 'NOU', country: "NC",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Niue',code: 'IUE', country: "NU",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Rarotonga',code: 'RAR', country: "CK",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/70fa982f-26e3-4e24-827f-13f736ecac93?width=80&height=80',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Samoa',code: 'APW', country: "WS",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=80&height=80',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Tonga',code: 'TBU', country: "TO",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
  ];
  northAmericaAirportsList = [
    { name: 'Houston',code: 'IAH', country: "US",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Los Angeles',code: 'LAX', country: "US",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'San Francisco',code: 'SFO', country: "US",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Honolulu',code: 'HNL', country: "US",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Las Vegas',code: 'LAS', country: "US",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Seattle',code: 'SEA', country: "US",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Portland',code: 'PDX', country: "US",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Denver',code: 'DEN', country: "US",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Chicago',code: 'ORD', country: "US",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Orlando',code: 'MCO', country: "US",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Boston',code: 'BOS', country: "US",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'New York',code: 'JFK', country: "US",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Washington DC',code: 'WAS', country: "US",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Vancouver',code: 'YVR', country: "CA",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Victoria',code: 'YYJ', country: "CA",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Calgary',code: 'YYC', country: "CA",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Edmonton',code: 'YEG', country: "CA",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Toronto',code: 'YYZ', country: "CA",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Montreal',code: 'YUL', country: "CA",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
  ];
  canadaAirportsList = [
    { name: 'Vancouver',code: 'YVR', country: "CA",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Victoria',code: 'YYJ', country: "CA",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Calgary',code: 'YYC', country: "CA",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Edmonton',code: 'YEG', country: "CA",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Toronto',code: 'YYZ', country: "CA",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Montreal',code: 'YUL', country: "CA",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
  ];
  southAmericaAirportsList = [
    { name: 'Buenos Aires',code: 'AEP', country: "AR",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Rio de Janeiro',code: 'GIG', country: "BR",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Sao Paulo',code: 'GRU', country: "BR",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
  ];
  europeAirportsList = [
    { name: 'London',code: 'LHR', country: "EN",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Paris',code: 'CDG', country: "FR",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Amsterdam',code: 'AMS', country: "NL",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Zurich',code: 'ZRH', country: "CH",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Frankfurt',code: 'FRA', country: "DE",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
  ];
  asiaAirportsList = [
    { name: 'Bali',code: 'DPS', country: "ID",thumbnail: 'https://grabaseat.co.nz/resource/10e0f7f2-6477-4a5a-8557-27eaca80a5db?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Ho Chi Minh City',code: 'SGN', country: "VN",thumbnail: 'https://grabaseat.co.nz/resource/10e0f7f2-6477-4a5a-8557-27eaca80a5db?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Hong Kong',code: 'HKG', country: "HK",thumbnail: 'https://grabaseat.co.nz/resource/10e0f7f2-6477-4a5a-8557-27eaca80a5db?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Osaka',code: 'ITM', country: "JP",thumbnail: 'https://grabaseat.co.nz/resource/10e0f7f2-6477-4a5a-8557-27eaca80a5db?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Shanghai',code: 'PVG', country: "CN",thumbnail: 'https://grabaseat.co.nz/resource/10e0f7f2-6477-4a5a-8557-27eaca80a5db?width=80&height=80',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Singapore',code: 'SIN', country: "SG",thumbnail: 'https://grabaseat.co.nz/resource/10e0f7f2-6477-4a5a-8557-27eaca80a5db?width=80&height=80',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Tokyo',code: 'NRT', country: "JP",thumbnail: 'https://grabaseat.co.nz/resource/10e0f7f2-6477-4a5a-8557-27eaca80a5db?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
  ];
  allAirportsList = [
    { name: 'Auckland', code:'AKL', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Blenheim', code:'BHE', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/4d8a9137-5798-4daf-8225-0ee92f5bea9d?width=60&height=60' },
    { name: 'Christchurch', code:'CHC', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/f1a27c0b-63eb-4b86-a60c-f1b15ef26640?width=60&height=60' },
    { name: 'Dunedin', code:'DUD', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/532e52ed-d734-4811-956a-4c255514b642?width=60&height=60' },
    { name: 'Gisborne', code:'GIS', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/1725c3f5-9ca0-4886-8850-e04b13ddfb21?width=60&height=60' },
    { name: 'Hamilton', code:'HLZ', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/a49d0d12-a170-4787-b664-08c48f88b8e8?width=60&height=60' },
    { name: 'Invercargill', code:'IVC', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/ef82db4f-3721-46b7-80d8-1799c57e1da7?width=60&height=60' },
    { name: 'Kerikeri', code:'KKE', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/8fc5f30a-8b86-4933-ac25-595f97532098?width=60&height=60' },
    { name: 'Napier Hastings', code:'NPE', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/1fbe15fe-5b22-4cdb-b467-8a2b5e433129?width=60&height=60' },
    { name: 'Nelson', code:'NSN', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/51fd1d8b-7492-42e6-a419-f0b00ea3dbb8?width=60&height=60' },
    { name: 'New Plymouth', code:'NPL', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/f795cce7-a084-43e3-8305-5f99f25ea627?width=60&height=60' },
    { name: 'Palmerston North', code:'PMR', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/cd349bdb-0862-493c-94de-43c1ff526dd9?width=60&height=60' },
    { name: 'Queenstown', code:'ZQN', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/e7ce48a8-0e25-4015-802e-e058b92a7e13?width=60&height=60' },
    { name: 'Rotorua', code:'ROT', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/beb58431-cc27-468d-bd21-6148281731f4?width=60&height=60' },
    { name: 'Taupo', code:'TUO', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/d9c533e4-5f61-4b7a-ae18-aaf23fe31e0f?width=60&height=60' },
    { name: 'Tauranga', code:'TRG', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/f4aca6a8-5c4b-4566-9a6e-c0d4644955e5?width=60&height=60' },
    { name: 'Timaru', code:'TIU', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/049e9ea6-73a5-4c12-a8dd-d6b23fa393d8?width=60&height=60' },
    { name: 'Wellington', code:'WLG', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/51efd9db-4288-4736-8a1d-8edfdce9c4f5?width=60&height=60' },
    { name: 'Whangarei', code:'WRE', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/0a9ef081-39ff-444e-af78-6ce53cff55aa?width=60&height=60' },
    { name: 'Kapiti Coast', code:'PPQ', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/8fc5f30a-8b86-4933-ac25-595f97532098?width=60&height=60',
      img_small: 'https://d30ei5trzxos71.cloudfront.net/resource/50b1da0d-e145-4b9c-b55b-fa574b177afa?width=160&height=120',
      short_description: "The Kapiti Coast is Wellington's backyard, but many in the capital only know the place names from radio traffic reports."
    },
    { name: 'Hokitika', code:'HKK', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/0d580a46-e603-4686-9387-895cfa1a539c?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/0d580a46-e603-4686-9387-895cfa1a539c?width=160&height=120',
      short_description: "Mountains in Hokitika - Cheap flights with Air New Zealand's grabaseat"
    },
    { name: 'Adelaide', code: 'ADL', country: "AU", thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=160&height=120'},
    { name: 'Brisbane',code: 'BNE', country: "AU", thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=160&height=120'},
    { name: 'Cairns',code: 'CNS', country: "AU",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Gold Coast',code: 'OOL', country: "AU",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/14d977c3-4b85-4caa-a0d4-7e4d7d94007a?width=80&height=80',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Melbourne',code: 'MEL', country: "AU",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/729649e2-2475-4422-a867-dc9ef834f2f7?width=80&height=80',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Perth',code: 'PER', country: "AU",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Sunshine Coast',code: 'MCY', country: "AU",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Sydney',code: 'SYD', country: "AU",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',
      img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Fiji',code: 'NAN', country: "FJ",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'New Caledonia',code: 'NOU', country: "NC",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Niue',code: 'IUE', country: "NU",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Norfolk Island',code: 'NLK', country: "NF",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Rarotonga',code: 'RAR', country: "CK",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/70fa982f-26e3-4e24-827f-13f736ecac93?width=80&height=80',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Samoa',code: 'APW', country: "WS",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=80&height=80',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    { name: 'Tonga',code: 'TBU', country: "TO",thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60',img_small: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/fc9bd790-4412-432d-ace1-3273575a069c?width=160&height=120'},
    // agentina
    { code: "EZE",name: "Buenos Aires",city: "BUE",country: "AR", thumbnail: 'https://imgaf.s3.eu-central-1.amazonaws.com/public/artwork/products/303966/zoom/7703-300.jpg?1304245864' },
  ];

  constructor(private webApiObservableService:WebApiObservableService) {}

  // todo: nasty but will work maybe look for a more elegant solution
  // also
  getAirportByIata(code:string): any{
    let airport:any = null;
    // check NZ
    if(!airport || airport.length < 1){
      airport = this.nzAirportsList.filter(item => {
        return item.code == code;
      })
    }

    // check Australia
    if(!airport  || airport.length < 1){
      airport = this.australiaAirportsList.filter(item => {
        return item.code == code;
      })
    }

    // check Asia
    if(!airport  || airport.length < 1){
      airport = this.asiaAirportsList.filter(item => {
        return item.code == code;
      })
    }

    // check Pacific Island
    if(!airport  || airport.length < 1){
      airport = this.piAirportsList.filter(item => {
        return item.code == code;
      })
    }

    // check North America
    if(!airport  || airport.length < 1){
      airport = this.northAmericaAirportsList.filter(item => {
        return item.code == code;
      })
    }

    // check Europe
    if(!airport  || airport.length < 1){
      airport = this.europeAirportsList.filter(item => {
        return item.code == code;
      })
    }

    return airport[0] ? airport[0] : '';

  }

  /**
   *
   * @returns {any}
   */
  getAirportsList():any {
    this.webApiObservableService.getAirports()
      .subscribe(
        (data) => {
          this.airportList = data;
          return Observable.of(this.airportList);
        },
        err => {
          return Observable.throw(new Error('airports api failed'));
        }
      );

    // if(this.airportList && this.airportList.length > 0) {
    //   return Observable.of(this.airportList);
    // }
  }

  getOriginRouteOptions(): any{
    let arr = [];
    this.nzAirportsList.forEach(item => {
      arr.push(item);
    });
    return arr;
  }

  getDestinationRouteOptions(): any{
    let arr = [];
    this.nzAirportsList.forEach(item => {
      arr.push(item);
    });
    return arr;
  }

  getImageByIata(iata:String) {
    let matchedAirport = this.allAirportsList.find(function(airport){
      return airport.code === iata;
    });

    return matchedAirport ? matchedAirport.thumbnail : '';
  }

  getAirportObjectByName(name:string): any{
    let arr = this.allAirportsList.filter(airport => {
      return airport.name.toLowerCase() == name.toLowerCase();
    });
    return arr[0];
  }

  /**
   * Mainly used by LFF to retrieve default origin
   * @param origin
   */
  getDefaultOrigin(origin:any):any {
    let defaultOrigin:any;
    if(origin) {
      const originArr = new SearchFilter().transform(this.allAirportsList,origin,this.featuredNZAirportList,this.featuredOtherAirport);
      if(originArr) {
        defaultOrigin = originArr[0];
      }
    } else {
      // set default
      defaultOrigin = { name: 'Auckland', code:'AKL', country: "NZ"};
    }
    return defaultOrigin;
  }

  /**
   * Mainly used by LFF to retrieve default destination
   * @param destination
   */
  getDefaultDestination(destination:any):any {
    let defaultDestination:any;
    if(destination) {
      const destArr = new SearchFilter().transform(this.allAirportsList,destination,this.featuredNZAirportList,this.featuredOtherAirport);
      if(destArr) {
        defaultDestination = destArr[0];
      }
    } else {
      defaultDestination = { name: 'Wellington', code:'WLG', country: "NZ"};
    }
    return defaultDestination;
  }

}
