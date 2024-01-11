const makeTimeString = async (duration) => {
  const min = Math.floor(duration);
  const minFraction = duration - min;
  const secondsNumber = Math.round(60 * minFraction);
  const seconds = secondsNumber == 0 ? '00' : secondsNumber;
  return `${min}:${seconds}`;
}
const debug = async (parent, args, context) => {
  console.log('debug resolver')
  console.log('  parent: ', parent)
  console.log('  args:   ', args)
}
module.exports.resolvers = {
    Duration: {
      float: async (duration) => (duration),
      string: makeTimeString
    },
    Flow: {
      asanas: async (parent, __, context) => {
        const { db } = context.datasources;
        return db.getAsanas(parent)
      },
      sections: async (parent, __, context) => {
        const { db } = context.datasources;
        return db.getSections(parent)
      },
      songs: async (parent, __, context) => {
        const { db } = context.datasources;
        return db.getSongs(parent)
      },
    },
    Query: {
      // parent, args, context, info
      getAllFlows: async (_, __, context) => {
          const { db } = context.datasources;
          const flows = await db.getFlows();
          return flows;
      },
      getFlow: async (_, args, context) => {
          const { flowId } = args;
          const { db } = context.datasources;
          const flow = await db.getFlow(flowId);
          return flow;
      }
    },
    Mutation: {
      createNewFlow: async (_, args, context) => {
          console.log('create new flow')
          console.log('args=', args)
      },
      updateFlow: debug,
      updateSongs: debug,
      updateAsanas: debug,
      updateSections: debug,
      createSong: debug,
      createAsana: debug
    }
};
