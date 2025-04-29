.PHONY: compress@layer compress@function deploy

FUNC_NAME="getAll"
RESC_NAME="vpc"

compress@layer:
	"c:/Program Files/WinRAR/WinRAR.exe" a -afzip src/source/layer.zip src/layer/*

compress@function:
	"c:/Program Files/WinRAR/WinRAR.exe" a -afzip src/source/$(FUNC_NAME).zip src/function/$(FUNC_NAME).mjs

deploy:
	rain deploy ./templates/$(RESC_NAME).yaml
