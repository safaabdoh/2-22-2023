import Route from '@ioc:Adonis/Core/Route'
import { Group } from '@japa/runner';
Route.group(() => {
    Route.group(() => {
        Route.get('/:id', "ActorsController.getById");
        Route.get('/', "ActorsController.getAll");
        Route.post('/', "ActorsController.create");
        Route.put('/', "ActorsController.update");
        Route.delete('/:id', "ActorsController.destory");
    }).prefix('/actors');
}).prefix('/api');

Route.group(() => {
    Route.group(() => {
        Route.get('/:id', "AddressesController.getById");
        Route.get('/', "AddressesController.getAll");
        Route.post('/', "AddressesController.create");
        Route.put('/', "AddressesController.update");
        Route.delete('/:id', "AddressesController.destory");
    }).prefix('/addresse');
}).prefix('/api');

Route.group(() => {
    Route.group(() => {
        Route.get('/:id', "CategoriesController.getById");
        Route.get('/', "CategoriesController.getAll");
        Route.post('/', "CategoriesController.create");
        Route.put('/', "CategoriesController.update");
        Route.delete('/:id', "CategoriesController.destory");
    }).prefix('/category');
}).prefix('/api');

Route.group(() => {
    Route.group(() => {
        Route.get('/:id', "CitiesController.getById");
        Route.get('/', "CitiesController.getAll");
        Route.post('/', "CitiesController.create");
        Route.put('/', "CitiesController.update");
        Route.delete('/:id', "CitiesController.destory");
    }).prefix('/cities');
}).prefix('/api');

Route.group(() => {
    Route.group(() => {
        Route.get('/:id', "CountriesController.getById");
        Route.get('/', "CountriesController.getAll");
        Route.post('/', "CountriesController.create");
        Route.put('/', "CountriesController.update");
        Route.delete('/:id', "CountriesController.destory");
    }).prefix('/countries');
}).prefix('/api');

Route.group(() => {
    Route.group(() => {
        Route.get('/:id', "CustomersController.getById");
        Route.get('/', "CustomersController.getAll");
        Route.post('/', "CustomersController.create");
        Route.put('/', "CustomersController.update");
        Route.delete('/:id', "CustomersController.destory");
    }).prefix('/customers');
}).prefix('/api');

Route.group(() => {
    Route.group(() => {
        Route.get('/:id', "FilmActorsController.getById");
        Route.get('/', "FilmActorsController.getAll");
        Route.post('/', "FilmActorsController.create");
        Route.put('/', "FilmActorsController.update");
        Route.delete('/:id', "FilmActorsController.destory");
    }).prefix('/filmActors');
}).prefix('/api');


Route.group(() => {
    Route.group(() => {
        Route.get('/:id', "FilmCategoriesController.getById");
        Route.get('/', "FilmCategoriesController.getAll");
        Route.post('/', "FilmCategoriesController.create");
        Route.put('/', "FilmCategoriesController.update");
        Route.delete('/:id', "FilmCategoriesController.destory");
    }).prefix('/filmsCategories');
}).prefix('/api');


Route.group(() => {
    Route.group(() => {
        Route.get('/:id', "FilmesController.getById");
        Route.get('/', "FilmesController.getAll");
        Route.post('/', "FilmesController.create");
        Route.put('/', "FilmesController.update");
        Route.delete('/:id', "FilmesController.destory");
    }).prefix('/films');
}).prefix('/api');

Route.group(() => {
    Route.group(() => {
        Route.get('/:id', "FilmTextsController.getById");
        Route.get('/', "FilmTextsController.getAll");
        Route.post('/', "FilmTextsController.create");
        Route.put('/', "FilmTextsController.update");
        Route.delete('/:id', "FilmTextsController.destory");
    }).prefix('/filmText');
}).prefix('/api');

Route.group(() => {
    Route.group(() => {
        Route.get('/:id', "InventoriesController.getById");
        Route.get('/', "InventoriesController.getAll");
        Route.post('/', "InventoriesController.create");
        Route.put('/', "InventoriesController.update");
        Route.delete('/:id', "InventoriesController.destory");
    }).prefix('/inventories');
}).prefix('/api');


Route.group(() => {
    Route.group(() => {
        Route.get('/:id', "LanguagesController.getById");
        Route.get('/', "LanguagesController.getAll");
        Route.post('/', "LanguagesController.create");
        Route.put('/', "LanguagesController.update");
        Route.delete('/:id', "LanguagesController.destory");
    }).prefix('/languages');
}).prefix('/api');

Route.group(() => {
    Route.group(() => {
        Route.get('/:id', "PaymentsController.getById");
        Route.get('/', "PaymentsController.getAll");
        Route.post('/', "PaymentsController.create");
        Route.put('/', "PaymentsController.update");
        Route.delete('/:id', "PaymentsController.destory");
    }).prefix('/payments');
}).prefix('/api');

Route.group(() => {
    Route.group(() => {
        Route.get('/:id', "RentalsController.getById");
        Route.get('/', "RentalsController.getAll");
        Route.post('/', "RentalsController.create");
        Route.put('/', "RentalsController.update");
        Route.delete('/:id', "RentalsController.destory");
    }).prefix('/rentals');
}).prefix('/api');

Route.group(() => {
    Route.group(() => {
        Route.get('/:id', "StaffsController.getById");
        Route.get('/', "StaffsController.getAll");
        Route.post('/', "StaffsController.create");
        Route.put('/', "StaffsController.update");
        Route.delete('/:id', "StaffsController.destory");
    }).prefix('/staffs');
}).prefix('/api');

Route.group(() => {
    Route.group(() => {
        Route.get('/:id', "StoresController.getById");
        Route.get('/', "StoresController.getAll");
        Route.post('/', "StoresController.create");
        Route.put('/', "StoresController.update");
        Route.delete('/:id', "StoresController.destory");
    }).prefix('/stores');
}).prefix('/api');

Route.group(() => {
    Route.group(() => {
        Route.get('/', "UsersController.getAll");
        Route.post('/login', "UsersController.login");
        Route.post('/logout', "UsersController.logout");
        Route.post('/', "UsersController.create");

    }).prefix('/users');
}).prefix('/api');
