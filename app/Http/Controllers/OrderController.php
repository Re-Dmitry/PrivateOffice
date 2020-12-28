<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function checkout(Request $request)
    {
        $products_cost = collect($request->products_in_cart)->sum('price');

        if ((auth()->user()->money - $products_cost) < 0) {
            abort(500, 'У вас недостаточно денег');
        }

        try {
            $order = new Order();
            $order->products = json_encode($request->products_in_cart);
            $order->user_id = auth()->user()->id;
            $order->save();

            $user = User::find(auth()->user()->id);
            $user->money =  $user->money - $products_cost;
            $user->save();
        } catch (\Throwable $th) {
            abort(500, ':(((((((((');
        }

        return response()->json('Всё ок');
    }
}
