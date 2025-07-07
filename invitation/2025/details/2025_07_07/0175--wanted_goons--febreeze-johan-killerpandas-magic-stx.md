### Roster Details<br />
Team Name: Wanted Goons<br />
Roster: febreeze, Johan, killerPandas, Magic, Stx<br />
Global Rank: [175](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [57]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  615.0<br />
<br />
Final Rank Value (615.0) = Starting Rank Value (645.5) + Head To Head Adjustments (-30.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.256[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.038[<sup>2</sup>](#table1)

The average of these factors is 0.132<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 645.5
- 400 + ( ( 0.132 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 645.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |      125 | 2025-06-17 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -9.48 | febreeze, Johan, killerPandas, Magic, Stx |
|           18 |      140 | 2025-06-16 | Ghost            | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.106 (0.035)    | 0 (0.000) |    14.60 | febreeze, Johan, killerPandas, Magic, Stx |
|           17 |      223 | 2025-06-13 | MIGHT            | L   | 1.000      | -            | -                | -                | -         |   -14.33 | febreeze, Johan, killerPandas, Magic, Stx |
|           16 |      255 | 2025-06-12 | girl kissers     | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.116 (0.039)    | 0 (0.000) |    15.50 | febreeze, Johan, killerPandas, Magic, Stx |
|           15 |      316 | 2025-06-09 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -10.11 | febreeze, Johan, killerPandas, Magic, Stx |
|           14 |      805 | 2025-05-11 | Tsunami          | L   | 0.822      | -            | -                | -                | -         |   -11.98 | febreeze, Johan, killerPandas, KmZ, Magic |
|           13 |      862 | 2025-05-09 | BLUEJAYS         | L   | 0.808      | -            | -                | -                | -         |    -4.58 | febreeze, Johan, killerPandas, KmZ, Magic |
|           12 |     1291 | 2025-04-20 | Marsborne        | L   | 0.682      | -            | -                | -                | -         |    -5.90 | febreeze, Johan, killerPandas, KmZ, Magic |
|           11 |     1341 | 2025-04-17 | Daaku            | L   | 0.662      | -            | -                | -                | -         |   -13.07 | febreeze, Johan, killerPandas, KmZ, Magic |
|           10 |     1448 | 2025-04-13 | MIGHT            | W   | 0.636      | 0.333        | 0.001 (0.000)    | 0.311 (0.066)    | 0 (0.000) |    11.14 | febreeze, Johan, killerPandas, KmZ, Magic |
|            9 |     1499 | 2025-04-10 | Chicken Coop     | W   | 0.615      | 0.333        | 0.001 (0.000)    | 0.207 (0.042)    | 0 (0.000) |    10.89 | febreeze, Johan, killerPandas, KmZ, Magic |
|            8 |     1561 | 2025-04-08 | Aether           | L   | 0.602      | -            | -                | -                | -         |    -8.93 | febreeze, Johan, killerPandas, KmZ, Magic |
|            7 |     1899 | 2025-03-29 | Party Astronauts | L   | 0.534      | -            | -                | -                | -         |    -4.94 | febreeze, Johan, killerPandas, KmZ, Magic |
|            6 |     1946 | 2025-03-28 | BLUEJAYS         | L   | 0.529      | -            | -                | -                | -         |    -3.98 | febreeze, Johan, killerPandas, KmZ, Magic |
|            5 |     2013 | 2025-03-27 | Marca Registrada | W   | 0.522      | 0.143        | 0.003 (0.000)    | 0.209 (0.016)    | 0 (0.000) |     8.26 | febreeze, Johan, killerPandas, KmZ, Magic |
|            4 |     2367 | 2025-03-17 | anything else    | L   | 0.456      | -            | -                | -                | -         |    -7.19 | febreeze, Johan, killerPandas, KmZ, Magic |
|            3 |     2433 | 2025-03-14 | Blahaj           | W   | 0.436      | 0.372        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.41 | febreeze, Johan, killerPandas, KmZ, Magic |
|            2 |     2892 | 2025-03-01 | Marsborne        | L   | 0.349      | -            | -                | -                | -         |    -3.10 | febreeze, Johan, killerPandas, KmZ, Magic |
|            1 |     2906 | 2025-03-01 | Amped            | W   | 0.348      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.348) |     2.20 | febreeze, Johan, killerPandas, KmZ, Magic |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($620.59)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-23 |      0.496 | $1,250.00      | $620.59         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
