### Roster Details<br />
Team Name: Wanted Goons<br />
Roster: febreeze, Johan, killerPandas, Magic, Stx<br />
Global Rank: [208](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_09_01.md)<br />
Regional Rank: [68]( ../../standings_americas_2025_09_01.md)<br />
<br />
Final Rank Value:  586.1<br />
<br />
Final Rank Value (586.1) = Starting Rank Value (610.9) + Head To Head Adjustments (-24.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.225[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 610.9
- 400 + ( ( 0.110 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 610.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |      343 | 2025-08-14 | Arrival Seven    | L   | 1.000      | -            | -                | -                | -         |   -12.12 | cutedog, febreeze, Johan, killerPandas, Magic |
|           19 |      383 | 2025-08-13 | anything else    | W   | 1.000      | 0.363        | 0.001 (0.000)    | 0.106 (0.039)    | 0 (0.000) |    16.39 | cutedog, febreeze, Johan, killerPandas, Magic |
|           18 |      464 | 2025-08-11 | Aether           | L   | 1.000      | -            | -                | -                | -         |   -16.90 | cutedog, febreeze, Johan, killerPandas, Magic |
|           17 |     1342 | 2025-06-17 | Party Astronauts | L   | 0.696      | -            | -                | -                | -         |    -7.93 | febreeze, Johan, killerPandas, Magic, Stx     |
|           16 |     1357 | 2025-06-16 | Ghost            | W   | 0.690      | 0.333        | 0.001 (0.000)    | 0.090 (0.021)    | 0 (0.000) |    10.38 | febreeze, Johan, killerPandas, Magic, Stx     |
|           15 |     1440 | 2025-06-13 | MIGHT            | L   | 0.670      | -            | -                | -                | -         |    -9.84 | febreeze, Johan, killerPandas, Magic, Stx     |
|           14 |     1472 | 2025-06-12 | girl kissers     | W   | 0.663      | 0.333        | 0.001 (0.000)    | 0.107 (0.024)    | 0 (0.000) |    10.56 | febreeze, Johan, killerPandas, Magic, Stx     |
|           13 |     1533 | 2025-06-09 | LAG              | L   | 0.643      | -            | -                | -                | -         |    -5.42 | febreeze, Johan, killerPandas, Magic, Stx     |
|           12 |     2022 | 2025-05-11 | Legacy Kingdom   | L   | 0.449      | -            | -                | -                | -         |    -6.06 | febreeze, Johan, killerPandas, KmZ, Magic     |
|           11 |     2079 | 2025-05-09 | BLUEJAYS         | L   | 0.435      | -            | -                | -                | -         |    -1.42 | febreeze, Johan, killerPandas, KmZ, Magic     |
|           10 |     2508 | 2025-04-20 | Marsborne        | L   | 0.310      | -            | -                | -                | -         |    -1.87 | febreeze, Johan, killerPandas, KmZ, Magic     |
|            9 |     2558 | 2025-04-17 | Daaku            | L   | 0.289      | -            | -                | -                | -         |    -5.82 | febreeze, Johan, killerPandas, KmZ, Magic     |
|            8 |     2665 | 2025-04-13 | MIGHT            | W   | 0.263      | 0.333        | 0.000 (0.000)    | 0.224 (0.020)    | 0 (0.000) |     4.57 | febreeze, Johan, killerPandas, KmZ, Magic     |
|            7 |     2716 | 2025-04-10 | Chicken Coop     | W   | 0.243      | 0.333        | 0.001 (0.000)    | 0.063 (0.005)    | 0 (0.000) |     4.23 | febreeze, Johan, killerPandas, KmZ, Magic     |
|            6 |     2778 | 2025-04-08 | Aether           | L   | 0.229      | -            | -                | -                | -         |    -3.22 | febreeze, Johan, killerPandas, KmZ, Magic     |
|            5 |     3116 | 2025-03-29 | Party Astronauts | L   | 0.162      | -            | -                | -                | -         |    -1.90 | febreeze, Johan, killerPandas, KmZ, Magic     |
|            4 |     3163 | 2025-03-28 | BLUEJAYS         | L   | 0.157      | -            | -                | -                | -         |    -0.48 | febreeze, Johan, killerPandas, KmZ, Magic     |
|            3 |     3230 | 2025-03-27 | Marca Registrada | W   | 0.149      | 0.769        | 0.001 (0.000)    | 0.301 (0.035)    | 0 (0.000) |     2.67 | febreeze, Johan, killerPandas, KmZ, Magic     |
|            2 |     3584 | 2025-03-17 | anything else    | L   | 0.083      | -            | -                | -                | -         |    -1.28 | febreeze, Johan, killerPandas, KmZ, Magic     |
|            1 |     3650 | 2025-03-14 | Blahaj           | W   | 0.063      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.70 | febreeze, Johan, killerPandas, KmZ, Magic     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($154.57)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-23 |      0.124 | $1,250.00      | $154.57         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
