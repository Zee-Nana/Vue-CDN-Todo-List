new Vue ({
    el: '#tasklist',
    data: {
        title: 'to do list',
        tasks: [
            { name: 'today : Internal Meeting' },
            { name: 'tomorrow :Visit Spa' },
            { name: 'today : Practice Vue' },
        ]
    },
    methods: {
        newItem: function() {
            if (!this.tasks.name) {
                return
            }
            this.tasks.push ({
                name: this.tasks.name,
                del: ''
            });
            this.tasks.name = "";
        },
        delItem: function (task) {
            this.tasks.splice(this.tasks.indexOf(task), 1)
        }
    }
})