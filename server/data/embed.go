package data

import (
	"embed"
)

//go:embed archive/summer/*
var SummerContent embed.FS

//go:embed archive/zombie/*
var ZombieContent embed.FS
