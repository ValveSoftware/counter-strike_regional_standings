### Roster Details<br />
Team Name: OMiT<br />
Roster: calamity, kralz , Laxiee, N20AmZ, obi<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [116](../standings_global.md)<br />
Regional Rank: [10]( ../standings_asia.md)<br />
Final Rank Value:  817.5<br />
<br />
Final Rank Value (817.5) = Starting Rank Value (818.8) + Head To Head Adjustments (-1.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.378[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.051[<sup>2</sup>](#table1)
- LAN Wins: 0.122[<sup>2</sup>](#table1)

The average of these factors is 0.206<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 818.8
- 400 + ( ( 0.206 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 818.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |        7 | 2024-06-16 | E-Xolos LAZER    | L   | 1.000      | -            | -                | -                | -         |   -17.24 | calamity, kralz , Laxiee, N20AmZ, obi        |
|           22 |       34 | 2024-06-15 | One More         | L   | 1.000      | -            | -                | -                | -         |   -21.93 | calamity, kralz , Laxiee, N20AmZ, obi        |
|           21 |       40 | 2024-06-15 | Legacy           | L   | 1.000      | -            | -                | -                | -         |    -6.16 | calamity, kralz , Laxiee, N20AmZ, obi        |
|           20 |       70 | 2024-06-14 | Strife           | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.150 (0.021)    | 0 (0.000) |     8.75 | calamity, kralz , Laxiee, N20AmZ, obi        |
|           19 |       76 | 2024-06-14 | Take Flyte       | W   | 1.000      | 0.384        | 0.005 (0.002)    | 0.306 (0.117)    | 0 (0.000) |    13.13 | calamity, kralz , Laxiee, N20AmZ, obi        |
|           18 |      187 | 2024-06-10 | Legacy           | L   | 1.000      | -            | -                | -                | -         |    -5.96 | calamity, kralz , Laxiee, N20AmZ, obi        |
|           17 |      221 | 2024-06-09 | E-Xolos LAZER    | W   | 1.000      | 0.368        | 0.014 (0.005)    | 0.249 (0.092)    | 0 (0.000) |    11.67 | calamity, kralz , Laxiee, N20AmZ, obi        |
|           16 |      282 | 2024-06-08 | Snakes Den       | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.107 (0.041)    | 0 (0.000) |     5.52 | calamity, kralz , Laxiee, obi, tmk           |
|           15 |      393 | 2024-06-06 | FLUFFY AIMERS    | W   | 1.000      | 0.384        | 0.016 (0.006)    | 0.311 (0.120)    | 0 (0.000) |    12.42 | calamity, kralz , Laxiee, N20AmZ, obi        |
|           14 |      404 | 2024-06-06 | Legacy           | L   | 1.000      | -            | -                | -                | -         |    -5.64 | calamity, kralz , Laxiee, N20AmZ, obi        |
|           13 |      520 | 2024-06-04 | Final Form       | W   | 1.000      | 0.384        | 0.006 (0.002)    | 0.071 (0.027)    | 0 (0.000) |     9.17 | calamity, kralz , Laxiee, N20AmZ, obi        |
|           12 |      556 | 2024-06-03 | Villainous       | W   | 1.000      | 0.368        | 0.004 (0.002)    | -                | 0 (0.000) |     5.72 | calamity, kralz , Laxiee, N20AmZ, obi        |
|           11 |      912 | 2024-05-20 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -8.66 | calamity, kralz , Laxiee, N20AmZ, obi        |
|           10 |     1812 | 2024-04-17 | Liquid           | L   | 0.791      | -            | -                | -                | -         |    -0.24 | calamity, kralz , Laxiee, N20AmZ, obi        |
|            9 |     1816 | 2024-04-17 | NRG              | W   | 0.790      | 0.143        | 0.024 (0.003)    | 0.507 (0.057)    | 0 (0.000) |    16.51 | calamity, kralz , Laxiee, N20AmZ, obi        |
|            8 |     2504 | 2024-03-17 | LAG              | L   | 0.586      | -            | -                | -                | -         |    -6.77 | arviast, C4LLM3SU3, calamity, N20AmZ, obi    |
|            7 |     2505 | 2024-03-17 | Xiaoma           | W   | 0.585      | 0.333        | 0.002 (0.000)    | 0.021 (0.004)    | 1 (0.585) |     3.94 | arviast, C4LLM3SU3, calamity, N20AmZ, obi    |
|            6 |     2512 | 2024-03-17 | Snakes Den       | W   | 0.583      | 0.333        | -                | 0.107 (0.021)    | 1 (0.583) |     3.28 | Fruitcupx, FxRE, JoSoo, LUKE4k, NoVa         |
|            5 |     3038 | 2024-02-24 | Wildcard         | L   | 0.437      | -            | -                | -                | -         |    -3.81 | Infinite, JBa, SLIGHT, Sonic, stanislaw      |
|            4 |     3149 | 2024-02-19 | Mythic           | L   | 0.405      | -            | -                | -                | -         |    -5.22 | Cooper, fl0m, freakazoid, hate, Trucklover86 |
|            3 |     3151 | 2024-02-19 | Party Astronauts | L   | 0.404      | -            | -                | -                | -         |    -3.79 | C4LLM3SU3, calamity, Laxiee, N20AmZ, obi     |
|            2 |     3218 | 2024-02-16 | Rocket           | L   | 0.384      | -            | -                | -                | -         |    -9.87 | aleph, ayy, EMIYA, nero, nooz                |
|            1 |     3248 | 2024-02-15 | Limitless        | W   | 0.378      | 0.143        | 0.001 (0.000)    | 0.227 (0.012)    | -         |     3.81 | C4LLM3SU3, calamity, N20AmZ, obi, tmk        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,764.01)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-10 |      1.000 | $4,300.00      | $4,300.00       |
| 2024-03-17 |      0.586 | $2,500.00      | $1,464.01       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
