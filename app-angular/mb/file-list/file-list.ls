'use strict'

angular
  .module 'mb'
  .config File-list-config

  File-list-config.$inject = ['$stateProvider']

  !function File-list-config ($state-provider)
    $state-provider
      .state 'mb.file-list', {
        url: '/file-list'
        params:
          path: './public/电脑软件'

        views:
          'main@':
            template-url: 'mb/file-list/file-list.html'
            controller-as: 'vm'
            controller: ($state, $state-params) !->

              vm = @

              faker = {
                files: [
                  {
                    id: "3fb0c5d4-ad5e-4bd5-90ae-f59e47b46d35",
                    fileName: "mmtvq.jpg",
                    size: "2.2 MB",
                    date: "2016-10-21 20:47:46",
                    postfix: "jpg",
                    path: "./public/电脑软件"
                  },
                  {
                    id: "147a87f5-80ff-4af8-8d7a-7b28a8892234",
                    fileName: "trwlq.xls",
                    size: "200 KB",
                    date: "2016-10-21 20:47:46",
                    postfix: "xls",
                    path: "./public/企业VI标准"
                  },
                  {
                    id: "7f42036b-4318-4b99-86c7-af29ca10d506",
                    fileName: "gsaujh.png",
                    size: "2.2 MB",
                    date: "2016-10-21 20:47:46",
                    postfix: "png",
                    path: "./public/电脑软件"
                  },
                  {
                    id: "003ae92f-7844-4bf4-85b0-44fab1a3c7ee",
                    fileName: "vatq.ppt",
                    size: "200 KB",
                    date: "2016-10-21 20:47:46",
                    postfix: "ppt",
                    path: "./public/电脑软件"
                  },
                  {
                    id: "42fb2d8a-4d18-4555-b0d4-a9b88c374160",
                    fileName: "hazxw.mkv",
                    size: "312 KB",
                    date: "2016-10-21 20:47:46",
                    postfix: "mkv",
                    path: "./public/企业VI标准"
                  },
                  {
                    id: "0b7530be-9956-43fd-8bad-20900c069182",
                    fileName: "bdhdro.zip",
                    size: "3.1 MB",
                    date: "2016-10-21 20:47:46",
                    postfix: "zip",
                    path: "./public/企业VI标准"
                  },
                  {
                    id: "fb66c853-882f-4aad-8066-6d561b172020",
                    fileName: "zkhwss.docx",
                    size: "734 KB",
                    date: "2016-10-21 20:47:46",
                    postfix: "docx",
                    path: "./public/电脑软件"
                  },
                  {
                    id: "198d5ac5-a61a-418e-9569-ed21903f6d9f",
                    fileName: "dwrmo.pdf",
                    size: "200 KB",
                    date: "2016-10-21 20:47:46",
                    postfix: "pdf",
                    path: "./public/电脑软件"
                  }
                ]
              }

              console.log faker
              vm.files = faker.files
              vm.path = $state-params.path

      }