import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ActivitiesModel {

  aklActivities = [
    {"title":"Wynyard Quarter","status":"open","user_tags":"","tags_who":"couples,friends,boys,girls","directions":"","website":"http://www.wynyard-quarter.co.nz/","phone":"","zip_code":"","city":"Auckland","mission_id":"75","link_d":"","link_h":"","link_c":"","link_m":"http://www.aucklandnz.com","link_s":"http://grabaseat.co.nz/destination/auckland","zoom":"10","m_img":"//tiki.grabaseat.co.nz/u/m/_slide/1_auckland_lrg.jpg","lat":"-36.84846","long":"174.76333","tags":"walk,coffee,restaurant,drink,beer,food and wine,cuisine,big cities","excerpt":"","desc":"Head along to North Wharf to discover eateries and bars offering the freshest waterside dining in town. It'll be a tough choice between Conservatory, Jack Tar, and Marvel Grill.","email":"","addr_1":"Auckland Waterfront","addr_2":"","addr_region":"","rating":"","region_id":"26","region":"Auckland","m_img_thumb":"//tiki.grabaseat.co.nz/u/m/_thumb/1_auckland_lrg.jpg","l_img":"//tiki.grabaseat.co.nz/u/m/_list/1_auckland_lrg.jpg","user_rated":"no","gas_region_id":"AKL","featured":"0"},
    {"title":"Britomart shopping ","status":"open","user_tags":"","tags_who":"couples,boys,friends,girls","directions":"","website":"http://britomart.org/shopping","phone":"","zip_code":"1140","city":"Auckland","mission_id":"76","link_d":"","link_h":"","link_c":"","link_m":"http://www.aucklandnz.com","link_s":"http://grabaseat.co.nz/destination/auckland","zoom":"10","m_img":"//tiki.grabaseat.co.nz/u/m/_slide/2_Auckland_lrg.jpg","lat":"-36.84497","long":"174.77071","tags":"shopping,indulge,fashion,big cities,cuisine,food and wine","excerpt":"","desc":"Shop 'til you drop at Auckland's newest shopping precinct with a great selection of designer boutiques. ","email":"","addr_1":"130 Quay St","addr_2":"","addr_region":"","rating":"","region_id":"26","region":"Auckland","m_img_thumb":"//tiki.grabaseat.co.nz/u/m/_thumb/2_Auckland_lrg.jpg","l_img":"//tiki.grabaseat.co.nz/u/m/_list/2_Auckland_lrg.jpg","user_rated":"no","gas_region_id":"AKL","featured":"1"},
    {"title":"Matakana wineries & markets","status":"open","user_tags":"","tags_who":"couples,girls,friends,family","directions":"","website":"http://matakanavillage.co.nz/","phone":"","zip_code":"","city":"Matakana","mission_id":"77","link_d":"","link_h":"","link_c":"","link_m":"http://www.aucklandnz.com","link_s":"http://grabaseat.co.nz/destination/auckland","zoom":"10","m_img":"//tiki.grabaseat.co.nz/u/m/_slide/3_Auckland_lrg.jpg","lat":"-36.35223","long":"174.71758","tags":"market,coffee,local produce,pastries,fresh bread,shopping,dips,relishes,explore,free,oils,cuisine,food and wine","excerpt":"","desc":"Head north to Matakana and sip a vino at the local vineyards. Then explore the markets and be spoilt for foodie choices with an abundance of seafood, chocolate or whatever your heart desires.","email":"","addr_1":"Northern Motorway","addr_2":"State Highway 1","addr_region":"Auckland","rating":"","region_id":"26","region":"Auckland","m_img_thumb":"//tiki.grabaseat.co.nz/u/m/_thumb/3_Auckland_lrg.jpg","l_img":"//tiki.grabaseat.co.nz/u/m/_list/3_Auckland_lrg.jpg","user_rated":"no","gas_region_id":"AKL","featured":"0"},
    {"title":"Dinner at the Viaduct ","status":"open","user_tags":"","tags_who":"couples,friends,girls","directions":"","website":"http://viaduct.co.nz","phone":"","zip_code":"1142","city":"Auckland","mission_id":"78","link_d":"","link_h":"","link_c":"","link_m":"http://www.aucklandnz.com","link_s":"http://grabaseat.co.nz/destination/auckland","zoom":"10","m_img":"//tiki.grabaseat.co.nz/u/m/_slide/4_Auckland_lrg.jpg","lat":"-36.84533","long":"174.75826","tags":"restaurant,beer,scenic,sightseeing,soul bar,kermadec,drink,food and wine,cuisine,big cities","excerpt":"","desc":"Dine waterside at one of the many award-winning restaurants at the Viaduct. Try Soul, Mecca, Food Store or Kermadec.","email":"","addr_1":"Viaduct Harbour Ave","addr_2":"","addr_region":"","rating":"","region_id":"26","region":"Auckland","m_img_thumb":"//tiki.grabaseat.co.nz/u/m/_thumb/4_Auckland_lrg.jpg","l_img":"//tiki.grabaseat.co.nz/u/m/_list/4_Auckland_lrg.jpg","user_rated":"no","gas_region_id":"AKL","featured":"0"},
    {"title":"Auckland Art Gallery","status":"open","user_tags":"","tags_who":"couples,friends","directions":"","website":"http://www.aucklandartgallery.com/","phone":"+64 9 379 1349","zip_code":"1010","city":"Auckland","mission_id":"79","link_d":"","link_h":"","link_c":"","link_m":"http://www.aucklandnz.com","link_s":"http://grabaseat.co.nz/destination/auckland","zoom":"10","m_img":"//tiki.grabaseat.co.nz/u/m/_slide/79.jpg","lat":"-36.8514","long":"174.7663","tags":"gallery,free,explore,cultural activities,big cities","excerpt":"","desc":"Home to New Zealand's largest permanent collection of NZ art. Grab an early breakfast and be the first through the doors at 10am.","email":"","addr_1":"Cnr Kitchener and Wellesley Streets","addr_2":"","addr_region":"","rating":"","region_id":"26","region":"Auckland","m_img_thumb":"//tiki.grabaseat.co.nz/u/m/_thumb/79.jpg","l_img":"//tiki.grabaseat.co.nz/u/m/_list/79.jpg","user_rated":"no","gas_region_id":"AKL","featured":"0"},
    {"title":"La Cigale French Markets","status":"open","user_tags":"","tags_who":"friends,couples,girls,family","directions":"","website":"http://www.lacigale.co.nz/","phone":"+64 9 366-9361","zip_code":"","city":"Auckland","mission_id":"80","link_d":"","link_h":"","link_c":"","link_m":"http://www.lacigale.co.nz/wawcs0128039/Home.html","link_s":"http://grabaseat.co.nz/destination/auckland","zoom":"10","m_img":"//tiki.grabaseat.co.nz/u/m/_slide/5_Auckland_lrg.jpg","lat":"-36.85346","long":"174.78282","tags":"shopping,free,relaxation,indulge,coffee,pastries,fresh bread,local produce,market,french market,food and wine,cuisine,cultural activities","excerpt":"","desc":"Parnell, full of old world charm is the setting for the famous French Market.  It'll be open for you rain or shine with a range of international food for you to try. ","email":"","addr_1":"69 St George's Bay Road","addr_2":"Parnell","addr_region":"Auckland","rating":"","region_id":"26","region":"Auckland","m_img_thumb":"//tiki.grabaseat.co.nz/u/m/_thumb/5_Auckland_lrg.jpg","l_img":"//tiki.grabaseat.co.nz/u/m/_list/5_Auckland_lrg.jpg","user_rated":"no","gas_region_id":"AKL","featured":"0"},
    {"title":"Ponsonby Road","status":"open","user_tags":"","tags_who":"friends,girls,couples","directions":"","website":"http://iloveponsonby.co.nz/","phone":"","zip_code":"1011","city":"Auckland","mission_id":"81","link_d":"","link_h":"","link_c":"","link_m":"http://www.aucklandnz.com","link_s":"http://grabaseat.co.nz/destination/auckland","zoom":"10","m_img":"//tiki.grabaseat.co.nz/u/m/_slide/81.jpg","lat":"-36.85425","long":"174.74578","tags":"ponsonby road,explore,sightseeting,bars,restaurants,cafes,coffee,beer,shopping,indulge,relaxation,walk,window shop,boutique shopping,cuisine,food and wine,big cities","excerpt":"","desc":"Hit the hippest shopping strip in the city and you'll be tempted to do more than window shop. Don't miss Amaze for gift cards, Wallace Cotton for beautiful bedroom linen, Macy Home for quirky home-wares and independent bookstores to lose yourself in.","email":"","addr_1":"Ponsonby Road","addr_2":"","addr_region":"Auckland","rating":"","region_id":"26","region":"Auckland","m_img_thumb":"//tiki.grabaseat.co.nz/u/m/_thumb/81.jpg","l_img":"//tiki.grabaseat.co.nz/u/m/_list/81.jpg","user_rated":"no","gas_region_id":"AKL","featured":"0"},
    {"title":"Ponsonby Central for lunch","status":"open","user_tags":"","tags_who":"couples,friends,boys,girls","directions":"","website":"http://ponsonbycentral.co.nz/","phone":"+ 64 9 376 8300","zip_code":"1010","city":"Auckland","mission_id":"83","link_d":"","link_h":"","link_c":"","link_m":"http://www.aucklandnz.com","link_s":"http://grabaseat.co.nz/destination/auckland","zoom":"10","m_img":"//tiki.grabaseat.co.nz/u/m/_slide/7_Auckland_lrg.jpg","lat":"-36.85627","long":"174.74618","tags":"ponsonby central,shopping,restaurant,cafe,coffee,beer,relaxation,food and wine,cuisine,big cities","excerpt":"","desc":"Let your senses guide you around Ponsonby's newest eatery. Easy to find along Ponsonby Rd, it's a global food experience. There's a fresh food market, a demonstration kitchen for celeb chef workshops and a quirky market on Sunday mornings starting around 10am. You can do a bit of celeb spotting while you're there too.","email":"admin@ponsonbycentral.co.nz","addr_1":"136-138 Ponsonby Road.","addr_2":"Cnr Ponsonby Road and Brown Street, Ponsonby","addr_region":"","rating":"","region_id":"26","region":"Auckland","m_img_thumb":"//tiki.grabaseat.co.nz/u/m/_thumb/7_Auckland_lrg.jpg","l_img":"//tiki.grabaseat.co.nz/u/m/_list/7_Auckland_lrg.jpg","user_rated":"no","gas_region_id":"AKL","featured":"0"},
    {"title":"Vineyard lunch on Waiheke Island","status":"open","user_tags":"","tags_who":"friends,couples,girls,boys","directions":"","website":"http://cablebay.nz/","phone":"","zip_code":"","city":"Waiheke Island","mission_id":"84","link_d":"","link_h":"","link_c":"","link_m":"http://www.aucklandnz.com","link_s":"http://grabaseat.co.nz/destination/auckland","zoom":"10","m_img":"//tiki.grabaseat.co.nz/u/m/_slide/8_Auckland_lrg.jpg","lat":"-36.78713","long":"174.99984","tags":"vineyard,scenic,explore,look out,platters,waiheke island,food and wine,cuisine","excerpt":"","desc":"There are many options when it comes to vineyard lunches on the island. Mudbrick is especially popular as a wedding venue but you don't need to get hitched to enjoy the amazing restaurant. Stoneyridge in Onetangi has a beautiful veranda cafe nestled in a shimmering valley of olive trees and colourful vines. Cable Bay's wine bar offers a small plate menu and when the sun is shining enjoy sitting outside on one of the beanbags. It's the perfect way to end the day.","email":"","addr_1":"12 Nick Johnstone Drive","addr_2":"Oneroa","addr_region":"Auckland","rating":"","region_id":"26","region":"Auckland","m_img_thumb":"//tiki.grabaseat.co.nz/u/m/_thumb/8_Auckland_lrg.jpg","l_img":"//tiki.grabaseat.co.nz/u/m/_list/8_Auckland_lrg.jpg","user_rated":"no","gas_region_id":"AKL","featured":"1"},
    {"title":"Rangitoto Island","status":"open","user_tags":"","tags_who":"couples,friends","directions":"","website":"http://www.aucklandnz.com/destinations/rangitoto-and-motutapu-island","phone":"","zip_code":"","city":"Auckland","mission_id":"366","link_d":"","link_h":"","link_c":"","link_m":"http://www.aucklandnz.com","link_s":"http://grabaseat.co.nz/destination/auckland","zoom":"10","m_img":"//tiki.grabaseat.co.nz/u/m/_slide/366.jpg","lat":"-36.42631","long":"175.1894","tags":"rangitoto island,walk,look out,scenic,explore,nature,outdoor activities","excerpt":"","desc":"Climb to the summit of Auckland's most iconic volcano for some of the best views of the city and harbour you've ever seen. Don't forget to take a torch to explore the lava caves on the way up.","email":"","addr_1":"Hauraki Gulf","addr_2":"","addr_region":"","rating":"","region_id":"26","region":"Auckland","m_img_thumb":"//tiki.grabaseat.co.nz/u/m/_thumb/366.jpg","l_img":"//tiki.grabaseat.co.nz/u/m/_list/366.jpg","user_rated":"no","gas_region_id":"AKL","featured":"1"},
    {"title":"Goat Island","status":"open","user_tags":"","tags_who":"couples,friends,boys","directions":"","website":"http://www.aucklandnz.com/destinations/goat-island-and-leigh","phone":"","zip_code":"","city":"North Auckland","mission_id":"367","link_d":"","link_h":"","link_c":"","link_m":"www.aucklandnz.com","link_s":"http://grabaseat.co.nz/destination/auckland","zoom":"10","m_img":"//tiki.grabaseat.co.nz/u/m/_slide/367.jpg","lat":"-36.26469","long":"174.79747","tags":"goat island,diving,swimming,snorkeling,explore,scenic,boat,nature,outdoor activities","excerpt":"","desc":"Swim with the fish at Goat Island or stay dry and go for a ride in the glass-bottom boat. Remember to take your own snorkel and brush up on your knowledge of all the fish. How many different ones can you spot?","email":"","addr_1":"Goat Island","addr_2":"Leigh","addr_region":"","rating":"","region_id":"26","region":"Auckland","m_img_thumb":"//tiki.grabaseat.co.nz/u/m/_thumb/367.jpg","l_img":"//tiki.grabaseat.co.nz/u/m/_list/367.jpg","user_rated":"no","gas_region_id":"AKL","featured":"0"},
    {"title":"North Head, Devonport","status":"open","user_tags":"","tags_who":"couples,friends","directions":"","website":"http://www.aucklandnz.com/destinations/devonport","phone":"","zip_code":"","city":"Auckland","mission_id":"368","link_d":"","link_h":"","link_c":"","link_m":"http://www.aucklandnz.com","link_s":"http://grabaseat.co.nz/destination/auckland","zoom":"10","m_img":"//tiki.grabaseat.co.nz/u/m/_slide/368.jpg","lat":"-36.82744","long":"174.7967","tags":"scenic,sightseeing,explore,history and heritage,cultural activities","excerpt":"","desc":"Devonport is a charming seaside village only a few minutes ferry ride across the Waitemata harbour from downtown Auckland. North Head in Devonport became an important military site back in the late 1800s, when there was a fear the Russians were planning an attack on New Zealand ports.","email":"","addr_1":"Queens Parade,","addr_2":"Devonport","addr_region":"","rating":"","region_id":"26","region":"Auckland","m_img_thumb":"//tiki.grabaseat.co.nz/u/m/_thumb/368.jpg","l_img":"//tiki.grabaseat.co.nz/u/m/_list/368.jpg","user_rated":"no","gas_region_id":"AKL","featured":"0"},
    {"title":"Woodhill Forest Mountain Biking","status":"open","user_tags":"Woodhill","tags_who":"couples,friends,boys","directions":"","website":"http://www.woodhillforest.co.nz/woodhill-activities/","phone":"0800 732 738","zip_code":"","city":"Auckland","mission_id":"369","link_d":"","link_h":"","link_c":"","link_m":"http://www.aucklandnz.com","link_s":"http://grabaseat.co.nz/destination/auckland","zoom":"10","m_img":"//tiki.grabaseat.co.nz/u/m/_slide/369.jpg","lat":"-36.48656","long":"174.23103","tags":"mountain biking,adventure,forest,sporting events,outdoor activities,nature","excerpt":"","desc":"Get some air on the mountain bike trails at Woodhill Forest. Hire a bike when you get there or take your own, and get those legs pumping over 100km of purpose-built mountain bike tracks.","email":"woodhill@kaiparamoana.com","addr_1":"Woodhill Forest","addr_2":"West Auckland","addr_region":"","rating":"","region_id":"26","region":"Auckland","m_img_thumb":"//tiki.grabaseat.co.nz/u/m/_thumb/369.jpg","l_img":"//tiki.grabaseat.co.nz/u/m/_list/369.jpg","user_rated":"no","gas_region_id":"AKL","featured":"0"},
    {"title":"Kitekite Falls","status":"open","user_tags":"","tags_who":"friends,couples,boys","directions":"","website":"http://www.piha.co.nz/kitekite-falls/","phone":"","zip_code":"","city":"Auckland","mission_id":"370","link_d":"","link_h":"","link_c":"","link_m":"http://www.aucklandnz.com","link_s":"http://grabaseat.co.nz/destination/auckland","zoom":"10","m_img":"//tiki.grabaseat.co.nz/u/m/_slide/370.jpg","lat":"-36.95272","long":"174.4796","tags":"waterfall,swimming hole,walk,free,explore,picnic,nature,outdoor activities","excerpt":"","desc":"Set off from the end of Glenesk Road into the gorgeous native bush of the Waitakere Ranges and 30 minutes later you'll emerge at one of Auckland's most stunning waterfalls. The three-tier Kitekite Falls drop 40m into a swimming hole at the base, perfect for a dip if you can brave the cold water.","email":"","addr_1":"End of Glenesk Road","addr_2":"Piha","addr_region":"","rating":"","region_id":"26","region":"Auckland","m_img_thumb":"//tiki.grabaseat.co.nz/u/m/_thumb/370.jpg","l_img":"//tiki.grabaseat.co.nz/u/m/_list/370.jpg","user_rated":"no","gas_region_id":"AKL","featured":"0"},{"title":"Kayaking Waitemata Harbour","status":"open","user_tags":"","tags_who":"couples,friends","directions":"","website":"http://www.aucklandnz.com/activities/category/kayaking-salt-water","phone":"","zip_code":"1010","city":"Auckland","mission_id":"371","link_d":"","link_h":"","link_c":"","link_m":"http://www.aucklandnz.com","link_s":"http://grabaseat.co.nz/destination/auckland","zoom":"10","m_img":"//tiki.grabaseat.co.nz/u/m/_slide/371.jpg","lat":"-36.82459","long":"174.67929","tags":"kayaking,explore,sightseeing,adventure,sporting events,outdoor activities,big cities","excerpt":"","desc":"The sheltered waters of the Waitemata Harbour are perfect for kayaking. Get close to nature and explore Auckland's world-class marine environments right from your kayak. Paddle to desert islands, go searching for dolphins or try an action-packed day surfing the waves. If you happen to find any treasure on a desert island don't go telling anyone about it, finders keepers!","email":"","addr_1":"Waitemata Harbour","addr_2":"","addr_region":"","rating":"","region_id":"26","region":"Auckland","m_img_thumb":"//tiki.grabaseat.co.nz/u/m/_thumb/371.jpg","l_img":"//tiki.grabaseat.co.nz/u/m/_list/371.jpg","user_rated":"no","gas_region_id":"AKL","featured":"0"},{"title":"Tiritiri Matangi","status":"open","user_tags":"","tags_who":"friends,couples","directions":"","website":"http://www.tiritirimatangi.org.nz/","phone":"","zip_code":"","city":"Auckland","mission_id":"372","link_d":"","link_h":"","link_c":"","link_m":"http://www.aucklandnz.com","link_s":"http://grabaseat.co.nz/destination/auckland","zoom":"10","m_img":"//tiki.grabaseat.co.nz/u/m/_slide/372.jpg","lat":"-36.42631","long":"175.1894","tags":"scenic,explore,sightseeing,animal encounter,coffee,nature,outdoor activities","excerpt":"","desc":"Take a 75 minute ferry ride across the Hauraki Gulf to Tiritiri Matangi, an island wildlife sanctuary that some of the world's rarest species now call home. Explore the walking trails where you'll meet some of the local birds and reptiles.","email":"","addr_1":"Hauraki Gulf","addr_2":"","addr_region":"","rating":"","region_id":"26","region":"Auckland","m_img_thumb":"//tiki.grabaseat.co.nz/u/m/_thumb/372.jpg","l_img":"//tiki.grabaseat.co.nz/u/m/_list/372.jpg","user_rated":"no","gas_region_id":"AKL","featured":"0"},{"title":"Manukau Heads","status":"open","user_tags":"","tags_who":"couples,friends","directions":"","website":"http://manukauheadslighthouse.co.nz/","phone":"","zip_code":"","city":"Auckland","mission_id":"373","link_d":"","link_h":"","link_c":"","link_m":"http://www.aucklandnz.com","link_s":"http://grabaseat.co.nz/destination/auckland","zoom":"10","m_img":"//tiki.grabaseat.co.nz/u/m/_slide/373.jpg","lat":"-37.06667","long":"174.53333","tags":"lighthouse,scenic,explore,look out,walk,history and heritage","excerpt":"","desc":"Climb to the top of the Manukau Heads lighthouse. This lighthouse is particularly special as it's one of only a few in New Zealand you can actually climb to the top of.","email":"","addr_1":"Manukau Heads","addr_2":"Awhitu Peninsula","addr_region":"","rating":"","region_id":"26","region":"Auckland","m_img_thumb":"//tiki.grabaseat.co.nz/u/m/_thumb/373.jpg","l_img":"//tiki.grabaseat.co.nz/u/m/_list/373.jpg","user_rated":"no","gas_region_id":"AKL","featured":"0"},{"title":"Wynyard Quarter Piano","status":"open","user_tags":"","tags_who":"friends,couples,girls,boys","directions":"","website":"http://www.aucklandnz.com/destinations/wynyard-quarter","phone":"","zip_code":"","city":"Auckland","mission_id":"374","link_d":"","link_h":"","link_c":"","link_m":"","link_s":"http://grabaseat.co.nz/destination/auckland","zoom":"10","m_img":"//tiki.grabaseat.co.nz/u/m/_slide/374.jpg","lat":"-36.84027","long":"174.75386","tags":"free,explore,sightseeing,big cities,outdoor activities","excerpt":"","desc":"Fancy yourself as New Zealand's next big musical talent? Play us a tune on the Wynyard Quarter piano in Silo Park, and don't forget to snap a photo to remember your performance, it could be worth something if you become famous one day.","email":"","addr_1":"Silo Park","addr_2":"Wynyard Quarter","addr_region":"","rating":"","region_id":"26","region":"Auckland","m_img_thumb":"//tiki.grabaseat.co.nz/u/m/_thumb/374.jpg","l_img":"//tiki.grabaseat.co.nz/u/m/_list/374.jpg","user_rated":"no","gas_region_id":"AKL","featured":"0"},{"title":"Mt Eden","status":"open","user_tags":"","tags_who":"couples,friends,girls,family","directions":"","website":"http://www.mounteden.co.nz","phone":"","zip_code":"1349","city":"Auckland","mission_id":"375","link_d":"","link_h":"","link_c":"","link_m":"http://www.aucklandnz.com","link_s":"http://grabaseat.co.nz/destination/auckland","zoom":"10","m_img":"//tiki.grabaseat.co.nz/u/m/_slide/375.jpg","lat":"-36.87587","long":"174.76439","tags":"look out,sightseeing,walk,free,outdoor activities,big cities","excerpt":"","desc":"Admire the 360 degree views from the top of Mt Eden. Morning, noon and night, the view is always different.","email":"","addr_1":"Puhi Huia Road","addr_2":"Mt Eden","addr_region":"","rating":"","region_id":"26","region":"Auckland","m_img_thumb":"//tiki.grabaseat.co.nz/u/m/_thumb/375.jpg","l_img":"//tiki.grabaseat.co.nz/u/m/_list/375.jpg","user_rated":"no","gas_region_id":"AKL","featured":"0"},{"title":"Waka Quest","status":"open","user_tags":"","tags_who":"friends,boys,couples,girls","directions":"","website":"http://www.navigatortours.co.nz/Home.html","phone":"+64 211 906 737","zip_code":"","city":"Auckland","mission_id":"618","link_d":"","link_h":"","link_c":"","link_m":"http://www.aucklandnz.com","link_s":"http://grabaseat.co.nz/destination/auckland","zoom":"10","m_img":"//tiki.grabaseat.co.nz/u/m/_slide/618.jpg","lat":"-36.86188","long":"174.7327","tags":"waka,harbour,cultural activities,history and heritage,maori ","excerpt":"","desc":"Waka on the Waitemata is a 2.5 hour authentic Maori cultural experience including a traditional welcome and karakia on board a double hulled ocean voyaging canoe. Along with the crew members, you'll man the steering paddle and hoist the sails. As 'kai' is an important part of any Maori cultural experience, you'll be offered a selection of tasty indigenous fusion inspired snacks. This is really a unique way to sail the harbour.","email":"john@navigatortours.co.nz","addr_1":"553 Richmond Road","addr_2":"Grey Lynn","addr_region":"","rating":"","region_id":"26","region":"Auckland","m_img_thumb":"//tiki.grabaseat.co.nz/u/m/_thumb/618.jpg","l_img":"//tiki.grabaseat.co.nz/u/m/_list/618.jpg","user_rated":"no","gas_region_id":"AKL","featured":"0"},
    {"title":"Auckland Museum","status":"open","user_tags":"","tags_who":"couples,friends,girls","directions":"","website":"www.aucklandmuseum.com","phone":"+ 64 9 309 0443","zip_code":"1010","city":"Auckland ","mission_id":"633","link_d":"","link_h":"","link_c":"","link_m":"http://www.aucklandnz.com","link_s":"http://grabaseat.co.nz/destination/auckland","zoom":"10","m_img":"//tiki.grabaseat.co.nz/u/m/_slide/633.jpg","lat":"-36.85893","long":"174.77549","tags":"museum,explore,free,cultural activities,history and heritage,big cities","excerpt":"","desc":"Housed in one of the nations finest heritage buildings, the Museum's three floors tell the story of New Zealand. From the great Polynesian voyages which first brought people to Aotearoa, to the diverse cultures and communities that make up Auckland today, Auckland Museum portrays the rich diversity of New Zealand.","email":"info@aucklandmuseum.com","addr_1":"Auckland Domain","addr_2":"Parnell","addr_region":"","rating":"","region_id":"26","region":"Auckland","m_img_thumb":"//tiki.grabaseat.co.nz/u/m/_thumb/633.jpg","l_img":"//tiki.grabaseat.co.nz/u/m/_list/633.jpg","user_rated":"no","gas_region_id":"AKL","featured":"0"},
    {"title":"4&20 - Bread and Sandwiches","status":"open","user_tags":"coffee,cafe,sandwiches,bread,free range food,organic food,bakery","tags_who":"food,boys,girls,couples,friends,picnic,coffee,drink,cafe","directions":"","website":"http://www.4and20.co.nz","phone":"09 529 0307","zip_code":"1050","city":"Auckland","mission_id":"1532","link_d":"https://flightbookings.grabaseat.co.nz/vbook/actions/ext-search?searchLegs[0].originPoint=WLG&searchLegs[0].destinationPoint=AKL&promoCode=&bookingClass=economy&tripType=return&searchLegs[0].tripStartMonth=&searchLegs[0].tripStartDate=&adults=1&children=0&infants=0","link_h":"","link_c":"","link_m":"","link_s":"","zoom":"","m_img":"//tiki.grabaseat.co.nz/u/m/_slide/4and20.jpg","lat":"-36.881243","long":"174.797339","tags":"friends,couples,picnic,coffee,indulge,cafe,cuisine,food,big cities","excerpt":"","desc":"4&20 are passionate about baking naturally leavened breads, inspired by the lost traditions of how bread was originally crafted. nn","email":"","addr_1":"3A Clonbern Road","addr_2":"Remuera","addr_region":"","rating":"","region_id":"26","region":"Auckland","m_img_thumb":"//tiki.grabaseat.co.nz/u/m/_thumb/4and20.jpg","l_img":"//tiki.grabaseat.co.nz/u/m/_list/4and20.jpg","user_rated":"no","gas_region_id":"AKL","featured":"0"}
  ];

  constructor() {
  }

}
