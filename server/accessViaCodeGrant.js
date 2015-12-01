Meteor.methods({

    /**
     * Get user using the code
     * @param code
     */
    getMe: function getMe(code){
        /**
         * this will allow the next available DDP message to process without waiting for the current method.
         */
        this.unblock();
        // init humm

        console.log('--------------------- users.me()----------');

        humm.init({
            client_id: '56570bacae8c5087411778a3', client_secret: 'CdNX3TcLc/OF3k2oIogwlBi/rCZOP0LSfLxrRjoX5EA='
        });

        //get access using code
        var res = humm.accessViaCodeGrant(code);
        console.log(res);
        if(!res.error && res.data){
            //set token before request
            humm.setAccessToken(res.data.access_token);
            //request logged in user
            return humm.users.me();
        }
    },

    /**
     * Get song by id
     *
     * @param songId
     */
    getSongById: function getSongById(songId) {

        humm.init({
            client_id: '56570bacae8c5087411778a3', client_secret: 'CdNX3TcLc/OF3k2oIogwlBi/rCZOP0LSfLxrRjoX5EA='
        });
        var authRes = humm.authViaClientCredentials();
        //credentials
        console.log(authRes);
        humm.setAccessToken(authRes.data.data_response.access_token);
        return humm.songs.get(songId);
    }
});