module.exports.resolvers = {
    Query: {
      // parent, args, context, info
      getAllFlows: async (_, __, context) => {
          const { db } = context.datasources;
          return await db.getFlows();
      },
    },
};
