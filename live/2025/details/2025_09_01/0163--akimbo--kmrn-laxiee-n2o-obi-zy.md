### Roster Details<br />
Team Name: Akimbo<br />
Roster: kmrn, laxiee, N2o, obi, zy<br />
Global Rank: [163](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_09_01.md)<br />
Regional Rank: [22]( ../../standings_asia_2025_09_01.md)<br />
<br />
Final Rank Value:  651.7<br />
<br />
Final Rank Value (651.7) = Starting Rank Value (650.6) + Head To Head Adjustments (1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 650.6
- 400 + ( ( 0.131 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 650.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |     1252 | 2025-06-24 | Marca Registrada | W   | 0.743      | 0.333        | 0.001 (0.000)    | 0.301 (0.075)    | 0 (0.000) |    12.40 | laxiee, N2o, obi, piupiupiu, zy  |
|           23 |     1441 | 2025-06-13 | Aether           | W   | 0.670      | 0.333        | 0.000 (0.000)    | 0.205 (0.046)    | 0 (0.000) |     7.74 | dantemoren, laxiee, N2o, obi, zy |
|           22 |     1637 | 2025-06-01 | LAG              | L   | 0.589      | -            | -                | -                | -         |    -5.88 | kmrn, laxiee, N2o, obi, zy       |
|           21 |     2157 | 2025-05-06 | Party Astronauts | L   | 0.416      | -            | -                | -                | -         |    -5.38 | kmrn, laxiee, N2o, obi, zy       |
|           20 |     2725 | 2025-04-09 | LAG              | L   | 0.236      | -            | -                | -                | -         |    -2.34 | kmrn, laxiee, N2o, obi, zy       |
|           19 |     2731 | 2025-04-09 | LAG              | L   | 0.236      | -            | -                | -                | -         |    -2.38 | kmrn, laxiee, N2o, obi, zy       |
|           18 |     2860 | 2025-04-05 | Getting Info     | L   | 0.210      | -            | -                | -                | -         |    -1.96 | kmrn, laxiee, N2o, obi, zy       |
|           17 |     2862 | 2025-04-05 | Getting Info     | L   | 0.209      | -            | -                | -                | -         |    -1.99 | kmrn, laxiee, N2o, obi, zy       |
|           16 |     2895 | 2025-04-03 | NRG              | L   | 0.196      | -            | -                | -                | -         |    -0.38 | kmrn, laxiee, N2o, obi, zy       |
|           15 |     2897 | 2025-04-03 | NRG              | L   | 0.196      | -            | -                | -                | -         |    -0.38 | kmrn, laxiee, N2o, obi, zy       |
|           14 |     2943 | 2025-04-02 | BLUEJAYS         | L   | 0.189      | -            | -                | -                | -         |    -2.05 | kmrn, laxiee, obi, piupiupiu, zy |
|           13 |     2948 | 2025-04-02 | BLUEJAYS         | L   | 0.189      | -            | -                | -                | -         |    -2.08 | kmrn, laxiee, obi, piupiupiu, zy |
|           12 |     3010 | 2025-04-01 | Worms            | W   | 0.183      | 0.477        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     2.25 | kmrn, laxiee, N2o, obi, zy       |
|           11 |     3014 | 2025-04-01 | Worms            | W   | 0.183      | 0.477        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     2.29 | kmrn, laxiee, N2o, obi, zy       |
|           10 |     3179 | 2025-03-28 | Marca Registrada | L   | 0.155      | -            | -                | -                | -         |    -2.43 | kmrn, laxiee, N2o, obi, Pol0     |
|            9 |     3227 | 2025-03-27 | BLUEJAYS         | L   | 0.150      | -            | -                | -                | -         |    -0.57 | kmrn, laxiee, N2o, obi, Pol0     |
|            8 |     3350 | 2025-03-25 | Marsborne        | W   | 0.136      | 0.477        | 0.010 (0.001)    | 0.608 (0.040)    | 0 (0.000) |     3.32 | kmrn, laxiee, N2o, obi, zy       |
|            7 |     3357 | 2025-03-25 | Marsborne        | L   | 0.136      | -            | -                | -                | -         |    -0.98 | kmrn, laxiee, N2o, obi, zy       |
|            6 |     3493 | 2025-03-19 | BLUEJAYS         | L   | 0.096      | -            | -                | -                | -         |    -0.37 | kmrn, laxiee, N2o, obi, zy       |
|            5 |     3500 | 2025-03-19 | BLUEJAYS         | L   | 0.096      | -            | -                | -                | -         |    -0.37 | kmrn, laxiee, N2o, obi, zy       |
|            4 |     3547 | 2025-03-18 | Chicken Coop     | W   | 0.090      | 0.477        | 0.001 (0.000)    | 0.063 (0.003)    | 0 (0.000) |     1.39 | consti, kmrn, laxiee, N2o, obi   |
|            3 |     3554 | 2025-03-18 | Chicken Coop     | W   | 0.090      | 0.477        | 0.001 (0.000)    | 0.063 (0.003)    | 0 (0.000) |     1.39 | consti, kmrn, laxiee, N2o, obi   |
|            2 |     3989 | 2025-03-06 | MIGHT            | L   | 0.008      | -            | -                | -                | -         |    -0.13 | consti, kmrn, laxiee, obi, zy    |
|            1 |     4015 | 2025-03-05 | Vagrants         | L   | 0.003      | -            | -                | -                | -         |    -0.06 | consti, kmrn, laxiee, obi, zy    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,271.08)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-30 |      0.783 | $1,000.00      | $782.83         |
| 2025-06-01 |      0.589 | $1,000.00      | $589.16         |
| 2025-05-11 |      0.450 | $2,000.00      | $899.10         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
