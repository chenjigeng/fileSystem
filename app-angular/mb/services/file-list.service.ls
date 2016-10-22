'use strict'

angular
  .module 'mb'
  .factory 'fileListService', FileListService

  FileListService.$inject = ['$resource']

  !function FileListService($resource)

    return null

    # api-url = './../../../data';

    # files = [];
    # folders = [];

    # service =
    #   get-all-files: get-all-files
    #   get-files-by-path: get-files-by-path

    # return service


    # !function get-all-files
    #   files = $resource(api-url + '/files.json')
    #   console.log files
    #   folders = $resource(api-url + '/folders.json')
    #   console.log folders

    # !function get-files-by-path(path)
    #   obj = get-all-files!
    #   return obj
