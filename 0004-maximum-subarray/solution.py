
nums = [int(x) for x in input("").replace(',', ' ').split()]

current_sum = max_sum = nums[0]
for num in nums[1:]:
    current_sum = max(num, current_sum + num)
    max_sum = max(max_sum, current_sum)

print(max_sum)