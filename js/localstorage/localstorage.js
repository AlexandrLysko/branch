(function() {
 'use strict';
	
	//localStorage 5 мб
	var storage = localStorage;
	
	// добавить или изменить ключ- значение
	storage.setItem("key", "value");
	console.log("storage", storage);
	
	//получение значения по ключу
	var valueFormStorage = storage.getItem("key");
	console.log("valueFormStorage", valueFormStorage);
	
	//удалить по ключу
	storage.removeItem("key");
	console.log("storage", storage);
	
	// очистить хранилище
	storage.clear();
	
	// если value - объект
	var someObj = {
		id: 3,
		login: "qwerty"
	};
	var someObjJson = JSON.stringify(someObj);
	storage.setItem("someObj", someObjJson);
	console.log("storage", storage);
	
	var objFormStorage = JSON.parse(storage.getItem("someObj"));
	console.log("objFormStorage", objFormStorage);
	
	// 22 or QUOTA_EXCEEDED_ERR ошибка нет места
	
	try {
		storage.setItem("some_key", "some_value");
	} catch (error) {
		if (error === QUOTA_EXCEEDED_ERR) { // 22
		console.log("Освободите место в storage");
		
	}
	}
	
 
 }());