'use strict'

angular
  .module 'mb'
  .config File-list-config

  File-list-config.$inject = ['$stateProvider']

  !function File-list-config ($state-provider)
    $state-provider
      .state 'mb.file-list', {
        url: '/file-list'
        views:
          'main@':
            template-url: 'mb/file-list/file-list.html'
            controller-as: 'vm'
            controller: ($state, $state-params) !->
              vm = @

              faker = [
                * folderList:[
                    * name:"Hilma Jacobson"
                      size:233
                    * name:"Watson Fadel"
                      size:233
                    * name:"Edwina Hilll"
                      size:233
                  ]
                  fileList:[
                    * name:"Leif Bradtke"
                      size:233
                    * name:"Shaun Berge"
                      size:233
                  ]
                * folderList:[
                    * name:"Halie Marvin"
                      size:233
                    * name:"Layne Bartoletti"
                      size:233
                    * name:"Miller Pacocha"
                      size:233
                    ]
                  fileList:[
                    * name:"Danyka Kirlin"
                      size:233
                    * name:"Estella Mertz III"
                      size:233
                    * name:"Charley Homenick"
                      size:233
                  ]
                * folderList:[
                    * name:"Ila Price Jr."
                      size:233
                    * name:"Josiah Fay"
                      size:233
                    * name:"Weldon Roberts"
                      size:233
                    * name:"Newton Weissnat"
                      size:233
                  ]
                  fileList:[
                    * name:"Ms. Alysha Kertzmann"
                      size:233
                    * name:"Beth Friesen DVM"
                      size:233
                  ]
                * folderList:[
                    * name:"Mr. Fernando Denesik"
                      size:233
                    * name:"Florida Jenkins"
                      size:233
                  ]
                  fileList:[
                    * name:"Robin Dickens"
                      size:233
                    * name:"Theresa Casper"
                      size:233
                    * name:"Noah Jacobs"
                      size:233
                    * name:"Elza Schuppe"
                      size:233
                  ]
                * folderList:[
                    * name:"Conner Schumm"
                      size:233
                    * name:"Retha Rogahn"
                      size:233
                    * name:"Ali Moore"
                      size:233
                    * name:"Romaine Hirthe"
                      size:233
                  ]
                  fileList:[
                    * name:"Summer Prosacco"
                      size:233
                    * name:"Sarai Shanahan"
                      size:233
                  ]
                ]

              index = parseInt(Math.random! * 5)


              vm.folder = faker[index]
              console.log vm.folder
      }