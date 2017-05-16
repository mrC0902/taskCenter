var taskCenter = new Vue({
    "el": "#body",
    "data": {
        "title": "任务中心",
        "finished": "完成",
        "deleted": "删除",
        "edit": "编辑",
        "columns": [
            {
                "title": "任务名称"
            },
            {
                "title": "当前进度"
            },
            {
                "title": "紧急程度"
            },
            {
                "title": "创建时间"
            },
            {
                "title": "更新时间"
            },
            {
                "title": "完成时间"
            },
            {
                "title": "任务描述"
            },
            {
                "title": "任务操作"
            }
        ],
        "data": ""
    },
    "mounted": function () {
        var _this = this;
        var data = [
            {
                "name": "任务一",
                "progress": "50",
                "taskLevel": "一般",
                "createTime": "2017/5/17 0:04",
                "updateTime": "2017/5/17 0:04",
                "finishTime": "",
                "taskDescription": "这是一个很长的描述"
            },
            {
                "name": "任务二",
                "progress": "70",
                "taskLevel": "非常紧急",
                "createTime": "2017/5/17 0:04",
                "updateTime": "2017/5/17 0:04",
                "finishTime": "",
                "taskDescription": "这是一个很长的描述这是一个很长的描述这是一个很长的描述"
            }
        ];
        _this.data = data;
    },
    "methods": {
        "finished": function (data) {
            console.log("你点击的是：" + data.name)
        },
        "deleted": function (data) {
            console.log("你要删除的是：" + data.name);
        }
    }
});