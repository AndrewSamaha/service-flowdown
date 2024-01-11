/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const { ADMIN_ID } = require('./01-admin-user');
const owner_id = ADMIN_ID;

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  const song_ids = await knex('songs').insert([
    {
      name: 'Silence',
      artist: 'Kent Nazareth',
      duration: (3+0/60),
      owner_id
    },
    {
      name: 'Star Tripper',
      artist: 'Depart',
      duration: (4+54/30),
      owner_id
    },
    {
      name: 'Setira',
      artist: 'Riccardo Eberspacher',
      duration: (4+15/60),
      owner_id
    },

    /*

    start class

    */

    {
      name: 'Silence',
      artist: '',
      duration: (30/60),
      owner_id
    },
    {
      name: 'Silence',
      artist: '',
      duration: (30/60),
      owner_id
    },
    {
      name: 'For Children: No 2',
      artist: 'Bela Fleck, Abigail Washburn',
      duration: (2+17/60),
      owner_id
    },
    {
      name: 'Synchronized Wave',
      artist: 'Niklas Paschburg',
      duration: (4+6/60),
      owner_id
    },
    {
      name: 'Dog Days Are Over',
      artist: 'Florence + The Machine',
      duration: (4+12/60),
      owner_id
    },
    // {
    //   name: 'Advantage',
    //   artist: 'Tommy Veanud',
    //   duration: (3+33/60),
    //   owner_id
    // },
    {
      name: 'Bag of Bones',
      artist: 'Felix Laband',
      duration: (6+6/60),
      owner_id
    },
    {
      name: 'Hunger of the Pine',
      artist: 'Vaults, Jody Wisternoff',
      duration: (3+35/60),
      owner_id
    },
    {
      name: 'Birds',
      artist: 'Jose Solano',
      duration: (7+13/60),
      owner_id
    },
    {
      name: 'Returning to What Is',
      artist: 'DJ Eely',
      duration: (5+54/60),
      owner_id
    },
    {
      name: 'Silence',
      artist: '',
      duration: (30/60),
      owner_id
    },

    /*  ignition  */
    
    {
      name: 'Satisfied',
      artist: 'Catching Flies',
      duration: (3+16/60),
      owner_id
    },
    {
      name: 'Silence',
      artist: '',
      duration: (30/60),
      owner_id
    },

    
    

    /* stability */

    {
      name: 'Selfish Soul',
      artist: 'Sudan Archives',
      duration: (3+26/60),
      owner_id
    },
    {
      name: 'Silence',
      artist: '',
      duration: (30/60),
      owner_id
    },
    
    /* release */

    {
      name: 'Riding Free',
      artist: 'Maisy Stella',
      duration: (3+7/60),
      owner_id
    },
    {
      name: 'Silence',
      artist: '',
      duration: (30/60),
      owner_id
    },
    // {
    //   name: 'Desert, Pt.1',
    //   artist: 'KAYAM',
    //   duration: (1+36/60),
    //   owner_id
    // },
    {
      name: 'Now',
      artist: 'Beautiful Chorus',
      duration: (1+16/60),
      owner_id
    },
    {
      name: 'Grow - A Col',
      artist: 'Facesoul',
      duration: (3+27/60),
      owner_id
    },
    {
      name: 'The Blessing',
      artist: 'Essie Jaine',
      duration: (7+56/60),
      owner_id
    },
    {
      name: 'Silence',
      artist: '',
      duration: (2),
      owner_id
    },
    {
      name: 'Now',
      artist: 'Dilla',
      duration: (3+3/60),
      owner_id
    },
    {
      name: 'Horizon',
      artist: 'Garth Stevenson',
      duration: (3+59/60),
      owner_id
    },
    {
      name: 'Chestnut Heartsprite',
      artist: 'Axel Boman, Tim Green',
      duration: (8+3/60),
      owner_id
    },
    {
      name: 'Silence',
      artist: '',
      duration: (1),
      owner_id
    },
    {
      name: 'Shanti (Peace Out)',
      artist: 'MC Yogi',
      duration: (6+59/60),
      owner_id
    },
    {
      name: 'Star Tripper',
      artist: 'Depart',
      duration: (4+54/30),
      owner_id
    },
    {
      name: 'Behind the Sun',
      artist: 'Odesza',
      duration: (4+11/30),
      owner_id
    },
    // {
    //   name: 'vp (an interlude)',
    //   artist: 'Conner Youngblood',
    //   duration: (1+40/60),
    //   owner_id
    // },

    // {
    //   name: 'Ninety Three Til Infinity And Beyonce',
    //   artist: 'Andre 3000',
    //   duration: (3+50/60),
    //   owner_id
    // },
    // {
    //   name: 'Kwo (Instrumental)',
    //   artist: 'Ape Chimba',
    //   duration: (5+14/60),
    //   owner_id
    // },
    // {
    //   name: 'Beads on the Wind',
    //   artist: 'Embraced',
    //   duration: (4+27/30),
    //   owner_id
    // },
    // // {
    // //   name: 'Silence',
    // //   artist: 'Pink',
    // //   duration: (8+5/60),
    // //   owner_id
    // // },
    // {
    //   name: 'Ganesha Mantra',
    //   artist: 'End of Time',
    //   duration: (5+58/60),
    //   owner_id
    // },
    // {
    //   name: 'Silence',
    //   artist: 'Pink',
    //   duration: (2+5/60),
    //   owner_id
    // },
    // {
    //   name: 'Slow your Boom',
    //   artist: 'Parra for Cuva',
    //   duration: (4+48/60),
    //   owner_id
    // },
    // {
    //   name: 'Silence',
    //   artist: 'Pink',
    //   duration: 4,
    //   owner_id
    // },
    // {
    //   name: 'It was 9:30 and you were beautiful',
    //   artist: 'DJ Drez',
    //   duration: 7.5,
    //   owner_id
    // },
    // {
    //   name: 'Silence',
    //   artist: 'Pink',
    //   duration: 9,
    //   owner_id
    // },
    // {
    //   name: 'Watermelon Sugar',
    //   artist: 'Harry Styles',
    //   duration: 2.9,
    //   owner_id
    // },
    // {
    //   name: 'Folling the Sun',
    //   artist: 'Super-Hi, Neeka',
    //   duration: 3.4167,
    //   owner_id
    // },
    // {
    //   name: 'Let You In',
    //   artist: 'East Forest',
    //   duration: 5.9333,
    //   owner_id
    // },
    // {
    //   name: 'Grandmother Moon (Uji Remix)',
    //   artist: 'Noelani Love',
    //   duration: 6.75,
    //   owner_id
    // },
    // {
    //   name: 'Love You',
    //   artist: 'MrTout Le Monde',
    //   duration: 4.3,
    //   owner_id
    // },
    // {
    //   name: 'Frida Kahlo',
    //   artist: 'Cafe De Anatolia',
    //   duration: 5.2333,
    //   owner_id
    // },
    // {
    //     name: 'Darby Saddle',
    //     artist: 'Albrecht La Brooy',
    //     duration: 5.033,
    //     owner_id
    // },
    // {
    //     name: 'Catalyst',
    //     artist: 'Res Mo',
    //     duration: 5.2833,
    //     owner_id
    // },
    // {
    //     name: 'For Children: No 3 Quasi',
    //     artist: 'Bela Fleck, Abigail Washburn',
    //     duration: 2.2833,
    //     owner_id
    // },
    // {
    //     name: 'Tokyo',
    //     artist: 'The Wombats',
    //     duration: 3.7666,
    //     owner_id
    // },
    // {
    //     name: 'They Are Betrothed',
    //     artist: 'Kris Bowers',
    //     duration: 1.1666,
    //     owner_id
    // },
    // {
    //     name: 'Chasing Cars',
    //     artist: 'The Wind and the Wave',
    //     duration: 4.4833,
    //     owner_id
    // },
    // {
    //     name: 'Happy Endings Dont Exist',
    //     artist: 'Kris Bowers',
    //     duration: 1.65,
    //     owner_id
    // },
    // {
    //     name: 'Makambo',
    //     artist: 'Geoffrey Oryema',
    //     duration: 5.00,
    //     owner_id
    // },
    // {
    //     name: 'Addicted to Love',
    //     artist: 'Florence + the Machine',
    //     duration: 3.3166,
    //     owner_id
    // },
    // {
    //     name: 'Im On Fire',
    //     artist: 'Awolnation',
    //     duration: 2.5667,
    //     owner_id
    // },
    // {
    //     name: 'Slow Your Boom',
    //     artist: 'Para for Cuva',
    //     duration: 4.8,
    //     owner_id
    // },
    // {
    //     name: 'Hunger of the Pine',
    //     artist: 'Vaults, Jody Wisternoff',
    //     duration: 3.5833,
    //     owner_id
    // },
  ]).returning('id');

  const getDuration = (data) => {
    const min = Number(data.duration.split(":")[0]);
    const sec = Number(data.duration.split(":")[1])/60;
    const durationFloat = min + sec;
    return Math.round(durationFloat * 1000)/1000;
  }

  const asanas = [
      {
      name: 'Preclass',
      duration: '13:14'
      },  
    {
          name: 'integration, Sun As',
          cue: 'let go of everything that happened before this and breath in now',
          duration: '4:15'
      },
      {
          name: 'Chair, Sun B both sides',
          cue: 'step out of the past, step into the present',
          duration: '3:00'
      },
      {
        name: 'Sun B Flow',
        cue: 'step out of the past, step into the present',
        duration: '4:00'
      },
      {
          name: 'Flip Dog',
          duration: '2:30'
      },
      {
          name: 'Crescent Lunge',
          duration: '1:30'
      },
      {
          name: 'Warrior Two',
          duration: '1:00'
      },
      {
          name: 'Reverse Warrior / Side Angle',
          duration: '1:00'
      },
      {
          name: 'Crescent Lunge OS',
          duration: '1:30'
      },
      {
          name: 'Warrior Two OS',
          duration: '1:00'
      },
      {
          name: 'Reverse Warrior / Side Angle OS',
          duration: '1:00'
      },
      {
          name: 'Chair Twist / Side Crow OS',
          duration: '2:00'
      },
      {
          name: 'Eagle',
          duration: '2:00'
      },
      {
        name: 'Open Book / Airplane / Halfmoon',
        duration: '5:20'
      },
      {
        name: 'Dancer',
        duration: '2:00'
      },
      {
        name: 'Tree',
        duration: '2:00'
      },
      {
          name: 'Grounding - Triangle, Wide Leg Forward Fold, Twisted Triangle',
          duration: '2:40'
      },
      {
          name: 'Bridge / Wheel',
          duration: '1:50'
      },
      {
          name: 'Core',
          duration: '3:35'
      },
      {
          name: 'Recline Butterfly',
          duration: '1:00'
      },
      {
          name: 'Pigeon Both Sides',
          duration: '4:00'
      },
    //   {
    //     name: 'Seated Tree',
    //     duration: '2:30'
    // },
      {
          name: 'Recline Twist',
          duration: '3:00'
      },
      {
          name: 'Recline Twist OS',
          duration: '3:00'
      },
      {
          name: 'Shavasana',
          duration: '3:30'
      },
      {
          name: 'Fetal Pos / Close',
          duration: '1:00'
      },
  ];

  const asana_ids = await knex('asanas').insert(
    asanas.map((asana) => {
      const newAsana = {
        name: asana.name,
        duration: getDuration(asana),
        owner_id
      };
      if (asana.cue) newAsana.cue = asana.cue;
      return newAsana;
    })
  ).returning('id');

  const sections = [
    {
      name: "Before Class",
      duration: "13:14"
    },
    {
        name: "Integration and Fire",
        duration: "9:00"
    },
    {
      name: "Side-Body Stretching",
      duration: "10:00"
    },
    {
      name: "Equinimity",
      duration: "9:00"
    },
    {
      name: "Vitality and Stability",
      duration: "15:00"
    },
    {
      name: "Opening and Release",
      duration: "15:00"
    },
    {
      name: "Closing",
      duration: "2:00"
    }
  ];

  const section_ids = await knex('sections').insert(
    sections.map((section)=>{
      return {
        duration: getDuration(section),
        name: section.name,
        owner_id
      }
    })
  ).returning('id');

  const flow_ids = await knex('flows').insert([
    {
      name: '6:15 Hot Power Wednesday 2024-01-10',
      owner_id
    }]
  ).returning('id');

  const flow_id = flow_ids[0].id;
  await knex('asana_flow_map').insert(asana_ids.map(({id})=> {
    return {
      flow_id,
      asana_id: id,
      order: id
    }
  }))
  
  await knex('section_flow_map').insert(section_ids.map(({id})=> ({
    flow_id,
    section_id: id,
    order: id
  })))
  
  await knex('song_flow_map').insert(song_ids.map(({id})=> ({
    flow_id,
    song_id: id,
    order: id
  })))
};
