Meteor.methods({

    /**
     * Get user using the code
     * @param code
     */
    getMe: function getMe(code) {
        /**
         * this will allow the next available DDP message to process without waiting for the current method.
         */
       // this.unblock();
        // init humm

        console.log('--------------------- users.me()----------');

        humm.init({
            client_id: '56570bacae8c5087411778a3',
            client_secret: 'CdNX3TcLc/OF3k2oIogwlBi/rCZOP0LSfLxrRjoX5EA='
        });

        humm.accessViaCodeGrant(code, function(authErr, authRes) {
            console.log('------------- accessViaCodeGrant complete -------------');
            console.log('authErr');
            console.log(authErr);
            console.log('AuthRes');
            console.log(authRes);

            if(!authErr && authRes) {

                //set token before request
                humm.setAccessToken(authRes.access_token);
                //get current user
                humm.users.me(function(meErr, meRes){
                    console.log('--------------------- users.me()----------');
                    console.log(meErr);
                    console.log(meRes);
                    //send response back
                //    done(null, { auth: authRes,  me: meRes });
                });
            }else {
               // done(authErr, null);
            }
        });
/*        return Async.runSync(function(done) {
            authAndFetchUser(code, done);
        });*/
    }
});



function authAndFetchUser(code, done){
    //request access token with code
    humm.accessViaCodeGrant(code, function(authErr, authRes) {
        console.log('------------- accessViaCodeGrant complete -------------');
        console.log('authErr');
        console.log(authErr);
        console.log('AuthRes');
        console.log(authRes);

        if(!authErr && authRes) {

            //set token before request
            humm.setAccessToken(authRes.access_token);
            //get current user
            humm.users.me(function(meErr, meRes){
                console.log('--------------------- users.me()----------');
                console.log(meErr);
                console.log(meRes);
                //send response back
                done(null, { auth: authRes,  me: meRes });
            });
        }else {
            done(authErr, null);
        }
    });
}