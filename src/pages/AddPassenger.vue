<template>
    <div class="p-10 space-y-7 h-[92dvh] overflow-y-auto">
        <h1 class="text-lg font-medium tracking-wide flex items-center gap-x-2">
            <Icon icon="mingcute:user-add-fill" width="24" height="24" />
            <span>Passenger Registration</span>
        </h1>
        <form class="space-y-3">
            <h1 class="text-center mb-5 text-lg rounded-full bg-black text-white py-1">Passenger Information</h1>
            <div class="space-x-2 flex justify-between">
                <label for="name" class="text-lg">Fullname:</label>
                <input type="text" class="border rounded pl-2 h-8 w-3/5" placeholder="Enter full name">
            </div>
            <div class="space-x-2 flex justify-between">
                <label for="name" class="text-lg">Age:</label>
                <input type="number" class="border rounded pl-2 h-8 w-3/5" placeholder="Enter age">
            </div>
            <div class="space-x-2 flex justify-between">
                <label for="name" class="text-lg">Gender:</label>
                <select class="border rounded pl-2 h-8 w-3/5">
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
            <div class="space-x-2 flex justify-between">
                <label for="name" class="text-lg">Contact:</label>
                <input type="number" class="border rounded pl-2 h-8 w-3/5" placeholder="Enter contact number">
            </div>
            <div class="space-x-2 flex justify-between">
                <label for="name" class="text-lg">Address:</label>
                <input type="number" class="border rounded pl-2 h-8 w-3/5" placeholder="Enter address">
            </div>
            <div class="space-x-2 flex">
                <label for="name" class="text-lg">Identification:</label>
                <input type="checkbox" class="rounded pl-2 h-8 aspect-square" placeholder="Enter address">
            </div>
            <h1 class="text-center !my-5 text-lg rounded-full bg-black text-white py-1">Transport/Voyage Details</h1>
            <div class="space-x-2 flex justify-between">
                <label for="name" class="text-lg">Ship Name:</label>
                <input type="number" class="border rounded pl-2 h-8 w-3/5" placeholder="Enter ship name">
            </div>
            <div class="space-x-2 flex justify-between">
                <label for="name" class="text-lg">Route:</label>
                <div class="w-3/5 flex gap-x-1">
                    <select class="border rounded pl-2 h-8 w-1/2">
                        <option>Select from destination</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <select class="border rounded pl-2 h-8 w-1/2">
                        <option>Select to destination</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
            </div>
            <div class="space-x-2 flex justify-between">
                <label for="name" class="text-lg">Inbound Time:</label>
                <input type="number" class="border rounded pl-2 h-8 w-3/5" placeholder="Enter inbound time">
            </div>
            <div class="space-x-2 flex justify-between">
                <label for="name" class="text-lg">Outbound Time:</label>
                <input type="number" class="border rounded pl-2 h-8 w-3/5" placeholder="Enter outbound time">
            </div>
            <div class="space-x-2 flex justify-between">
                <label for="name" class="text-lg">Operator Name:</label>
                <input type="number" class="border rounded pl-2 h-8 w-3/5" placeholder="Enter operator name">
            </div>
            <button class="rounded-full bg-green-500 w-full py-1 text-white hover:bg-green-600 !mt-10">Register</button>
        </form>
    </div>
</template>

<script setup>

</script>