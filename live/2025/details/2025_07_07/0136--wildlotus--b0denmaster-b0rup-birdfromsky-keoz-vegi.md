### Roster Details<br />
Team Name: WildLotus<br />
Roster: b0denmaster, b0RUP, birdfromsky, Keoz, Vegi<br />
Global Rank: [136](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [79]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  679.3<br />
<br />
Final Rank Value (679.3) = Starting Rank Value (609.9) + Head To Head Adjustments (69.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.064[<sup>2</sup>](#table1)
- LAN Wins: 0.110[<sup>2</sup>](#table1)

The average of these factors is 0.112<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 609.9
- 400 + ( ( 0.112 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 609.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |      199 | 2025-06-14 | TNL               | L   | 1.000      | -            | -                | -                | -         |    -1.70 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           23 |      215 | 2025-06-14 | Sangal            | W   | 1.000      | 0.360        | 0.002 (0.001)    | 0.508 (0.183)    | 1 (1.000) |    23.48 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           22 |      231 | 2025-06-13 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -1.06 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           21 |     1660 | 2025-04-04 | BC.Game           | L   | 0.576      | -            | -                | -                | -         |    -2.77 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|           20 |     1872 | 2025-03-30 | 9INE              | L   | 0.538      | -            | -                | -                | -         |    -0.94 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|           19 |     1924 | 2025-03-29 | NOVAQ             | L   | 0.533      | -            | -                | -                | -         |   -10.53 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           18 |     1966 | 2025-03-28 | 9INE              | L   | 0.528      | -            | -                | -                | -         |    -0.95 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           17 |     2046 | 2025-03-27 | ECLOT             | W   | 0.520      | 0.143        | 0.095 (0.007)    | 0.876 (0.065)    | 0 (0.000) |    14.28 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           16 |     2169 | 2025-03-24 | Ninjas in Pyjamas | W   | 0.501      | 0.143        | 0.153 (0.011)    | 0.961 (0.069)    | 0 (0.000) |    15.50 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           15 |     2171 | 2025-03-24 | GhoulsW           | W   | 0.501      | 0.143        | 0.000 (0.000)    | 0.064 (0.005)    | 0 (0.000) |     5.00 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           14 |     2175 | 2025-03-24 | Betera            | W   | 0.500      | 0.143        | 0.014 (0.001)    | 0.164 (0.012)    | 0 (0.000) |    11.28 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           13 |     2178 | 2025-03-24 | Woe From Wit      | W   | 0.499      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.46 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           12 |     2221 | 2025-03-22 | Zero Tenacity     | W   | 0.486      | 0.354        | 0.014 (0.002)    | 0.839 (0.144)    | 0 (0.000) |    12.81 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|           11 |     2245 | 2025-03-21 | Zero Tenacity     | L   | 0.480      | -            | -                | -                | -         |    -2.45 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|           10 |     2308 | 2025-03-19 | inputprayers      | W   | 0.467      | 0.396        | 0.000 (0.000)    | 0.107 (0.020)    | 0 (0.000) |     5.78 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            9 |     2393 | 2025-03-16 | Betclic           | L   | 0.447      | -            | -                | -                | -         |    -1.18 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            8 |     2400 | 2025-03-16 | Monte             | L   | 0.445      | -            | -                | -                | -         |    -4.02 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            7 |     2479 | 2025-03-12 | 9INE              | L   | 0.419      | -            | -                | -                | -         |    -0.53 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            6 |     2674 | 2025-03-08 | Sashi             | W   | 0.392      | 0.354        | 0.012 (0.002)    | 1.000 (0.139)    | 0 (0.000) |    11.15 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            5 |     3046 | 2025-02-25 | Fire Flux         | L   | 0.319      | -            | -                | -                | -         |    -2.02 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            4 |     3068 | 2025-02-24 | Astrum            | L   | 0.314      | -            | -                | -                | -         |    -1.29 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            3 |     3145 | 2025-02-21 | CYBERSHOKE        | L   | 0.294      | -            | -                | -                | -         |    -1.39 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            2 |     3155 | 2025-02-21 | GhoulsW           | W   | 0.293      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.21 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            1 |     3271 | 2025-02-17 | Leo               | L   | 0.266      | -            | -                | -                | -         |    -4.66 | b0RUP, birdfromsky, Licale, nicoodoz, Vegi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
