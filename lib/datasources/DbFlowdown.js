exports.DbFlowdown = class DbFlowdown {
    constructor(dbConnection) {
        this.knex = dbConnection;
    }

    async getFlows(userId=1) {
        if (userId) return this.knex('flows')
            .where('flows.owner_id', userId);
        return this.knex('flows');
    }

    async getAsanas(parent) {
        const { id: flow_id } = parent;
        const result = this.knex('asanas')
            .leftJoin('asana_flow_map', 'asanas.id','=','asana_flow_map.asana_id')
            .where('asana_flow_map.flow_id', '=', flow_id);
        return result;
    }

    async getSections(parent) {
        const { id: flow_id } = parent;
        const result = this.knex('sections')
            .leftJoin('section_flow_map', 'sections.id','=','section_flow_map.section_id')
            .where('section_flow_map.flow_id', '=', flow_id);
        return result;
    }

    async getSongs(parent) {
        const { id: flow_id } = parent;
        const result = this.knex('songs')
            .leftJoin('song_flow_map', 'songs.id','=','song_flow_map.song_id')
            .where('song_flow_map.flow_id', '=', flow_id);
        return result;
    }

    async getUsers() {
        return users;
    }

    async getFlow(flowId=null) {
        if (flowId === null) throw('No flowId specified')
        const flows = await this.knex('flows')
            .where('flows.id', flowId)
            .limit(1);
        if (flows.length <= 0) throw('Flow not found')
        // need to return an error type
        return flows[0];
    }

    async createFlow(userId) {
        if (!userId) throw('createFlow called without passing a userId');

        const flowId = await this.knex('flows').insert([
            {
              name: 'New Flow',
              owner_id: userId
            }]
        ).returning('id');
        return flowId;
    }
}
