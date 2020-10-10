# -*- coding: utf-8 -*-
"""
Created on Tue Oct  6 13:00:17 2020

@author: Usuario
"""
#Se importan las librerias necesarias
import pandas as pd
import numpy as np
from sklearn.cluster import KMeans

#Se define la base de datos leida
#Se definen variable que contiene los datos de la BD
#Se definen los campos (dataframes) que se van a tener en cuenta para el programa
#x, y, z son los valores en los que se va basar para la clasificaciom
#w es una variable (dataframe) que contiene los nombres de todas las peliculas de la BD

datos = pd.read_csv('data.csv', encoding = "ISO-8859-1", engine='python') #Se lee la base de datos

df=pd.DataFrame(datos)
x=df['genero'].values
y=df['Calificacion'].values
w=df['nombre'].values
#z=df['id'].values

#Variable para encontrar la posicion de un pelicula en la BD
posicion=0

#Variable X que almacena los datos como matriz, solo se tienen en cuenta los
#elementos x,y,z
#Nombres es un arraglo que contiene todos los nombres
#peliculas es un arreglo vacio que va servir para guardar las tuplas clasificadas
#en el mismo cluster que la pelicula escogida

X=np.array(list(zip(x,y)))
nombres=np.array(list(zip(w)))
#ids=np.array(list(zip(z)))
peliculas=np.array([])
#Metodos para la realización de la clasificación
#Se definen el numero de clusters, luego se arreglan los datos con fit
#Se predice y se etiquetan los datos que estan en X
# Se determinan los centroides para clasificar en base a ellos

kmeans=KMeans(n_clusters=4)
kmeans=kmeans.fit(X)
labels=kmeans.predict(X)
centroids=kmeans.cluster_centers_

#Función que busca la posicion que ocupa la pelicula en la BD

def buscarPeli(nombre):
    for i in range(len(nombres)):
        if nombre == nombres[i]:
            return i

#Ensayo con un juego
     
posicion = buscarPeli("Rocky II")
etiqueta = labels[posicion]
print(labels)

#Funcion que retorna las peliculas con la misma etiqueta que la seleccionada
def recomendaciones(numero):
    pos=np.array([])
    for i in range(len(labels)):
        if numero == labels[i]:
            pos = np.append(pos, nombres[i])
    return pos

#Ejemplo de ello
peliculas = recomendaciones(etiqueta)
print(peliculas)
