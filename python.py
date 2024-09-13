import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

# Dummy user-property matrix
ratings = np.array([[5, 4, 0], [3, 5, 1], [4, 4, 4]])

# Compute similarity between users
similarity = cosine_similarity(ratings)

# Recommend properties based on similar users
recommendations = ratings[similarity[0].argsort()[::-1][1]]
print(recommendations)