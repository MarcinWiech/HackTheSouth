import tweepy
import Credentials as c




auth = tweepy.OAuthHandler(c.consumer_key, c.consumer_secret)

auth.set_access_token(c.access_token, c.access_secret)

api = tweepy.API(auth)



def tweet(message):
    api.update_status(message)




if __name__ == '__main__':
    tweet("Citizens at ")
