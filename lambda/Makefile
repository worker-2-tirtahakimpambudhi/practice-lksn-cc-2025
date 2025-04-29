.PHONY: compress@layer compress@function deploy

FUNC_NAME="getAll"
RESC_NAME="vpc"

compress@layer:
	cd src/layer && \
	"c:/Program Files/WinRAR/WinRAR.exe" a -afzip -r layer.zip nodejs
	mv src/layer/layer.zip src/source/

compress@function:
	cd src/function && \
	"c:/Program Files/WinRAR/WinRAR.exe" a -afzip -r $(FUNC_NAME).zip $(FUNC_NAME).mjs
	mv src/function/$(FUNC_NAME).zip src/source/

deploy:
	rain deploy ./templates/$(RESC_NAME).yaml
