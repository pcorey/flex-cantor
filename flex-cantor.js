if (Meteor.isClient) {
    Template.cantor.helpers({
        more: function () {
            return (this.i || 0) < this.max-1;
        },
        next: function() {
            return (this.i || 0) + 1;
        }
    });
}