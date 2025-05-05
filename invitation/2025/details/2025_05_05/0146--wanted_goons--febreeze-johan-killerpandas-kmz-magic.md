### Roster Details<br />
Team Name: Wanted Goons<br />
Roster: febreeze, Johan, killerPandas, KmZ, Magic<br />
Global Rank: [146](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [30]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  645.5<br />
<br />
Final Rank Value (645.5) = Starting Rank Value (685.9) + Head To Head Adjustments (-40.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.298[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.082[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 685.9
- 400 + ( ( 0.158 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 685.9


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
|           15 |      182 | 2025-04-20 | Marsborne        | L   | 1.000      | -            | -                | -                | -         |    -8.75 | febreeze, Johan, killerPandas, KmZ, Magic     |
|           14 |      232 | 2025-04-17 | Daaku            | L   | 1.000      | -            | -                | -                | -         |   -18.64 | febreeze, Johan, killerPandas, KmZ, Magic     |
|           13 |      339 | 2025-04-13 | MIGHT            | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.450 (0.150)    | 0 (0.000) |    16.73 | febreeze, Johan, killerPandas, KmZ, Magic     |
|           12 |      388 | 2025-04-10 | Chicken Coop     | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.251 (0.084)    | 0 (0.000) |    13.70 | febreeze, Johan, killerPandas, KmZ, Magic     |
|           11 |      426 | 2025-04-08 | SUPER EVIL GANG  | L   | 1.000      | -            | -                | -                | -         |   -17.83 | febreeze, Johan, killerPandas, KmZ, Magic     |
|           10 |      669 | 2025-03-29 | Party Astronauts | L   | 0.955      | -            | -                | -                | -         |   -17.85 | febreeze, Johan, killerPandas, KmZ, Magic     |
|            9 |      713 | 2025-03-28 | Nouns            | L   | 0.950      | -            | -                | -                | -         |   -11.48 | febreeze, Johan, killerPandas, KmZ, Magic     |
|            8 |      780 | 2025-03-27 | Marca Registrada | W   | 0.943      | 0.143        | 0.008 (0.001)    | 0.174 (0.023)    | 0 (0.000) |    12.98 | febreeze, Johan, killerPandas, KmZ, Magic     |
|            7 |     1032 | 2025-03-17 | anything else    | L   | 0.876      | -            | -                | -                | -         |   -14.68 | febreeze, Johan, killerPandas, KmZ, Magic     |
|            6 |     1092 | 2025-03-14 | Blahaj           | W   | 0.856      | 0.372        | 0.002 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     7.56 | febreeze, Johan, killerPandas, KmZ, Magic     |
|            5 |     1531 | 2025-03-01 | Marsborne        | L   | 0.770      | -            | -                | -                | -         |    -6.59 | febreeze, Johan, killerPandas, KmZ, Magic     |
|            4 |     1545 | 2025-03-01 | Amped            | W   | 0.768      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.768) |     4.00 | febreeze, Johan, killerPandas, KmZ, Magic     |
|            3 |     2734 | 2024-12-06 | SUPER EVIL GANG  | L   | 0.204      | -            | -                | -                | -         |    -3.44 | AGB, febreeze, jsfeltner, killerPandas, KmZ   |
|            2 |     2764 | 2024-12-05 | MCS              | W   | 0.197      | 0.372        | 0.001 (0.000)    | 0.073 (0.005)    | 0 (0.000) |     2.29 | febreeze, jsfeltner, killerPandas, KmZ, Magic |
|            1 |     2797 | 2024-12-04 | OutGoing         | W   | 0.190      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.59 | febreeze, jsfeltner, killerPandas, KmZ, Magic |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,579.15)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-23 |      0.917 | $1,250.00      | $1,146.11       |
| 2024-12-08 |      0.217 | $2,000.00      | $433.03         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
