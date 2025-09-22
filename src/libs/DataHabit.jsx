export const DataHabit = {
    targetTime: 66,
    day: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'],

}

export const HabitDays = Array.from({ length: DataHabit.targetTime })
    .map((_, i) => DataHabit.day[i % DataHabit.day.length]);