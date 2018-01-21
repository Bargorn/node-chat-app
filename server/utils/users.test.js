const expect = require('expect');

const {Users} = require('./users');

describe('Users', ()=>{

    beforeEach(()=>{
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Fabiano',
            room: 'Node Course'
        }]
    });
    it('should add new user', ()=>{
        var users = new Users();
        var user = {
            id: '123',
            name: 'Fabiano',
            room: 'Rpg dos aspira'
        };
        var resUser = users.addUsers(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });
    it('should return names from the node room', ()=>{
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Mike', 'Fabiano'])
    });

    it('should remove a user', ()=>{
        var user = users.removeUser('1');
        expect(user.id).toBe('1');
        expect(users.users.length).toBe(2);

    });
    it('should not remove a user', ()=>{
        var user = users.removeUser('123123');
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });
    it('should return a user', ()=>{
        var user = users.getUser('1');
        expect(user).toInclude(users.users[0]);
    });
    it('should not return a user', ()=>{
        var user = users.getUser('123123123');
        expect(user).toNotExist();
    });
});