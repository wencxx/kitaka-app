<template>
    <div class="p-10 space-y-7 h-[92dvh] overflow-y-auto">
        <h1 class="text-lg font-medium tracking-wide flex items-center gap-x-2">
            <Icon icon="mdi:user" width="24" height="24" />
            <span>Passenger Lists</span>
        </h1>
        <div class="bg-gray-100 rounded shadow p-5 overflow-x-auto">
            <table class="w-[600%]">
                <thead>
                    <tr>
                        <th class="border w-1/12">Full Name</th>
                        <th class="border w-1/12">Age</th>
                        <th class="border w-1/12">Gender</th>
                        <th class="border w-1/12">Contact</th>
                        <th class="border w-2/12">Address</th>
                        <th class="border w-1/12">ID</th>
                        <th class="border w-1/12">Ship Name</th>
                        <th class="border w-1/12">Route</th>
                        <th class="border w-1/12">Inbound Time</th>
                        <th class="border w-1/12">Outbound Time</th>
                        <th class="border w-1/12">Operator Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border text-center py-1">Jerry Abeniso</td>
                        <td class="border text-center py-1">23 yrs old</td>
                        <td class="border text-center py-1">Male</td>
                        <td class="border text-center py-1">09638806212</td>
                        <td class="border text-center py-1">La Castellana, Negros Occidental</td>
                        <td class="border text-center py-1">Present</td>
                        <td class="border text-center py-1">Jefferson 101</td>
                        <td class="border text-center py-1">Charoute</td>
                        <td class="border text-center py-1">10:30 AM</td>
                        <td class="border text-center py-1">3:30 PM</td>
                        <td class="border text-center py-1">Francis M.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>

</script>