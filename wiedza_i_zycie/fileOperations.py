
import os
import pickle


class FileOperations:

    def __init__(self, path_list, file_list):

        self.path_list = path_list
        self.file_list = file_list

    #
    # LOAD_FUNCTIONS
    #

    def load_from_files(self, path_list):

        files_list = []
        for path in path_list:
            entity = None
            if(os.path.isfile(path)):
                with open(path, 'rb') as file:
                    entity = pickle.load(file)
            files_list.append(entity)
        return files_list

    #
    # SAVE_FUNCTIONS
    #

    def save_files(self, file_list, path_list):

        for entity, path in zip(file_list, path_list):
            with open(path, 'wb') as file:
                pickle.dump(entity, file)

    def extract_resources(self, func):

        def wrapper(**kwargs): 
            resources_list = self.load_from_files(self.path_list)

            empty = False
            for resource in resources_list:
                if resource is None:
                    empty = True
            ## todo can not use in list, becouse data frame
            if empty is True:
                resources_list = func(**kwargs)
                if(len(self.path_list)==1):
                    resources_list = [resources_list]
                self.save_files(resources_list, self.path_list)
            return resources_list
        return wrapper

    #
    # REMOVE_FUNCTIONS
    #

    def remove_files(self, path_list):

        for file in path_list:
            if os.path.isfile(file):
                os.remove(file)


    # def reset_model(self):

    #     files = [
    #         self.corpus_path,
    #         self.dictionary_path,
    #         self.lda_path,
    #         self.trained_df_path
    #     ]
    #     self.remove_files(files)

    # def reset_df(self):
    #     self.remove_files([self.tokenized_text_df_path])