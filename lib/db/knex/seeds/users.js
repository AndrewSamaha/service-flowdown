/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const OWNER_ID = 1;
const owner_id = OWNER_ID;

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: OWNER_ID, username: 'admin', permissions: 'ADMIN'}
  ]);
  const song_ids = await knex('songs').insert([
    {
      name: 'Cover Me in Sunshine',
      artist: 'Pink',
      duration: 2.35,
      owner_id
    },
    {
      name: 'Watermelon Sugar',
      artist: 'Harry Styles',
      duration: 2.9,
      owner_id
    },
    {
      name: 'Folling the Sun',
      artist: 'Super-Hi, Neeka',
      duration: 3.4167,
      owner_id
    },
    {
      name: 'Let You In',
      artist: 'East Forest',
      duration: 5.9333,
      owner_id
    },
    {
      name: 'Grandmother Moon (Uji Remix)',
      artist: 'Noelani Love',
      duration: 6.75,
      owner_id
    },
    {
      name: 'Love You',
      artist: 'MrTout Le Monde',
      duration: 4.3,
      owner_id
    },
    {
      name: 'Frida Kahlo',
      artist: 'Cafe De Anatolia',
      duration: 5.2333,
      owner_id
    },
    {
        name: 'Darby Saddle',
        artist: 'Albrecht La Brooy',
        duration: 5.033,
        owner_id
    },
    {
        name: 'Catalyst',
        artist: 'Res Mo',
        duration: 5.2833,
        owner_id
    },
    {
        name: 'For Children: No 3 Quasi',
        artist: 'Bela Fleck, Abigail Washburn',
        duration: 2.2833,
        owner_id
    },
    {
        name: 'Tokyo',
        artist: 'The Wombats',
        duration: 3.7666,
        owner_id
    },
    {
        name: 'They Are Betrothed',
        artist: 'Kris Bowers',
        duration: 1.1666,
        owner_id
    },
    {
        name: 'Chasing Cars',
        artist: 'The Wind and the Wave',
        duration: 4.4833,
        owner_id
    },
    {
        name: 'Happy Endings Dont Exist',
        artist: 'Kris Bowers',
        duration: 1.65,
        owner_id
    },
    {
        name: 'Makambo',
        artist: 'Geoffrey Oryema',
        duration: 5.00,
        owner_id
    },
    {
        name: 'Addicted to Love',
        artist: 'Florence + the Machine',
        duration: 3.3166,
        owner_id
    },
    {
        name: 'Im On Fire',
        artist: 'Awolnation',
        duration: 2.5667,
        owner_id
    },
    {
        name: 'Slow Your Boom',
        artist: 'Para for Cuva',
        duration: 4.8,
        owner_id
    },
    {
        name: 'Hunger of the Pine',
        artist: 'Vaults, Jody Wisternoff',
        duration: 3.5833,
        owner_id
    },
  ]).returning('id');

  const getDuration = (data) => {
    const min = Number(data.duration.split(":")[0]);
    const sec = Number(data.duration.split(":")[1])/60;
    const durationFloat = min + sec;
    return Math.round(durationFloat * 1000)/1000;
  }

  const asanas = [
      {
          name: 'get ready for class',
          duration: '15:00'
      },
      {
          name: 'childs pose',
          cue: 'set an intention',
          duration: '2:00'
      },
      {
          name: 'Sun As',
          duration: '2:30'
      },
      {
          name: 'Sun Bs',
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
          duration: '1:30'
      },
      {
          name: 'Equiniminty',
          duration: '5:00'
      },
      {
          name: 'Other Stuff',
          duration: '5:00'
      },
      {
          name: 'Bridge / Wheel',
          duration: '3:00'
      },
      {
          name: 'Core',
          duration: '3:30'
      },
      {
          name: 'Recline Butterfly',
          duration: '1:00'
      },
      {
          name: 'Pigeon Both Sides',
          duration: '3:30'
      },
      {
          name: 'Recline Twist',
          duration: '1:30'
      },
      {
          name: 'Recline Twist OS',
          duration: '1:30'
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
        name: "before class",
        duration: "15:00"
    },
    {
        name: "class",
        duration: "45:00"
    },
    {
        name: "after class",
        duration: "15:00"
    },
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
      name: 'Hot Power Express',
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
