if (Meteor.isClient) {
    Template.cantor.helpers({
        more: function () {
            return this.i < 10;
        },
        next: function() {
            return this.i + 1;
        }
    });
}