# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# PsudoCode
    # 1) create a function (does_conatin)
    # 2) takes two peramiters (arr, str)
    # 3) iterates over arr (.map) - one peram (s)
    # 4) at each index, sees if index string includes str
        # 5) add s to temp arr
    #6) print temp arr 

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# def does_contain (arr, str)
#     temp = []
#     arr.map { |s|
#         if s.include?(str)
#             arr.append(s)
#         end
#     } 
#     p temp
# end

# does_contain(beverages_array, letter_o)
# does_contain(beverages_array, letter_t)


#When I run this code, my entire terminal freezes, so I'm assuming I created some sort of infinant loop? I really have no idea what's happening here!?!?

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Vermont'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington'] 

# PsudoCode
    # 1) create a function (hash_fix)
    # 2) takes one peramiters (h)
    # 3) gets all has values (.values)
    # 4) gets rid of nested arrays (.flatten)
    # 5) alphabetizes arr (.sort)
    # 6) prints new arr (p)

# def hash_fix (h)
#     h.values.flatten.sort
# end

# p hash_fix(us_states)


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# PsudoCode
    # 1) create a class (Bike)
    # 2) initialize (model, wheels, current_speed)
        # 3) default wheels = 2
        # 4) speed start = 0
    # 5) create bike_info method
        # 6) returns sentence w/ all bike data (string interpolation)

# class Bike
#     attr_accessor :model, :wheels, :current_speed

#     def initialize (model)
#         @model = model
#         @wheels = 2
#         @current_speed = 0
#     end

#     def bike_info
#         p "The #{@model} has #{@wheels} wheels and is going #{@current_speed}"
#     end

# end

# trike = Bike.new ('Trike')
# trike.bike_info
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# PsudoCode
    # 1) create a method to add speed (pedal_faster)
        #2) increase speed by given amount (speed)
    # 3) create a method to brake (brake)
        # 5) decrease speed by given amount (dec_speed)
        # 6) bike cannot go neg speeds
 


class Bike
    attr_accessor :model, :wheels, :current_speed
    
    def initialize (model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    
    def bike_info
        p "The #{@model} has #{@wheels} wheels and is going #{@current_speed}"
    end
    
    def pedal_faster (speed)
        @speed = speed
        @current_speed = @current_speed + @speed
    end

    def brake (speed)
        @speed = speed
        @current_speed = @current_speed - @speed
        if @current_speed < 0
            @current_speed = 0
        else @current_speed = @current_speed
        end
    end
end


my_bike = Bike.new("Trike")
p my_bike.pedal_faster(10) 
# Expected output example: my_bike.pedal_faster(10) => 10
p my_bike.pedal_faster(18)
# Expected output example: my_bike.pedal_faster(18) => 28
p my_bike.brake(5)
# Expected output example: my_bike.brake(5) => 23
p my_bike.brake(25)
# Expected output example: my_bike.brake(25) => 0

#Before i put in like 123, I kept getting 'nil' for line 134 and it took me a minute to figure out how to work around that! 