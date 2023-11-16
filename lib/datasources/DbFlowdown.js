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
}
