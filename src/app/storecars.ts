export class storeCars {
    // constructor() {}
    public static title1: string = '';
    // public static vehicles = [
    // {
    //     image: "https://cache1.pakwheels.com/ad_pictures/6510/toyota-vitz-1-0-f-2019-65106344.jpg",
    //     name: "Toyota Vitz F 1.0 2019",
    //     location: "Karachi",
    //     price: 30000000,
    //     color: "White",
    //     year: 2019,
    //     dateadded: "10th April 2022",
    //     rating: 3,
    //     model: 'Toyota',
    //     transmission: 'Automatic',
    //     mileage: 100000,
    //     registered:"Karachi",
    //     assembly: "Local",
    //     engcapacity: 1000,
    //     lastupdated: "15th April 2022",
    //     features:" ABS AM/FM Radio Air Bags Air Conditioning CD Player Immobilizer Key Keyless Entry Power Locks",
    //     condition:"Car condition is average",
    //     usercontact: "090078601",
    //     useremail: "i180600@nu.edu.pk",
    //     userlocation: "Karachi",
    //     usercontacthrs: "5AM-6PM",
    //     usercomment:"Auction sheet avaialble. No Major & minor accident. Mention PakWheels.com when calling Seller to get a good deale",
    //     ind: 0
    // },
    // {
    //     image: "https://cache3.pakwheels.com/ad_pictures/6481/honda-vezel-g-41-2015-64819517.jpg",
    //     name: "Honda Vezel Hybrid 2015",
    //     location: "Islamabad",
    //     price: 30000000,
    //     color: "White",
    //     year: 2019,
    //     dateadded: "10th April 2022",
    //     rating: 3,
    //     model: 'Honda',
    //     transmission: 'Automatic',
    //     mileage: 100000,
    //     registered:"Islamabad",
    //     assembly: "Imported",
    //     engcapacity: 1000,
    //     lastupdated: "10th December 2021",
    //     features:" ABS AM/FM Radio Air Bags Air Conditioning CD Player Immobilizer Key Keyless Entry Power Locks",
    //     condition:"Car condition is average",
    //     usercontact: "090078601",
    //     useremail: "i180600@nu.edu.pk",
    //     userlocation: "Islamabad",
    //     usercontacthrs: "5AM-6PM",
    //     usercomment:"Auction sheet avaialble. No Major & minor accident. Mention PakWheels.com when calling Seller to get a good deale",
    //     ind: 1
    // },
    // {
    //     image: "https://cache2.pakwheels.com/ad_pictures/6517/honda-civic-oriel-2022-65178623.jpg",
    //     name: "Honda Civic Oriel 2022",
    //     location: "Islamabad",
    //     price: 30000000,
    //     color: "White",
    //     year: 2019,
    //     dateadded: "10th April 2022",
    //     rating: 4,
    //     model: 'Toyota',
    //     transmission: 'Automatic',
    //     mileage: 100000,
    //     registered:"Islamabad",
    //     assembly: "Imported",
    //     engcapacity: 1000,
    //     lastupdated: "10th December 2021",
    //     features:" ABS AM/FM Radio Air Bags Air Conditioning CD Player Immobilizer Key Keyless Entry Power Locks",
    //     condition:"Car condition is average",
    //     usercontact: "090078601",
    //     useremail: "i180600@nu.edu.pk",
    //     userlocation: "Karachi",
    //     usercontacthrs: "5AM-6PM",
    //     usercomment:"Auction sheet avaialble. No Major & minor accident. Mention PakWheels.com when calling Seller to get a good deale",
    //     ind: 2
    // },
    // {
    //     image: "https://cache1.pakwheels.com/ad_pictures/6521/suzuki-wagon-r-vxl-2018-65211828.jpg",
    //     name: "Suzuki Wagon R VXL 2018",
    //     location: "Karachi",
    //     price: 30000000,
    //     color: "White",
    //     year: 2018,
    //     dateadded: "16th April 2022",
    //     rating: 3,
    //     model: 'Suzuki',
    //     transmission: 'Manual',
    //     mileage: 50000,
    //     registered:"Lahore",
    //     assembly: "Local",
    //     engcapacity: 1000,
    //     lastupdated: "14th December 2021",
    //     features:" ABS AM/FM Radio Air Bags Air Conditioning CD Player Immobilizer Key Keyless Entry Power Locks",
    //     condition:"Car condition is average",
    //     usercontact: "090078601",
    //     useremail: "i180600@nu.edu.pk",
    //     userlocation: "Karachi",
    //     usercontacthrs: "10AM-6PM",
    //     usercomment:" Original Owner + Exclusively Owner Driven I have never let anyone else drive this car, never touched by a driver, not even ever given for valet parking Exceedingly well maintained Bumper-to-Bumper Original Paint Never been in an accident",
    //     ind: 3
    // },
    // {
    //     image: "https://cache4.pakwheels.com/ad_pictures/6348/nissan-dayz-highway-star-2022-63483441.jpg",
    //     name: "Nissan Dayz Star 2018",
    //     location: "Lahore",
    //     price: 30000000,
    //     color: "Grey",
    //     year: 2018,
    //     dateadded: "14th April 2022",
    //     rating: 5,
    //     model: 'Suzuki',
    //     transmission: 'Automatic',
    //     mileage: 63830,
    //     registered:"Lahore",
    //     assembly: "Imported",
    //     engcapacity: 660,
    //     lastupdated: "14th December 2021",
    //     features:" ABS AM/FM Radio Air Bags Air Conditioning CD Player Immobilizer Key Keyless Entry Power Locks",
    //     condition:"Car condition is average",
    //     usercontact: "090078601",
    //     useremail: "i180600@nu.edu.pk",
    //     userlocation: "Karachi",
    //     usercontacthrs: "11AM-5PM",
    //     usercomment:"  - Pak wheels inspected car Inspection Report Attached1st ownerregistered Applied forimport 2022 Documents (available) Model 2022 1 Key's available token paid Non-Accidental ",
    //     ind: 4
    // },
    // {
    //     image: "https://cache4.pakwheels.com/ad_pictures/6515/yamaha-ybr-125-2020-65158255.jpg",
    //     name: "Yamaha YBR 125 2020",
    //     location: "Peshawar",
    //     price: 180000,
    //     color: "Grey",
    //     year: 2020,
    //     dateadded: "15th April 2022",
    //     rating: 4,
    //     model: 'Yamaha',
    //     transmission: 'Manual',
    //     mileage: 16000,
    //     registered:"Lahore",
    //     assembly: "Local",
    //     engcapacity: 660,
    //     lastupdated: "14th December 2021",
    //     features:" ABS AM/FM Radio Air Bags Air Conditioning CD Player Immobilizer Key Keyless Entry Power Locks",
    //     condition:"Car condition is average",
    //     usercontact: "090078601",
    //     useremail: "i180600@nu.edu.pk",
    //     userlocation: "Karachi",
    //     usercontacthrs: "11AM-5PM",
    //     usercomment:" i'm selling my yamaha YBZ 125, all over original contact me for further details, call or Whatsapp, Mention PakWheels.com when calling Seller to get a good deal ",
    //     ind: 5
    // },
    // {
    //     image: "https://cache1.pakwheels.com/ad_pictures/6521/united-us-70-2022-65210622.jpg",
    //     name: "United US 70 2022",
    //     location: "Quetta",
    //     price: 180000,
    //     color: "Purple",
    //     year: 2022,
    //     dateadded: "16th April 2022",
    //     rating: 4,
    //     model: 'United',
    //     transmission: 'Manual',
    //     mileage: 500,
    //     registered:"Lahore",
    //     assembly: "Local",
    //     engcapacity: 660,
    //     lastupdated: "14th December 2021",
    //     features:"LED Lights",
    //     condition:"Bike condition is average",
    //     usercontact: "090078601",
    //     useremail: "i180600@nu.edu.pk",
    //     userlocation: "Karachi",
    //     usercontacthrs: "11AM-5PM",
    //     usercomment:"Total orignal, orignal alloy rim ,orignal file and document ,one month used, contact only serious buyers, chaska party stayaway, only call no message, exchange with honda 125  ",
    //     ind: 6
    // },
    // {
    //     image: "https://cache4.pakwheels.com/ad_pictures/6515/harley-davidson-night-rod-special-2014-65152470.jpg",
    //     name: "Harley Davidson Night Rod",
    //     location: "Karachi",
    //     price: 3800000,
    //     color: "Black",
    //     year: 2014,
    //     dateadded: "15th April 2022",
    //     rating: 5,
    //     model: 'Harley Davidson',
    //     transmission: 'Manual',
    //     mileage: 7000,
    //     registered:"Karachi",
    //     assembly: "Local",
    //     engcapacity: 660,
    //     lastupdated: "14th December 2021",
    //     features:"Anti Theft Lock, Led Light",
    //     condition:"Bike condition is average",
    //     usercontact: "090078601",
    //     useremail: "i180600@nu.edu.pk",
    //     userlocation: "Karachi",
    //     usercontacthrs: "11AM-5PM",
    //     usercomment:"In pristine condition. Original paint. Low mileage. Has power commander and power commander auto tune installed. Custom matte black wrap. ",
    //     ind: 7
    // },
    // ]
    public static getSaveCity (saveCity:string){
        console.log(saveCity);
        return saveCity;
    }
}