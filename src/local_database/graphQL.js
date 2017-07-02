/*
 * @flow
 */

const graphQL = {
  "initteam": [
    {
        "id": 1,
        "_id": 235148050,
        "name": "HỘI ... im Lặng mà Code"
    },
    {
        "id": 2,
        "_id": 235148051,
        "name": "HỘI ... demo"
    }
  ],
  "inituser": [
    {
        "id": 1,
        "id_user": 100000298886063,
        "is_login": "facebook",
        "name": "Thuan Huynh Duc",
        "email": "thuanhuynhduc2712@gmail.com",
        "url_team": 235148050,
        "admin_url_team": true
    },
    {
        "id": 2,
        "id_user": 100002879180263,
        "is_login": "google",
        "name": "Đỗ Trương Phi Khanh",
        "email": "khanhphi@gmail.com",
        "url_team": 235148050,
        "admin_url_team": false
    },
    {
        "id": 3,
        "id_user": 100000298286363,
        "is_login": "facebook",
        "name": "Nguyễn Văn Pháp",
        "email": "phapkute@gmail.com",
        "url_team": 235148051,
        "admin_url_team": false
    },
    {
        "id": 4,
        "id_user": 100000398286363,
        "is_login": "google",
        "name": "Trần Xuân Hào",
        "email": "haoll@gmail.com",
        "url_team": 235148051,
        "admin_url_team": true
    }
  ],
  "initnotification": [
    {
        "id": 1,
        "url_team": 235148050,
        "user": {
            "_id": 100000298886063,
            "is_login": "facebook",
            "name": "Thuan Huynh Duc"
        },
        "title": "Bạn có một thông báo tạo mới công việc",
        "content": "vừa tạo mới công việc /&ứ hiểu gì hết/*",
        "link": "/ds-task/d-100000298886063-4243",
        "time": "2017-06-26T23:51:48.050Z",
        "type": "NEW_TASK"
    },
    {
        "id": 2,
        "url_team": 235148050,
        "user": {
            "_id": 100000298886063,
            "is_login": "facebook",
            "name": "Thuan Huynh Duc"
        },
        "title": "Bạn có một thông báo cập nhật công việc",
        "content": "vừa cập nhật công việc /&ứ hiểu gì hết/*",
        "link": "/ds-task/d-100000298886063-4243",
        "time": "2017-06-26T23:51:48.050Z",
        "type": "UPDATE_TASK"
    },
    {
        "id": 3,
        "url_team": 235148050,
        "user": {
            "_id": 100002879180263,
            "is_login": "google",
            "name": "Đỗ Trương Phi Khanh"
        },
        "title": "Bạn có một thông báo hoàn thành công việc",
        "content": "vừa đóng công việc /&ứ hiểu gì hết/*",
        "link": "/ds-task/d-100002879180263-4243",
        "time": "2017-06-26T23:51:48.050Z",
        "type": "DELETE_TASK"
    },
    {
        "id": 4,
        "url_team": 235148051,
        "user": {
            "_id": 100000398286363,
            "is_login": "google",
            "name": "Trần Xuân Hào"
        },
        "title": "Bạn có một thông báo tạo mới công việc",
        "content": "vừa tạo mới công việc /&ứ hiểu gì hết/*",
        "link": "/ds-task/d-100000398286363-4243",
        "time": "2017-06-26T23:51:48.050Z",
        "type": "NEW_TASK"
    },
    {
        "id": 5,
        "url_team": 235148051,
        "user": {
            "_id": 100000398286363,
            "is_login": "google",
            "name": "Trần Xuân Hào"
        },
        "title": "Bạn có một thông báo cập nhật công việc",
        "content": "vừa cập nhật công việc /&ứ hiểu gì hết/*",
        "link": "/ds-task/d-100000398286363-4243",
        "time": "2017-06-26T23:51:48.050Z",
        "type": "UPDATE_TASK"
    },
    {
        "id": 6,
        "url_team": 235148051,
        "user": {
            "_id": 100000398286363,
            "is_login": "google",
            "name": "Trần Xuân Hào"
        },
        "title": "Bạn có một thông báo hoàn thành công việc",
        "content": "vừa đóng công việc /&ứ hiểu gì hết/*",
        "link": "/ds-task/d-100002879180263-4243",
        "time": "2017-06-26T23:51:48.050Z",
        "type": "DELETE_TASK"
    }
  ],
  "inittask": [
    {
        "id": "d-100000298886063-4243",
        "url_team": 235148050,
        "is_flag": true,
        "creatAt": "2017-06-26T23:51:48.050Z",
        "updateAt": "2017-06-26T23:51:48.050Z",
        "assignBy": {
            "_id": 100000298886063,
            "is_login": "facebook",
            "name": "Thuan Huynh Duc"
        },
        "assignTo": [
            {
                "_id": 100002879180263,
                "is_login": "google",
                "name": "Đỗ Trương Phi Khanh"
            },
            {       
                "_id": 100000298886063,
                "is_login": "facebook",
                "name": "Thuan Huynh Duc"
            }
        ],
        "title": "Không thể xem được đường dẫn",
        "file": [
            {
                "url": "sites.materdei.ie/logos/images/stories/section_E/examination%20of%20rublev.doc",
                "type": "doc"
            },
            {
                "url": "https://image.flaticon.com/teams/slug/freepik.jpg",
                "type": "jpg"
            },
            {
                "url": "https://cdn.selinc.com/assets/Literature/Product%20Literature/Data%20Sheets/ICON_DS_20170303.pdf",
                "type": "pdf"
            }
        ],
        "status": 3
    },
    {
        "id": "d-100000298886063-4244",
        "url_team": 235148050,
        "is_flag": false,
        "creatAt": "2017-06-26T23:51:48.050Z",
        "updateAt": "2017-06-26T23:51:48.050Z",
        "assignBy": {
            "_id": 100000298886063,
            "is_login": "facebook",
            "name": "Thuan Huynh Duc"
        },
        "assignTo": [
            {
                "_id": 100002879180263,
                "is_login": "google",
                "name": "Đỗ Trương Phi Khanh"
            },
            {       
                "_id": 100000298886063,
                "is_login": "facebook",
                "name": "Thuan Huynh Duc"
            }
        ],
        "title": "Hoàn thiện bộ nhận dạng thương hiệu công ty Primelabo",
        "file": [
            {
                "url": "sites.materdei.ie/logos/images/stories/section_E/examination%20of%20rublev.doc",
                "type": "doc"
            },
            {
                "url": "https://cdn.selinc.com/assets/Literature/Product%20Literature/Data%20Sheets/ICON_DS_20170303.pdf",
                "type": "pdf"
            }
        ],
        "status": 0
    },
    {
        "id": "d-100000298886063-4245",
        "url_team": 235148050,
        "is_flag": false,
        "creatAt": "2017-06-26T23:51:48.050Z",
        "updateAt": "2017-06-26T23:51:48.050Z",
        "assignBy": {
            "_id": 100000298886063,
            "is_login": "facebook",
            "name": "Thuan Huynh Duc"
        },
        "assignTo": [
            {
                "_id": 100002879180263,
                "is_login": "google",
                "name": "Đỗ Trương Phi Khanh"
            },
            {       
                "_id": 100000298886063,
                "is_login": "facebook",
                "name": "Thuan Huynh Duc"
            }
        ],
        "title": "Lấy yêu cầu khách hàng",
        "file": [
            {
                "url": "https://cdn.selinc.com/assets/Literature/Product%20Literature/Data%20Sheets/ICON_DS_20170303.pdf",
                "type": "pdf"
            }
        ],
        "status": 1
    },
    {
        "id": "d-100000298886063-4246",
        "url_team": 235148050,
        "is_flag": false,
        "creatAt": "2017-06-24T23:51:48.050Z",
        "updateAt": "2017-06-24T23:51:48.050Z",
        "assignBy": {
            "_id": 100000298886063,
            "is_login": "facebook",
            "name": "Thuan Huynh Duc"
        },
        "assignTo": [
            {
                "_id": 100002879180263,
                "is_login": "google",
                "name": "Đỗ Trương Phi Khanh"
            },
            {       
                "_id": 100000298886063,
                "is_login": "facebook",
                "name": "Thuan Huynh Duc"
            }
        ],
        "title": "Tích hợp React vào dự án",
        "file": [],
        "status": 2
    },
    {
        "id": "d-100000298886063-4247",
        "url_team": 235148050,
        "is_flag": true,
        "creatAt": "2017-06-23T23:51:48.050Z",
        "updateAt": "2017-06-23T23:51:48.050Z",
        "assignBy": {
            "_id": 100000298886063,
            "is_login": "facebook",
            "name": "Thuan Huynh Duc"
        },
        "assignTo": [
            {
                "_id": 100002879180263,
                "is_login": "google",
                "name": "Đỗ Trương Phi Khanh"
            },
            {       
                "_id": 100000298886063,
                "is_login": "facebook",
                "name": "Thuan Huynh Duc"
            }
        ],
        "title": "Lên ý tưởng mobile app dự án iTask",
        "file": [],
        "status": 0
    },
    {
        "id": "d-100000398286363-42477",
        "url_team": 235148051,
        "is_flag": true,
        "creatAt": "2017-06-23T23:51:48.050Z",
        "updateAt": "2017-06-23T23:51:48.050Z",
        "assignBy": {
            "_id": 100000398286363,
            "is_login": "google",
            "name": "Trần Xuân Hào"
        },
        "assignTo": [
            {
                "_id": 100000298286363,
                "is_login": "facebook",
                "name": "Nguyễn Văn Pháp"
            },
            {       
                "_id": 100000398286363,
                "is_login": "google",
                "name": "Trần Xuân Hào"
            }
        ],
        "title": "Lên ý tưởng mobile app dự án iTask",
        "file": [],
        "status": 0
    },
    {
        "id": "d-100000398286363-4248",
        "url_team": 235148051,
        "is_flag": false,
        "creatAt": "2017-06-23T23:51:48.050Z",
        "updateAt": "2017-06-23T23:51:48.050Z",
        "assignBy": {
            "_id": 100000398286363,
            "is_login": "google",
            "name": "Trần Xuân Hào"
        },
        "assignTo": [
            {
                "_id": 100000298286363,
                "is_login": "facebook",
                "name": "Nguyễn Văn Pháp"
            },
            {       
                "_id": 100000398286363,
                "is_login": "google",
                "name": "Trần Xuân Hào"
            }
        ],
        "title": "Làm việc với khách hàng",
        "file": [],
        "status": 1
    },
    {
        "id": "d-100000298886063-4249",
        "url_team": 235148050,
        "is_flag": false,
        "creatAt": "2017-06-21T23:51:48.050Z",
        "updateAt": "2017-06-21T23:51:48.050Z",
        "assignBy": {
            "_id": 100000298886063,
            "is_login": "facebook",
            "name": "Thuan Huynh Duc"
        },
        "assignTo": [
            {
                "_id": 100002879180263,
                "is_login": "google",
                "name": "Đỗ Trương Phi Khanh"
            },
            {       
                "_id": 100000298886063,
                "is_login": "facebook",
                "name": "Thuan Huynh Duc"
            }
        ],
        "title": "Tích hợp Node + Mongo vào dự án",
        "file": [],
        "status": 2
    }
  ],
  "initchat": [
    {
        "id": 1,
        "room_chat": "d-100000298886063-4249",
        "text": "Hello developer",
        "file": {
            "url": "https://cdn.selinc.com/assets/Literature/Product%20Literature/Data%20Sheets/ICON_DS_20170303.pdf",
            "type": "pdf"
        },
        "creatAt": "2017-06-23T23:51:48.050Z",
        "user": {
            "_id": 100000298886063,
            "is_login": "facebook",
            "name": "Thuan Huynh Duc"
        }
    },
    {
        "id": 2,
        "room_chat": "d-100000298886063-4249",
        "text": "Hello developer 01",
        "file": {
            "url": "https://image.flaticon.com/teams/slug/freepik.jpg",
            "type": "jpg"
        },
        "creatAt": "2017-06-26T23:51:48.050Z",
        "user": {
            "_id": 100002879180263,
            "is_login": "google",
            "name": "Đỗ Trương Phi Khanh"
        }
    },
    {
        "id": 3,
        "room_chat": "d-100000398286363-4249",
        "text": "Hello developer",
        "file": {
            "url": "sites.materdei.ie/logos/images/stories/section_E/examination%20of%20rublev.doc",
            "type": "doc"
        },
        "creatAt": "2017-06-23T23:51:48.050Z",
        "user": {
            "_id": 100000398286363,
            "is_login": "google",
            "name": "Trần Xuân Hào"
        }
    }
  ]
};

module.exports = graphQL;
